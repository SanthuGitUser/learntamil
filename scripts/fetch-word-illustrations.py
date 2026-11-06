"""Download word illustrations via free APIs (Openverse, Wikimedia Commons).

Pollinations and similar paid gateways are not used. Images are CC-licensed photos
from Openverse when possible; Wikimedia Commons is the backup search.

Optional AI (slow): set STABLE_HORDE_API_KEY and use --provider horde
(register a free key at https://stablehorde.net/register)
"""

from __future__ import annotations

import json
import os
import re
import time
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "word-illustrations"
PRON = ROOT / "src" / "data" / "pronunciation.json"
TAMIL_SCRIPT = ROOT / "src" / "data" / "tamilScript.ts"
MANIFEST = ROOT / "src" / "data" / "wordIllustrationManifest.json"

USER_AGENT = "LearnTamil/1.0 (education; local vocabulary illustrations)"


def slugify(english: str) -> str:
    s = english.lower().strip()
    s = re.sub(r"[^a-z0-9]+", "-", s)
    return s.strip("-") or "word"


def search_query(label: str) -> str:
    """Shorten gloss for image search (drop parens, take first slash segment)."""
    q = re.sub(r"\([^)]*\)", "", label).strip()
    q = q.split("/")[0].strip()
    return q or label


def collect_english_labels() -> dict[str, str]:
    labels: dict[str, str] = {}

    pron = json.loads(PRON.read_text(encoding="utf-8"))
    for row in pron.get("uyirmeiEnglishRows", []):
        for w in row:
            if w and str(w).strip():
                e = str(w).strip()
                labels[slugify(e)] = e
    for entry in pron.get("consonants", {}).values():
        if isinstance(entry, dict) and entry.get("exampleEnglish"):
            e = str(entry["exampleEnglish"]).strip()
            labels[slugify(e)] = e

    ts = TAMIL_SCRIPT.read_text(encoding="utf-8")
    for m in re.finditer(r'exampleEnglish:\s*"([^"]+)"', ts):
        e = m.group(1).strip()
        labels[slugify(e)] = e

    return labels


def http_json(url: str, timeout: float = 45, retries: int = 3) -> dict | None:
    last_err: Exception | None = None
    for attempt in range(retries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
            with urllib.request.urlopen(req, timeout=timeout) as resp:
                return json.loads(resp.read())
        except Exception as exc:
            last_err = exc
            if attempt < retries - 1:
                time.sleep(1.5 * (attempt + 1))
    print(f"  api error: {last_err}", flush=True)
    return None


def openverse_image_url(query: str) -> str | None:
    params = urllib.parse.urlencode(
        {
            "q": query,
            "page_size": 1,
            "license_type": "commercial,modification",
            "mature": "false",
        }
    )
    data = http_json(f"https://api.openverse.org/v1/images/?{params}")
    if not data:
        return None
    results = data.get("results") or []
    if not results:
        return None
    hit = results[0]
    return hit.get("url") or hit.get("thumbnail")


def wikimedia_image_url(query: str) -> str | None:
    params = urllib.parse.urlencode(
        {
            "action": "query",
            "generator": "search",
            "gsrsearch": query,
            "gsrnamespace": 6,
            "gsrlimit": 5,
            "prop": "imageinfo",
            "iiprop": "url",
            "iiurlwidth": 640,
            "format": "json",
        }
    )
    data = http_json(f"https://commons.wikimedia.org/w/api.php?{params}")
    if not data:
        return None
    pages = data.get("query", {}).get("pages") or {}
    for page in pages.values():
        info = (page.get("imageinfo") or [{}])[0]
        url = info.get("thumburl") or info.get("url")
        if url:
            return url
    return None


def stable_horde_image(label: str, api_key: str) -> bytes | None:
    """Free crowd-sourced AI (slow). Requires horde API key."""
    import uuid

    prompt = (
        f"friendly educational illustration of {label}, simple children's book style, "
        "soft colors, no text, no watermark"
    )
    body = json.dumps(
        {
            "prompt": prompt,
            "params": {"width": 512, "height": 512, "steps": 22, "n": 1},
            "nsfw": False,
            "r2": True,
        }
    ).encode()
    req = urllib.request.Request(
        "https://stablehorde.net/api/v2/generate/async",
        data=body,
        headers={
            "Content-Type": "application/json",
            "apikey": api_key,
            "User-Agent": USER_AGENT,
        },
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=60) as resp:
        job = json.loads(resp.read())
    job_id = job.get("id")
    if not job_id:
        return None

    status_url = f"https://stablehorde.net/api/v2/generate/check/{job_id}"
    for _ in range(90):
        time.sleep(3)
        check = http_json(status_url, timeout=30)
        if check.get("done"):
            break
    else:
        return None

    result_url = f"https://stablehorde.net/api/v2/generate/status/{job_id}"
    result = http_json(result_url, timeout=30)
    gens = result.get("generations") or []
    if not gens:
        return None
    img_url = gens[0].get("img")
    if not img_url:
        return None
    req = urllib.request.Request(img_url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=120) as resp:
        return resp.read()


def download_bytes(url: str) -> bytes | None:
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=120) as resp:
            data = resp.read()
        return data if len(data) > 4000 else None
    except Exception:
        return None


def fetch_one(
    slug: str,
    label: str,
    *,
    provider: str,
    force: bool,
    horde_key: str | None,
) -> tuple[bool, str | None]:
    OUT.mkdir(parents=True, exist_ok=True)
    dest = OUT / f"{slug}.jpg"
    if dest.exists() and not force and dest.stat().st_size > 4000:
        return True, None

    query = search_query(label)
    remote_url: str | None = None
    data: bytes | None = None

    if provider == "horde" and horde_key:
        data = stable_horde_image(label, horde_key)
    else:
        remote_url = openverse_image_url(query)
        if not remote_url:
            remote_url = wikimedia_image_url(query)
        if remote_url:
            data = download_bytes(remote_url)

    if not data:
        return False, remote_url

    dest.write_bytes(data)
    return True, remote_url


def main() -> None:
    import argparse

    parser = argparse.ArgumentParser(description="Fetch CC-licensed word illustrations")
    parser.add_argument("--force", action="store_true", help="Re-download existing files")
    parser.add_argument("--limit", type=int, default=0)
    parser.add_argument("--delay", type=float, default=0.6, help="Pause between API calls")
    parser.add_argument(
        "--provider",
        choices=("stock", "horde"),
        default="stock",
        help="stock = Openverse + Wikimedia (free). horde = Stable Horde AI (needs API key)",
    )
    args = parser.parse_args()

    horde_key = os.environ.get("STABLE_HORDE_API_KEY", "").strip() or None
    if args.provider == "horde" and not horde_key:
        raise SystemExit("Set STABLE_HORDE_API_KEY for --provider horde (register at stablehorde.net)")

    labels = collect_english_labels()
    items = sorted(labels.items())
    if args.limit:
        items = items[: args.limit]

    ok = 0
    remote_urls: dict[str, str] = {}

    for i, (slug, label) in enumerate(items, 1):
        print(f"[{i}/{len(items)}] {slug} ({label})", flush=True)
        success, remote = fetch_one(
            slug, label, provider=args.provider, force=args.force, horde_key=horde_key
        )
        if remote:
            remote_urls[slug] = remote
        if success:
            ok += 1
            print("  ok", flush=True)
        else:
            print("  fail (no image found)", flush=True)
        if i < len(items):
            time.sleep(args.delay)

    manifest = {
        "version": 2,
        "provider": args.provider,
        "slugs": sorted(labels.keys()),
        "files": {s: f"{s}.jpg" for s in labels},
        "remoteUrls": remote_urls,
    }
    MANIFEST.write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Done: {ok}/{len(items)} saved under {OUT}", flush=True)
    print(f"Manifest: {MANIFEST}", flush=True)
    if ok < len(items):
        print("Some items failed — re-run the same command to retry (existing files are skipped).", flush=True)


if __name__ == "__main__":
    main()

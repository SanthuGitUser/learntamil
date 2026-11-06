#!/usr/bin/env python3
"""
Extract stroke-order crops from the Tamil handwriting PDF (one worksheet page per letter).

Usage:
  python scripts/extract-write-guides-from-pdf.py [path/to/tamil.pdf]

Writes PNGs to public/write-guides/{letter-id}.png and scripts/write_guide_manifest.json.
"""
from __future__ import annotations

import io
import json
import sys
from pathlib import Path

import fitz
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "write-guides"
MANIFEST = ROOT / "src" / "data" / "writeGuideManifest.json"

DEFAULT_PDF = Path(r"C:/Users/WELCOME/Downloads/tamil.pdf")

VOWEL_IDS = [
    "v-a",
    "v-aa",
    "v-i",
    "v-ii",
    "v-u",
    "v-uu",
    "v-e",
    "v-ee",
    "v-ai",
    "v-o",
    "v-oo",
    "v-au",
]

CONSONANT_IDS = [
    "c-ka",
    "c-nga",
    "c-cha",
    "c-nya",
    "c-ta",
    "c-na-r",
    "c-tha",
    "c-na",
    "c-pa",
    "c-ma",
    "c-ya",
    "c-ra",
    "c-la",
    "c-va",
    "c-zha",
    "c-la-r",
    "c-rra",
    "c-nn",
]

# Crop box on extracted page JPEG (1378×1949): large letter + arrows, top-right.
CROP = (0.52, 0.05, 0.97, 0.34)  # left, top, right, bottom (fractions)


def page_image(doc: fitz.Document, page_index: int) -> Image.Image:
    page = doc[page_index]
    xref = page.get_images()[0][0]
    base = doc.extract_image(xref)
    return Image.open(io.BytesIO(base["image"])).convert("RGB")


def crop_diagram(img: Image.Image) -> Image.Image:
    w, h = img.size
    l, t, r, b = CROP
    box = (int(w * l), int(h * t), int(w * r), int(h * b))
    return img.crop(box)


def letter_page_map() -> list[tuple[str, int]]:
    pairs: list[tuple[str, int]] = []
    for i, lid in enumerate(VOWEL_IDS):
        pairs.append((lid, i))  # PDF pages 1–12 → index 0–11
    for i, lid in enumerate(CONSONANT_IDS):
        pairs.append((lid, 13 + i))  # skip page 13 (ஃ); consonants from page 14
    return pairs


def main() -> None:
    pdf_path = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_PDF
    if not pdf_path.is_file():
        print(f"PDF not found: {pdf_path}", file=sys.stderr)
        sys.exit(1)

    OUT.mkdir(parents=True, exist_ok=True)
    doc = fitz.open(pdf_path)
    manifest: dict[str, str] = {}

    for letter_id, page_index in letter_page_map():
        if page_index >= doc.page_count:
            print(f"skip {letter_id}: page {page_index + 1} missing")
            continue
        img = page_image(doc, page_index)
        crop = crop_diagram(img)
        out_path = OUT / f"{letter_id}.png"
        crop.save(out_path, "PNG", optimize=True)
        manifest[letter_id] = f"write-guides/{letter_id}.png"
        print(f"wrote {out_path.name} (PDF page {page_index + 1})")

    doc.close()
    MANIFEST.write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    print(f"Done: {len(manifest)} images → {OUT}")


if __name__ == "__main__":
    main()

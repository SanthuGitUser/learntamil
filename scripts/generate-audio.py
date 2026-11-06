"""Generate Tamil letter audio with Microsoft Edge TTS (run: python scripts/generate-audio.py)."""
from __future__ import annotations

import argparse
import asyncio
import json
import sys
from pathlib import Path

try:
    import edge_tts
except ImportError:
    print("Install edge-tts: pip install edge-tts", file=sys.stderr)
    sys.exit(1)

VOICE = "ta-IN-PallaviNeural"
VOWEL_RATE = "-20%"
PHRASE_RATE = "-15%"
ROOT = Path(__file__).resolve().parent.parent / "public" / "audio"
DATA_PATH = Path(__file__).resolve().parent.parent / "src" / "data" / "pronunciation.json"

VOWELS = [
    ("v-a", "அ", "அ. அருவி."),
    ("v-aa", "ஆ", "ஆ. ஆடு."),
    ("v-i", "இ", "இ. இலை."),
    ("v-ii", "ஈ", "ஈ. ஈ."),
    ("v-u", "உ", "உ. உரல்."),
    ("v-uu", "ஊ", "ஊ. ஊஞ்சல்."),
    ("v-e", "எ", "எ. எலி."),
    ("v-ee", "ஏ", "ஏ. ஏணி."),
    ("v-ai", "ஐ", "ஐ. ஐவர்."),
    ("v-o", "ஒ", "ஒ. ஒரு."),
    ("v-oo", "ஓ", "ஓ. ஓடம்."),
    ("v-au", "ஔ", "ஔ. ஔவை."),
]

VOWEL_SIGNS = ["", "ா", "ி", "ீ", "ு", "ூ", "ெ", "ே", "ை", "ொ", "ோ", "ௌ"]

CONSONANT_ORDER = [
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

CONSONANT_GLYPHS = {
    "c-ka": "க",
    "c-nga": "ங",
    "c-cha": "ச",
    "c-nya": "ஞ",
    "c-ta": "ட",
    "c-na-r": "ண",
    "c-tha": "த",
    "c-na": "ந",
    "c-pa": "ப",
    "c-ma": "ம",
    "c-ya": "ய",
    "c-ra": "ர",
    "c-la": "ல",
    "c-va": "வ",
    "c-zha": "ழ",
    "c-la-r": "ள",
    "c-rra": "ற",
    "c-nn": "ன",
}


def load_pronunciation() -> dict:
    return json.loads(DATA_PATH.read_text(encoding="utf-8"))


def uyirmei_glyph(consonant: str, vowel_index: int) -> str:
    if vowel_index == 0:
        return consonant
    if vowel_index == 9:
        return consonant + "ொ"
    if vowel_index == 10:
        return consonant + "ோ"
    if vowel_index == 11:
        return consonant + "ௌ"
    return consonant + VOWEL_SIGNS[vowel_index]


def phrase_for_glyph(glyph: str, word: str) -> str:
    return f"{glyph}. {word}."


async def write_one(text: str, out: Path, rate: str = PHRASE_RATE) -> None:
    out.parent.mkdir(parents=True, exist_ok=True)
    communicate = edge_tts.Communicate(text, VOICE, rate=rate)
    await communicate.save(str(out))
    print(f"  {out.relative_to(ROOT.parent.parent)}")


async def generate_vowels() -> None:
    print("Generating vowels…")
    for letter_id, _glyph, phrase in VOWELS:
        await write_one(phrase, ROOT / "vowels" / f"{letter_id}.mp3", rate=VOWEL_RATE)


async def generate_consonants(data: dict) -> None:
    print("Generating consonants (letter + word)…")
    phrases = data["consonantPhrases"]
    for c_id in CONSONANT_ORDER:
        phrase = phrases[c_id]
        await write_one(phrase, ROOT / "consonants" / f"{c_id}.mp3")


async def generate_uyirmei(data: dict) -> None:
    print("Generating 216 uyirmei (letter + word)…")
    rows = data["uyirmeiRows"]
    for ci, c_id in enumerate(CONSONANT_ORDER):
        c_glyph = CONSONANT_GLYPHS[c_id]
        row = rows[ci]
        for vi, (v_id, _, _phrase) in enumerate(VOWELS):
            letter_id = f"{c_id}-{v_id}"
            glyph = uyirmei_glyph(c_glyph, vi)
            word = row[vi]
            phrase = phrase_for_glyph(glyph, word)
            await write_one(phrase, ROOT / "uyirmei" / f"{letter_id}.mp3")


async def main(target: str) -> None:
    data = load_pronunciation()
    if target in ("vowels", "all"):
        await generate_vowels()
    if target in ("consonants", "all"):
        await generate_consonants(data)
    if target in ("uyirmei", "all"):
        await generate_uyirmei(data)
    print("Done.")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--only",
        choices=("vowels", "consonants", "uyirmei", "all"),
        default="all",
    )
    args = parser.parse_args()
    asyncio.run(main(args.only))

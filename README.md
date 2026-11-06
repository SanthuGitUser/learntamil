# Learn Tamil Script

A progressive web app to learn Tamil writing: **12 vowels** (உயிரெழுத்து), **18 consonants** (மெய்யெழுத்து), and **216 combined letters** (உயிர்மெய்).

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Features

- Step-by-step learning path (vowels → consonants → uyirmei)
- Tap letters to play bundled Tamil audio (12 vowels, 18 consonants, 216 uyirmei)
- **Words** — numbers (incl. lakh/crore), colors, animals, places, home, emotions, time, family, calendar
- **Phrases** — greetings, thanks, introductions (tap to hear)
- **Grammar** — includes question words and action vs non-action verbs
- Regenerate audio: `pip install edge-tts` then `python scripts/generate-audio.py --only vowels`
- Regenerate write images: `npm run extract-write-guides` or `python scripts/extract-write-guides-from-pdf.py path/to/tamil.pdf`
- Quizzes per section
- Full 18×12 uyirmei chart
- Progress saved in `localStorage` on your device

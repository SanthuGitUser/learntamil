import { CONSONANT_AUDIO, UYIRMEI_ENGLISH_ROWS, UYIRMEI_WORD_ROWS, phraseForGlyph } from "./letterAudio";

export type Letter = {
  id: string;
  glyph: string;
  nameTamil: string;
  roman: string;
  hint: string;
  /** Spoken phrase for audio (standalone vowels need a word context). */
  speakText?: string;
  /** Classic primer example word. */
  exampleWord?: string;
  /** English meaning of the spoken example word. */
  exampleEnglish?: string;
};

/** 12 vowels (உயிரெழுத்து) — standalone forms */
export const VOWELS: Letter[] = [
  {
    id: "v-a",
    glyph: "அ",
    nameTamil: "அ",
    roman: "a",
    hint: "as in 'cut'",
    exampleWord: "அருவி",
    exampleEnglish: "waterfall",
    speakText: "அ. அருவி.",
  },
  {
    id: "v-aa",
    glyph: "ஆ",
    nameTamil: "ஆ",
    roman: "ā",
    hint: "long a, as in 'father'",
    exampleWord: "ஆடு",
    exampleEnglish: "goat",
    speakText: "ஆ. ஆடு.",
  },
  {
    id: "v-i",
    glyph: "இ",
    nameTamil: "இ",
    roman: "i",
    hint: "as in 'bit'",
    exampleWord: "இலை",
    exampleEnglish: "leaf",
    speakText: "இ. இலை.",
  },
  {
    id: "v-ii",
    glyph: "ஈ",
    nameTamil: "ஈ",
    roman: "ī",
    hint: "long i, as in 'bee'",
    exampleWord: "ஈ",
    exampleEnglish: "fly (insect)",
    speakText: "ஈ. ஈ.",
  },
  {
    id: "v-u",
    glyph: "உ",
    nameTamil: "உ",
    roman: "u",
    hint: "as in 'put'",
    exampleWord: "உரல்",
    exampleEnglish: "mortar (grinding stone)",
    speakText: "உ. உரல்.",
  },
  {
    id: "v-uu",
    glyph: "ஊ",
    nameTamil: "ஊ",
    roman: "ū",
    hint: "long u, as in 'pool'",
    exampleWord: "ஊஞ்சல்",
    exampleEnglish: "swing",
    speakText: "ஊ. ஊஞ்சல்.",
  },
  {
    id: "v-e",
    glyph: "எ",
    nameTamil: "எ",
    roman: "e",
    hint: "as in 'bed'",
    exampleWord: "எலி",
    exampleEnglish: "rat",
    speakText: "எ. எலி.",
  },
  {
    id: "v-ee",
    glyph: "ஏ",
    nameTamil: "ஏ",
    roman: "ē",
    hint: "long e, as in 'they'",
    exampleWord: "ஏணி",
    exampleEnglish: "ladder",
    speakText: "ஏ. ஏணி.",
  },
  {
    id: "v-ai",
    glyph: "ஐ",
    nameTamil: "ஐ",
    roman: "ai",
    hint: "as in 'ice'",
    exampleWord: "ஐவர்",
    exampleEnglish: "five (people)",
    speakText: "ஐ. ஐவர்.",
  },
  {
    id: "v-o",
    glyph: "ஒ",
    nameTamil: "ஒ",
    roman: "o",
    hint: "as in 'go' (short)",
    exampleWord: "ஒரு",
    exampleEnglish: "one / a",
    speakText: "ஒ. ஒரு.",
  },
  {
    id: "v-oo",
    glyph: "ஓ",
    nameTamil: "ஓ",
    roman: "ō",
    hint: "long o, as in 'go'",
    exampleWord: "ஓடம்",
    exampleEnglish: "boat",
    speakText: "ஓ. ஓடம்.",
  },
  {
    id: "v-au",
    glyph: "ஔ",
    nameTamil: "ஔ",
    roman: "au",
    hint: "as in 'cow'",
    exampleWord: "ஔவை",
    exampleEnglish: "Avvai (poet)",
    speakText: "ஔ. ஔவை.",
  },
];

/** Vowel signs appended to consonants (index aligns with VOWELS) */
const VOWEL_SIGNS = ["", "ா", "ி", "ீ", "ு", "ூ", "ெ", "ே", "ை", "ொ", "ோ", "ௌ"] as const;

/** 18 consonants (மெய்யெழுத்து) — base glyph with inherent 'a' */
const CONSONANT_BASE: Letter[] = [
  { id: "c-ka", glyph: "க", nameTamil: "க", roman: "ka", hint: "velar k" },
  { id: "c-nga", glyph: "ங", nameTamil: "ங", roman: "ṅa", hint: "ng as in 'sing'" },
  { id: "c-cha", glyph: "ச", nameTamil: "ச", roman: "ca", hint: "ch/s as in 'church'" },
  { id: "c-nya", glyph: "ஞ", nameTamil: "ஞ", roman: "ña", hint: "ny as in 'canyon'" },
  { id: "c-ta", glyph: "ட", nameTamil: "ட", roman: "ṭa", hint: "retroflex t" },
  { id: "c-na-r", glyph: "ண", nameTamil: "ண", roman: "ṇa", hint: "retroflex n" },
  { id: "c-tha", glyph: "த", nameTamil: "த", roman: "ta", hint: "dental t" },
  { id: "c-na", glyph: "ந", nameTamil: "ந", roman: "na", hint: "dental n" },
  { id: "c-pa", glyph: "ப", nameTamil: "ப", roman: "pa", hint: "p as in 'park'" },
  { id: "c-ma", glyph: "ம", nameTamil: "ம", roman: "ma", hint: "m as in 'mother'" },
  { id: "c-ya", glyph: "ய", nameTamil: "ய", roman: "ya", hint: "y as in 'yes'" },
  { id: "c-ra", glyph: "ர", nameTamil: "ர", roman: "ra", hint: "soft r" },
  { id: "c-la", glyph: "ல", nameTamil: "ல", roman: "la", hint: "l as in 'love'" },
  { id: "c-va", glyph: "வ", nameTamil: "வ", roman: "va", hint: "v/w as in 'van'" },
  { id: "c-zha", glyph: "ழ", nameTamil: "ழ", roman: "ḻa", hint: "unique Tamil 'zh'" },
  { id: "c-la-r", glyph: "ள", nameTamil: "ள", roman: "ḷa", hint: "retroflex l" },
  { id: "c-rra", glyph: "ற", nameTamil: "ற", roman: "ṟa", hint: "trilled r" },
  { id: "c-nn", glyph: "ன", nameTamil: "ன", roman: "ṉa", hint: "alveolar n" },
];

export const CONSONANTS: Letter[] = CONSONANT_BASE.map((c) => {
  const audio = CONSONANT_AUDIO[c.id];
  if (!audio) return c;
  return { ...c, exampleWord: audio.exampleWord, speakText: audio.speakText, exampleEnglish: audio.exampleEnglish };
});

export type UyirmeiLetter = Letter & {
  consonantId: string;
  vowelId: string;
};

function buildUyirmeiGlyph(consonantGlyph: string, vowelIndex: number): string {
  const base = consonantGlyph;
  const sign = VOWEL_SIGNS[vowelIndex];
  if (vowelIndex === 0) return base;
  if (vowelIndex === 9) return base + "ொ";
  if (vowelIndex === 10) return base + "ோ";
  if (vowelIndex === 11) return base + "ௌ";
  return base + sign;
}

function vowelRomanForConsonant(consonantRoman: string, vowelRoman: string): string {
  const stem = consonantRoman.replace(/a$/, "");
  if (vowelRoman === "a") return consonantRoman;
  if (vowelRoman === "ā") return stem + "ā";
  if (vowelRoman === "au") return stem + "au";
  return stem + vowelRoman;
}

/** 216 uyirmei (உயிர்மெய்) — 18 × 12 */
export const UYIRMEI: UyirmeiLetter[] = CONSONANTS.flatMap((consonant, ci) =>
  VOWELS.map((vowel, vi) => {
    const glyph = buildUyirmeiGlyph(consonant.glyph, vi);
    const exampleWord = UYIRMEI_WORD_ROWS[ci]?.[vi] ?? vowel.exampleWord ?? consonant.exampleWord ?? glyph;
    const exampleEnglish =
      UYIRMEI_ENGLISH_ROWS[ci]?.[vi] ?? consonant.exampleEnglish ?? vowel.exampleEnglish ?? "";
    return {
      id: `${consonant.id}-${vowel.id}`,
      glyph,
      nameTamil: `${consonant.nameTamil} + ${vowel.nameTamil}`,
      roman: vowelRomanForConsonant(consonant.roman, vowel.roman),
      hint: `${consonant.hint} with ${vowel.roman} vowel`,
      consonantId: consonant.id,
      vowelId: vowel.id,
      exampleWord,
      exampleEnglish,
      speakText: phraseForGlyph(glyph, exampleWord),
    };
  }),
);

export const CURRICULUM = [
  {
    slug: "vowels",
    title: "உயிரெழுத்து",
    subtitle: "12 vowels",
    count: VOWELS.length,
    description: "Independent vowel letters — the building blocks of Tamil script.",
  },
  {
    slug: "consonants",
    title: "மெய்யெழுத்து",
    subtitle: "18 consonants",
    count: CONSONANTS.length,
    description: "Consonants with the inherent vowel sound 'a'.",
  },
  {
    slug: "uyirmei",
    title: "உயிர்மெய் எழுத்து",
    subtitle: "216 combined letters",
    count: UYIRMEI.length,
    description: "Every consonant paired with each vowel — the full Tamil syllable chart.",
  },
] as const;

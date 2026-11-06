export type PronunciationTip = {
  id: string;
  heading: string;
  body: string;
  examples: { tamil: string; roman: string; english: string }[];
};

/** Spoken-Tamil pronunciation reminders (aligned with beginner script lessons). */
export const PRONUNCIATION_TIPS: PronunciationTip[] = [
  {
    id: "vowel-length",
    heading: "Short vs long vowels",
    body:
      "Tamil vowels come in short and long pairs. Mixing them changes the word — like English “bit” vs “beat”. Listen carefully when you tap letter audio.",
    examples: [
      { tamil: "பத்து", roman: "pattu", english: "ten (short a)" },
      { tamil: "பாரு", roman: "pāru", english: "look! (long ā)" },
      { tamil: "இலை", roman: "ilai", english: "leaf (short i)" },
      { tamil: "மீன்", roman: "mīn", english: "fish (long ī)" },
    ],
  },
  {
    id: "double-consonants",
    heading: "Doubled consonants",
    body:
      "Written double consonants (க்க, ட்ட, …) are held slightly longer in speech. They are not two separate stops — one longer sound.",
    examples: [
      { tamil: "நல்ல", roman: "nalla", english: "good" },
      { tamil: "இத்தனை", roman: "ittanai", english: "this many" },
      { tamil: "சப்பாடு → சாப்பாடு", roman: "cāppāṭu", english: "food (with emphasis on ā)" },
    ],
  },
  {
    id: "nasal-finals",
    heading: "Nasal endings in speech",
    body:
      "Colloquial Tamil often has nasal vowels at the end of words (sounds like -am, -ān). You may hear a light m/n; copying native audio matters more than spelling.",
    examples: [
      { tamil: "வணக்கம்", roman: "vaṇakkam", english: "hello" },
      { tamil: "நல்லா", roman: "nallā", english: "well / good (spoken)" },
      { tamil: "இருக்கு", roman: "irukku", english: "there is / is (spoken)" },
    ],
  },
  {
    id: "retroflex",
    heading: "Retroflex consonants (ழ, ற, …)",
    body:
      "ழ (ḻ) and retroflex ட/ண/த் are made with the tongue farther back than English t/d. Use the chart and audio — English approximations only get you close.",
    examples: [
      { tamil: "தமிழ்", roman: "tamiḻ", english: "Tamil" },
      { tamil: "வாழை", roman: "vāḻai", english: "banana" },
      { tamil: "கடை", roman: "kaṭai", english: "shop" },
    ],
  },
];

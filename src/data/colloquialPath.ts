export type ColloquialLink = {
  label: string;
  to: string;
};

export type ColloquialUnit = {
  unit: number;
  titleEnglish: string;
  titleTamil: string;
  blurb: string;
  links: ColloquialLink[];
};

/** Sixteen spoken-Tamil milestones (themes only — original app content). */
export const COLLOQUIAL_PATH: ColloquialUnit[] = [
  {
    unit: 1,
    titleEnglish: "My name is …",
    titleTamil: "என் பெயர் …",
    blurb: "Introduce yourself and ask names.",
    links: [
      { label: "Dialogue: Meeting", to: "/dialogues/meeting" },
      { label: "Phrases: Everyday", to: "/phrases/everyday" },
      { label: "Grammar: Colloquial vs written", to: "/grammar/colloquial-written" },
    ],
  },
  {
    unit: 2,
    titleEnglish: "Going home",
    titleTamil: "வீட்டுக்கு போறேன்",
    blurb: "Rooms, keys, and daily routine words.",
    links: [
      { label: "Words: Home", to: "/words/home" },
      { label: "Words: Places", to: "/words/places" },
      { label: "Grammar: Verbless sentences", to: "/grammar/verbless-sentences" },
    ],
  },
  {
    unit: 3,
    titleEnglish: "What would you like?",
    titleTamil: "என்ன வேணும்?",
    blurb: "Ordering food and South Indian tiffin.",
    links: [
      { label: "Words: South Indian food", to: "/words/south-indian-food" },
      { label: "Dialogue: Dining", to: "/dialogues/dining" },
      { label: "Phrases: Dining", to: "/phrases/dining-phrases" },
    ],
  },
  {
    unit: 4,
    titleEnglish: "Phone call",
    titleTamil: "தொலைபேசி",
    blurb: "Answer and ask for someone on the phone.",
    links: [
      { label: "Dialogue: Phone", to: "/dialogues/phone" },
      { label: "Phrases: Phone", to: "/phrases/phone-phrases" },
    ],
  },
  {
    unit: 5,
    titleEnglish: "Sorry for being late",
    titleTamil: "தாமதம்",
    blurb: "Apologize and explain a delay.",
    links: [
      { label: "Dialogue: Late apology", to: "/dialogues/late-apology" },
      { label: "Phrases: Apology", to: "/phrases/apology-phrases" },
    ],
  },
  {
    unit: 6,
    titleEnglish: "Trip to Mahabalipuram",
    titleTamil: "மகாபலிபுரம்",
    blurb: "Plan a day trip and the beach.",
    links: [
      { label: "Dialogue: Mahabalipuram", to: "/dialogues/mahabalipuram" },
      { label: "Words: Places & travel", to: "/words/places" },
    ],
  },
  {
    unit: 7,
    titleEnglish: "Where are you going?",
    titleTamil: "எங்கே போறீங்க?",
    blurb: "Direction and movement questions.",
    links: [
      { label: "Grammar: Questions", to: "/grammar/questions" },
      { label: "Dialogue: Railway", to: "/dialogues/railway" },
      { label: "Phrases: Travel", to: "/phrases/railway-phrases" },
    ],
  },
  {
    unit: 8,
    titleEnglish: "When did you come?",
    titleTamil: "எப்போ வந்தீங்க?",
    blurb: "Time words and past tense.",
    links: [
      { label: "Words: Time", to: "/words/time" },
      { label: "Dialogue: Asking the time", to: "/dialogues/time" },
      { label: "Grammar: Tenses", to: "/grammar/tenses" },
    ],
  },
  {
    unit: 9,
    titleEnglish: "Clothes",
    titleTamil: "ஆடை",
    blurb: "What you wear and tailoring.",
    links: [{ label: "Words: Clothes", to: "/words/clothes" }],
  },
  {
    unit: 10,
    titleEnglish: "Wedding",
    titleTamil: "கல்யாணம்",
    blurb: "Greetings at a wedding feast.",
    links: [{ label: "Dialogue: Wedding", to: "/dialogues/wedding-visit" }],
  },
  {
    unit: 11,
    titleEnglish: "Come see me",
    titleTamil: "என்னை பாக்க வாங்க",
    blurb: "Inviting someone to visit.",
    links: [
      { label: "Phrases: Everyday", to: "/phrases/everyday" },
      { label: "Grammar: Imperatives", to: "/grammar/imperatives" },
    ],
  },
  {
    unit: 12,
    titleEnglish: "Where I'm from",
    titleTamil: "என் ஊரு",
    blurb: "Hometown and origin.",
    links: [
      { label: "Words: Places", to: "/words/places" },
      { label: "Phrases: Introductions", to: "/phrases/everyday" },
    ],
  },
  {
    unit: 13,
    titleEnglish: "Directions",
    titleTamil: "வழி",
    blurb: "Left, right, bus stop.",
    links: [
      { label: "Dialogue: Directions", to: "/dialogues/directions" },
      { label: "Phrases: Directions", to: "/phrases/directions-phrases" },
      { label: "Grammar: Postpositions", to: "/grammar/postpositions" },
    ],
  },
  {
    unit: 14,
    titleEnglish: "Feelings & humor",
    titleTamil: "சிரிப்பு & உணர்ச்சி",
    blurb: "Emotions and light chat.",
    links: [{ label: "Words: Emotions", to: "/words/emotions" }],
  },
  {
    unit: 15,
    titleEnglish: "Short stay in Tamil Nadu",
    titleTamil: "சில நாள் தங்க",
    blurb: "Can, must, and travel needs.",
    links: [
      { label: "Grammar: Can & must", to: "/grammar/modals" },
      { label: "Words: Places", to: "/words/places" },
    ],
  },
  {
    unit: 16,
    titleEnglish: "Reading Tamil",
    titleTamil: "தமிழ் படிப்பு",
    blurb: "Spoken vs literary style when you read.",
    links: [
      { label: "Grammar: Colloquial vs written", to: "/grammar/colloquial-written" },
      { label: "Learn: Uyirmei", to: "/learn/uyirmei" },
    ],
  },
];

export type GrammarExample = {
  tamil: string;
  roman: string;
  english: string;
};

export type GrammarSection = {
  heading: string;
  body: string;
  examples?: GrammarExample[];
};

export type GrammarTopic = {
  id: string;
  titleTamil: string;
  titleEnglish: string;
  intro: string;
  sections: GrammarSection[];
  /** core = script basics; extended = spoken patterns; advanced = deeper forms */
  level: "core" | "extended" | "advanced";
};

export const GRAMMAR_TOPICS: GrammarTopic[] = [
  {
    id: "nouns",
    titleTamil: "பெயர்ச்சொற்கள்",
    titleEnglish: "Nouns",
    intro:
      "பெயர்ச்சொல் names a person, place, thing, or idea. Tamil nouns can show number and case with suffixes.",
    level: "core",
    sections: [
      {
        heading: "Common types",
        body: "Proper nouns (names), common nouns (பூ, மரம்), abstract nouns (அன்பு, நம்பிக்கை), and collective nouns.",
        examples: [
          { tamil: "நண்பன்", roman: "naṇpaṉ", english: "friend (male)" },
          { tamil: "புத்தகம்", roman: "puttakam", english: "book" },
          { tamil: "சென்னை", roman: "Ceṉṉai", english: "Chennai" },
        ],
      },
      {
        heading: "Plural",
        body: "Many nouns add -கள் for plural: புத்தகம் → புத்தகங்கள். Some use irregular plurals learned by practice.",
        examples: [
          { tamil: "மரம் → மரங்கள்", roman: "maram → maraṅkaḷ", english: "tree → trees" },
          { tamil: "பை → பைகள்", roman: "pai → paikaḷ", english: "bag → bags" },
        ],
      },
    ],
  },
  {
    id: "pronouns",
    titleTamil: "பிரதிப்பெயர்ச்சொற்கள்",
    titleEnglish: "Pronouns",
    intro: "பிரதிப்பெயர் replaces a noun. Tamil uses distinct forms for respect, closeness, and number.",
    level: "core",
    sections: [
      {
        heading: "Personal pronouns",
        body: "First person: நான் (I), நாம்/நாங்கள் (we). Second: நீ (you informal), நீங்கள் (you polite/plural). Third: அவன், அவள், அது, அவர்கள்.",
        examples: [
          { tamil: "நான் படிக்கிறேன்", roman: "nāṉ paṭikkiṟēṉ", english: "I am studying" },
          { tamil: "நீங்கள் வருகிறீர்கள்", roman: "nīṅkaḷ varukiṟīrkaḷ", english: "You are coming (polite)" },
          { tamil: "அவள் பாடுகிறாள்", roman: "avaḷ pāṭukiṟāḷ", english: "She is singing" },
        ],
      },
      {
        heading: "Demonstratives",
        body: "இது (this near me), அது (that), இவர்/அவர் (this/that person respectfully).",
        examples: [
          { tamil: "இது என் புத்தகம்", roman: "itu eṉ puttakam", english: "This is my book" },
          { tamil: "அது நல்லது", roman: "atu nallatu", english: "That is good" },
        ],
      },
    ],
  },
  {
    id: "verbs",
    titleTamil: "வினைச்சொற்கள்",
    titleEnglish: "Verbs",
    intro: "வினைச்சொல் expresses action or state. Tamil verbs change by person, number, tense, and mood.",
    level: "core",
    sections: [
      {
        heading: "Verb stems",
        body: "Most verbs end in -u in the dictionary form: போ (go) → போக, வா (come) → வா, செய் (do) → செய். Conjugation adds suffixes to the stem.",
        examples: [
          { tamil: "படி", roman: "paṭi", english: "study (stem)" },
          { tamil: "சாப்பிடு", roman: "cāppiṭu", english: "eat" },
          { tamil: "ஓடு", roman: "ōṭu", english: "run" },
        ],
      },
      {
        heading: "Auxiliary / aspect",
        body: "Present progressive often uses -கிற + person marker: படிக்க + கிறேன் = I am studying.",
        examples: [
          { tamil: "வருகிறேன்", roman: "varukiṟēṉ", english: "I am coming" },
          { tamil: "பார்க்கிறாள்", roman: "pārkkiṟāḷ", english: "She is watching" },
        ],
      },
    ],
  },
  {
    id: "gender",
    titleTamil: "பால்",
    titleEnglish: "Gender",
    intro:
      "Tamil nouns and pronouns can reflect gender (ஆண்பால், பெண்பால், பலர்பால்). Verbs agree with the subject’s gender in third person.",
    level: "core",
    sections: [
      {
        heading: "Noun gender",
        body: "Some nouns are naturally gendered: அண்ணன் (brother), அக்கா (sister). Many common nouns are neuter (பொருள்) unless specified.",
        examples: [
          { tamil: "அவன்", roman: "avaṉ", english: "he (male)" },
          { tamil: "அவள்", roman: "avaḷ", english: "she (female)" },
          { tamil: "அவர்கள்", roman: "avarkaḷ", english: "they / respectful singular" },
        ],
      },
      {
        heading: "Verb agreement",
        body: "Same tense, different endings: அவன் வந்தான் (he came), அவள் வந்தாள் (she came), அது வந்தது (it came).",
        examples: [
          { tamil: "அவன் சொன்னான்", roman: "avaṉ soṉṉāṉ", english: "He said" },
          { tamil: "அவள் சொன்னாள்", roman: "avaḷ soṉṉāḷ", english: "She said" },
        ],
      },
    ],
  },
  {
    id: "tenses",
    titleTamil: "காலங்கள்",
    titleEnglish: "Tenses",
    intro: "Main tenses: இன்றைய (present), நிகழ் (past), எதிர் (future). Spoken Tamil often simplifies forms.",
    level: "core",
    sections: [
      {
        heading: "Present habitual / simple",
        body: "Verb stem + tense marker + person: படிக்க + கிறேன் (I study / am studying).",
        examples: [
          { tamil: "நான் தமிழ் படிக்கிறேன்", roman: "nāṉ tamiḻ paṭikkiṟēṉ", english: "I learn Tamil" },
        ],
      },
      {
        heading: "Past",
        body: "Past suffix -இன்- / -த்த- etc. varies by verb class: வந்தேன் (I came), சாப்பிட்டேன் (I ate).",
        examples: [
          { tamil: "நேற்று நான் வந்தேன்", roman: "nēṟṟu nāṉ vantēṉ", english: "I came yesterday" },
          { tamil: "அவள் பாட்டு பாடினாள்", roman: "avaḷ pāṭṭu pāṭiṉāḷ", english: "She sang a song" },
        ],
      },
      {
        heading: "Future",
        body: "Future marker -வ்- / -ப்- with person endings: போவேன் (I will go), வருவாள் (she will come).",
        examples: [
          { tamil: "நாளை நான் வருவேன்", roman: "nāḷai nāṉ varuvēṉ", english: "I will come tomorrow" },
        ],
      },
    ],
  },
  {
    id: "cases",
    titleTamil: "வேற்றுமை உருபுகள்",
    titleEnglish: "Cases",
    intro:
      "வேற்றுமை shows a noun’s role in a sentence (subject, object, location, etc.) using suffixes called உருபு.",
    level: "core",
    sections: [
      {
        heading: "Common case suffixes",
        body: "First case (subject): -u/empty. Accusative (object): -ai. Dative (to/for): -ku. Locative (in/on): -il. Ablative (from): -il irundu / -in.",
        examples: [
          { tamil: "நான் புத்தகம் படிக்கிறேன்", roman: "nāṉ puttakam paṭikkiṟēṉ", english: "I read a book" },
          { tamil: "அவனுக்கு கொடு", roman: "avaṉukku koṭu", english: "Give to him" },
          { tamil: "வீட்டில்", roman: "vīṭṭil", english: "at home" },
        ],
      },
      {
        heading: "Genitive (possession)",
        body: "Possession uses -உடைய / -இன் / colloquial -ஓட: என் / என்னுடைய (my).",
        examples: [
          { tamil: "இது என் பேனா", roman: "itu eṉ pēnā", english: "This is my pen" },
          { tamil: "அவள் தாயின் புத்தகம்", roman: "avaḷ tāyiṉ puttakam", english: "Her mother's book" },
        ],
      },
    ],
  },
  {
    id: "sandhi",
    titleTamil: "புணர்ச்சி",
    titleEnglish: "Sandhi",
    intro:
      "புணர்ச்சி is how sounds change when words join. Tamil spelling often keeps full forms, but speech blends sounds smoothly.",
    level: "core",
    sections: [
      {
        heading: "Joining words",
        body: "When suffixes attach, final letters may soften or assimilate: க+அ → க, doubled consonants in writing reflect pronunciation history.",
        examples: [
          { tamil: "மர + கள் → மரங்கள்", roman: "mara + kaḷ → maraṅkaḷ", english: "tree + plural" },
          { tamil: "நல் + அம் → நல்ல", roman: "nal + am → nalla", english: "good + emphatic → good (nalla)" },
        ],
      },
      {
        heading: "Spoken blending",
        body: "In fast speech, vowels glide between words; learning standard written forms first helps reading formal Tamil.",
        examples: [
          { tamil: "என்ன செய்கிறாய்?", roman: "eṉṉa ceykiṟāy?", english: "What are you doing?" },
        ],
      },
    ],
  },
  {
    id: "questions",
    titleTamil: "வினாக்கள்",
    titleEnglish: "Questions",
    intro:
      "Question words (WH-words) usually stay at the start or before the verb. Yes/no questions often end with -ஆ or use tone in speech.",
    level: "extended",
    sections: [
      {
        heading: "Question words",
        body: "என்ன (what), யார் (who), எப்போது (when), எங்கே (where), ஏன் (why), எப்படி (how), எத்தனை (how many).",
        examples: [
          { tamil: "என்ன?", roman: "eṉṉa?", english: "What?" },
          { tamil: "யார்?", roman: "yār?", english: "Who?" },
          { tamil: "எங்கே?", roman: "eṅkē?", english: "Where?" },
          { tamil: "எப்போது?", roman: "eppōtu?", english: "When?" },
          { tamil: "ஏன்?", roman: "ēṉ?", english: "Why?" },
          { tamil: "எப்படி?", roman: "eppaṭi?", english: "How?" },
        ],
      },
      {
        heading: "Sample questions",
        body: "Combine WH-words with verbs at the end (SOV order).",
        examples: [
          { tamil: "நீங்கள் எங்கே வசிக்கிறீர்கள்?", roman: "nīṅkaḷ eṅkē vacikkiṟīrkaḷ?", english: "Where do you live?" },
          { tamil: "இது என்ன?", roman: "itu eṉṉa?", english: "What is this?" },
          { tamil: "அவர் யார்?", roman: "avar yār?", english: "Who is he/she?" },
          { tamil: "எப்போது வருகிறீர்கள்?", roman: "eppōtu varukiṟīrkaḷ?", english: "When are you coming?" },
        ],
      },
      {
        heading: "Yes/no with -aa (ஆ)",
        body:
          "In colloquial Tamil, add -aa to the verb (or use -aa at the end of a statement) to ask yes/no questions or seek confirmation: போவீங்களா? (Will you go?). Same idea as -ஆ on polite forms: varuvīrkaḷā?",
        examples: [
          { tamil: "நீங்கள் வருவீர்களா?", roman: "nīṅkaḷ varuvīrkaḷā?", english: "Will you come?" },
          { tamil: "இது சரியா?", roman: "itu cariyā?", english: "Is this correct?" },
          { tamil: "சாப்பிடலாமா?", roman: "cāppiṭalāmā?", english: "Shall we eat?" },
          { tamil: "அவர் இருக்காரா?", roman: "avar irukkārā?", english: "Is he/she there?" },
        ],
      },
    ],
  },
  {
    id: "colloquial-written",
    titleTamil: "பேச்சு & எழுத்து",
    titleEnglish: "Colloquial vs written Tamil",
    intro:
      "Everyday speech uses shorter verb forms and different endings than formal writing. News, exams, and literature often use written Tamil; friends and shops use spoken forms.",
    level: "core",
    sections: [
      {
        heading: "Why two styles?",
        body:
          "Written Tamil keeps fuller suffixes and fewer dropped sounds. Spoken Tamil drops or blends sounds and uses familiar address (நீங்கள், அண்ணா). Both use the same script — you learn to recognize both as you read and listen.",
        examples: [
          { tamil: "எழுத்து: அவர் வருகிறார்", roman: "eḻuttu: avar varukiṟār", english: "Written: He is coming (formal)" },
          { tamil: "பேச்சு: அவர் வராரு", roman: "pēccu: avar varāru", english: "Spoken: He is coming (colloquial)" },
        ],
      },
      {
        heading: "Politeness without “please” every time",
        body:
          "Respect often comes from tone, titles (ஐயா, அம்மா), and verb choice — not from translating English “please” in every sentence. நன்றி is used, but less formulaically than in English.",
        examples: [
          { tamil: "வாங்க, உட்காருங்கள்", roman: "vāṅka, uṭkāruṅkaḷ", english: "Please come, sit (natural invite)" },
          { tamil: "ஒரு கிலோ கொடுங்கள்", roman: "oru kilo koṭuṅkaḷ", english: "Give one kilo (polite -ungal, no extra “please” word)" },
        ],
      },
    ],
  },
  {
    id: "verbless-sentences",
    titleTamil: "வினையில்லா வாக்கியம்",
    titleEnglish: "Verbless sentences",
    intro:
      "Many everyday Tamil sentences have no verb — especially with adjectives, location, or “there is / there isn’t”.",
    level: "core",
    sections: [
      {
        heading: "Adjective + subject",
        body: "Quality or state without “is”: நல்லது (it is good), சரி (okay), போதும் (enough).",
        examples: [
          { tamil: "சாப்பாடு நல்லா இருக்கு", roman: "cāppāṭu nallā irukku", english: "The food is good (spoken)" },
          { tamil: "இது சரி", roman: "itu cari", english: "This is fine" },
          { tamil: "ரொம்ப வெயில்", roman: "romba veyil", english: "Very hot (sun)" },
        ],
      },
      {
        heading: "Existence & absence",
        body: "இருக்கு (there is / has), இல்ல (there isn’t / doesn’t). Often no separate “is” word in English sense.",
        examples: [
          { tamil: "இங்கே பஸ் இல்ல", roman: "iṅkē pas illa", english: "There is no bus here" },
          { tamil: "எனக்கு நேரம் இல்ல", roman: "eṉakku nēram illa", english: "I don’t have time" },
          { tamil: "அங்கே கடை இருக்கு", roman: "aṅkē kaṭai irukku", english: "There is a shop there" },
        ],
      },
    ],
  },
  {
    id: "verb-types",
    titleTamil: "வினை வகைகள்",
    titleEnglish: "Action & non-action verbs",
    intro:
      "Action verbs describe doing (run, eat, speak). Non-action verbs describe state or experience (know, like, want, understand). Both conjugate with tense endings.",
    level: "extended",
    sections: [
      {
        heading: "Action verbs",
        body: "Movement and activity: போ (go), வா (come), சாப்பிடு (eat), படி (study), பேசு (speak).",
        examples: [
          { tamil: "நான் பள்ளிக்கு போகிறேன்", roman: "nāṉ paḷḷikku pōkiṟēṉ", english: "I go to school" },
          { tamil: "அவள் தமிழ் பேசுகிறாள்", roman: "avaḷ tamiḻ pēcukiṟāḷ", english: "She speaks Tamil" },
          { tamil: "நாம் சாப்பிடலாம்", roman: "nām cāppiṭalām", english: "Let us eat" },
        ],
      },
      {
        heading: "Non-action verbs",
        body: "Feelings and cognition: தெரி (know), விருப்பம் (like/want), கற்ற (learned), கேள் (ask/listen), புரி (understand).",
        examples: [
          { tamil: "எனக்கு தமிழ் பிடிக்கும்", roman: "eṉakku tamiḻ piṭikkum", english: "I like Tamil" },
          { tamil: "எனக்குத் தெரியும்", roman: "eṉakkut teriyum", english: "I know (it)" },
          { tamil: "தயவு செய்து கேளுங்கள்", roman: "tayavu ceytu kēḷuṅkaḷ", english: "Please ask / listen" },
        ],
      },
      {
        heading: "Useful patterns",
        body: "Learn, speak, ask — common beginner sentence frames.",
        examples: [
          { tamil: "நான் தமிழ் கற்கிறேன்", roman: "nāṉ tamiḻ kaṟkiṟēṉ", english: "I am learning Tamil" },
          { tamil: "நீங்கள் ஆங்கிலம் பேசுவீர்களா?", roman: "nīṅkaḷ āṅkilam pēsuvīrkaḷā?", english: "Do you speak English?" },
        ],
      },
    ],
  },
  {
    id: "sentence",
    titleTamil: "வாக்கியம்",
    titleEnglish: "Sentence",
    intro:
      "வாக்கியம் is a complete thought. Basic order is Subject – Object – Verb (SOV), unlike English SVO.",
    level: "core",
    sections: [
      {
        heading: "Word order",
        body: "Tamil typically places the verb last: நான் (S) ஆப்பிள் (O) சாப்பிடுகிறேன் (V).",
        examples: [
          {
            tamil: "அவள் பள்ளிக்கு போகிறாள்",
            roman: "avaḷ paḷḷikku pōkiṟāḷ",
            english: "She goes to school",
          },
        ],
      },
      {
        heading: "Question sentences",
        body: "Yes/no questions often use question tone or words like ஆ (aa)? WH-questions: என்ன (what), எங்கே (where), எப்போது (when).",
        examples: [
          { tamil: "நீங்கள் தமிழ் படிக்கிறீர்களா?", roman: "nīṅkaḷ tamiḻ paṭikkiṟīrkaḷā?", english: "Do you learn Tamil?" },
          { tamil: "எங்கே வசிக்கிறீர்கள்?", roman: "eṅkē vacikkiṟīrkaḷ?", english: "Where do you live?" },
        ],
      },
    ],
  },
  {
    id: "address",
    titleTamil: "அழைப்பு & மரியாதை",
    titleEnglish: "Forms of address",
    intro: "Spoken Tamil uses titles and polite forms. நீங்கள் is safer than நீ with strangers and elders.",
    level: "extended",
    sections: [
      {
        heading: "Common address words",
        body: "ஐயா / அம்மா (sir/madam), அண்ணா / அக்கா (older brother/sister), தம்பி / தங்கை (younger).",
        examples: [
          { tamil: "வணக்கம், ஐயா", roman: "vaṇakkam, aiyā", english: "Hello, sir" },
          { tamil: "வாங்க, அம்மா", roman: "vāṅka, ammā", english: "Please come, madam" },
          { tamil: "உட்காருங்கள், ஐயா", roman: "uṭkāruṅkaḷ, aiyā", english: "Sit down, sir" },
        ],
      },
    ],
  },
  {
    id: "imperatives",
    titleTamil: "கட்டளை வினை",
    titleEnglish: "Imperatives",
    intro: "Command forms: plain stem for informal, add -உங்கள் for polite plural (also used as respectful singular).",
    level: "extended",
    sections: [
      {
        heading: "Positive commands",
        body: "வா (come) → வாங்க / வருங்கள் (polite). போ (go) → போங்கள். செய் (do) → செய்யுங்கள்.",
        examples: [
          { tamil: "இங்கே வா", roman: "iṅkē vā", english: "Come here (informal)" },
          { tamil: "இங்கே வாருங்கள்", roman: "iṅkē vāruṅkaḷ", english: "Please come here" },
          { tamil: "சாப்பிடுங்கள்", roman: "cāppiṭuṅkaḷ", english: "Please eat" },
        ],
      },
      {
        heading: "Negative commands",
        body: "Add -க்கூடாது or use negative stem: இங்கே வேண்டாம் (don’t come here).",
        examples: [
          { tamil: "இங்கே வேண்டாம்", roman: "iṅkē vēṇṭām", english: "Don't come here" },
          { tamil: "தொலைபேசி வேண்டாம்", roman: "tolaipecci vēṇṭām", english: "Don't use the phone" },
        ],
      },
    ],
  },
  {
    id: "postpositions",
    titleTamil: "பின்சொல் உருபுகள்",
    titleEnglish: "Postpositions",
    intro: "Words that come after nouns to show place, direction, or relation — like English prepositions but placed after the noun.",
    level: "extended",
    sections: [
      {
        heading: "Place and direction",
        body: "உள்ளே (inside), வெளியே (outside), மேலே (on/above), கீழே (below), பக்கத்தில் (beside), முன்னால் (in front), பின்னால் (behind).",
        examples: [
          { tamil: "வீட்டுக்குள்", roman: "vīṭṭukkuḷ", english: "inside the house" },
          { tamil: "மரத்தின் கீழே", roman: "marattiṉ kīḻē", english: "under the tree" },
          { tamil: "பள்ளிக்குப் போ", roman: "paḷḷikku pō", english: "Go to school" },
        ],
      },
    ],
  },
  {
    id: "modals",
    titleTamil: "உணர்தல் & கட்டாயம்",
    titleEnglish: "Can, must, should",
    intro: "Spoken Tamil uses helper verbs and phrases for ability, obligation, and need.",
    level: "extended",
    sections: [
      {
        heading: "Ability & permission",
        body: "முடியும் (can), முடியாது (cannot). நான் வர முடியும் — I can come.",
        examples: [
          { tamil: "என்னால் முடியும்", roman: "eṉṉāl muṭiyum", english: "I can (do it)" },
          { tamil: "என்னால் முடியாது", roman: "eṉṉāl muṭiyātu", english: "I cannot" },
        ],
      },
      {
        heading: "Obligation",
        body: "வேண்டும் (must/should), வேண்டாம் (must not). தேவை (need).",
        examples: [
          { tamil: "நீங்கள் வர வேண்டும்", roman: "nīṅkaḷ vara vēṇṭum", english: "You must come" },
          { tamil: "எனக்குத் தேவை", roman: "eṉakkut tēvai", english: "I need (it)" },
        ],
      },
    ],
  },
  {
    id: "adjectives-adverbs",
    titleTamil: "பெயரடை & வினையடை",
    titleEnglish: "Adjectives & adverbs",
    intro: "Adjectives usually come before nouns. Adverbs modify verbs and often appear before the verb in SOV order.",
    level: "extended",
    sections: [
      {
        heading: "Adjectives",
        body: "நல்ல (good), பெரிய (big), சிறிய (small), புதிய (new). No separate ‘to be’ before adjective in many frames.",
        examples: [
          { tamil: "நல்ல சாப்பாடு", roman: "nalla cāppāṭu", english: "good food" },
          { tamil: "பெரிய வீடு", roman: "periya vīṭu", english: "big house" },
        ],
      },
      {
        heading: "Adverbs",
        body: "வேகம் (fast), மெதுவாக (slowly), அடிக்கடி (often), இப்போது (now).",
        examples: [
          { tamil: "வேகமாக ஓடு", roman: "vēkamāka ōṭu", english: "Run fast" },
          { tamil: "இப்போது வா", roman: "ippōtu vā", english: "Come now" },
        ],
      },
    ],
  },
  {
    id: "negative-tenses",
    titleTamil: "எதிர்மறை காலங்கள்",
    titleEnglish: "Negative tenses",
    intro: "Negating verbs in present, past, and future uses different suffix patterns; spoken forms are often shorter.",
    level: "advanced",
    sections: [
      {
        heading: "Present negative",
        body: "Illai / illa pattern or verb + -மாட்ட- + person: சாப்பிட மாட்டேன் (I won't eat / I don't eat).",
        examples: [
          { tamil: "நான் வர மாட்டேன்", roman: "nāṉ vara māṭṭēṉ", english: "I will not come / I am not coming" },
          { tamil: "எனக்குத் தெரியாது", roman: "eṉakkut teriyātu", english: "I don't know" },
        ],
      },
      {
        heading: "Past & future negative",
        body: "Past: வரல (didn't come). Future: போக மாட்டேன் (won't go).",
        examples: [
          { tamil: "நேற்று வரல", roman: "nēṟṟu varala", english: "Didn't come yesterday (colloquial)" },
          { tamil: "நாளை போக மாட்டேன்", roman: "nāḷai pōka māṭṭēṉ", english: "I won't go tomorrow" },
        ],
      },
    ],
  },
  {
    id: "cases-extended",
    titleTamil: "வேற்றுமை — விரிவு",
    titleEnglish: "Cases in depth",
    intro: "Beyond basics: dative (to/for), instrumental (with/by), ablative (from), locative (in/at).",
    level: "advanced",
    sections: [
      {
        heading: "Dative & instrumental",
        body: "-ku / -kkku (to/for): அவனுக்கு. -āl / -ināl (by means of): கத்தியால் (with a knife).",
        examples: [
          { tamil: "எனக்கு கொடு", roman: "eṉakku koṭu", english: "Give to me" },
          { tamil: "பேனாவால் எழுது", roman: "pēṉāvāl eḻutu", english: "Write with a pen" },
        ],
      },
      {
        heading: "Ablative & locative",
        body: "From: -il irundu, -in. In/at: -il, -kku (to a place as goal).",
        examples: [
          { tamil: "சென்னையிலிருந்து", roman: "Ceṉṉaiyiliruntu", english: "from Chennai" },
          { tamil: "அறையில்", roman: "aṟaiyil", english: "in the room" },
        ],
      },
    ],
  },
  {
    id: "participles-conditionals",
    titleTamil: "பங்குபெயர் & நிபந்தனை",
    titleEnglish: "Participles & conditionals",
    intro: "Participles link clauses; conditional ‘if’ uses -ஆ / -ஆல patterns in formal Tamil, shorter forms in speech.",
    level: "advanced",
    sections: [
      {
        heading: "Conditional",
        body: "If… : -ஆ / -ஆல / -னா (colloquial). If not: -இல்லையென்றால்.",
        examples: [
          { tamil: "நீ வந்தா, நான் போவேன்", roman: "nī vantā, nāṉ pōvēṉ", english: "If you come, I will go" },
          { tamil: "மழை பெய்தால் வர மாட்டேன்", roman: "maḻai peytāl vara māṭṭēṉ", english: "If it rains, I won't come" },
        ],
      },
      {
        heading: "Participles",
        body: "Past participle + verb: சாப்பிட்டு போ (eat and go). Perfect: வந்திருக்கிறேன் (I have come).",
        examples: [
          { tamil: "சாப்பிட்டு வா", roman: "cāppiṭṭu vā", english: "Come after eating" },
          { tamil: "நான் வந்திருக்கிறேன்", roman: "nāṉ vantirukkiṟēṉ", english: "I have come" },
        ],
      },
    ],
  },
  {
    id: "spoken-particles",
    titleTamil: "பேச்சுத் தமிழ் சொற்கள்",
    titleEnglish: "Spoken particles",
    intro: "Small words that soften, emphasize, or question in everyday speech: -ஆ, -ஏ, -உம், avadhu (or aa) endings.",
    level: "advanced",
    sections: [
      {
        heading: "-um (also / and)",
        body: "Adds ‘also’ or joins nouns: நீங்களும் (you too), பழமும் (fruit also).",
        examples: [
          { tamil: "நானும் வருவேன்", roman: "nāṉum varuvēṉ", english: "I will come too" },
          { tamil: "அவனும் அவளும்", roman: "avaṉum avaḷum", english: "Both he and she" },
        ],
      },
      {
        heading: "Question & emphasis",
        body: "Yes/no tag -ஆ at end. Emphatic -ஏ. Spoken ‘aa’ question tone on verbs.",
        examples: [
          { tamil: "வருவீர்களா?", roman: "varuvīrkaḷā?", english: "Will you come?" },
          { tamil: "இதுதானே?", roman: "itutāṉē?", english: "This is it, right?" },
        ],
      },
    ],
  },
];

export function getGrammarTopic(id: string): GrammarTopic | undefined {
  return GRAMMAR_TOPICS.find((t) => t.id === id);
}

import type { VocabDeck } from "./vocabulary";
import { deckItemIds } from "./vocabulary";

export const PHRASE_DECKS: VocabDeck[] = [
  {
    id: "everyday",
    titleTamil: "நாள்தோறும் வாக்கியங்கள்",
    titleEnglish: "Everyday phrases",
    description: "Greetings, thanks, and introducing yourself.",
    groups: [
      {
        heading: "Greetings",
        items: [
          {
            id: "ph-vanakkam",
            tamil: "வணக்கம்",
            roman: "vaṇakkam",
            english: "Hello / Greetings",
          },
          {
            id: "ph-vanakkam-res",
            tamil: "வணக்கம்! எப்படி இருக்கிறீர்கள்?",
            roman: "vaṇakkam! eppaṭi irukkiṟīrkaḷ?",
            english: "Hello! How are you? (polite)",
          },
          {
            id: "ph-welcome",
            tamil: "வரவேற்கிறோம்",
            roman: "varavēṟkiṟōm",
            english: "Welcome",
          },
          {
            id: "ph-sit",
            tamil: "தயவு செய்து உட்காருங்கள்",
            roman: "tayavu ceytu uṭkāruṅkaḷ",
            english: "Please be seated",
          },
          {
            id: "ph-good-morning",
            tamil: "காலை வணக்கம்",
            roman: "kālai vaṇakkam",
            english: "Good morning",
          },
          {
            id: "ph-good-evening",
            tamil: "மாலை வணக்கம்",
            roman: "mālai vaṇakkam",
            english: "Good evening",
          },
        ],
      },
      {
        heading: "Thanks",
        items: [
          {
            id: "ph-thanks",
            tamil: "நன்றி",
            roman: "naṉṟi",
            english: "Thank you",
          },
          {
            id: "ph-thanks-much",
            tamil: "மிக்க நன்றி",
            roman: "mikka naṉṟi",
            english: "Thank you very much",
          },
          {
            id: "ph-welcome-reply",
            tamil: "சரி, நன்றி",
            roman: "cari, naṉṟi",
            english: "Okay, thanks",
          },
          {
            id: "ph-sorry",
            tamil: "மன்னிக்கவும்",
            roman: "maṉṉikkavum",
            english: "Sorry / Excuse me",
          },
        ],
      },
      {
        heading: "Names & introductions",
        items: [
          {
            id: "ph-name-q",
            tamil: "உங்கள் பெயர் என்ன?",
            roman: "uṅkaḷ peyar eṉṉa?",
            english: "What is your name?",
          },
          {
            id: "ph-name-a",
            tamil: "என் பெயர் ராம்",
            roman: "eṉ peyar Rām",
            english: "My name is Ram (example)",
          },
          {
            id: "ph-nice",
            tamil: "உங்களை சந்தித்ததில் மகிழ்ச்சி",
            roman: "uṅkaḷai cantittatil makiḻcci",
            english: "Nice to meet you",
          },
          {
            id: "ph-who",
            tamil: "நீங்கள் யார்?",
            roman: "nīṅkaḷ yār?",
            english: "Who are you?",
          },
          {
            id: "ph-from",
            tamil: "நான் சென்னையிலிருந்து வருகிறேன்",
            roman: "nāṉ Ceṉṉaiyiliruntu varukiṟēṉ",
            english: "I come from Chennai",
          },
        ],
      },
    ],
  },
  {
    id: "hospital",
    titleTamil: "மருத்துவமனை",
    titleEnglish: "Hospital & health",
    description: "Doctor visits and simple symptoms.",
    groups: [
      {
        heading: "At the clinic",
        items: [
          { id: "ph-h-fever", tamil: "காய்ச்சல் இருக்கு", roman: "kāyccal irukku", english: "I have fever" },
          { id: "ph-h-pain", tamil: "வலி இருக்கு", roman: "vali irukku", english: "It hurts / I have pain" },
          { id: "ph-h-problem", tamil: "என்ன பிரச்சனை?", roman: "eṉṉa piraccai?", english: "What is the problem?" },
          { id: "ph-h-medicine", tamil: "மருந்து சாப்பிடுங்கள்", roman: "maruntu cāppiṭuṅkaḷ", english: "Take the medicine" },
          { id: "ph-h-sit", tamil: "இங்கே உட்காருங்கள்", roman: "iṅkē uṭkāruṅkaḷ", english: "Sit here, please" },
        ],
      },
    ],
  },
  {
    id: "shopping",
    titleTamil: "கடை & சந்தை",
    titleEnglish: "Shopping",
    description: "Buying at a shop or market.",
    groups: [
      {
        heading: "At the shop",
        items: [
          { id: "ph-sh-price", tamil: "எத்தனை ரூபா?", roman: "ettanai rūbā?", english: "How much (rupees)?" },
          { id: "ph-sh-kilo", tamil: "ஒரு கிலோ கொடுங்கள்", roman: "oru kilo koṭuṅkaḷ", english: "Give one kilo, please" },
          { id: "ph-sh-this", tamil: "இது என்ன?", roman: "itu eṉṉa?", english: "What is this?" },
          { id: "ph-sh-costly", tamil: "விலை அதிகம்", roman: "vilai atikam", english: "The price is too high" },
          { id: "ph-sh-bill", tamil: "பில் கொடுங்கள்", roman: "pil koṭuṅkaḷ", english: "Give the bill, please" },
        ],
      },
    ],
  },
  {
    id: "railway-phrases",
    titleTamil: "ரயில் & பயணம்",
    titleEnglish: "Railway & travel",
    description: "Tickets and trains.",
    groups: [
      {
        heading: "Travel",
        items: [
          { id: "ph-tr-when", tamil: "ரயில் எப்போது?", roman: "rayil eppōtu?", english: "When is the train?" },
          { id: "ph-tr-ticket", tamil: "ஒரு டிக்கெட் வேண்டும்", roman: "oru ṭikkeṭ vēṇṭum", english: "I need one ticket" },
          { id: "ph-tr-platform", tamil: "எந்த பிளatform?", roman: "enta platform?", english: "Which platform?" },
          { id: "ph-tr-go", tamil: "சென்னைக்கு போகும் ரயில்", roman: "Ceṉṉaikku pōkum rayil", english: "Train going to Chennai" },
        ],
      },
    ],
  },
  {
    id: "dining-phrases",
    titleTamil: "சாப்பாட்டு வாக்கியங்கள்",
    titleEnglish: "Dining phrases",
    description: "Meals, taste, and portions.",
    groups: [
      {
        heading: "Meals",
        items: [
          { id: "ph-d-eat", tamil: "சாப்பிடுங்கள்", roman: "cāppiṭuṅkaḷ", english: "Please eat" },
          { id: "ph-d-good", tamil: "சாப்பாடு நல்லா இருக்கு", roman: "cāppāṭu nallā irukku", english: "The food is good" },
          { id: "ph-d-more", tamil: "இன்னும் வேணுமா?", roman: "iṉṉum vēṇumā?", english: "Do you want more?" },
          { id: "ph-d-enough", tamil: "போதும், நன்றி", roman: "pōtum, naṉṟi", english: "Enough, thank you" },
          { id: "ph-d-hungry", tamil: "பசிக்குது", roman: "pacikkutu", english: "I am hungry" },
        ],
      },
    ],
  },
  {
    id: "phone-phrases",
    titleTamil: "தொலைபேசி",
    titleEnglish: "Phone phrases",
    description: "Calling, holding, and handing over the phone.",
    groups: [
      {
        heading: "On the phone",
        items: [
          { id: "ph-ph-hello", tamil: "ஹலோ, நான் … பேசுறேன்", roman: "halō, nāṉ … pēsurēṉ", english: "Hello, this is … speaking" },
          { id: "ph-ph-there", tamil: "… இருக்காரா?", roman: "… irukkārā?", english: "Is … there?" },
          { id: "ph-ph-hold", tamil: "ஒரு நிமிஷம் பொறுங்கள்", roman: "oru nimiṣam poṟuṅkaḷ", english: "Please hold a moment" },
          { id: "ph-ph-hand", tamil: "தொலைபேசி", roman: "tolaipecci", english: "Phone (for you)" },
          { id: "ph-ph-wrong", tamil: "தவறான நம்பர்", roman: "tavaṟāṉa nambar", english: "Wrong number" },
        ],
      },
    ],
  },
  {
    id: "directions-phrases",
    titleTamil: "வழி & திசை",
    titleEnglish: "Directions",
    description: "Left, right, straight, and asking the way.",
    groups: [
      {
        heading: "Finding the way",
        items: [
          { id: "ph-dir-where", tamil: "… எங்கே?", roman: "… eṅkē?", english: "Where is …?" },
          { id: "ph-dir-straight", tamil: "நேரா நடந்து போங்கள்", roman: "nērā naṭantu pōṅkaḷ", english: "Go straight" },
          { id: "ph-dir-left", tamil: "இடது பக்கம் திரும்புங்கள்", roman: "iṭatu pakkam tirumpuṅkaḷ", english: "Turn left" },
          { id: "ph-dir-right", tamil: "வலது பக்கம் திரும்புங்கள்", roman: "valatu pakkam tirumpuṅkaḷ", english: "Turn right" },
          { id: "ph-dir-near", tamil: "அருகிலே இருக்கு", roman: "arukilē irukku", english: "It is nearby" },
          { id: "ph-dir-far", tamil: "கொஞ்சம் தூரம்", roman: "koñcam tūram", english: "A little far / some distance" },
        ],
      },
    ],
  },
  {
    id: "apology-phrases",
    titleTamil: "மன்னிப்பு & தாமதம்",
    titleEnglish: "Apology & lateness",
    description: "Sorry, excuse me, and explaining a delay.",
    groups: [
      {
        heading: "Apologizing",
        items: [
          { id: "ph-ap-sorry", tamil: "மன்னிக்கவும்", roman: "maṉṉikkavum", english: "Sorry / Excuse me" },
          { id: "ph-ap-late", tamil: "தாமதமாயிட்டது", roman: "tāmatamāyiṭṭatu", english: "I got delayed" },
          { id: "ph-ap-traffic", tamil: "டிராஃபிக் ரொம்ப இருந்தது", roman: "ṭirāfik romba iruntatu", english: "There was a lot of traffic" },
          { id: "ph-ap-ok", tamil: "பரவாயில்லை", roman: "paravāyillai", english: "No problem / It's fine" },
          { id: "ph-ap-wait", tamil: "சிறிது நேரம் காத்திருங்கள்", roman: "ciṟitu nēram kāttiruṅkaḷ", english: "Please wait a little while" },
        ],
      },
    ],
  },
];

export function getPhraseDeck(id: string): VocabDeck | undefined {
  return PHRASE_DECKS.find((d) => d.id === id);
}

export function phraseDeckItemIds(deck: VocabDeck): string[] {
  return deckItemIds(deck);
}

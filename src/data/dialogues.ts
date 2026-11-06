export type DialogueLine = {
  id: string;
  speaker: string;
  tamil: string;
  roman: string;
  english: string;
};

export type Dialogue = {
  id: string;
  titleTamil: string;
  titleEnglish: string;
  description: string;
  lines: DialogueLine[];
};

export const DIALOGUES: Dialogue[] = [
  {
    id: "meeting",
    titleTamil: "சந்திப்பு",
    titleEnglish: "Meeting people",
    description: "Greeting someone and asking how they are.",
    lines: [
      { id: "dlg-m1", speaker: "A", tamil: "வணக்கம்!", roman: "vaṇakkam!", english: "Hello!" },
      { id: "dlg-m2", speaker: "B", tamil: "வணக்கம்! எப்படி இருக்கிறீர்கள்?", roman: "vaṇakkam! eppaṭi irukkiṟīrkaḷ?", english: "Hello! How are you?" },
      { id: "dlg-m3", speaker: "A", tamil: "நன்றாக இருக்கிறேன். நீங்கள்?", roman: "naṉṟāka irukkiṟēṉ. nīṅkaḷ?", english: "I am fine. And you?" },
      { id: "dlg-m4", speaker: "B", tamil: "நானும் நன்றாக இருக்கிறேன்.", roman: "nāṉum naṉṟāka irukkiṟēṉ.", english: "I am fine too." },
      { id: "dlg-m5", speaker: "A", tamil: "உங்கள் பெயர் என்ன?", roman: "uṅkaḷ peyar eṉṉa?", english: "What is your name?" },
      { id: "dlg-m6", speaker: "B", tamil: "என் பெயர் மீனா. உங்களை சந்தித்ததில் மகிழ்ச்சி.", roman: "eṉ peyar Mīnā. uṅkaḷai cantittatil makiḻcci.", english: "My name is Meena. Nice to meet you." },
    ],
  },
  {
    id: "time",
    titleTamil: "நேரம்",
    titleEnglish: "Asking the time",
    description: "What time is it and making an appointment.",
    lines: [
      { id: "dlg-t1", speaker: "A", tamil: "இப்போது என்ன மணி?", roman: "ippōtu eṉṉa maṇi?", english: "What time is it now?" },
      { id: "dlg-t2", speaker: "B", tamil: "இப்போது எட்டு மணி.", roman: "ippōtu eṭṭu maṇi.", english: "It is eight o'clock now." },
      { id: "dlg-t3", speaker: "A", tamil: "நாளை காலை எட்டு மணிக்கு வருங்கள்.", roman: "nāḷai kālai eṭṭu maṇikku varuṅkaḷ.", english: "Come tomorrow at eight in the morning." },
      { id: "dlg-t4", speaker: "B", tamil: "சரி, வருகிறேன்.", roman: "cari, varukiṟēṉ.", english: "Okay, I will come." },
    ],
  },
  {
    id: "fruit-shop",
    titleTamil: "பழக் கடை",
    titleEnglish: "At the fruit shop",
    description: "Buying fruit at a market stall.",
    lines: [
      { id: "dlg-f1", speaker: "Customer", tamil: "இது என்ன பழம்?", roman: "itu eṉṉa paḻam?", english: "What fruit is this?" },
      { id: "dlg-f2", speaker: "Seller", tamil: "இது மாம்பழம். ரொம்ப சுவையாக இருக்கும்.", roman: "itu māmpaḻam. romba suvaiyāka irukkum.", english: "This is mango. It will be very tasty." },
      { id: "dlg-f3", speaker: "Customer", tamil: "ஒரு கிலோ கொடுங்கள்.", roman: "oru kilo koṭuṅkaḷ.", english: "Give one kilo, please." },
      { id: "dlg-f4", speaker: "Seller", tamil: "எத்தனை ரூபா?", roman: "ettanai rūbā?", english: "How many rupees?" },
      { id: "dlg-f5", speaker: "Customer", tamil: "நூறு ரூபா.", roman: "nūṟu rūbā.", english: "One hundred rupees." },
    ],
  },
  {
    id: "railway",
    titleTamil: "ரயில் நிலையம்",
    titleEnglish: "At the railway station",
    description: "Finding a train and a ticket.",
    lines: [
      { id: "dlg-r1", speaker: "Traveler", tamil: "சென்னைக்கு ரயில் எப்போது?", roman: "Ceṉṉaikku rayil eppōtu?", english: "When is the train to Chennai?" },
      { id: "dlg-r2", speaker: "Clerk", tamil: "மணி பத்துக்கு ரயில்.", roman: "maṇi pattukku rayil.", english: "The train is at ten o'clock." },
      { id: "dlg-r3", speaker: "Traveler", tamil: "ஒரு டிக்கெட் வேண்டும்.", roman: "oru ṭikkeṭ vēṇṭum.", english: "I need one ticket." },
      { id: "dlg-r4", speaker: "Traveler", tamil: "எங்கே உட்கார வேண்டும்?", roman: "eṅkē uṭkāra vēṇṭum?", english: "Where should I sit?" },
      { id: "dlg-r5", speaker: "Clerk", tamil: "இந்த ரேகையில்.", roman: "inta rēkaiyil.", english: "In this row." },
    ],
  },
  {
    id: "dining",
    titleTamil: "சாப்பாட்டு மேசை",
    titleEnglish: "At the dining table",
    description: "Mealtime talk at home.",
    lines: [
      { id: "dlg-d1", speaker: "Host", tamil: "வாங்க, சாப்பிடுங்கள்.", roman: "vāṅka, cāppiṭuṅkaḷ.", english: "Please come, eat." },
      { id: "dlg-d2", speaker: "Guest", tamil: "சாப்பாடு ரொம்ப நல்லா இருக்கு.", roman: "cāppāṭu romba nallā irukku.", english: "The food is very good." },
      { id: "dlg-d3", speaker: "Host", tamil: "இன்னும் வேணுமா?", roman: "iṉṉum vēṇumā?", english: "Do you want some more?" },
      { id: "dlg-d4", speaker: "Guest", tamil: "போதும், நன்றி.", roman: "pōtum, naṉṟi.", english: "Enough, thank you." },
    ],
  },
  {
    id: "hospital",
    titleTamil: "மருத்துவமனை",
    titleEnglish: "At the hospital",
    description: "Simple doctor–patient exchange.",
    lines: [
      { id: "dlg-h1", speaker: "Doctor", tamil: "என்ன பிரச்சனை?", roman: "eṉṉa piraccai?", english: "What is the problem?" },
      { id: "dlg-h2", speaker: "Patient", tamil: "காய்ச்சல் இருக்கு.", roman: "kāyccal irukku.", english: "I have fever." },
      { id: "dlg-h3", speaker: "Doctor", tamil: "இங்கே உட்காருங்கள்.", roman: "iṅkē uṭkāruṅkaḷ.", english: "Sit here, please." },
      { id: "dlg-h4", speaker: "Doctor", tamil: "மருந்து சரியாக சாப்பிடுங்கள்.", roman: "maruntu cariyāka cāppiṭuṅkaḷ.", english: "Take the medicine properly." },
    ],
  },
  {
    id: "phone",
    titleTamil: "தொலைபேசி",
    titleEnglish: "Phone call",
    description: "Answering the phone and asking to speak to someone.",
    lines: [
      { id: "dlg-p1", speaker: "Receiver", tamil: "ஹலோ?", roman: "halō?", english: "Hello?" },
      { id: "dlg-p2", speaker: "Caller", tamil: "ஹலோ, நான் ரவி. குமார் இருக்காரா?", roman: "halō, nāṉ Ravi. Kumār irukkārā?", english: "Hello, this is Ravi. Is Kumar there?" },
      { id: "dlg-p3", speaker: "Receiver", tamil: "ஒரு நிமிஷம் பொறுங்கள்.", roman: "oru nimiṣam poṟuṅkaḷ.", english: "Please hold for a moment." },
      { id: "dlg-p4", speaker: "Receiver", tamil: "குமார், தொலைபேசி.", roman: "Kumār, tolaipecci.", english: "Kumar, phone for you." },
      { id: "dlg-p5", speaker: "Kumar", tamil: "ஹலோ, நான் குமார். சொல்லுங்கள்.", roman: "halō, nāṉ Kumār. solluṅkaḷ.", english: "Hello, Kumar speaking. Go ahead." },
    ],
  },
  {
    id: "late-apology",
    titleTamil: "தாமதம்",
    titleEnglish: "Sorry for being late",
    description: "Apologizing when you arrive late to a meeting.",
    lines: [
      { id: "dlg-l1", speaker: "Guest", tamil: "மன்னிக்கவும், தாமதமாயிட்டது.", roman: "maṉṉikkavum, tāmatamāyiṭṭatu.", english: "Sorry, I got delayed." },
      { id: "dlg-l2", speaker: "Host", tamil: "பரவாயில்லை. உட்காருங்கள்.", roman: "paravāyillai. uṭkāruṅkaḷ.", english: "No problem. Please sit." },
      { id: "dlg-l3", speaker: "Guest", tamil: "டிராஃபிக் ரொம்ப இருந்தது.", roman: "ṭirāfik romba iruntatu.", english: "There was a lot of traffic." },
      { id: "dlg-l4", speaker: "Host", tamil: "சரி, சாப்பிடலாமா?", roman: "cari, cāppiṭalāmā?", english: "Okay, shall we eat?" },
    ],
  },
  {
    id: "directions",
    titleTamil: "வழி காட்டுதல்",
    titleEnglish: "Asking directions",
    description: "Finding a bus stop and which way to go.",
    lines: [
      { id: "dlg-dir1", speaker: "Traveler", tamil: "மன்னிக்கவும், ரயில் நிலையம் எங்கே?", roman: "maṉṉikkavum, rayil nilaiyam eṅkē?", english: "Excuse me, where is the railway station?" },
      { id: "dlg-dir2", speaker: "Local", tamil: "நேரா நடந்து போங்கள். இடது பக்கம் திரும்புங்கள்.", roman: "nērā naṭantu pōṅkaḷ. iṭatu pakkam tirumpuṅkaḷ.", english: "Walk straight. Turn left." },
      { id: "dlg-dir3", speaker: "Traveler", tamil: "அங்கே பஸ் நிறுத்தம் இருக்கா?", roman: "aṅkē pas niṟuttam irukkā?", english: "Is there a bus stop there?" },
      { id: "dlg-dir4", speaker: "Local", tamil: "ஆமா, கொஞ்சம் தூரம் நடக்கணும்.", roman: "āmā, koñcam tūram naṭakkaṇum.", english: "Yes, you have to walk a little distance." },
      { id: "dlg-dir5", speaker: "Traveler", tamil: "நன்றி.", roman: "naṉṟi.", english: "Thank you." },
    ],
  },
  {
    id: "wedding-visit",
    titleTamil: "கல்யாணம்",
    titleEnglish: "At a wedding",
    description: "Greeting hosts and wishing the couple at a wedding.",
    lines: [
      { id: "dlg-w1", speaker: "Guest", tamil: "வணக்கம். கல்யாணம் நல்லா நடக்குது.", roman: "vaṇakkam. kalyāṇam nallā naṭakkutu.", english: "Hello. The wedding is going well." },
      { id: "dlg-w2", speaker: "Host", tamil: "வாங்க, வாங்க! சாப்பிடுங்கள்.", roman: "vāṅka, vāṅka! cāppiṭuṅkaḷ.", english: "Welcome! Please eat." },
      { id: "dlg-w3", speaker: "Guest", tamil: "மணமக்களுக்கு வாழ்த்துகள்.", roman: "maṇamakkaḷukku vāḻttukaḷ.", english: "Congratulations to the couple." },
      { id: "dlg-w4", speaker: "Host", tamil: "நல்லா வந்தீங்க. இன்னும் கொஞ்சம் இருங்கள்.", roman: "nallā vantīṅka. iṉṉum koñcam iruṅkaḷ.", english: "Good that you came. Stay a little longer." },
    ],
  },
  {
    id: "mahabalipuram",
    titleTamil: "மகாபலிபுரம் பயணம்",
    titleEnglish: "Trip to Mahabalipuram",
    description: "Planning a day trip to the shore temples.",
    lines: [
      { id: "dlg-mb1", speaker: "A", tamil: "நாளை மகாபலிபுரம் போவமா?", roman: "nāḷai Mahābalipuram pōvamā?", english: "Shall we go to Mahabalipuram tomorrow?" },
      { id: "dlg-mb2", speaker: "B", tamil: "நல்ல idea. காலையிலே போலாம்.", roman: "nalla idea. kālaiyilē pōlām.", english: "Good idea. We can go in the morning." },
      { id: "dlg-mb3", speaker: "A", tamil: "கடற்கரையிலும் நடக்கலாம்.", roman: "kaṭarkaṟaiyilum naṭakkalām.", english: "We can walk on the beach too." },
      { id: "dlg-mb4", speaker: "B", tamil: "சரி, பஸ்ல போகலாம்.", roman: "cari, pasla pōkalām.", english: "Okay, let's go by bus." },
      { id: "dlg-mb5", speaker: "A", tamil: "எட்டு மணிக்கு கிளம்பலாம்.", roman: "eṭṭu maṇikku kiḷampalām.", english: "Let's leave at eight o'clock." },
    ],
  },
];

export function getDialogue(id: string): Dialogue | undefined {
  return DIALOGUES.find((d) => d.id === id);
}

export function dialogueLineIds(dialogue: Dialogue): string[] {
  return dialogue.lines.map((l) => l.id);
}

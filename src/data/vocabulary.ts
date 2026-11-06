export type VocabItem = {
  id: string;
  tamil: string;
  roman: string;
  english: string;
};

export type VocabGroup = {
  heading: string;
  items: VocabItem[];
};

export type VocabDeck = {
  id: string;
  titleTamil: string;
  titleEnglish: string;
  description: string;
  groups: VocabGroup[];
};

const ONES: { tamil: string; roman: string; english: string }[] = [
  { tamil: "ஒன்று", roman: "oṉṟu", english: "one" },
  { tamil: "இரண்டு", roman: "iraṇṭu", english: "two" },
  { tamil: "மூன்று", roman: "mūṉṟu", english: "three" },
  { tamil: "நான்கு", roman: "nāṉku", english: "four" },
  { tamil: "ஐந்து", roman: "aintu", english: "five" },
  { tamil: "ஆறு", roman: "āṟu", english: "six" },
  { tamil: "ஏழு", roman: "ēḻu", english: "seven" },
  { tamil: "எட்டு", roman: "eṭṭu", english: "eight" },
  { tamil: "ஒன்பது", roman: "oṉpatu", english: "nine" },
];

const TEENS: { n: number; tamil: string; roman: string }[] = [
  { n: 11, tamil: "பதினொன்று", roman: "patiṉoṉṟu" },
  { n: 12, tamil: "பன்னிரண்டு", roman: "paṉṉiraṇṭu" },
  { n: 13, tamil: "பதின்மூன்று", roman: "patiṉmūṉṟu" },
  { n: 14, tamil: "பதினான்கு", roman: "patiṉāṉku" },
  { n: 15, tamil: "பதினைந்து", roman: "patiṉaintu" },
  { n: 16, tamil: "பதினாறு", roman: "patiṉāṟu" },
  { n: 17, tamil: "பதினேழு", roman: "patiṉēḻu" },
  { n: 18, tamil: "பதினெட்டு", roman: "patiṉeṭṭu" },
  { n: 19, tamil: "பத்தொன்பது", roman: "pattoṉpatu" },
];

const TENS: { n: number; tamil: string; roman: string; stem: string; stemRoman: string }[] = [
  { n: 20, tamil: "இருபது", roman: "irupatu", stem: "இருபத்து", stemRoman: "irupattu" },
  { n: 30, tamil: "முப்பது", roman: "muppatu", stem: "முப்பத்து", stemRoman: "muppattu" },
  { n: 40, tamil: "நாற்பது", roman: "nāṟpatu", stem: "நாற்பத்து", stemRoman: "nāṟpattu" },
  { n: 50, tamil: "ஐம்பது", roman: "aimpatu", stem: "ஐம்பத்து", stemRoman: "aimpattu" },
  { n: 60, tamil: "அறுபது", roman: "aṟupatu", stem: "அறுபத்து", stemRoman: "aṟupattu" },
  { n: 70, tamil: "எழுபது", roman: "eḻupatu", stem: "எழுபத்து", stemRoman: "eḻupattu" },
  { n: 80, tamil: "எண்பது", roman: "eṇpatu", stem: "எண்பத்து", stemRoman: "eṇpattu" },
  { n: 90, tamil: "தொண்ணூறு", roman: "toṇṇūṟu", stem: "தொண்ணூற்று", stemRoman: "toṇṇūṟṟu" },
];

function numberItem(n: number, tamil: string, roman: string): VocabItem {
  return { id: `num-${n}`, tamil, roman, english: String(n) };
}

function buildNumbers(): VocabItem[] {
  const items: VocabItem[] = ONES.map((o, i) => numberItem(i + 1, o.tamil, o.roman));
  items.push(numberItem(10, "பத்து", "pattu"));
  for (const t of TEENS) items.push(numberItem(t.n, t.tamil, t.roman));
  for (const ten of TENS) {
    items.push(numberItem(ten.n, ten.tamil, ten.roman));
    ONES.forEach((one, i) => {
      const n = ten.n + i + 1;
      items.push(
        numberItem(n, `${ten.stem} ${one.tamil}`, `${ten.stemRoman} ${one.roman}`),
      );
    });
  }
  items.push(numberItem(100, "நூறு", "nūṟu"));
  return items;
}

const NUMBERS = buildNumbers();

export const VOCAB_DECKS: VocabDeck[] = [
  {
    id: "numbers",
    titleTamil: "எண்கள்",
    titleEnglish: "Numbers",
    description: "Count from 1 to 100, large numbers, and common fractions.",
    groups: [
      { heading: "1 – 100", items: NUMBERS.filter((i) => {
        const n = parseInt(i.id.replace("num-", ""), 10);
        return !Number.isNaN(n) && n <= 100;
      }) },
      {
        heading: "Large numbers",
        items: [
          { id: "num-1000", tamil: "ஆயிரம்", roman: "āyiram", english: "1,000" },
          { id: "num-100000", tamil: "லட்சம்", roman: "laṭcam", english: "100,000 (lakh)" },
          { id: "num-10000000", tamil: "கோடி", roman: "kōṭi", english: "10,000,000 (crore)" },
        ],
      },
      {
        heading: "21 – 99 pattern",
        items: [
          {
            id: "num-pattern",
            tamil: "இருபத்து + ஒன்று → இருபத்தொன்று",
            roman: "irupattu + oṉṟu → irupattoṉṟu",
            english: "Tens stem + ones word (e.g. 21, 35, 99)",
          },
          { id: "num-21-ex", tamil: "இருபத்தொன்று", roman: "irupattoṉṟu", english: "twenty-one" },
          { id: "num-35-ex", tamil: "முப்பத்தைந்து", roman: "muppataintu", english: "thirty-five" },
        ],
      },
      {
        heading: "Fractions",
        items: [
          { id: "frac-quarter", tamil: "கால்", roman: "kāl", english: "quarter (¼)" },
          { id: "frac-half", tamil: "அரை", roman: "arai", english: "half (½)" },
          { id: "frac-three-quarter", tamil: "முக்கால்", roman: "mukkāl", english: "three quarters (¾)" },
          { id: "frac-one-half", tamil: "ஒன்றரை", roman: "oṉṟarai", english: "one and a half" },
        ],
      },
    ],
  },
  {
    id: "colors",
    titleTamil: "நிறங்கள்",
    titleEnglish: "Colors",
    description: "Everyday color words.",
    groups: [
      {
        heading: "Colors",
        items: [
          { id: "col-red", tamil: "சிவப்பு", roman: "civappu", english: "red" },
          { id: "col-blue", tamil: "நீலம்", roman: "nīlam", english: "blue" },
          { id: "col-green", tamil: "பச்சை", roman: "paccai", english: "green" },
          { id: "col-yellow", tamil: "மஞ்சள்", roman: "mañcaḷ", english: "yellow" },
          { id: "col-white", tamil: "வெள்ளை", roman: "veḷḷai", english: "white" },
          { id: "col-black", tamil: "கருப்பு", roman: "karuppu", english: "black" },
          { id: "col-orange", tamil: "ஆரஞ்சு", roman: "ārañcu", english: "orange" },
          { id: "col-purple", tamil: "ஊதா", roman: "ūtā", english: "purple" },
          { id: "col-pink", tamil: "இளஞ்சிவப்பு", roman: "iḷañcivappu", english: "pink" },
          { id: "col-brown", tamil: "பழுப்பு", roman: "paḻuppu", english: "brown" },
          { id: "col-grey", tamil: "சாம்பல்", roman: "cāmpal", english: "grey" },
          { id: "col-gold", tamil: "தங்க நிறம்", roman: "taṅka niṟam", english: "gold" },
        ],
      },
    ],
  },
  {
    id: "time",
    titleTamil: "நேரம்",
    titleEnglish: "Time",
    description: "Parts of the day, clock words, and a few clock phrases.",
    groups: [
      {
        heading: "Parts of the day",
        items: [
          { id: "tm-morning", tamil: "காலை", roman: "kālai", english: "morning" },
          { id: "tm-noon", tamil: "மதியம்", roman: "matiyam", english: "afternoon / noon" },
          { id: "tm-evening", tamil: "மாலை", roman: "mālai", english: "evening" },
          { id: "tm-night", tamil: "இரவு", roman: "iravu", english: "night" },
          { id: "tm-today", tamil: "இன்று", roman: "iṉṟu", english: "today" },
          { id: "tm-yesterday", tamil: "நேற்று", roman: "nēṟṟu", english: "yesterday" },
          { id: "tm-tomorrow", tamil: "நாளை", roman: "nāḷai", english: "tomorrow" },
          { id: "tm-now", tamil: "இப்போது", roman: "ippōtu", english: "now" },
          { id: "tm-hour", tamil: "மணி", roman: "maṇi", english: "hour / o'clock" },
          { id: "tm-minute", tamil: "நிமிடம்", roman: "nimiṭam", english: "minute" },
          { id: "tm-week", tamil: "வாரம்", roman: "vāram", english: "week" },
          { id: "tm-month", tamil: "மாதம்", roman: "mātam", english: "month" },
          { id: "tm-year", tamil: "வருடம்", roman: "varuṭam", english: "year" },
        ],
      },
      {
        heading: "Clock phrases",
        items: [
          { id: "tm-6am", tamil: "காலை ஆறு மணி", roman: "kālai āṟu maṇi", english: "6 in the morning" },
          { id: "tm-12", tamil: "பன்னிரண்டு மணி", roman: "paṉṉiraṇṭu maṇi", english: "12 o'clock" },
          { id: "tm-3pm", tamil: "மதியம் மூன்று மணி", roman: "matiyam mūṉṟu maṇi", english: "3 in the afternoon" },
          { id: "tm-half", tamil: "ஆறரை மணி", roman: "āṟarai maṇi", english: "half past six" },
          { id: "tm-quarter", tamil: "காலணி", roman: "kālaṇi", english: "quarter past (the hour)" },
        ],
      },
    ],
  },
  {
    id: "family",
    titleTamil: "குடும்பம்",
    titleEnglish: "Family",
    description: "Family words used in everyday speech.",
    groups: [
      {
        heading: "Family",
        items: [
          { id: "fam-father", tamil: "அப்பா", roman: "appā", english: "father" },
          { id: "fam-mother", tamil: "அம்மா", roman: "ammā", english: "mother" },
          { id: "fam-ebro", tamil: "அண்ணன்", roman: "aṇṇaṉ", english: "elder brother" },
          { id: "fam-ybro", tamil: "தம்பி", roman: "tampi", english: "younger brother" },
          { id: "fam-esis", tamil: "அக்கா", roman: "akkā", english: "elder sister" },
          { id: "fam-ysis", tamil: "தங்கை", roman: "taṅkai", english: "younger sister" },
          { id: "fam-gfa", tamil: "தாத்தா", roman: "tāttā", english: "grandfather" },
          { id: "fam-gmo", tamil: "பாட்டி", roman: "pāṭṭi", english: "grandmother" },
          { id: "fam-son", tamil: "மகன்", roman: "makaṉ", english: "son" },
          { id: "fam-daughter", tamil: "மகள்", roman: "makaḷ", english: "daughter" },
          { id: "fam-husband", tamil: "கணவன்", roman: "kaṇavaṉ", english: "husband" },
          { id: "fam-wife", tamil: "மனைவி", roman: "maṉaivi", english: "wife" },
          { id: "fam-uncle", tamil: "மாமா", roman: "māmā", english: "uncle" },
          { id: "fam-aunt", tamil: "அத்தை", roman: "attai", english: "aunt" },
          { id: "fam-child", tamil: "குழந்தை", roman: "kuḻantai", english: "child" },
        ],
      },
    ],
  },
  {
    id: "calendar",
    titleTamil: "நாட்கள் மற்றும் மாதங்கள்",
    titleEnglish: "Days & months",
    description: "Weekdays, Tamil months, and the months used on modern calendars.",
    groups: [
      {
        heading: "Days of the week",
        items: [
          { id: "day-sun", tamil: "ஞாயிறு", roman: "ñāyiṟu", english: "Sunday" },
          { id: "day-mon", tamil: "திங்கள்", roman: "tiṅkaḷ", english: "Monday" },
          { id: "day-tue", tamil: "செவ்வாய்", roman: "cevvāy", english: "Tuesday" },
          { id: "day-wed", tamil: "புதன்", roman: "putaṉ", english: "Wednesday" },
          { id: "day-thu", tamil: "வியாழன்", roman: "viyāḻaṉ", english: "Thursday" },
          { id: "day-fri", tamil: "வெள்ளி", roman: "veḷḷi", english: "Friday" },
          { id: "day-sat", tamil: "சனி", roman: "caṉi", english: "Saturday" },
        ],
      },
      {
        heading: "Tamil months",
        items: [
          { id: "tmn-1", tamil: "சித்திரை", roman: "cittirai", english: "Chithirai (Apr–May)" },
          { id: "tmn-2", tamil: "வைகாசி", roman: "vaikāci", english: "Vaikasi (May–Jun)" },
          { id: "tmn-3", tamil: "ஆனி", roman: "āṉi", english: "Aani (Jun–Jul)" },
          { id: "tmn-4", tamil: "ஆடி", roman: "āṭi", english: "Aadi (Jul–Aug)" },
          { id: "tmn-5", tamil: "ஆவணி", roman: "āvaṇi", english: "Aavani (Aug–Sep)" },
          { id: "tmn-6", tamil: "புரட்டாசி", roman: "puraṭṭāci", english: "Purattasi (Sep–Oct)" },
          { id: "tmn-7", tamil: "ஐப்பசி", roman: "aippaci", english: "Aippasi (Oct–Nov)" },
          { id: "tmn-8", tamil: "கார்த்திகை", roman: "kārttikai", english: "Karthikai (Nov–Dec)" },
          { id: "tmn-9", tamil: "மார்கழி", roman: "mārkaḻi", english: "Margazhi (Dec–Jan)" },
          { id: "tmn-10", tamil: "தை", roman: "tai", english: "Thai (Jan–Feb)" },
          { id: "tmn-11", tamil: "மாசி", roman: "māci", english: "Masi (Feb–Mar)" },
          { id: "tmn-12", tamil: "பங்குனி", roman: "paṅkuṉi", english: "Panguni (Mar–Apr)" },
        ],
      },
      {
        heading: "Calendar months",
        items: [
          { id: "mn-1", tamil: "ஜனவரி", roman: "jaṉavari", english: "January" },
          { id: "mn-2", tamil: "பிப்ரவரி", roman: "pipravari", english: "February" },
          { id: "mn-3", tamil: "மார்ச்", roman: "mārc", english: "March" },
          { id: "mn-4", tamil: "ஏப்ரல்", roman: "ēpral", english: "April" },
          { id: "mn-5", tamil: "மே", roman: "mē", english: "May" },
          { id: "mn-6", tamil: "ஜூன்", roman: "jūṉ", english: "June" },
          { id: "mn-7", tamil: "ஜூலை", roman: "jūlai", english: "July" },
          { id: "mn-8", tamil: "ஆகஸ்ட்", roman: "ākasṭ", english: "August" },
          { id: "mn-9", tamil: "செப்டம்பர்", roman: "cepṭambar", english: "September" },
          { id: "mn-10", tamil: "அக்டோபர்", roman: "akṭōpar", english: "October" },
          { id: "mn-11", tamil: "நவம்பர்", roman: "navambar", english: "November" },
          { id: "mn-12", tamil: "டிசம்பர்", roman: "ṭicambar", english: "December" },
        ],
      },
    ],
  },
  {
    id: "animals",
    titleTamil: "விலங்குகள்",
    titleEnglish: "Animals",
    description: "Common animal names.",
    groups: [
      {
        heading: "Animals",
        items: [
          { id: "an-dog", tamil: "நாய்", roman: "nāy", english: "dog" },
          { id: "an-cat", tamil: "பூனை", roman: "pūnai", english: "cat" },
          { id: "an-elephant", tamil: "யானை", roman: "yānai", english: "elephant" },
          { id: "an-lion", tamil: "சிங்கம்", roman: "ciṅkam", english: "lion" },
          { id: "an-tiger", tamil: "புலி", roman: "puli", english: "tiger" },
          { id: "an-bear", tamil: "கரடி", roman: "karaṭi", english: "bear" },
          { id: "an-horse", tamil: "குதிரை", roman: "kutirai", english: "horse" },
          { id: "an-camel", tamil: "ஒட்டகம்", roman: "oṭṭakam", english: "camel" },
          { id: "an-donkey", tamil: "கழுதை", roman: "kaḻutai", english: "donkey" },
          { id: "an-giraffe", tamil: "ஒட்டகச்சிவிங்கி", roman: "oṭṭakacciviṅki", english: "giraffe" },
          { id: "an-wolf", tamil: "ஓநாய்", roman: "ōnāy", english: "wolf" },
          { id: "an-zebra", tamil: "வரிக்குதிரை", roman: "varikkutirai", english: "zebra" },
        ],
      },
    ],
  },
  {
    id: "places",
    titleTamil: "இடங்கள்",
    titleEnglish: "Places",
    description: "Everyday places around town.",
    groups: [
      {
        heading: "Places",
        items: [
          { id: "pl-airport", tamil: "விமான நிலையம்", roman: "vimāṉa nilaiyam", english: "airport" },
          { id: "pl-bank", tamil: "வங்கி", roman: "vaṅki", english: "bank" },
          { id: "pl-market", tamil: "சந்தை", roman: "cantai", english: "market" },
          { id: "pl-temple", tamil: "கோவில்", roman: "kōvil", english: "temple" },
          { id: "pl-rail", tamil: "ரயில் நிலையம்", roman: "rayil nilaiyam", english: "railway station" },
          { id: "pl-school", tamil: "பள்ளி", roman: "paḷḷi", english: "school" },
          { id: "pl-hospital", tamil: "மருத்துவமனை", roman: "maruttuvamaṉai", english: "hospital" },
          { id: "pl-park", tamil: "பூங்கா", roman: "pūṅkā", english: "park" },
          { id: "pl-beach", tamil: "கடற்கரை", roman: "kaṭarkaṟai", english: "beach" },
        ],
      },
      {
        heading: "Tamil Nadu & travel",
        items: [
          { id: "pl-chennai", tamil: "சென்னை", roman: "Ceṉṉai", english: "Chennai" },
          { id: "pl-mahabalipuram", tamil: "மகாபலிபுரம்", roman: "Mahābalipuram", english: "Mahabalipuram (shore temples)" },
          { id: "pl-madurai", tamil: "மதுரை", roman: "Maturai", english: "Madurai" },
          { id: "pl-thanjavur", tamil: "தஞ்சாவூர்", roman: "Tañcāvūr", english: "Thanjavur" },
          { id: "pl-pondicherry", tamil: "புதுச்சேரி", roman: "Putuccēri", english: "Puducherry (Pondicherry)" },
          { id: "pl-ooty", tamil: "ஊட்டி", roman: "Ūṭṭi", english: "Ooty (hill station)" },
          { id: "pl-bus", tamil: "பஸ்", roman: "pas", english: "bus" },
          { id: "pl-auto", tamil: "ஆட்டோ", roman: "āṭṭō", english: "auto-rickshaw" },
          { id: "pl-bus-stop", tamil: "பஸ் நிறுத்தம்", roman: "pas niṟuttam", english: "bus stop" },
          { id: "pl-jaffna", tamil: "யாழ்ப்பாணம்", roman: "Yāḻppāṇam", english: "Jaffna" },
        ],
      },
    ],
  },
  {
    id: "home",
    titleTamil: "வீடு",
    titleEnglish: "Home",
    description: "Rooms and parts of a house.",
    groups: [
      {
        heading: "Rooms & areas",
        items: [
          { id: "hm-kitchen", tamil: "சமையலறை", roman: "samayalaṟai", english: "kitchen" },
          { id: "hm-bedroom", tamil: "படுக்கையறை", roman: "paṭukkaiyaṟai", english: "bedroom" },
          { id: "hm-bath", tamil: "குளியலறை", roman: "kuḷiyalaṟai", english: "bathroom" },
          { id: "hm-hall", tamil: "வரவேற்பறை", roman: "varavēṟpaṟai", english: "hall / living room" },
          { id: "hm-terrace", tamil: "தட்டு", roman: "taṭṭu", english: "terrace / roof deck" },
        ],
      },
      {
        heading: "House parts",
        items: [
          { id: "hm-door", tamil: "கதவு", roman: "katavu", english: "door" },
          { id: "hm-window", tamil: "ஜன்னல்", roman: "jaṉṉal", english: "window" },
          { id: "hm-floor", tamil: "தரை", roman: "tarai", english: "floor" },
          { id: "hm-roof", tamil: "மேற்கூரை", roman: "mēṟkūrai", english: "roof" },
          { id: "hm-wall", tamil: "சுவர்", roman: "cuvar", english: "wall" },
          { id: "hm-key", tamil: "சாவி", roman: "cāvi", english: "key" },
          { id: "hm-lock", tamil: "பூட்டு", roman: "pūṭṭu", english: "lock" },
        ],
      },
    ],
  },
  {
    id: "emotions",
    titleTamil: "உணர்ச்சிகள்",
    titleEnglish: "Emotions",
    description: "Feelings and moods.",
    groups: [
      {
        heading: "Emotions",
        items: [
          { id: "em-happy", tamil: "மகிழ்ச்சி", roman: "makiḻcci", english: "happiness / happy" },
          { id: "em-sad", tamil: "வருத்தம்", roman: "varuttam", english: "sadness" },
          { id: "em-angry", tamil: "கோபம்", roman: "kōpam", english: "anger" },
          { id: "em-fear", tamil: "பயம்", roman: "payam", english: "fear" },
          { id: "em-love", tamil: "அன்பு", roman: "aṉpu", english: "love" },
          { id: "em-proud", tamil: "பெருமை", roman: "perumai", english: "pride / proud" },
          { id: "em-worry", tamil: "கவலை", roman: "kavalai", english: "worry" },
          { id: "em-stress", tamil: "அழுத்தம்", roman: "aḻuttam", english: "stress" },
          { id: "em-excited", tamil: "உற்சாகம்", roman: "uṟcākam", english: "excitement" },
          { id: "em-lonely", tamil: "தனிமை", roman: "taṉimai", english: "loneliness" },
          { id: "em-jealous", tamil: "பொறாமை", roman: "poṟāmai", english: "jealousy" },
          { id: "em-curious", tamil: "ஆர்வம்", roman: "ārvam", english: "curiosity" },
        ],
      },
    ],
  },
  {
    id: "vegetables",
    titleTamil: "காய்கறிகள்",
    titleEnglish: "Vegetables",
    description: "Common vegetables at the market.",
    groups: [
      {
        heading: "Vegetables",
        items: [
          { id: "veg-tomato", tamil: "தக்காளி", roman: "takkāḷi", english: "tomato" },
          { id: "veg-potato", tamil: "உருளைக்கிழங்கு", roman: "uruḷaikkiḻaṅku", english: "potato" },
          { id: "veg-onion", tamil: "வெங்காயம்", roman: "veṅkāyam", english: "onion" },
          { id: "veg-brinjal", tamil: "கத்தரிக்காய்", roman: "kattarikkāy", english: "brinjal / eggplant" },
          { id: "veg-pumpkin", tamil: "பூசணிக்காய்", roman: "pūsaṇikkāy", english: "pumpkin" },
          { id: "veg-cucumber", tamil: "வெள்ளரிக்காய்", roman: "veḷḷarikkāy", english: "cucumber" },
          { id: "veg-cabbage", tamil: "முட்டைக்கோஸ்", roman: "muṭṭaikkōs", english: "cabbage" },
          { id: "veg-spinach", tamil: "கீரை", roman: "kīrai", english: "greens / spinach" },
          { id: "veg-carrot", tamil: "கேரட்", roman: "kēraṭ", english: "carrot" },
          { id: "veg-beans", tamil: "அவரை", roman: "avarai", english: "beans" },
        ],
      },
    ],
  },
  {
    id: "fruits",
    titleTamil: "பழங்கள்",
    titleEnglish: "Fruits",
    description: "Fruit names for shopping and eating.",
    groups: [
      {
        heading: "Fruits",
        items: [
          { id: "fr-mango", tamil: "மாம்பழம்", roman: "māmpaḻam", english: "mango" },
          { id: "fr-banana", tamil: "வாழைப்பழம்", roman: "vāḻaippaḻam", english: "banana" },
          { id: "fr-apple", tamil: "ஆப்பிள்", roman: "āppiḷ", english: "apple" },
          { id: "fr-orange", tamil: "ஆரஞ்சு", roman: "ārañcu", english: "orange" },
          { id: "fr-grapes", tamil: "திராட்சை", roman: "tirāṭcai", english: "grapes" },
          { id: "fr-papaya", tamil: "பப்பாளி", roman: "pappāḷi", english: "papaya" },
          { id: "fr-watermelon", tamil: "தர்பூசணி", roman: "tarpūsaṇi", english: "watermelon" },
          { id: "fr-pineapple", tamil: "அன்னாசி", roman: "aṉṉāci", english: "pineapple" },
          { id: "fr-guava", tamil: "கொய்யா", roman: "koyyā", english: "guava" },
          { id: "fr-dates", tamil: "பேரீச்சம்", roman: "pērīccam", english: "dates" },
        ],
      },
    ],
  },
  {
    id: "food",
    titleTamil: "சாப்பாடு",
    titleEnglish: "Food & dining",
    description: "Meals, rice, and eating at home.",
    groups: [
      {
        heading: "Meals",
        items: [
          { id: "fd-rice", tamil: "சாதம்", roman: "cātam", english: "cooked rice" },
          { id: "fd-meal", tamil: "சாப்பாடு", roman: "cāppāṭu", english: "food / meal" },
          { id: "fd-breakfast", tamil: "காலை உணவு", roman: "kālai uṇavu", english: "breakfast" },
          { id: "fd-lunch", tamil: "மதிய உணவு", roman: "matiya uṇavu", english: "lunch" },
          { id: "fd-dinner", tamil: "இரவு உணவு", roman: "iravu uṇavu", english: "dinner" },
          { id: "fd-water", tamil: "தண்ணீர்", roman: "taṇṇīr", english: "water" },
          { id: "fd-milk", tamil: "பால்", roman: "pāl", english: "milk" },
          { id: "fd-salt", tamil: "உப்பு", roman: "uppu", english: "salt" },
          { id: "fd-hungry", tamil: "பசி", roman: "paci", english: "hunger" },
          { id: "fd-tasty", tamil: "சுவை", roman: "suvai", english: "taste / tasty" },
        ],
      },
    ],
  },
  {
    id: "weather",
    titleTamil: "வானிலை",
    titleEnglish: "Weather",
    description: "Sun, rain, heat, and seasons.",
    groups: [
      {
        heading: "Weather",
        items: [
          { id: "wx-sun", tamil: "சூரியன்", roman: "cūriyaṉ", english: "sun" },
          { id: "wx-rain", tamil: "மழை", roman: "maḻai", english: "rain" },
          { id: "wx-hot", tamil: "வெயில்", roman: "veyil", english: "heat / hot sun" },
          { id: "wx-cold", tamil: "குளிர்", roman: "kuḷir", english: "cold" },
          { id: "wx-wind", tamil: "காற்று", roman: "kāṟṟu", english: "wind" },
          { id: "wx-cloud", tamil: "மேகம்", roman: "mēkam", english: "cloud" },
          { id: "wx-storm", tamil: "புயல்", roman: "puyal", english: "storm" },
          { id: "wx-summer", tamil: "கோடை", roman: "kōṭai", english: "summer" },
          { id: "wx-monsoon", tamil: "மழைக்காலம்", roman: "maḻaikkālam", english: "monsoon / rainy season" },
        ],
      },
    ],
  },
  {
    id: "clothes",
    titleTamil: "ஆடை",
    titleEnglish: "Clothes",
    description: "Clothing and tailoring words.",
    groups: [
      {
        heading: "Clothes",
        items: [
          { id: "cl-shirt", tamil: "சட்டை", roman: "caṭṭai", english: "shirt" },
          { id: "cl-saree", tamil: "புடவை", roman: "puṭavai", english: "saree" },
          { id: "cl-dhoti", tamil: "வேட்டி", roman: "vēṭṭi", english: "dhoti" },
          { id: "cl-pants", tamil: "கால்சட்டை", roman: "kālcaṭṭai", english: "trousers" },
          { id: "cl-cloth", tamil: "துணி", roman: "tuṇi", english: "cloth" },
          { id: "cl-size", tamil: "அளவு", roman: "aḷavu", english: "size / measure" },
          { id: "cl-stitch", tamil: "தையல்", roman: "taiyal", english: "stitching / sewing" },
          { id: "cl-wear", tamil: "அணிந்துகொள்", roman: "aṇintukoḷ", english: "wear (clothes)" },
        ],
      },
    ],
  },
  {
    id: "south-indian-food",
    titleTamil: "தென்னிந்திய உணவு",
    titleEnglish: "South Indian food",
    description: "Tiffin, snacks, and drinks you hear in cafés and homes.",
    groups: [
      {
        heading: "Breakfast & tiffin",
        items: [
          { id: "si-dosa", tamil: "தோசை", roman: "tōcai", english: "dosa" },
          { id: "si-idli", tamil: "இட்லி", roman: "iṭli", english: "idli" },
          { id: "si-vada", tamil: "வடை", roman: "vaṭai", english: "vada (fried snack)" },
          { id: "si-sambar", tamil: "சாம்பார்", roman: "cāmpār", english: "sambar (lentil stew)" },
          { id: "si-chutney", tamil: "சட்னி", roman: "caṭṇi", english: "chutney" },
          { id: "si-pongal", tamil: "பொங்கல்", roman: "poṅkal", english: "pongal (rice dish)" },
        ],
      },
      {
        heading: "Snacks & drinks",
        items: [
          { id: "si-murukku", tamil: "முறுக்கு", roman: "muṟukku", english: "murukku (crispy snack)" },
          { id: "si-filter-coffee", tamil: "ஃபில்டர் காபி", roman: "filter kāpi", english: "filter coffee" },
          { id: "si-tea", tamil: "டீ", roman: "ṭī", english: "tea" },
          { id: "si-cane-juice", tamil: "கரும்பு சாறு", roman: "karumpu cāṟu", english: "sugar-cane juice" },
          { id: "si-meals", tamil: "சாப்பாடு", roman: "cāppāṭu", english: "meals (full plate)" },
          { id: "si-curd-rice", tamil: "தயிர்ச் சாதம்", roman: "tayir cātam", english: "curd rice" },
        ],
      },
    ],
  },
  {
    id: "roles",
    titleTamil: "வேலை & பங்கு",
    titleEnglish: "Jobs & roles",
    description: "People you meet in daily life (spoken titles).",
    groups: [
      {
        heading: "Roles",
        items: [
          { id: "rl-doctor", tamil: "டாக்டர்", roman: "ṭākṭar", english: "doctor" },
          { id: "rl-teacher", tamil: "ஆசிரியர்", roman: "āciriyar", english: "teacher" },
          { id: "rl-gardener", tamil: "தோட்டக்காரர்", roman: "tōṭṭakkārar", english: "gardener" },
          { id: "rl-cook", tamil: "சமையல்காரர்", roman: "samayalkārar", english: "cook" },
          { id: "rl-servant", tamil: "வேலைக்காரர்", roman: "vēlaikkārar", english: "house help" },
          { id: "rl-tailor", tamil: "தையல்காரர்", roman: "taiyalkārar", english: "tailor" },
          { id: "rl-driver", tamil: "ஓட்டுநர்", roman: "ōṭṭunar", english: "driver" },
          { id: "rl-farmer", tamil: "விவசாயி", roman: "vivacāyi", english: "farmer" },
        ],
      },
    ],
  },
];

export function getVocabDeck(id: string): VocabDeck | undefined {
  return VOCAB_DECKS.find((d) => d.id === id);
}

export function deckItemIds(deck: VocabDeck): string[] {
  return deck.groups.flatMap((g) => g.items.map((i) => i.id));
}

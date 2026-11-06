/** Merge English glosses into pronunciation.json (run: node scripts/build-uyirmei-english.mjs). */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const jsonPath = path.join(__dirname, "../src/data/pronunciation.json");
const data = JSON.parse(fs.readFileSync(jsonPath, "utf8"));

const consonantEnglish = {
  "c-ka": "sea",
  "c-nga": "conch",
  "c-cha": "wheel",
  "c-nya": "turmeric",
  "c-ta": "cup (small)",
  "c-na-r": "soil",
  "c-tha": "Tamil (language)",
  "c-na": "fox",
  "c-pa": "fruit",
  "c-ma": "tree",
  "c-ya": "elephant",
  "c-ra": "train",
  "c-la": "laddu (sweet)",
  "c-va": "banana",
  "c-zha": "beauty",
  "c-la-r": "bangle",
  "c-rra": "infection",
  "c-nn": "palm tree",
};

for (const [id, en] of Object.entries(consonantEnglish)) {
  if (data.consonants[id]) data.consonants[id].exampleEnglish = en;
}

/** English gloss for each spoken example in uyirmeiRows (same 18×12 order). */
data.uyirmeiEnglishRows = [
  ["sea", "leg", "parrot", "below", "pond", "hut", "kendai fish", "question", "hand", "flag", "temple", "Gowri"],
  ["there", "over there", "here", "yonder", "you (plural)", "swing", "we / our", "that way", "fifty", "ongi", "ongi", "Avvai (poet)"],
  ["wheel", "road", "wing", "prosperity", "suram", "sun", "goodness", "join", "sai", "word", "grove", "comfort"],
  ["turmeric", "manji", "lightning", "fish", "munji", "munchi", "softness", "melam (drum)", "ink", "language", "buttermilk", "mouval"],
  ["cup", "lesson", "cub", "areca flower", "sari", "flower", "woman", "speech", "bag", "thing", "war", "pouvam"],
  ["soil", "maan", "min", "fish", "mun", "three", "men", "men", "ink", "mon", "mon", "moun"],
  ["Tamil", "lotus", "holy / wealth", "fire", "cloth", "distance", "south", "honey", "Thai (month)", "distance", "shoulder", "thau"],
  ["fox", "fourth day", "color", "water", "fine / subtle", "thread", "paddy", "time", "nail", "book", "look / aim", "nau"],
  ["fruit", "milk", "birth", "bee", "tiger", "flower", "woman", "speech", "bag", "thing", "go", "pau"],
  ["tree", "ma", "pepper", "fish", "rabbit", "mu", "me", "May", "ink", "mo", "mo", "mou"],
  ["elephant", "ya", "yir", "yii", "yu", "yuu", "ye", "yay", "yai", "yo", "yoo", "yau"],
  ["train", "ra", "ri", "ree", "ru", "roo", "re", "ray", "rai", "ro", "roo", "rau"],
  ["laddu", "la", "li", "lee", "lu", "luu", "le", "lay", "lai", "lo", "loo", "lau"],
  ["banana", "va", "finger", "house", "vu", "vuu", "ve", "vay", "vai", "vo", "voo", "vau"],
  ["beauty", "zhaa", "zhi", "zhee", "zhu", "zhuu", "zhe", "zhay", "zhai", "zho", "zhoo", "zhau"],
  ["bangle", "laa (retroflex)", "li", "lee", "lu", "luu", "le", "lay", "lai", "lo", "loo", "lau"],
  ["infection", "rraa", "rri", "rree", "rru", "rroo", "rre", "rray", "rrai", "rro", "rroo", "rrau"],
  ["palm tree", "naa", "ni", "nee", "nu", "nuu", "ne", "nay", "nai", "no", "noo", "nau"],
];

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2) + "\n", "utf8");
console.log("Updated pronunciation.json with English glosses");

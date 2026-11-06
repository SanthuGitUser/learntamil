import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LetterCard from "../components/LetterCard";
import LetterWriterPanel from "../components/LetterWriterPanel";
import {
  CONSONANTS,
  CURRICULUM,
  UYIRMEI,
  VOWELS,
  type Letter,
} from "../data/tamilScript";
import { loadProgress, markStudied } from "../utils/progress";
import styles from "./Lesson.module.css";

type Section = "vowels" | "consonants" | "uyirmei";

function getLetters(section: Section): Letter[] {
  if (section === "vowels") return VOWELS;
  if (section === "consonants") return CONSONANTS;
  return UYIRMEI;
}

export default function Lesson() {
  const { section: raw } = useParams();
  const section = (raw ?? "vowels") as Section;
  const meta = CURRICULUM.find((c) => c.slug === section) ?? CURRICULUM[0];
  const letters = getLetters(section);
  const [progress, setProgress] = useState(loadProgress);
  const [consonantFilter, setConsonantFilter] = useState(CONSONANTS[0].id);
  const [selected, setSelected] = useState<Letter | null>(null);

  const filteredUyirmei = useMemo(() => {
    if (section !== "uyirmei") return letters;
    return UYIRMEI.filter((l) => l.consonantId === consonantFilter);
  }, [section, consonantFilter, letters]);

  const display = section === "uyirmei" ? filteredUyirmei : letters;

  const handleStudy = (id: string) => {
    setProgress(markStudied(id));
  };

  return (
    <div className={styles.page}>
      <header className={styles.head}>
        <div>
          <Link to="/" className={styles.back}>
            ← Home
          </Link>
          <h1 className="tamil">{meta.title}</h1>
          <p>{meta.description}</p>
        </div>
        <Link to={`/quiz/${section}`} className={styles.quizLink}>
          Take quiz
        </Link>
      </header>

      {section === "vowels" && (
        <aside className={styles.pronunciationBanner}>
          <p>
            <strong>ஒலிப்பு:</strong> Short and long vowels change word meaning. Read the pronunciation
            guide while you practice அ–ஔ.
          </p>
          <Link to="/pronunciation">Open pronunciation tips →</Link>
        </aside>
      )}

      {section === "uyirmei" && (
        <div className={styles.filters}>
          <label htmlFor="consonant-row">Consonant row</label>
          <select
            id="consonant-row"
            value={consonantFilter}
            onChange={(e) => setConsonantFilter(e.target.value)}
          >
            {CONSONANTS.map((c) => (
              <option key={c.id} value={c.id}>
                {c.glyph} — {c.roman}
              </option>
            ))}
          </select>
          <Link to="/chart" className={styles.chartLink}>
            See all 18 × 12 table →
          </Link>
        </div>
      )}

      <div className={styles.lessonBody}>
        <div
          className={`${styles.grid} ${section === "uyirmei" ? styles.gridUyirmei : ""}`}
        >
          {display.map((letter) => (
            <LetterCard
              key={letter.id}
              letter={letter}
              studied={!!progress.studied[letter.id]}
              selected={selected?.id === letter.id}
              onSelect={setSelected}
              onStudy={handleStudy}
            />
          ))}
        </div>
        <LetterWriterPanel letter={selected} />
      </div>
    </div>
  );
}

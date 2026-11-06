import { useCallback, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  CONSONANTS,
  CURRICULUM,
  UYIRMEI,
  VOWELS,
  type Letter,
} from "../data/tamilScript";
import { setQuizBest } from "../utils/progress";
import styles from "./Quiz.module.css";

type Section = "vowels" | "consonants" | "uyirmei";

const QUESTION_COUNTS: Record<Section, number> = {
  vowels: 10,
  consonants: 12,
  uyirmei: 15,
};

function poolFor(section: Section): Letter[] {
  if (section === "vowels") return VOWELS;
  if (section === "consonants") return CONSONANTS;
  return UYIRMEI;
}

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pickOptions(correct: Letter, pool: Letter[]): Letter[] {
  const others = shuffle(pool.filter((l) => l.id !== correct.id)).slice(0, 3);
  return shuffle([correct, ...others]);
}

export default function Quiz() {
  const { section: raw } = useParams();
  const section = (raw ?? "vowels") as Section;
  const meta = CURRICULUM.find((c) => c.slug === section) ?? CURRICULUM[0];
  const pool = poolFor(section);
  const total = Math.min(QUESTION_COUNTS[section], pool.length);

  const questions = useMemo(
    () => shuffle(pool).slice(0, total),
    [pool, total, section],
  );

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const current = questions[index];
  const options = useMemo(
    () => (current ? pickOptions(current, pool) : []),
    [current, pool],
  );

  const finish = useCallback(
    (finalScore: number) => {
      setScore(finalScore);
      const pct = Math.round((finalScore / total) * 100);
      setQuizBest(section, pct);
      setDone(true);
    },
    [section, total],
  );

  const onPick = (id: string) => {
    if (picked || !current) return;
    setPicked(id);
    const correct = id === current.id;
    const nextScore = score + (correct ? 1 : 0);
    window.setTimeout(() => {
      if (index + 1 >= total) {
        finish(nextScore);
      } else {
        setScore(nextScore);
        setIndex((i) => i + 1);
        setPicked(null);
      }
    }, 700);
  };

  if (!current && !done) {
    return (
      <p>
        <Link to="/">Back home</Link>
      </p>
    );
  }

  if (done) {
    const pct = Math.round((score / total) * 100);
    return (
      <div className={styles.page}>
        <div className={styles.result}>
          <h1>Quiz complete</h1>
          <p className={styles.score}>
            {score} / {total} ({pct}%)
          </p>
          <p className="tamil">{meta.title}</p>
          <div className={styles.actions}>
            <Link to={`/learn/${section}`} className={styles.primary}>
              Review letters
            </Link>
            <Link to="/" className={styles.secondary}>
              Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <header className={styles.head}>
        <Link to={`/learn/${section}`} className={styles.back}>
          ← Back to lesson
        </Link>
        <h1>Quiz: {meta.subtitle}</h1>
        <p>
          Question {index + 1} of {total} · Score {score}
        </p>
      </header>

      <div className={styles.prompt}>
        <p>Which sound matches this letter?</p>
        <span className={`${styles.glyph} tamil`}>{current.glyph}</span>
      </div>

      <div className={styles.options}>
        {options.map((opt) => {
          let state = "";
          if (picked) {
            if (opt.id === current.id) state = styles.correct;
            else if (opt.id === picked) state = styles.wrong;
          }
          return (
            <button
              key={opt.id}
              type="button"
              className={`${styles.option} ${state}`}
              onClick={() => onPick(opt.id)}
              disabled={!!picked}
            >
              {opt.roman}
            </button>
          );
        })}
      </div>
    </div>
  );
}

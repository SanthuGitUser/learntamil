import { Link } from "react-router-dom";
import { CONSONANTS, CURRICULUM, UYIRMEI, VOWELS } from "../data/tamilScript";
import { COLLOQUIAL_PATH } from "../data/colloquialPath";
import { countStudied, loadProgress } from "../utils/progress";
import styles from "./Home.module.css";

export default function Home() {
  const progress = loadProgress();
  const sections = [
    { key: "vowels", ids: VOWELS.map((l) => l.id), total: VOWELS.length },
    { key: "consonants", ids: CONSONANTS.map((l) => l.id), total: CONSONANTS.length },
    { key: "uyirmei", ids: UYIRMEI.map((l) => l.id), total: UYIRMEI.length },
  ];

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Basic → Advanced</p>
        <h1>
          Learn to read & write
          <span className={`tamil ${styles.heroTamil}`}> தமிழ்</span>
        </h1>
        <p className={styles.lead}>
          Start with 12 vowels, master 18 consonants, then work through all 216 உயிர்மெய்
          (consonant–vowel) combinations used in everyday Tamil.
        </p>
        <div className={styles.heroActions}>
          <Link to="/learn/vowels" className={styles.primary}>
            Start with vowels
          </Link>
          <Link to="/chart" className={styles.secondary}>
            View full 216 chart
          </Link>
        </div>
      </section>

      <section className={styles.path}>
        <h2>Learning path</h2>
        <div className={styles.cards}>
          {CURRICULUM.map((step, i) => {
            const sec = sections.find((s) => s.key === step.slug)!;
            const done = countStudied(sec.ids);
            const pct = Math.round((done / sec.total) * 100);
            return (
              <article key={step.slug} className={styles.step}>
                <span className={styles.stepNum}>{i + 1}</span>
                <div className={styles.stepBody}>
                  <h3 className="tamil">{step.title}</h3>
                  <p className={styles.sub}>{step.subtitle}</p>
                  <p>{step.description}</p>
                  <div className={styles.progressBar} aria-hidden>
                    <div className={styles.progressFill} style={{ width: `${pct}%` }} />
                  </div>
                  <p className={styles.progressText}>
                    {done} / {sec.total} touched · best quiz{" "}
                    {progress.quizBest[step.slug] ?? 0}%
                  </p>
                  <div className={styles.stepLinks}>
                    <Link to={`/learn/${step.slug}`}>Learn</Link>
                    <Link to={`/quiz/${step.slug}`}>Quiz</Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.colloquial}>
        <h2>Spoken Tamil — 16 units</h2>
        <p className={styles.colloquialLead}>
          After vowels, follow a conversation path: phone calls, directions, food, weddings, and
          more — each unit links to content in this app.
        </p>
        <div className={styles.colloquialPreview}>
          {COLLOQUIAL_PATH.slice(0, 4).map((u) => (
            <span key={u.unit} className={styles.colloquialChip}>
              {u.unit}. {u.titleEnglish}
            </span>
          ))}
          <span className={styles.colloquialChipMuted}>+12 more</span>
        </div>
        <Link to="/colloquial-path" className={styles.primary}>
          Open full path
        </Link>
      </section>

      <section className={styles.grammarPromo}>
        <h2 className="tamil">உரையாடல்</h2>
        <p>Phone, directions, weddings, travel, shops, dining, hospital, and more.</p>
        <Link to="/dialogues" className={styles.primary}>
          Open dialogues
        </Link>
      </section>

      <section className={styles.grammarPromo}>
        <h2 className="tamil">வாக்கியங்கள்</h2>
        <p>Greetings, thanks, and introductions — tap each sentence to hear it.</p>
        <Link to="/phrases" className={styles.primary}>
          Open phrases
        </Link>
      </section>

      <section className={styles.grammarPromo}>
        <h2 className="tamil">சொற்கள்</h2>
        <p>Numbers, colors, animals, places, South Indian food, home, emotions, time, and more.</p>
        <Link to="/words" className={styles.primary}>
          Open word sets
        </Link>
      </section>

      <section className={styles.grammarPromo}>
        <h2 className="tamil">தமிழ் இலக்கணம்</h2>
        <p>
          Nouns, colloquial vs written, verbless sentences, questions, tenses, cases, and more —
          with clickable examples.
        </p>
        <Link to="/grammar" className={styles.primary}>
          Open grammar topics
        </Link>
      </section>

      <section className={styles.tips}>
        <h2>How to use this app</h2>
        <ul>
          <li>
            Tap any letter to hear it and see stroke order on the right (read + write).{" "}
            <Link to="/pronunciation">Pronunciation tips</Link> pair with the vowel lesson.
          </li>
          <li>Letters you open are tracked locally on this device.</li>
          <li>
            The 216 chart follows the traditional row-per-consonant layout used in Tamil
            schools.
          </li>
        </ul>
      </section>
    </div>
  );
}

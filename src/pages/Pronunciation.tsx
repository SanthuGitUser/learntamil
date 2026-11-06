import { Link } from "react-router-dom";
import { PRONUNCIATION_TIPS } from "../data/pronunciationTips";
import { playTamilPhrase } from "../utils/speech";
import styles from "./Grammar.module.css";
import tipStyles from "./Pronunciation.module.css";

export default function Pronunciation() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <Link to="/" className={styles.back}>
          ← Home
        </Link>
        <p className={styles.eyebrow}>With the script</p>
        <h1>
          <span className={`tamil ${styles.heroTamil}`}>ஒலிப்பு</span>
        </h1>
        <p className={styles.lead}>
          Listen while you learn letters. These patterns show up in everyday spoken Tamil.
        </p>
      </header>

      <section className={tipStyles.cards}>
        {PRONUNCIATION_TIPS.map((tip) => (
          <article key={tip.id} className={tipStyles.card}>
            <h2>{tip.heading}</h2>
            <p>{tip.body}</p>
            <ul className={tipStyles.examples}>
              {tip.examples.map((ex) => (
                <li key={ex.tamil}>
                  <span className="tamil">{ex.tamil}</span>
                  <span className={tipStyles.meta}>
                    {ex.roman} — {ex.english}
                  </span>
                  <button
                    type="button"
                    className={tipStyles.play}
                    onClick={() => playTamilPhrase(ex.tamil.replace(/ → .*/, ""))}
                    title="Hear Tamil"
                  >
                    ▶
                  </button>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <p className={tipStyles.footer}>
        <Link to="/learn/vowels">Back to vowels lesson →</Link>
      </p>
    </div>
  );
}

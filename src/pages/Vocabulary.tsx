import { Link } from "react-router-dom";
import { deckItemIds, VOCAB_DECKS } from "../data/vocabulary";
import { countStudied } from "../utils/progress";
import styles from "./Grammar.module.css";

export default function Vocabulary() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <Link to="/" className={styles.back}>
          ← Home
        </Link>
        <p className={styles.eyebrow}>Everyday Tamil</p>
        <h1>
          <span className={`tamil ${styles.heroTamil}`}>சொற்கள்</span>
        </h1>
        <p className={styles.lead}>
          Numbers, colors, time, family, animals, places, emotions, and more. Tap a word to hear
          it.
        </p>
      </header>

      <section className={styles.topics}>
        <h2>Word sets</h2>
        <div className={styles.list}>
          {VOCAB_DECKS.map((deck, index) => {
            const ids = deckItemIds(deck);
            const done = countStudied(ids);
            return (
              <Link key={deck.id} to={`/words/${deck.id}`} className={styles.row}>
                <span className={styles.num} aria-hidden>
                  {index + 1}
                </span>
                <div className={styles.body}>
                  <h3 className={`tamil ${styles.titleTamil}`}>{deck.titleTamil}</h3>
                  <p className={styles.sub}>{deck.titleEnglish}</p>
                  <p className={styles.snippet}>{deck.description}</p>
                  <p className={styles.snippet}>
                    {done} / {ids.length} opened
                  </p>
                </div>
                <span className={styles.arrow} aria-hidden>
                  →
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

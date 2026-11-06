import { Link } from "react-router-dom";
import { PHRASE_DECKS, phraseDeckItemIds } from "../data/phrases";
import { countStudied } from "../utils/progress";
import styles from "./Grammar.module.css";

export default function Phrases() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <Link to="/" className={styles.back}>
          ← Home
        </Link>
        <p className={styles.eyebrow}>Useful Tamil</p>
        <h1>
          <span className={`tamil ${styles.heroTamil}`}>வாக்கியங்கள்</span>
        </h1>
        <p className={styles.lead}>
          Full sentences for greetings, thanks, and introductions. Tap to hear each phrase.
        </p>
      </header>

      <section className={styles.topics}>
        <h2>Phrase sets</h2>
        <div className={styles.list}>
          {PHRASE_DECKS.map((deck, index) => {
            const ids = phraseDeckItemIds(deck);
            const done = countStudied(ids);
            return (
              <Link key={deck.id} to={`/phrases/${deck.id}`} className={styles.row}>
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

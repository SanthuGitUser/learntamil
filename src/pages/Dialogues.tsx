import { Link } from "react-router-dom";
import { DIALOGUES, dialogueLineIds } from "../data/dialogues";
import { countStudied } from "../utils/progress";
import styles from "./Grammar.module.css";

export default function Dialogues() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <Link to="/" className={styles.back}>
          ← Home
        </Link>
        <p className={styles.eyebrow}>Conversation</p>
        <h1>
          <span className={`tamil ${styles.heroTamil}`}>உரையாடல்</span>
        </h1>
        <p className={styles.lead}>
          Short spoken Tamil dialogues. Tap each line to hear it — practice in order.
        </p>
      </header>

      <section className={styles.topics}>
        <h2>Dialogues</h2>
        <div className={styles.list}>
          {DIALOGUES.map((dlg, index) => {
            const ids = dialogueLineIds(dlg);
            const done = countStudied(ids);
            return (
              <Link key={dlg.id} to={`/dialogues/${dlg.id}`} className={styles.row}>
                <span className={styles.num} aria-hidden>
                  {index + 1}
                </span>
                <div className={styles.body}>
                  <h3 className={`tamil ${styles.titleTamil}`}>{dlg.titleTamil}</h3>
                  <p className={styles.sub}>{dlg.titleEnglish}</p>
                  <p className={styles.snippet}>{dlg.description}</p>
                  <p className={styles.snippet}>
                    {done} / {ids.length} lines opened
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

import { Link } from "react-router-dom";
import { COLLOQUIAL_PATH } from "../data/colloquialPath";
import styles from "./ColloquialPath.module.css";
import grammarStyles from "./Grammar.module.css";

export default function ColloquialPath() {
  return (
    <div className={grammarStyles.page}>
      <header className={grammarStyles.hero}>
        <Link to="/" className={grammarStyles.back}>
          ← Home
        </Link>
        <p className={grammarStyles.eyebrow}>Spoken Tamil</p>
        <h1>
          <span className={`tamil ${grammarStyles.heroTamil}`}>16 பாடங்கள்</span>
        </h1>
        <p className={grammarStyles.lead}>
          A conversation-first path: each unit links to dialogues, words, phrases, and grammar in
          this app. Work through in order or jump to a theme.
        </p>
      </header>

      <ol className={styles.list}>
        {COLLOQUIAL_PATH.map((unit) => (
          <li key={unit.unit} className={styles.unit}>
            <span className={styles.num}>{unit.unit}</span>
            <div className={styles.body}>
              <h2 className="tamil">{unit.titleTamil}</h2>
              <p className={styles.en}>{unit.titleEnglish}</p>
              <p className={styles.blurb}>{unit.blurb}</p>
              <div className={styles.links}>
                {unit.links.map((link) => (
                  <Link key={link.to} to={link.to}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

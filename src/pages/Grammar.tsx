import { Link } from "react-router-dom";
import { GRAMMAR_TOPICS } from "../data/tamilGrammar";
import styles from "./Grammar.module.css";

const SECTIONS = [
  { key: "core" as const, title: "Foundation", blurb: "Core topics after you learn the script." },
  { key: "extended" as const, title: "More grammar", blurb: "Spoken patterns, questions, and everyday structure." },
  { key: "advanced" as const, title: "Advanced grammar", blurb: "Negatives, deeper cases, participles, and particles." },
];

export default function Grammar() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <Link to="/" className={styles.back}>
          ← Home
        </Link>
        <p className={styles.eyebrow}>After the script</p>
        <h1>
          <span className={`tamil ${styles.heroTamil}`}>தமிழ் இலக்கணம்</span>
        </h1>
        <p className={styles.lead}>
          Tap examples to hear Tamil. Topics are grouped from foundation through advanced spoken
          grammar.
        </p>
      </header>

      {SECTIONS.map((section) => {
        const topics = GRAMMAR_TOPICS.filter((t) => t.level === section.key);
        if (topics.length === 0) return null;
        return (
          <section key={section.key} className={styles.topics}>
            <h2>{section.title}</h2>
            <p className={styles.sectionLead}>{section.blurb}</p>
            <div className={styles.list}>
              {topics.map((topic, index) => (
                <Link key={topic.id} to={`/grammar/${topic.id}`} className={styles.row}>
                  <span className={styles.num} aria-hidden>
                    {index + 1}
                  </span>
                  <div className={styles.body}>
                    <h3 className={`tamil ${styles.titleTamil}`}>{topic.titleTamil}</h3>
                    <p className={styles.sub}>{topic.titleEnglish}</p>
                    <p className={styles.snippet}>{topic.intro}</p>
                  </div>
                  <span className={styles.arrow} aria-hidden>
                    →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

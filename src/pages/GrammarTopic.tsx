import { Link, Navigate, useParams } from "react-router-dom";
import { getGrammarTopic } from "../data/tamilGrammar";
import { playTamilPhrase } from "../utils/speech";
import styles from "./GrammarTopic.module.css";

export default function GrammarTopic() {
  const { topicId } = useParams();
  const topic = topicId ? getGrammarTopic(topicId) : undefined;

  if (!topic) {
    return <Navigate to="/grammar" replace />;
  }

  return (
    <div className={styles.page}>
      <header className={styles.head}>
        <div>
          <Link to="/grammar" className={styles.back}>
            ← All grammar topics
          </Link>
          <h1 className={`tamil ${styles.title}`}>{topic.titleTamil}</h1>
          <p className={styles.sub}>{topic.titleEnglish}</p>
          <p className={styles.intro}>{topic.intro}</p>
        </div>
      </header>

      <div className={styles.sections}>
      {topic.sections.map((section) => (
        <section key={section.heading} className={styles.block}>
          <h2>{section.heading}</h2>
          <p>{section.body}</p>
          {section.examples && section.examples.length > 0 && (
            <ul className={styles.examples}>
              {section.examples.map((ex) => (
                <li key={`${ex.tamil}-${ex.roman}`}>
                  <button
                    type="button"
                    className={styles.exampleBtn}
                    onClick={() => playTamilPhrase(ex.tamil.replace(/ → .*/, ""))}
                    title="Hear Tamil"
                  >
                    <span className={`tamil ${styles.exTamil}`}>{ex.tamil}</span>
                    <span className={styles.exEnMain}>{ex.english}</span>
                    <span className={styles.exRoman}>{ex.roman}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
      </div>
    </div>
  );
}

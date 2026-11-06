import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import VocabCard from "../components/VocabCard";
import { getPhraseDeck } from "../data/phrases";
import { loadProgress, markStudied } from "../utils/progress";
import styles from "./Lesson.module.css";

export default function PhraseDeckPage() {
  const { deckId } = useParams();
  const deck = deckId ? getPhraseDeck(deckId) : undefined;
  const [progress, setProgress] = useState(loadProgress);

  if (!deck) return <Navigate to="/phrases" replace />;

  return (
    <div className={styles.page}>
      <header className={styles.head}>
        <div>
          <Link to="/phrases" className={styles.back}>
            ← All phrase sets
          </Link>
          <h1 className="tamil">{deck.titleTamil}</h1>
          <p>{deck.description}</p>
        </div>
      </header>

      {deck.groups.map((group) => (
        <section key={group.heading}>
          <h2 className={styles.groupTitle}>{group.heading}</h2>
          <div className={`${styles.grid} ${styles.gridPhrases}`}>
            {group.items.map((item) => (
              <VocabCard
                key={item.id}
                item={item}
                variant="phrase"
                studied={!!progress.studied[item.id]}
                onStudy={(id) => setProgress(markStudied(id))}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

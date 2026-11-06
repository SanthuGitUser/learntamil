import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import VocabCard from "../components/VocabCard";
import { getVocabDeck } from "../data/vocabulary";
import { loadProgress, markStudied } from "../utils/progress";
import styles from "./Lesson.module.css";

export default function VocabDeckPage() {
  const { deckId } = useParams();
  const deck = deckId ? getVocabDeck(deckId) : undefined;
  const [progress, setProgress] = useState(loadProgress);

  if (!deck) return <Navigate to="/words" replace />;

  return (
    <div className={styles.page}>
      <header className={styles.head}>
        <div>
          <Link to="/words" className={styles.back}>
            ← All word sets
          </Link>
          <h1 className="tamil">{deck.titleTamil}</h1>
          <p>{deck.description}</p>
        </div>
      </header>

      {deck.groups.map((group) => (
        <section key={group.heading}>
          <h2 className={styles.groupTitle}>{group.heading}</h2>
          <div className={styles.grid}>
            {group.items.map((item) => (
              <VocabCard
                key={item.id}
                item={item}
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

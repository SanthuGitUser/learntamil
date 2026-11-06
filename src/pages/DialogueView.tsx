import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import DialogueLineCard from "../components/DialogueLineCard";
import { getDialogue } from "../data/dialogues";
import { loadProgress, markStudied } from "../utils/progress";
import styles from "./DialogueView.module.css";

export default function DialogueView() {
  const { dialogueId } = useParams();
  const dialogue = dialogueId ? getDialogue(dialogueId) : undefined;
  const [progress, setProgress] = useState(loadProgress);

  if (!dialogue) return <Navigate to="/dialogues" replace />;

  return (
    <div className={styles.page}>
      <header className={styles.head}>
        <Link to="/dialogues" className={styles.back}>
          ← All dialogues
        </Link>
        <h1 className="tamil">{dialogue.titleTamil}</h1>
        <p className={styles.sub}>{dialogue.titleEnglish}</p>
        <p>{dialogue.description}</p>
      </header>

      <ol className={styles.lines}>
        {dialogue.lines.map((line, index) => (
          <li key={line.id} className={styles.item}>
            <span className={styles.step} aria-hidden>
              {index + 1}
            </span>
            <DialogueLineCard
              line={line}
              studied={!!progress.studied[line.id]}
              onStudy={(id) => setProgress(markStudied(id))}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}

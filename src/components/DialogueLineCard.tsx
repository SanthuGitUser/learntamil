import type { DialogueLine } from "../data/dialogues";
import { playTamilPhrase } from "../utils/speech";
import styles from "./DialogueLineCard.module.css";

type Props = {
  line: DialogueLine;
  studied?: boolean;
  onStudy?: (id: string) => void;
};

export default function DialogueLineCard({ line, studied, onStudy }: Props) {
  return (
    <button
      type="button"
      className={`${styles.line} ${studied ? styles.studied : ""}`}
      onClick={() => {
        onStudy?.(line.id);
        playTamilPhrase(line.tamil);
      }}
      aria-label={`${line.speaker}: ${line.english}`}
    >
      <span className={styles.speaker}>{line.speaker}</span>
      <span className={`${styles.tamil} tamil`}>{line.tamil}</span>
      <span className={styles.roman}>{line.roman}</span>
      <span className={styles.english}>{line.english}</span>
      {studied && <span className={styles.check} aria-hidden>✓</span>}
    </button>
  );
}

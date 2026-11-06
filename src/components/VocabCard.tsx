import type { VocabItem } from "../data/vocabulary";
import { playTamilPhrase } from "../utils/speech";
import styles from "./LetterCard.module.css";

type Props = {
  item: VocabItem;
  studied?: boolean;
  onStudy?: (id: string) => void;
  /** Wider cards with wrapped text for full sentences. */
  variant?: "word" | "phrase";
};

export default function VocabCard({ item, studied, onStudy, variant = "word" }: Props) {
  return (
    <button
      type="button"
      className={`${styles.card} ${variant === "phrase" ? styles.phrase : styles.word} ${studied ? styles.studied : ""}`}
      onClick={() => {
        onStudy?.(item.id);
        playTamilPhrase(item.tamil);
      }}
      aria-label={`${item.tamil}, ${item.english}`}
    >
      <span className={`${styles.glyph} tamil`}>{item.tamil}</span>
      <span className={styles.roman}>{item.roman}</span>
      <span className={styles.exampleEn}>{item.english}</span>
      {studied && <span className={styles.check} aria-hidden>✓</span>}
    </button>
  );
}

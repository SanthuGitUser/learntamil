import type { Letter } from "../data/tamilScript";
import { playLetterSound } from "../utils/speech";
import styles from "./LetterCard.module.css";

type Props = {
  letter: Letter;
  studied?: boolean;
  compact?: boolean;
  selected?: boolean;
  onStudy?: (id: string) => void;
  onSelect?: (letter: Letter) => void;
};

export default function LetterCard({ letter, studied, compact, selected, onStudy, onSelect }: Props) {
  const hasExample = letter.exampleWord && letter.exampleEnglish;

  return (
    <button
      type="button"
      className={`${styles.card} ${studied ? styles.studied : ""} ${selected ? styles.selected : ""} ${compact ? styles.compact : ""}`}
      onClick={() => {
        onSelect?.(letter);
        onStudy?.(letter.id);
        playLetterSound(letter);
      }}
      aria-label={`${letter.glyph}, ${letter.roman}${hasExample ? `, ${letter.exampleEnglish}` : ""}`}
    >
      <span className={`${styles.glyph} tamil`}>{letter.glyph}</span>
      {!compact && (
        <>
          <span className={styles.roman}>{letter.roman}</span>
          {letter.exampleWord && (
            <span className={`${styles.example} tamil`}>{letter.exampleWord}</span>
          )}
          {letter.exampleEnglish && (
            <span className={styles.exampleEn}>{letter.exampleEnglish}</span>
          )}
          <span className={styles.hint}>{letter.hint}</span>
        </>
      )}
      {studied && <span className={styles.check} aria-hidden>✓</span>}
    </button>
  );
}

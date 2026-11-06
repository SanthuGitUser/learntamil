import type { Letter } from "../data/tamilScript";
import styles from "./WordMeaning.module.css";

type Props = {
  letter: Letter | null;
  label?: string;
};

export default function WordMeaning({ letter, label = "Example word" }: Props) {
  if (!letter?.exampleWord) {
    return (
      <p className={styles.placeholder}>Tap a letter to hear it and see the English meaning.</p>
    );
  }

  const english = letter.exampleEnglish?.trim();

  return (
    <div className={styles.panel} aria-live="polite">
      <p className={styles.label}>{label}</p>
      <p className={styles.line}>
        <span className={`tamil ${styles.tamil}`}>{letter.exampleWord}</span>
        {english && (
          <>
            <span className={styles.sep} aria-hidden>
              →
            </span>
            <span className={styles.en}>{english}</span>
          </>
        )}
      </p>
      <p className={styles.meta}>
        Letter <span className="tamil">{letter.glyph}</span> · {letter.roman}
      </p>
    </div>
  );
}

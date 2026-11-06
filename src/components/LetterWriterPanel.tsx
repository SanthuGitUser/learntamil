import { useEffect, useState } from "react";
import type { Letter } from "../data/tamilScript";
import { hasWriteGuideImage, writeGuideImageUrl } from "../utils/writeGuideImage";
import styles from "./LetterWriterPanel.module.css";

type Props = {
  letter: Letter | null;
};

export default function LetterWriterPanel({ letter }: Props) {
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    setImgFailed(false);
  }, [letter?.id]);

  if (!letter) {
    return (
      <aside className={styles.panel} aria-label="Write guide">
        <p className={styles.placeholder}>Tap a letter to hear it and see how to write it.</p>
      </aside>
    );
  }

  const src = writeGuideImageUrl(letter.id);
  const available = src && hasWriteGuideImage(letter.id);
  const showImage = available && !imgFailed;

  return (
    <aside className={styles.panel} aria-label="Write guide" aria-live="polite">
      <p className={styles.label}>Write</p>
      <p className={`${styles.glyphRef} tamil`}>{letter.glyph}</p>
      {letter.exampleWord && (
        <p className={styles.meta}>
          <span className="tamil">{letter.exampleWord}</span>
          {letter.exampleEnglish && <> · {letter.exampleEnglish}</>}
        </p>
      )}

      {showImage ? (
        <figure className={styles.figure}>
          <img
            key={letter.id}
            className={styles.guideImg}
            src={src}
            alt={`How to write ${letter.glyph} — stroke arrows from workbook`}
            loading="lazy"
            decoding="async"
            onError={() => setImgFailed(true)}
          />
          <figcaption className={styles.caption}>Follow the arrows in order.</figcaption>
        </figure>
      ) : null}
    </aside>
  );
}

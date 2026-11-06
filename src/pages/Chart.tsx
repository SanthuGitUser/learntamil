import { useState } from "react";
import WordMeaning from "../components/WordMeaning";
import { CONSONANTS, VOWELS, UYIRMEI, type Letter } from "../data/tamilScript";
import { playLetterSound } from "../utils/speech";
import styles from "./Chart.module.css";

function play(letter: Letter, setActive: (l: Letter) => void) {
  setActive(letter);
  playLetterSound(letter);
}

export default function Chart() {
  const [active, setActive] = useState<Letter | null>(null);

  return (
    <div className={styles.page}>
      <header>
        <h1 className="tamil">உயிர்மெய் எழுத்து — 216</h1>
        <p>
          Traditional chart: each row is one consonant; each column is a vowel. Click a letter to
          hear it and see the example word on the right.
        </p>
      </header>

      <div className={styles.split}>
      <div className={styles.wrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col" className={styles.corner}>
                மெய் \ உயிர்
              </th>
              {VOWELS.map((v) => (
                <th key={v.id} scope="col">
                  <button
                    type="button"
                    className={`${styles.headBtn} tamil`}
                    onClick={() => play(v, setActive)}
                    title={v.exampleEnglish ? `${v.exampleWord} → ${v.exampleEnglish}` : v.roman}
                  >
                    {v.glyph}
                    <span className={styles.colRoman}>{v.roman}</span>
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {CONSONANTS.map((c) => (
              <tr key={c.id}>
                <th scope="row" className={styles.rowHead}>
                  <button
                    type="button"
                    className={`${styles.headBtn} tamil`}
                    onClick={() => play(c, setActive)}
                    title={c.exampleEnglish ? `${c.exampleWord} → ${c.exampleEnglish}` : c.roman}
                  >
                    {c.glyph}
                    <span className={styles.rowRoman}>{c.roman}</span>
                  </button>
                </th>
                {VOWELS.map((v) => {
                  const cell = UYIRMEI.find(
                    (u) => u.consonantId === c.id && u.vowelId === v.id,
                  )!;
                  return (
                    <td key={cell.id}>
                      <button
                        type="button"
                        className={`${styles.cell} tamil ${active?.id === cell.id ? styles.cellActive : ""}`}
                        onClick={() => play(cell, setActive)}
                        title={
                          cell.exampleEnglish
                            ? `${cell.exampleWord} → ${cell.exampleEnglish}`
                            : cell.roman
                        }
                      >
                        {cell.glyph}
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <aside className={styles.detail} aria-live="polite">
        {active ? (
          <p className={`${styles.bigLetter} tamil`}>{active.glyph}</p>
        ) : (
          <p className={styles.detailHint}>Select a letter in the table.</p>
        )}
        <WordMeaning letter={active} />
      </aside>
      </div>
    </div>
  );
}

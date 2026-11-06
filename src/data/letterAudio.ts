import pronunciation from "./pronunciation.json";
import type { AudioPhrase } from "./letterAudio.types";

export type { AudioPhrase } from "./letterAudio.types";

export const CONSONANT_AUDIO = pronunciation.consonants as Record<string, AudioPhrase>;

export const UYIRMEI_WORD_ROWS = pronunciation.uyirmeiRows as string[][];

export const UYIRMEI_ENGLISH_ROWS = pronunciation.uyirmeiEnglishRows as string[][];

export function phraseForGlyph(glyph: string, exampleWord: string): string {
  return `${glyph}. ${exampleWord}.`;
}

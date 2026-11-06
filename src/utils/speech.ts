import type { Letter } from "../data/tamilScript";

let currentAudio: HTMLAudioElement | null = null;

/** Bundled MP3 path when we have pre-generated Tamil speech. */
export function getLetterAudioUrl(letter: Pick<Letter, "id">): string | undefined {
  const base = import.meta.env.BASE_URL;
  if (letter.id.startsWith("v-")) return `${base}audio/vowels/${letter.id}.mp3`;
  if (letter.id.startsWith("c-")) return `${base}audio/consonants/${letter.id}.mp3`;
  if (letter.id.includes("-v-")) return `${base}audio/uyirmei/${letter.id}.mp3`;
  return undefined;
}

export function speakTamil(text: string): void {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ta-IN";
  utterance.rate = 0.8;
  window.speechSynthesis.speak(utterance);
}

function stopAudio(): void {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
}

async function playAudioFile(url: string, fallbackText: string): Promise<void> {
  stopAudio();
  window.speechSynthesis?.cancel();

  const audio = new Audio(url);
  audio.volume = 1;
  currentAudio = audio;

  const fallback = () => speakTamil(fallbackText);
  audio.addEventListener("error", fallback, { once: true });

  try {
    await audio.play();
  } catch {
    fallback();
  }
}

function fallbackTextFor(letter: Letter): string {
  return letter.speakText ?? letter.glyph;
}

/** Play recorded letter audio when available; otherwise browser TTS. */
export function playLetterSound(letter: Letter): void {
  const url = getLetterAudioUrl(letter);
  const fallback = fallbackTextFor(letter);
  if (url) {
    void playAudioFile(`${url}?v=4`, fallback);
    return;
  }
  speakTamil(fallback);
}

/** Play arbitrary Tamil phrase (grammar examples, etc.). */
export function playTamilPhrase(text: string): void {
  speakTamil(text);
}

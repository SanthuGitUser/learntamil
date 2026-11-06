const STORAGE_KEY = "learn-tamil-progress";

export type Progress = {
  studied: Record<string, boolean>;
  quizBest: Record<string, number>;
};

const defaultProgress = (): Progress => ({
  studied: {},
  quizBest: {},
});

export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress();
    return { ...defaultProgress(), ...JSON.parse(raw) };
  } catch {
    return defaultProgress();
  }
}

export function saveProgress(progress: Progress): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function markStudied(id: string): Progress {
  const p = loadProgress();
  p.studied[id] = true;
  saveProgress(p);
  return p;
}

export function setQuizBest(section: string, score: number): Progress {
  const p = loadProgress();
  const prev = p.quizBest[section] ?? 0;
  if (score > prev) p.quizBest[section] = score;
  saveProgress(p);
  return p;
}

export function countStudied(ids: string[]): number {
  const p = loadProgress();
  return ids.filter((id) => p.studied[id]).length;
}

/** Worksheet stroke images extracted from tamil.pdf (30 letters). */

import manifest from "../data/writeGuideManifest.json";

const paths = manifest as Record<string, string>;

export function writeGuideImageUrl(letterId: string): string | null {
  const rel = paths[letterId];
  if (!rel) return null;
  return `${import.meta.env.BASE_URL}${rel}`;
}

export function hasWriteGuideImage(letterId: string): boolean {
  return letterId in paths;
}

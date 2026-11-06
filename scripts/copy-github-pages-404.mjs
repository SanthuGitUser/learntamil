/**
 * GitHub Pages serves 404.html for unknown paths. For a client-side SPA,
 * copy the built index.html so deep links and refreshes load the app.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(__dirname, "..", "dist");
const indexPath = path.join(dist, "index.html");
const destPath = path.join(dist, "404.html");

if (!fs.existsSync(indexPath)) {
  console.error("copy-github-pages-404: dist/index.html missing; run vite build first.");
  process.exit(1);
}

fs.copyFileSync(indexPath, destPath);
console.log("copy-github-pages-404: dist/index.html → dist/404.html");

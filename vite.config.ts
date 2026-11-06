import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub project page URL: https://<user>.github.io/<repo>/
// Production builds must use this base so asset URLs resolve under /learntamil/.
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "production" ? "/learntamil/" : "/",
}));

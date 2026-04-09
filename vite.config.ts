import fs from "node:fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const copyIndexTo404 = () => ({
  name: "copy-index-to-404",
  apply: "build" as const,
  closeBundle() {
    const outDir = path.resolve(__dirname, "docs");
    const indexPath = path.join(outDir, "index.html");
    const notFoundPath = path.join(outDir, "404.html");

    if (fs.existsSync(indexPath)) {
      fs.copyFileSync(indexPath, notFoundPath);
    }
  },
});

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger(), copyIndexTo404()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "docs",
  },
}));

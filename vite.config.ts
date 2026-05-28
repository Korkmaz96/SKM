import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { generateSeoFiles } from "./seo-build";

export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), generateSeoFiles()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "docs",
  },
}));

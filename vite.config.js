import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  return {
    base: "andrew-atkinson.github.io",
    build: {
      outDir: "build",
    },
    plugins: [react()],
  };
});

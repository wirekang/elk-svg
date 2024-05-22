import { defineConfig } from "vite";

const hash = Math.floor(Math.random() * 100000000);
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `[name]` + hash + `.js`,
        chunkFileNames: `[name]` + hash + `.js`,
        assetFileNames: `[name]` + hash + `.js`,
      },
    },
  },
});

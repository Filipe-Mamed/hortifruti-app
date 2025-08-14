import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import electron from "vite-plugin-electron";


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    electron([
      {
        entry: "electron/main.ts",
        vite:{
          build:{
            outDir: "dist_electron"
          }
        }
      },
      {
        entry: "electron/preload.ts",
        onstart(options) {
          options.reload(); // recarrega a janela automaticamente
        },
        vite:{
          build:{
            outDir: "dist_electron"
          }
        }
      },
    ]),
  ],
});
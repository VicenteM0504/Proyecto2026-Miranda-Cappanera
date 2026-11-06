import { fileURLToPath, URL } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const ruta = (carpeta) =>
  fileURLToPath(new URL(`./src/${carpeta}`, import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": ruta(""),
      "@api": ruta("api"),
      "@assets": ruta("assets"),
      "@components": ruta("components"),
      "@pages": ruta("pages"),
      "@styles": ruta("styles"),
    },
  },
});

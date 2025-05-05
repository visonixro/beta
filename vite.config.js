import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/beta/", // 👈 necesario para GitHub Pages si no es un sitio de usuario u organización
  build: {
    outDir: "docs", // Cambia la carpeta de salida a 'docs'
    assetsDir: "assets", // Define una subcarpeta para los assets
  },
});

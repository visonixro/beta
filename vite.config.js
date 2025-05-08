import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/beta/', // Asegúrate de que coincida con el nombre de tu repositorio
  build: {
    outDir: 'docs' // Esto está bien si quieres mantener la salida en 'docs'
  }
})
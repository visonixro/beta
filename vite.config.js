import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/beta/', // 👈 necesario para GitHub Pages si tu repositorio no es un user/organization site
})

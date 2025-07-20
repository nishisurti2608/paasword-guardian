import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import netlify from "@netlify/vite-plugin";


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),netlify()],
  server: {
    watch: {
      usePolling: true
    }
  }
})



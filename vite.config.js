import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Dev: frontend runs on 5173, Spring Boot backend on 8080.
// All /api calls are proxied to the backend so the monitoring
// filters see real traffic.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
  build: {
    // Output straight into the Spring Boot static folder so the
    // backend can serve the whole app in production (single origin).
    outDir: '../backend/src/main/resources/static',
    emptyOutDir: true,
  },
})

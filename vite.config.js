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
  preview: {
    port: 4173,
    // Railway assigns the port via $PORT and proxies from outside;
    // allow any host so the preview server doesn't reject the request.
    allowedHosts: true,
  },
})

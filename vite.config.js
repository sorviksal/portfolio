import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

// fix __dirname for ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true,
<<<<<<< HEAD
    allowedHosts: ['sorvisal.site']
  }
})
=======
    allowedHosts: ['sssss.sorvisal.site']
  }
})
>>>>>>> 212a3df9d1b10b1ad20f9407a8628cf00e8d5f66

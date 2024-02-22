import { defineConfig } from 'vite'
import { fileURLToPath, URL } from "url";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@lib', replacement: fileURLToPath(new URL('./src/lib', import.meta.url)) },
      { find: '@components', replacement: fileURLToPath(new URL('./src/components', import.meta.url)) },
      { find: '@contexts', replacement: fileURLToPath(new URL('./src/contexts', import.meta.url)) },
      { find: '@routes', replacement: fileURLToPath(new URL('./src/routes', import.meta.url)) },
      { find: '@utils', replacement: fileURLToPath(new URL('./src/utils', import.meta.url)) },
      { find: '@assets', replacement: fileURLToPath(new URL('./src/assets', import.meta.url)) },
    ],
  }
})

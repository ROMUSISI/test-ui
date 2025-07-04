import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',       // ensures the build output goes into the 'dist' folder
    emptyOutDir: true     // cleans the folder before building
  }
})
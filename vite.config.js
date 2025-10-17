import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Using the base option to specify the deployment path
// Must match your GitHub repository name for GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/player-1-loading/',
})

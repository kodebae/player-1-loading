import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Using the base option to specify the deployment path
export default defineConfig({
  plugins: [react()],
  base: '/kodebae-app/',
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Vite's default floor is Chrome 87; outdated Android WebViews below that
    // hit a SyntaxError on ?? / ?. and show a blank page. Transpile lower.
    target: ['chrome70', 'edge88', 'firefox78', 'safari12'],
  },
})

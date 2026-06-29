import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import copy from 'rollup-plugin-copy';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [
        { src: 'src/assets/*.{jpg,pdf}', dest: './dist/assets' }
      ]
    })
  ],
  server: {
    host: true,          // Allow external access (needed in CI/CD)
    port: 5173,          // Default Vite port
    strictPort: true,    // Fail if port is taken (CI consistency)
  },
  preview: {
    host: true,
    port: 4173,          // Preview server port
    strictPort: true,
  },
  build: {
    outDir: 'dist',      // Netlify expects dist/
    sourcemap: true,     // Helpful for debugging in CI/CD
  }
})

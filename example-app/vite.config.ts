/// <reference types="vitest/config" /> // https://vitest.dev/config/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/~karripar/upload/',
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest-setup.js',
  },
})

/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/__tests__/setup.ts',
    css: false,
    coverage: {
      all: true,
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['**/*.tsx'],
      exclude: ['**/_app.tsx', '**/_document.tsx','**/pages', '**/store', '**/ErrorBoundary.tsx'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});

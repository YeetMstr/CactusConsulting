import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves this repo at https://yeetmstr.github.io/CactusConsulting/
export default defineConfig({
  base: '/CactusConsulting/',
  plugins: [react()],
  build: { target: 'es2022' },
});

import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  base: '/InterateHawaiiWebsite/',
  publicDir: 'public',
  build: {
    outDir: 'docs',
  },
  server: {
    port: 3000,
    open: true,
  },
});

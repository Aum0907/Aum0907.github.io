import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11', 'iOS >= 10'], // Add Safari and older browser targets
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'], // Include polyfills for async/await
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
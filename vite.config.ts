import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // hmr: false, // Désactive Hot Module Replacement temporairement
  },
  optimizeDeps: {
    include: ["lucide-react"],
  },
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import vercel from 'vite-plugin-vercel'  // Ensure this is installed

export default defineConfig({
  plugins: [react(), vercel()],
});

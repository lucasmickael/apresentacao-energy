import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Vercel serve na raiz ('/'), GitHub Pages serve em subdiretório
  const isVercel = process.env.VERCEL === '1';
  const isProd = mode === 'production';
  
  return {
    plugins: [react()],
    base: (isProd && !isVercel) ? '/apresentacao-energy/' : '/',
  };
})

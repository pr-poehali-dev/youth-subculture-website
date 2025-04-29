import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    hmr: {
      protocol: 'wss',
      host: undefined, // Позволяет использовать текущий домен
      clientPort: 443, // Для работы через HTTPS
      path: '/ws', // Используем специфичный путь для WebSocket
      timeout: 120000, // Увеличиваем таймаут
      overlay: false, // Отключение оверлея ошибок
    }
  },
});

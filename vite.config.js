/* import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  base: '/filter_pagination_infinite-scroll_react/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})


 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react_project/',
  server: {
    host: 'localhost',
    port: 3000,
  },
})
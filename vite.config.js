

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  // เพิ่มบรรทัดนี้

// https://vitejs.dev/config/
export default defineConfig({
  base: '/webclick/',
  plugins: [react(), tailwindcss()],  // เพิ่ม tailwindcss() ใน array นี้
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Dekkaii-Web/', // สำคัญมาก: ตัวเล็กตัวใหญ่ต้องตรงกับชื่อ Repo บน GitHub
})
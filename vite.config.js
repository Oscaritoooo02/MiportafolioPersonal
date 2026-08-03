import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración básica de Vite para un proyecto React sin backend ni base de datos.
export default defineConfig({
  plugins: [react()],
})

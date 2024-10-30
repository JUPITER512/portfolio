import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'./src'),
      '@components':path.resolve(__dirname,'./src/Components'),
      '@pages':path.resolve(__dirname,'./src/Pages'),
      '@utils':path.resolve(__dirname,'./src/utils'),
      '@hooks':path.resolve(__dirname,'./src/Hooks'),
      '@data':path.resolve(__dirname,'./src/Data'),
      

    }
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Syed Ali Murtaza Portfolio',
        short_name: 'Ali\'s Portfolio',
        description: 'A showcase of my skills, experience, and projects.',
        theme_color: '#222831',
        background_color: '#EEEEEE',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: './favicon.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: './favicon.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'./src'),
      '@components':path.resolve(__dirname,'./src/Components'),
      '@pages':path.resolve(__dirname,'./src/Pages'),
      '@utils':path.resolve(__dirname,'./src/utils'),
      '@hooks':path.resolve(__dirname,'./src/Hooks'),
      '@data':path.resolve(__dirname,'./src/Data'),
    }
  },
  define:{
    'process.env.VITE_SERVICE_ID': JSON.stringify(process.env.SERVICE_ID),
    'process.env.VITE_TEMPLATE_ID': JSON.stringify(process.env.TEMPLATE_ID),
    'process.env.VITE_PUBLIC_KEY': JSON.stringify(process.env.PUBLIC_KEY),
    'process.env.VITE_TO_NAME': JSON.stringify(process.env.TO_NAME),
  }
})

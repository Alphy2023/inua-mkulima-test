import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import replace from "@rollup/plugin-replace";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
 
  resolve: {
    alias: {
      // Define your aliases here
      "@app": "/src/app",
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@configs": "/src/configs",
      "@contexts": "/src/contexts",
      "@layouts": "/src/layouts",
      "@routes": "/src/routes",
      "@utils": "/src/utils",
      "@views": "/src/views",
      // Add more aliases as needed
    },
  },
  // optimizeDeps: {
  //   include: ['@ffmpeg/ffmpeg']
  // },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});

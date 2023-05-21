import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';




export default defineConfig({
  optimizeDeps: {
    exclude: ['js-big-decimal']
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),

    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/sass/base/_color.scss";
        @import "@/assets/sass/base/_var.scss";
        @import "@/assets/sass/mixin/_mixins.scss";`
      }
    }
  },
})


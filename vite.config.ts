import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import path from 'path'

export default defineConfig({
  plugins: [vue(), vueJsx(), AutoImport({
    imports: ['vue'], dts: 'src/auto-import.d.ts'
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  }
})

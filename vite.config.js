import { defineConfig, preview } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
import path from 'path'
import PurgeIcons from 'vite-plugin-purge-icons'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: '/',
    plugins: [
      vue(),
      Components({
        dirs: ['./src/components'],
        resolvers: [
          IconsResolver({
            prefix: 'TwIcon'
          })
        ],
      }),
      Icons({
        compiler: 'vue3'
      }),
      PurgeIcons(),
    ],
    resolve: {
      alias: [
        {
          find: 'vue',
          replacement: 'vue/dist/vue.esm-bundler.js'
        },
        { 
          find: '@',
          replacement: path.resolve(__dirname, './src')
        }
      ]
    },
    server: {
      port: process.env.PORT
    },
    build: {
      rollupOptions: {
        plugins: [visualizer()]
      }
    },
    preview: {
      port: process.env.PORT
    }
  }
})

import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import createSvgSpritePlugin from 'vite-plugin-svg-sprite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'example',
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  plugins: [
    vue(),
    Icons(),
    createSvgSpritePlugin(),
    Pages({
      pagesDir: [
        { dir: 'src/pages', baseRoute: '' },
        {
          dir: 'src/packages',
          baseRoute: '',
        },
      ],
      exclude: [
        '*/*.vue',
        '*/test/*.vue',
        '*/demo/demo[0-9].vue',
      ],
      extensions: ['vue'],
    }),
    AutoImport({
      /* options */
      imports: [
        // presets
        'vue',
        'vue-router',
        '@vueuse/core',
      ],
      dts: './auto-imports.d.ts',
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
  ],
  resolve: {
    alias: {
      'my-lib/':
        process.env.NODE_ENV !== 'preview'
          ? `${path.resolve(__dirname, './src/packages')}/`
          : `${path.resolve(__dirname, './dist/es')}/`,
      'dist/': `${path.resolve(__dirname, './dist/es')}/`,
    },
  },
})

import path from 'path'
import Unocss from 'unocss/vite'
import { MarkdownTransform } from './.vitepress/plugins/md-transform'
import AutoImport from 'unplugin-auto-import/vite'

export default {
  resolve: {
    alias: {
      'my-lib/': `${path.resolve(
        __dirname,
        '../dist/es'
      )}/`,
    },
  },
  plugins: [MarkdownTransform(), Unocss(), AutoImport({
    /* options */
    imports: [
      // presets
      'vue',
      'vue-router',
      '@vueuse/core',
    ],
    dts: './auto-imports.d.ts',
  })],
}

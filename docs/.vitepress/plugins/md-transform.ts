import path from 'path'
import klawSync from 'klaw-sync'

import type { Plugin } from 'vite'

const PACKAGES_PATH = path.resolve(
  __dirname,
  '../../../src/packages'
)

const components = klawSync(PACKAGES_PATH, {
  nofile: true,
  depthLimit: 0,
}).map((dir) => path.basename(dir.path))

export function MarkdownTransform(): Plugin {
  return {
    name: 'element-plus-md-transform',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.endsWith('.md')) return

      const componentId = path.basename(id, '.md')

      if (!components.includes(componentId)) return

      const append = {
        headers: [],
        footers: [],
        scriptSetups: [
          `const files = import.meta.globEager('../../../src/packages/${componentId}/demo/*.vue')
          const demos = {}
          for (const key in files) {
            if(key.indexOf('index.vue') === -1) {
              demos[key] = files[key]
            }
          }
          console.log(demos)
          `
        ],
      }

      code += `
<script setup>
${append.scriptSetups}
</script>
`

      return {
        code,
      }
    },
  }
}

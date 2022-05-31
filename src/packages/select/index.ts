import type { App } from 'vue'
import Select from './index.vue'

Select.install = (app: App) => {
  app.component(Select.name, Select)
}

export { Select }
export default Select

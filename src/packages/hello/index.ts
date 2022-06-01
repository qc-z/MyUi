import type { App } from 'vue'
import Hello from './index.vue'

Hello.install = (app: App) => {
  app.component(Hello.name, Hello)
}

export { Hello }
export default Hello

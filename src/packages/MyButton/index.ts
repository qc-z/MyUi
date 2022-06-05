import type { App } from 'vue'
import MyButton from './index.vue'

MyButton.install = (app: App) => {
  app.component(MyButton.name, MyButton)
}

export { MyButton }
export default MyButton

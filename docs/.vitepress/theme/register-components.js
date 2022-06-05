import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import * as Icons from '@ant-design/icons-vue'

export function registerComponents(app) {
  app.use(Antd)
  for (const i in Icons) {
    app.component(i, Icons[i])
  }
}

import { mount } from '@vue/test-utils'
import MyButton from '../index.vue'

describe('MyButton.vue', () => {
  test('render', () => {
    const wrapper = mount(MyButton, {
      props: {},
    })
    expect(wrapper.classes()).toContain('my-button')
  })
})

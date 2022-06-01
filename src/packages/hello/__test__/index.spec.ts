import { mount } from '@vue/test-utils'
import Hello from '../index.vue'

describe('Hello.vue', () => {
  test('render', () => {
    const wrapper = mount(Hello, {
      props: {},
    })
    expect(wrapper.classes()).toContain('hello')
  })
})

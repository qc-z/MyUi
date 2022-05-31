import { mount } from '@vue/test-utils'
import Select from '../index.vue'

describe('Select.vue', () => {
  test('render', () => {
    const wrapper = mount(Select, {
      props: {},
    })
    expect(wrapper.classes()).toContain('select')
  })
})

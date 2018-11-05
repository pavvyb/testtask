import { shallowMount } from '@vue/test-utils'
import Viewname from '../../../src/components/ViewName.vue'

describe('ShowName.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Viewname, {
      data: () => ({
        login: 'tester'
      })
    })
  })

  it('The View Name page behaves correctly', () => {
    expect(wrapper.vm.login).toEqual('tester')
  })

  it('Renders container and it is visible', () => {
    expect(wrapper.contains('div#view-name')).toBe(true)
    expect(wrapper.isVisible()).toBe(true)
  })
})

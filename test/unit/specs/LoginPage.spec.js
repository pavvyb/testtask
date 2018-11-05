import { shallowMount } from '@vue/test-utils'
import Loginpage from '../../../src/components/LoginPage.vue'

describe('LoginPage.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Loginpage, {
      data: () => ({
        email: 'testmail@test.test',
        password: 'testing'
      })
    })
  })

  it('The Login Page input fields behave correctly', () => {
    expect(wrapper.vm.email).toEqual('testmail@test.test')
    expect(wrapper.vm.password).toEqual('testing')
  })

  it('Renders container and it is visible', () => {
    expect(wrapper.contains('div#loginpage')).toBe(true)
    expect(wrapper.isVisible()).toBe(true)
  })

  it('Contains Form', () => {
    expect(wrapper.contains('form')).toBe(true)
  })
})

import { shallowMount } from '@vue/test-utils'
import Register from '../../../src/components/Register.vue'

describe('Register.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Register, {
      data: () => ({
        email: 'testmail@test.test',
        login: 'tester',
        password: 'testing'
      })
    })
  })

  it('The Register Page input fields behave correctly', () => {
    expect(wrapper.vm.email).toEqual('testmail@test.test')
    expect(wrapper.vm.login).toEqual('tester')
    expect(wrapper.vm.password).toEqual('testing')
  })

  it('Renders container and it is visible', () => {
    expect(wrapper.contains('div#register')).toBe(true)
    expect(wrapper.isVisible()).toBe(true)
  })

  it('Contains Form', () => {
    expect(wrapper.contains('form')).toBe(true)
  })
})

import Vue from 'vue';
import { shallowMount } from '@vue/test-utils'
import Viewemail from '../../../src/components/ViewEmail.vue'

describe('ShowEmail.spec.js', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Viewemail, {
      data: () => ({
        email: 'testmail@test.test'
      })
    });
  })

  it('The View Email page behaves correctly', () => {
    expect(wrapper.vm.email).toEqual('testmail@test.test')
  });

  it('Renders container and it is visible', () => {
    expect(wrapper.contains('div#view-email')).toBe(true)
    expect(wrapper.isVisible()).toBe(true)
  });
})

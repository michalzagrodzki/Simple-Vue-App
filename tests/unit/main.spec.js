import { shallowMount } from '@vue/test-utils'
import Main from '@/components/Main.vue'

const wrapper = shallowMount(Main)

describe('Main', () => {
  it('renders a div', () => { 
  	expect(wrapper.contains('div')).toBe(true)
  })
})
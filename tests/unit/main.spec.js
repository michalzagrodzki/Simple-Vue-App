import { mount } from '@vue/test-utils'
import Main from '@/components/Main.vue'

const wrapper = mount(Main)
wrapper.setData({title: String})
describe('Main', () => {
  it('should contain title', () => { 
  	expect(wrapper.vm.title).toBe(String)
  })
})
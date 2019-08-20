import { mount } from '@vue/test-utils'
import Navbar from '@/components/Partials/nav.vue'

const wrapper = mount(Navbar)
wrapper.setData(
  { 
    links: {
      home: {
        name: String,
        value: String
      },
      portfolio: {
        name: String,
        value: String
      },
      contact: {
        name: String,
        value: String
      }
    }
  }
)

describe('Navbar', () => {
  it('should contain home link name', () => {
    expect(wrapper.vm.links.home.name).toBe(String)
  })
  it('should contain home link value', () => {
    expect(wrapper.vm.links.home.value).toBe(String)
  })
  it('should contain portfolio link name', () => {
    expect(wrapper.vm.links.portfolio.name).toBe(String)
  })
  it('should contain portfolio link value', () => {
    expect(wrapper.vm.links.portfolio.value).toBe(String)
  })
  it('should contain contact link name', () => {
    expect(wrapper.vm.links.contact.name).toBe(String)
  })
  it('should contain contact link value', () => {
    expect(wrapper.vm.links.contact.value).toBe(String)
  })
})

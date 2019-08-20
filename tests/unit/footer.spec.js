import { mount } from '@vue/test-utils'
import Footer from '@/components/Partials/footer.vue'

const wrapper = mount(Footer)
wrapper.setData(
  { 
    links: {
      facebook: {
        name: String,
        value: String
      },
      twitter: {
        name: String,
        value: String
      },
      linkedin: {
        name: String,
        value: String
      }
    }
  }
)

describe('Footer', () => {
  it('should contain facebook link name', () => {
    expect(wrapper.vm.links.facebook.name).toBe(String)
  })
  it('should contain facebook link value', () => {
    expect(wrapper.vm.links.facebook.value).toBe(String)
  })
  it('should contain twitter link name', () => {
    expect(wrapper.vm.links.twitter.name).toBe(String)
  })
  it('should contain twitter link value', () => {
    expect(wrapper.vm.links.twitter.value).toBe(String)
  })
  it('should contain linkedin link name', () => {
    expect(wrapper.vm.links.linkedin.name).toBe(String)
  })
  it('should contain linkedin link value', () => {
    expect(wrapper.vm.links.linkedin.value).toBe(String)
  })
})

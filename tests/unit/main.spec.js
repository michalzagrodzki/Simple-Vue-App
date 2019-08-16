import { mount } from '@vue/test-utils'
import Main from '@/components/Main.vue'

const wrapper = mount(Main)
wrapper.setData(
  { title: String,
    message: {
      title: String,
      subtitle: String
    },
    products: Array,
    productAction: {
      button: String
    },
    contact: {
      title: String,
      subtitle: String,
      button: String
    },
    sections: {
      message: String,
      products: String,
      contact: String
    }
  }
)

describe('Main', () => {
  it('should contain page title', () => {
    expect(wrapper.vm.title).toBe(String)
  })
  it('should contain message title', () => {
    expect(wrapper.vm.message.title).toBe(String)
  })
  it('should contain message subttile', () => {
    expect(wrapper.vm.message.subtitle).toBe(String)
  })
  it('should contain products array', () => {
    expect(wrapper.vm.products).toBe(Array)
  })
  it('should contain product action button text', () => {
    expect(wrapper.vm.productAction.button).toBe(String)
  })
  it('should contain contact title', () => {
    expect(wrapper.vm.contact.title).toBe(String)
  })
  it('should contain contact subtitle', () => {
    expect(wrapper.vm.contact.subtitle).toBe(String)
  })
  it('should contain contact button', () => {
    expect(wrapper.vm.contact.button).toBe(String)
  })
  it('should contain message section text', () => {
    expect(wrapper.vm.sections.message).toBe(String)
  })
  it('should contain products section text', () => {
    expect(wrapper.vm.sections.products).toBe(String)
  })
  it('should contain contact section text', () => {
    expect(wrapper.vm.sections.contact).toBe(String)
  })
})

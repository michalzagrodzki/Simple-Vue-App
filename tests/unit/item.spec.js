import { mount } from '@vue/test-utils'
import Item from '@/components/Item.vue'

const wrapper = mount(Item)
wrapper.setData(
  { 
    title: String,
    description: String,
    details: {
      client: String,
      services: String,
      year: String,
      link: String
    },
    images: Array,
    products: Array,
    error: {
      message: String
    }
  }
)

describe('Item', () => {
  it('should contain product title', () => {
    expect(wrapper.vm.title).toBe(String)
  })
  it('should contain product description', () => {
    expect(wrapper.vm.description).toBe(String)
  })
  it('should contain images array', () => {
    expect(wrapper.vm.images).toBe(Array)
  })
  it('should contain details of client', () => {
    expect(wrapper.vm.details.client).toBe(String)
  })
  it('should contain details of service', () => {
    expect(wrapper.vm.details.services).toBe(String)
  })
  it('should contain details of year', () => {
    expect(wrapper.vm.details.year).toBe(String)
  })
  it('should contain details of link', () => {
    expect(wrapper.vm.details.link).toBe(String)
  })
  it('should contain products array', () => {
    expect(wrapper.vm.products).toBe(Array)
  })
  it('should contain error message field', () => {
    expect(wrapper.vm.error.message).toBe(String)
  })
})

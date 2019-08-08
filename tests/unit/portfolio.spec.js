import { mount } from '@vue/test-utils'
import Portfolio from '@/components/Portfolio.vue'

const wrapper = mount(Portfolio)
wrapper.setData (
	{ title: String,
    subtitle: String,
    products: Array
  }
)

describe('Portfolio', () => {
  it('should contain page title', () => { 
  	expect(wrapper.vm.title).toBe(String)
  })
  it('should contain page sub title', () => { 
    expect(wrapper.vm.subtitle).toBe(String)
  })
  it('should contain products array', () => { 
    expect(wrapper.vm.products).toBe(Array)
  })
})
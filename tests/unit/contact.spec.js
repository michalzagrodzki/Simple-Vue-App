import { mount } from '@vue/test-utils'
import Contact from '@/components/Contact.vue'

const wrapper = mount(Contact)
wrapper.setData(
  { title: String,
    caption: {
      subtitle: String,
      text: String
    },
    form: {
      name: String,
      email: String,
      message: String
    },
    submitText: String,
    contact: {
      title: String,
      description: String,
      street: String,
      city: String,
      postcode: String,
      email: String,
      phone: String
    },
    subimittedMessage: {
      name: String,
      email: String,
      message: String
    },
    error: {
      message: String
    }
  }
)

describe('Contact', () => {
  it('should contain page title', () => {
    expect(wrapper.vm.title).toBe(String)
  })
  it('should contain caption title', () => {
    expect(wrapper.vm.caption.subtitle).toBe(String)
  })
  it('should contain caption text', () => {
    expect(wrapper.vm.caption.text).toBe(String)
  })
  it('should contain form field for name', () => {
    expect(wrapper.vm.form.name).toBe(String)
  })
  it('should contain form field for email', () => {
    expect(wrapper.vm.form.email).toBe(String)
  })
  it('should contain form field for message', () => {
    expect(wrapper.vm.form.message).toBe(String)
  })
  it('should contain text for submit button', () => {
    expect(wrapper.vm.submitText).toBe(String)
  })
  it('should contain contact details title', () => {
    expect(wrapper.vm.contact.title).toBe(String)
  })
  it('should contain contact details description', () => {
    expect(wrapper.vm.contact.description).toBe(String)
  })
  it('should contain street address contact', () => {
    expect(wrapper.vm.contact.street).toBe(String)
  })
  it('should contain city address contact', () => {
    expect(wrapper.vm.contact.city).toBe(String)
  })
  it('should contain postcode contact', () => {
    expect(wrapper.vm.contact.postcode).toBe(String)
  })
  it('should contain email contact', () => {
    expect(wrapper.vm.contact.email).toBe(String)
  })
  it('should contain phone contact', () => {
    expect(wrapper.vm.contact.phone).toBe(String)
  })
  it('should contain error message field', () => {
    expect(wrapper.vm.error.message).toBe(String)
  })
  it('should contain submitted message name field', () => {
    expect(wrapper.vm.subimittedMessage.name).toBe(String)
  })
  it('should contain submitted message email field', () => {
    expect(wrapper.vm.subimittedMessage.email).toBe(String)
  })
  it('should contain submitted message text field', () => {
    expect(wrapper.vm.subimittedMessage.message).toBe(String)
  })
})

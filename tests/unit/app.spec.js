import { mount, createLocalVue } from '@vue/test-utils'
import App from '@/App.vue'
import Router from 'vue-router'
import routes from '@/router/router.js'

const localVue = createLocalVue()
localVue.use(Router)

describe('App', () => {
  it('should render correctly', () => {
    const testRoutes = routes.options.routes
    const testRouter = new Router({ testRoutes })
    const wrapper = mount(App, { router: testRouter })
    expect(wrapper.vm).toBeDefined()
    expect(wrapper.element).toBeDefined()
  })
})

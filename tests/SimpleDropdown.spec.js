import { mount } from '@vue/test-utils'
import SimpleDropdown from '@/SimpleDropdown.vue'

// Mock the floating-vue module
jest.mock('floating-vue', () => ({
  Dropdown: {
    name: 'Dropdown',
    template: `
      <div data-testid="mock-dropdown" class="mock-dropdown">
        <slot></slot>
      </div>
    `,
    props: ['distance', 'triggers', 'theme', 'placement', 'autoHide'],
    emits: ['show', 'hide'],
    methods: {
      show() {
        this.$emit('show')
      },
      hide() {
        this.$emit('hide')
      },
    },
  },
}))

describe('SimpleDropdown', () => {
  it('renders correctly', () => {
    const wrapper = mount(SimpleDropdown, {
      slots: {
        default: '<div>Dropdown content</div>',
      },
    })

    const dropdown = wrapper.findComponent({ name: 'Dropdown' })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('[data-testid="mock-dropdown"]').exists()).toBe(true)
    expect(wrapper.text()).toContain('Dropdown content')
    expect(dropdown.exists()).toBe(true)
  })

  it('renders with custom props', () => {
    const wrapper = mount(SimpleDropdown, {
      props: {
        itemSelector: 'button',
        enableArrowNavigation: false,
      },
    })

    expect(wrapper.props().itemSelector).toBe('button')
    expect(wrapper.props().enableArrowNavigation).toBe(false)
    expect(wrapper.findComponent({ name: 'Dropdown' }).exists()).toBe(true)
  })

  it('renders with default props', () => {
    const wrapper = mount(SimpleDropdown)

    const dropdown = wrapper.findComponent({ name: 'Dropdown' })

    expect(dropdown.props()).toEqual(
      expect.objectContaining({
        distance: 14,
        triggers: ['click'],
        theme: 'simple-dropdown',
        placement: 'bottom-start',
        autoHide: '',
      }),
    )
  })
})

export const Props = {
  itemSelector: {
    type: String,
    default: 'li > a:not(.disabled):not(:disabled)'
  },
  enableArrowNavigation: {
    type: Boolean,
    default: true
  }
} as const

export type PopperContentRef = { $el: HTMLElement }

export type BaseDropdownRef = { hide: () => void; $el: HTMLElement; $refs: { popperContent: PopperContentRef } }

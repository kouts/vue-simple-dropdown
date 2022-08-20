<template>
  <Dropdown
    ref="baseDropdownRef"
    :distance="14"
    :triggers="['click']"
    theme="simple-dropdown"
    placement="bottom-start"
    auto-hide
    @show="show"
    @hide="hide"
  >
    <template v-for="(_, slot) in $slots" #[slot]="scope">
      <slot :name="slot" v-bind="scope || {}" />
    </template>
  </Dropdown>
</template>

<script setup lang="ts">
import { BaseDropdownRef, Props } from './VueSimpleDropdown.types'
import { Dropdown } from 'floating-vue'
import { getNextActiveElement, isVisible } from './utils'
import { onBeforeUnmount, ref } from 'vue'

const props = defineProps(Props)
const ARROW_UP_KEY = 'ArrowUp'
const ARROW_DOWN_KEY = 'ArrowDown'
const ESCAPE_KEY = 'Escape'
const ENTER_KEY = 'Enter'
const SPACE_KEY = ' '
const baseDropdownRef = ref<BaseDropdownRef | null>(null)
const activeClass = 'bg-gray-100'

const getItems = (containerEl: HTMLElement) => {
  const items = [...containerEl.querySelectorAll(`${props.itemSelector}`)] as HTMLElement[]

  return items.filter((element) => isVisible(element))
}

const getActiveItem = (items: HTMLElement[]) => {
  return items.find((item) => item.classList.contains(activeClass))
}

const clearActiveState = (items: HTMLElement[]) => {
  items.forEach((item) => item.classList.remove(activeClass))
}

const popoverKeydown = (e: KeyboardEvent) => {
  const popover = baseDropdownRef.value as BaseDropdownRef

  if ([ARROW_UP_KEY, ARROW_DOWN_KEY].includes(e.key)) {
    e.preventDefault()

    const items = getItems(popover.$refs.popperContent.$el)

    if (!items.length) {
      return
    }

    const target = getActiveItem(items) ?? (e.target as HTMLElement)
    const activeElement = getNextActiveElement(items, target, e.key === ARROW_DOWN_KEY, false)

    clearActiveState(items)
    activeElement.classList.add(activeClass)
  }
  if (e.key === ESCAPE_KEY) {
    popover.hide()
  }
  if (e.key === ENTER_KEY || e.key === SPACE_KEY) {
    if (e.target === popover.$refs.popperContent.$el) {
      e.preventDefault()
      popover.hide()
    } else {
      getActiveItem(getItems(popover.$refs.popperContent.$el))?.click()
    }
  }
}
const show = () => {
  if (props.enableArrowNavigation) {
    document.addEventListener('keydown', popoverKeydown)
  }
}

const hide = () => {
  const popover = baseDropdownRef.value as BaseDropdownRef

  if (popover) {
    clearActiveState(getItems(popover.$refs.popperContent.$el))
    const popoverTrigger = popover.$el.firstElementChild as HTMLElement | null

    popoverTrigger?.focus()
  }

  document.removeEventListener('keydown', popoverKeydown)
}

onBeforeUnmount(() => {
  document.removeEventListener('keydown', popoverKeydown)
})
</script>

<style>
.v-popper--theme-simple-dropdown .v-popper__arrow-container {
  display: none;
}
</style>

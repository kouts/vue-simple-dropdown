<template>
  <BaseDropdown
    ref="baseDropdown"
    :distance="14"
    placement="bottom-start"
    :triggers="['click']"
    auto-hide
    @show="show"
    @hide="hide"
  >
    <template v-for="(_, slot) in $slots" #[slot]="scope">
      <slot :name="slot" v-bind="scope || {}" />
    </template>
  </BaseDropdown>
</template>

<script setup lang="ts">
import BaseDropdown from './BaseDropdown.vue'
import { getNextActiveElement, isVisible } from './utils'
import { onBeforeUnmount, ref } from 'vue'
import 'floating-vue/dist/style.css'

interface Props {
  dropdownItemSelector?: string
  enableArrowNavigation?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  dropdownItemSelector: 'li > a:not(.disabled):not(:disabled)'
})

type popperContentRef = { $el: HTMLElement }
type baseDropdownRef = { hide: () => void; $el: HTMLElement; $refs: { popperContent: popperContentRef } }

const ARROW_UP_KEY = 'ArrowUp'
const ARROW_DOWN_KEY = 'ArrowDown'
const ESCAPE_KEY = 'Escape'
const baseDropdown = ref<baseDropdownRef | null>(null)

const popoverKeydown = (e: KeyboardEvent) => {
  const popover = baseDropdown.value as baseDropdownRef
  const popperContentEl = popover.$refs.popperContent.$el

  if ([ARROW_UP_KEY, ARROW_DOWN_KEY].includes(e.key)) {
    e.preventDefault()

    let items = [...popperContentEl.querySelectorAll(`${props.dropdownItemSelector}`)] as HTMLElement[]

    items = items.filter((element) => isVisible(element))

    if (!items.length) {
      return
    }

    const target = e.target as HTMLInputElement

    getNextActiveElement(items, target, e.key === ARROW_DOWN_KEY, !items.includes(target)).focus()
  }
  if (e.key === ESCAPE_KEY) {
    popover.hide()
  }
}
const show = () => {
  document.addEventListener('keydown', popoverKeydown)
}

const hide = () => {
  document.removeEventListener('keydown', popoverKeydown)
}

onBeforeUnmount(() => {
  document.removeEventListener('keydown', popoverKeydown)
})
</script>

<style scoped>
.v-popper--theme-simple .v-popper__inner {
  background: #fff;
}
.v-popper--theme-simple .v-popper__arrow-inner {
  visibility: visible;
  border-color: #fff;
}
.v-popper--theme-simple .v-popper__arrow-outer {
  border-color: #ddd;
}
.v-popper--theme-simple .v-popper__arrow-outer {
  border-color: #ddd;
}
</style>

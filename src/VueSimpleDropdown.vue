<template>
  <BaseDropdown :distance="14" placement="bottom-start" :triggers="['click']" auto-hide>
    <template v-for="(_, slot) in $slots" #[slot]="scope">
      <slot :name="slot" v-bind="scope || {}" />
    </template>
  </BaseDropdown>
</template>

<script setup lang="ts">
import BaseDropdown from './BaseDropdown.vue'
import 'floating-vue/dist/style.css'
</script>

<style>
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

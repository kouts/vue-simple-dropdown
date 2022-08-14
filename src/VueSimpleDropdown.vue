<template>
  <BaseDropdown :distance="14" placement="bottom-start" :triggers="['click']" auto-hide popper-class="border rounded">
    <!-- This will be the popover reference (for the events and position) -->
    <button
      class="inline-block px-6 py-2.5 bg-blue-600 text-white leading-tight rounded hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
    >
      Click me
    </button>

    <!-- This will be the content of the popover -->
    <template #popper="{ hide }">
      <div class="w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
          <li>
            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" @click="hide"
              >Dashboard</a
            >
          </li>
          <li>
            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
          </li>
          <li>
            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
      </div>
    </template>
  </BaseDropdown>
</template>

<script setup lang="ts">
import 'floating-vue/dist/style.css'

import BaseDropdown from './BaseDropdown.vue'
import { ref } from 'vue'

const msg = ref('hello')
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

<script setup lang="ts">
import SimpleDropdown from '@/VueSimpleDropdown.vue'
import { ref } from 'vue'

const example = ref('vue-simple-dropdown')
</script>

<template>
  <div class="container mx-auto px-4">
    <div h1 class="text-3xl font-bold pt-4">Playground for {{ example }}</div>
    <div class="mt-4">
      <SimpleDropdown class="inline" popper-class="border rounded">
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
      </SimpleDropdown>
    </div>
  </div>
</template>

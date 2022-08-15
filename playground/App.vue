<script setup lang="ts">
import SimpleDropdown from '@/VueSimpleDropdown.vue'
import { ref } from 'vue'

const example = ref('vue-simple-dropdown')
const toggle = ref(true)
</script>

<template>
  <div class="container mx-auto px-4">
    <div h1 class="text-3xl font-bold pt-4">Playground for {{ example }}</div>
    <div class="mt-4">
      <button type="button" class="border py-2 px-4 rounded" @click="toggle = !toggle">Toggle</button>
    </div>
    <div v-if="toggle" class="mt-4">
      <SimpleDropdown class="inline" popper-class="w-44 bg-white border rounded-lg shadow-lg">
        <!-- Popover trigger -->
        <button
          class="inline-block px-6 py-2.5 bg-blue-600 text-white leading-tight rounded hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
        >
          Click me
        </button>

        <!-- Popover content -->
        <template #popper="{ hide }">
          <ul class="py-1 text-sm text-gray-70">
            <li>
              <a href="#" class="block py-2 px-4 hover:bg-gray-100 focus:bg-gray-100 outline-none" @click="hide">Dashboard</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-4 hover:bg-gray-100 focus:bg-gray-100 outline-none">Settings</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-4 hover:bg-gray-100 focus:bg-gray-100 outline-none">Earnings</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-4 hover:bg-gray-100 focus:bg-gray-100 outline-none">Sign out</a>
            </li>
          </ul>
        </template>
      </SimpleDropdown>
    </div>
  </div>
</template>

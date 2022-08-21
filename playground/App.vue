<script setup lang="ts">
import SimpleDropdown from '@/SimpleDropdown.vue'
import { ref } from 'vue'

const toggle1 = ref(true)
const toggle2 = ref(true)
</script>

<template>
  <div class="container mx-auto px-4">
    <h1 class="text-3xl font-bold pt-4">Playground for vue-simple-dropdown</h1>

    <div class="grid grid-cols-2">
      <div>
        <div class="mt-4">
          <button type="button" class="border py-3 px-4 rounded" @click="toggle1 = !toggle1">Show/hide dropdown</button>
        </div>
        <div v-if="toggle1" class="mt-4">
          <SimpleDropdown class="inline" popper-class="w-64 bg-white border rounded-lg shadow-md">
            <!-- Dropdown trigger -->
            <button
              class="dropdown-trigger inline-block px-6 py-3 bg-blue-600 text-white leading-tight rounded hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
            >
              Dropdown button
            </button>

            <!-- Dropdown content -->
            <template #popper="{ hide }">
              <ul class="py-1 text-sm text-gray-70">
                <li>
                  <a href="#" class="block py-2 px-4 hover:bg-gray-100 focus:bg-gray-100 outline-none" @click="hide">
                    Action (closes dropdown)
                  </a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-4 hover:bg-gray-100 focus:bg-gray-100 outline-none">Another action</a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-4 hover:bg-gray-100 focus:bg-gray-100 outline-none">Something else here</a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-4 hover:bg-gray-100 focus:bg-gray-100 outline-none">Last menu item</a>
                </li>
              </ul>
            </template>
          </SimpleDropdown>
        </div>
      </div>
      <div>
        <div class="mt-4">
          <button type="button" class="border py-3 px-4 rounded" @click="toggle2 = !toggle2">Show/hide dropdown</button>
        </div>
        <div v-if="toggle2" class="mt-4">
          <SimpleDropdown
            class="inline"
            item-selector="li > button:not(.disabled):not(:disabled)"
            popper-class="w-64 bg-white border rounded-lg shadow-md"
          >
            <!-- Dropdown trigger -->
            <button
              class="dropdown-trigger inline-block px-6 py-3 bg-blue-600 text-white leading-tight rounded hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
            >
              Dropdown button
            </button>

            <!-- Dropdown content -->
            <template #popper="{ hide }">
              <ul class="py-1 text-sm text-gray-70">
                <li>
                  <button
                    class="block py-2 w-full text-left px-4 hover:bg-gray-100 focus:bg-gray-100 outline-none"
                    @click="hide"
                  >
                    Action (closes dropdown)
                  </button>
                </li>
                <li>
                  <button class="block py-2 w-full text-left px-4 hover:bg-gray-100 focus:bg-gray-100 outline-none">
                    Another action
                  </button>
                </li>
                <li>
                  <button class="block py-2 w-full text-left px-4 hover:bg-gray-100 focus:bg-gray-100 outline-none">
                    Something else here
                  </button>
                </li>
                <li>
                  <button class="block py-2 w-full text-left px-4 hover:bg-gray-100 focus:bg-gray-100 outline-none">
                    Last menu item
                  </button>
                </li>
              </ul>
            </template>
          </SimpleDropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dropdown-trigger::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: '';
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}
</style>

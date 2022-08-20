<script setup lang="ts">
import SimpleDropdown from '@/VueSimpleDropdown.vue'
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
          <button type="button" class="border py-2 px-4 rounded" @click="toggle1 = !toggle1">Show/hide dropdown</button>
        </div>
        <div v-if="toggle1" class="mt-4">
          <SimpleDropdown class="inline" popper-class="w-44 bg-white border rounded-lg shadow-md">
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
                  <a href="#" class="block py-2 px-4 hover:bg-gray-100 focus:bg-gray-100 outline-none" @click="hide"
                    >Dashboard</a
                  >
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
      <div>
        <div class="mt-4">
          <button type="button" class="border py-2 px-4 rounded" @click="toggle2 = !toggle2">Show/hide dropdown</button>
        </div>
        <div v-if="toggle2" class="mt-4">
          <SimpleDropdown
            class="inline"
            item-selector="li > button:not(.disabled):not(:disabled)"
            popper-class="w-44 bg-white border rounded-lg shadow-md"
          >
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
                  <button
                    class="block py-2 w-full text-left px-4 hover:bg-gray-100 focus:bg-gray-100 outline-none"
                    @click="hide"
                  >
                    Dashboard
                  </button>
                </li>
                <li>
                  <button class="block py-2 w-full text-left px-4 hover:bg-gray-100 focus:bg-gray-100 outline-none">
                    Settings
                  </button>
                </li>
                <li>
                  <button class="block py-2 w-full text-left px-4 hover:bg-gray-100 focus:bg-gray-100 outline-none">
                    Earnings
                  </button>
                </li>
                <li>
                  <button class="block py-2 w-full text-left px-4 hover:bg-gray-100 focus:bg-gray-100 outline-none">
                    Sign out
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

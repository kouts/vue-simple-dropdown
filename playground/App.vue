<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import SimpleDropdown from '@/VueSimpleDropdown.vue'
import { ref } from 'vue'

const example = ref('vue-simple-dropdown')
</script>

<template>
  <div class="container mx-auto px-4">
    <div h1 class="text-3xl font-bold pt-4">Playground for {{ example }}</div>
    <SimpleDropdown />
  </div>
</template>

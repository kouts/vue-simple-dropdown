# vue-simple-dropdown <a href="https://npm.im/@kouts/vue-simple-dropdown"><img src="https://badgen.net/npm/v/@kouts/vue-simple-dropdown"></a> ![](https://img.badgesize.io/kouts/vue-simple-dropdown/main/dist/vue-simple-dropdown.umd.js.svg) ![](https://img.badgesize.io/kouts/vue-simple-dropdown/main/dist/vue-simple-dropdown.umd.js.svg?compression=gzip)

A Vue.js 3 simple dropdown menu component for [floating-vue](https://github.com/Akryum/floating-vue).

> vue-simple-dropdown is build on top of [floating-vue](https://github.com/Akryum/floating-vue) to provide 
> **keyboard navigation** for simple dropdown menus. 

## Features at a glance

- All [floating-vue Dropdown component](https://floating-vue.starpad.dev/guide/component.html#dropdown) features
- Completely headless, easily customizable using any CSS framework e.g Tailwind
- Keyboard navigation using the Up/Down arrows
- Customizable CSS selector for the menu items used for the keyboard navigation
- Opens and closes with the `space` and `enter` key when the dropdown trigger has focus
- Prevents page scroll while navigating the menu with the keyboard
- Closes by clicking outside or by using the `Esc` key

## Installation

```bash
npm i @kouts/vue-simple-dropdown
```

## Usage

```html
<script setup lang="ts">
import SimpleDropdown from '@kouts/vue-simple-dropdown'
</script>

<template>
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
      </ul>
    </template>
  </SimpleDropdown>
</template>
```

## Styling
`vue-simple-dropdown` does not include any styling. You can use vanilla CSS or your favorite CSS framework to style it.  
By default it sets the `floating-vue` `Dropdown` theme to `simple-dropdown` and hides the dropdown `arrow`.  
The `Dropdown` arrow can be enabled by passing a different `theme` `prop`, e.g `theme="my-theme"`.

## Props

`vue-simple-dropdown` inherits **all** `props` from [floating-vue Dropdown](https://floating-vue.starpad.dev/api/#component-props)  
and sets some defaults:

- `distance: 14`
- `triggers: ['click']`
- `theme: "simple-dropdown"`
- `placement: "bottom-start"`
- `autoHide: true`

It also **adds** some `props` on top:

| Name | Type | Description | Default
| :--- | :--- | :--- | :--- |
| enableArrowNavigation | boolean | Enables/disables the arrow navigation feature | true |
| itemSelector | string | The dropdown item selector for the arrow navigation | `li > a:not(.disabled):not(:disabled)` |

## Slots

`vue-simple-dropdown` inherits **all** `slots` from [floating-vue Dropdown](https://floating-vue.starpad.dev/api/#component-slots)  

## Events

`vue-simple-dropdown` inherits **all** `events` from [floating-vue Dropdown](https://floating-vue.starpad.dev/api/#component-events)  

# Development

In order to start development:

```sh
npm i
npm run dev
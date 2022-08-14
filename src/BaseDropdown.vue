<script lang="ts">
import { PopperWrapper } from 'floating-vue'

export default {
  ...PopperWrapper,
  name: 'BaseDropdown',
  vPopperTheme: 'simple-dropdown'
}
</script>

<style>
.v-popper--theme-simple-dropdown .v-popper__inner {
  background: #fff;
}

.v-popper--theme-simple-dropdown .v-popper__arrow-inner {
  visibility: visible;
  border-color: #fff;
}

.v-popper--theme-simple-dropdown .v-popper__arrow-outer {
  border-color: #ddd;
}
</style>

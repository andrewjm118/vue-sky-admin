<template>
  <div class="container-ghost-bs">
    <div v-if="$slots.header" ref="header" class="container-ghost-bs__header">
      <slot name="header" />
    </div>
    <div ref="wrapper" class="container-ghost-bs__body">
      <!-- https://github.com/projects/admin/issues/181 -->
      <div>
        <slot />
      </div>
    </div>
    <div v-if="$slots.footer" ref="footer" class="container-ghost-bs__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
import bs from './mixins/bs'
export default {
  name: 'container-card-bs',
  mixins: [
    bs
  ]
}
</script>

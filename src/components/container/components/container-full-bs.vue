<template>
  <div class="container-full-bs">
    <div v-if="$slots.header" ref="header" class="container-full-bs__header">
      <slot name="header" />
    </div>
    <div ref="wrapper" class="container-full-bs__body">
      <div class="container-full-bs__body-wrapper-inner">
        <slot />
      </div>
    </div>
    <div v-if="$slots.footer" ref="footer" class="container-full-bs__footer">
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

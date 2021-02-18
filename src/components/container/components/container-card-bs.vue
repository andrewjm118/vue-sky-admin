<template>
  <div class="container-card-bs">
    <div v-if="$slots.header" ref="header" class="container-card-bs__header">
      <slot name="header" />
    </div>
    <div ref="wrapper" class="container-card-bs__body">
      <div class="container-card-bs__body-wrapper-inner">
        <div class="container-card-bs__body-card">
          <slot />
        </div>
      </div>
    </div>
    <div v-if="$slots.footer" ref="footer" class="container-card-bs__footer">
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

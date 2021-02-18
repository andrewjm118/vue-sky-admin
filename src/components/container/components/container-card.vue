<template>
  <div class="container-card">
    <div v-if="$slots.header" ref="header" class="container-card__header">
      <slot name="header" />
    </div>
    <div ref="body" class="container-card__body">
      <div class="container-card__body-card">
        <slot />
      </div>
    </div>
    <div v-if="$slots.footer" ref="footer" class="container-card__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
import scroll from './mixins/normal'
export default {
  name: 'container-card',
  mixins: [
    scroll
  ],
  mounted() {
    // 增加滚动事件监听
    this.addScrollListener()
  },
  beforeDestroy() {
    // 移除滚动事件监听
    this.removeScrollListener()
  }
}
</script>

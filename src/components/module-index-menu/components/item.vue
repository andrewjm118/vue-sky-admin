<template>
  <el-button
    class="module-index-menu-item"
    @click="handleMenuSelect(menu.path)"
  >
    {{ menu.title }}
  </el-button>
</template>

<script>
import mixinMenu from '@/common/mixins/menu'
export default {
  mixins: [
    mixinMenu
  ],
  props: {
    menu: {
      default: () => ({})
    }
  }
}
</script>

<style lang="scss">
.module-index-menu-item {
  margin-bottom: 10px;
}
</style>

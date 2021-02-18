<template>
  <container type="ghost">
    <module-index-banner slot="header" v-bind="banner" />
    <module-index-menu :menu="menu" />
  </container>
</template>

<script>
import menu from '@/menu/modules/demo-plugins'
export default {
  data() {
    return {
      menu,
      banner: {
        title: 'PLUGIN',
        subTitle: '集成了许多实用插件'
      }
    }
  }
}
</script>

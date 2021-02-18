<template>
  <container type="ghost">
    <module-index-banner slot="header" v-bind="banner" />
    <module-index-menu :menu="menu" />
  </container>
</template>

<script>
import menu from '@/menu/modules/demo-components'
export default {
  data() {
    return {
      menu,
      banner: {
        title: 'COMPONENTS',
        subTitle: '为你提供了一些上手即用的组件'
      }
    }
  }
}
</script>

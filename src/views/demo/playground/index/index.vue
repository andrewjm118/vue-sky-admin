<!--
 * @Description: 请输入....
 * @Author: andrewjm
 * @Date: 2021-01-05 09:39:23
-->
<template>
  <container type="ghost">
    <module-index-banner slot="header" v-bind="banner" />
    <module-index-menu :menu="menu" />
  </container>
</template>

<script>
import menu from '@/menu/modules/demo-playground'
export default {
  data() {
    return {
      menu,
      banner: {
        title: '功能',
        subTitle: '一些常用功能'
      }
    }
  }
}
</script>

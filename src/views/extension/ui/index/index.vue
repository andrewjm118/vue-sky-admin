<!--
 * @Description: 请输入....
 * @Author: andrewjm
 * @Date: 2021-02-02 08:51:42
-->
<template>
  <container type="ghost">
    <module-index-banner slot="header" v-bind="banner" />
    <module-index-menu :menu="menu" />
  </container>
</template>

<script>
import menu from '@/menu/modules/extension'
export default {
  data() {
    return {
      menu,
      banner: {
        title: 'UI库清单',
        subTitle: '总结出常用的页面效果'
      }
    }
  }
}
</script>

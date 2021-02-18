<!--
 * @Description: 请输入....
 * @Author: andrewjm
 * @Date: 2020-12-30 11:38:51
-->
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
import menu from '@/menu/modules/material'
export default {
  data() {
    return {
      menu,
      banner: {
        title: '物料清单',
        subTitle: '工作中用到的业务组件'
      }
    }
  }
}
</script>

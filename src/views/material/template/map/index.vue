<!--
 * @Description: 请输入....
 * @Author: andrewjm
 * @Date: 2020-12-30 11:43:41
-->
<template>
  <container>
    <template slot="header">研发部</template>
    <img :src="`${$baseUrl}static/images/material/template/map.png`" width="50%">
    <markdown  :source="record" style="margin-top:20px;" />
    <template slot="footer">Andrewjm 制作</template>
  </container>
</template>

<script>
import record from './md/record.md'
export default {
  data() {
    return {
      record
    }
  }
}
</script>

<style>

</style>

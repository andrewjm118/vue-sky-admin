<!--
 * @Description: 请输入....
 * @Author: andrewjm
 * @Date: 2021-04-20 16:20:16
 * @LastEditors: andrewjm
-->
<template>
  <container>
    <el-button type="primary" size="default" @click="modal1 = true">批量发送短信</el-button>
    <Batchmessages  :status-value.sync="modal1"  />
  </container>
</template>

<script>
import Batchmessages from './components/BatchMessages'
export default {
  name: 'sync',
  components: {
    Batchmessages
  },
  data() {
    return {
      modal1: false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

<template>
  <container>
    <p class="d2-mt-0">useragent</p>
    <el-input :value="uaData.ua" />
    <p>格式化数据 in vuex: state.ua.data</p>
    <highlight :code="uaStr" />
  </container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('ua', {
      uaData: 'data'
    }),
    uaStr() {
      const { browser, engine, os, device, cpu } = this.uaData
      return JSON.stringify({ browser, engine, os, device, cpu }, null, 2)
    }
  }
}
</script>

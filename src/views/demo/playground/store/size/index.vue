<template>
  <container type="card">
    <el-radio-group v-model="currentValue" @change="set">
      <el-radio-button label="default" />
      <el-radio-button label="medium" />
      <el-radio-button label="small" />
      <el-radio-button label="mini" />
    </el-radio-group>
  </container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      currentValue: ''
    }
  },
  computed: {
    ...mapState('size', [
      'value'
    ])
  },
  watch: {
    value: {
      handler(val) {
        this.currentValue = val
      },
      immediate: true
    }
  },
  methods: {
    ...mapActions('size', [
      'set'
    ])
  }
}
</script>

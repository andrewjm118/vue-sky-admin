<template>
  <el-button class="mr btn-text can-hover" type="text" @click="handleClick">
    <icon name="search" style="font-size: 18px;" />
  </el-button>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>

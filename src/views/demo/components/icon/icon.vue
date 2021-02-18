<template>
  <container>
    <template slot="header">图标组件</template>
    <icon class="d2-mr-10" />
    <icon name="github" class="d2-mr-10" />
    <icon name="github" style="font-size: 100px;" class="d2-mr-10" />
    <icon name="github" class="icon-demo" />
  </container>
</template>

<style lang="scss" scoped>
.icon-demo {
  transition: all .3s;
  font-size: 100px;
  color: #409EFF;
  @extend %unable-select;
  &:hover{
    color: #F56C6C;
    transform: scale(1.2) rotate(30deg);
  }
}
</style>

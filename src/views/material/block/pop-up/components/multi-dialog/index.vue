<!--
 * @Description: 请输入....
 * @Author: andrewjm
 * @Date: 2021-01-19 10:35:36
-->
<template>
  <div id="vue-drag-resize">
    <VueDragResize :is-active="true" :w="200" :h="200"  :x="100" :y="200" style="background:red;" @resizing="resize" @dragging="resize">

      <h3>可移动框</h3>
      <p>{{ top }} х {{ left }} </p>
      <p>{{ width }} х {{ height }}</p>

    </VueDragResize>

    <VueDragResize :is-active="false" :w="200" :h="200" :x="500" :y="200" style="background:green;" @resizing="resize" @dragging="resize">

      <h3>可移动框</h3>

    </VueDragResize>
  </div>
</template>

<script>
import VueDragResize from 'vue-drag-resize'
export default {
  components: {
    VueDragResize
  },
  data() {
    return {
      width: 0,
      height: 0,
      top: 0,
      left: 0
    }
  },
  methods: {
    resize(newRect) {
      this.width = newRect.width
      this.height = newRect.height
      this.top = newRect.top
      this.left = newRect.left
    }
  }
}
</script>

<style>

</style>

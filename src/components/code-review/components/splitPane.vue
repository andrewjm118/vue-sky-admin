<template>
  <div
    id="split-pane"
    class="split-pane"
    @mousemove="lineMove"
  >
    <div
      id="left"
      ref="left"
      class="left-pane pane"
    >
      <slot name="left" />
    </div>
    <div
      ref="line"
      class="pane split-line"
      @mousedown="beginMove"
      @mouseup="endMove"
    />
    <div
      id="right"
      ref="right"
      class="right-pane pane"
    >
      <slot name="right" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'split-pane',
  props: {
    value: {
      type: Number,
      default: 0.5,
      validator: value => {
        return value > 0 && value < 1
      }
    }
  },
  data() {
    return {
      canMove: false
    }
  },
  mounted() {
    this.setWidth()
    this.splitPaneEl = document.getElementById('split-pane')
  },
  methods: {
    setWidth() {
      // 根据传入的left right 计算宽度比例
      const leftWidth = `${this.value * 100}%`
      const rightWidth = `${(1 - this.value) * 100}%`
      this.$refs.left.style = `right:${rightWidth}`
      this.$refs.right.style = `left:${leftWidth}`
      this.$refs.line.style = `left:${leftWidth}`
    },
    beginMove() {
      console.log('beginMove')
      this.canMove = true
    },
    lineMove(e) {
      if (this.canMove) {
        const splitPane = this.splitPaneEl.getBoundingClientRect()
        const splitPaneWidth = splitPane.width
        const splitPaneX = splitPane.x

        const mouseX = e.pageX

        const value = (mouseX - splitPaneX) / splitPaneWidth
        const leftWidth = `${value * 100}%`
        const rightWidth = `${(1 - value) * 100}%`
        this.$refs.left.style = `right:${rightWidth}`
        this.$refs.right.style = `left:${leftWidth}`
        this.$refs.line.style = `left:${leftWidth}`
      }
    },
    endMove() {
      console.log('endMove')
      this.canMove = false
    }
  }
}
</script>

<style lang="scss">
.split-pane {
  position: relative;
  width: 100%;
  height: 100%;
  .pane {
    position: absolute;
    top: 0;
    bottom: 0;
  }
  .left-pane {
    left: 0;
  }
  .right-pane {
    right: 0;
    padding: 10px 10px 10px 16px;
  }
  .split-line {
    width: 6px;
    height: 100%;
    background: #eee;
    z-index: 10;
    cursor: col-resize;
  }
}
</style>


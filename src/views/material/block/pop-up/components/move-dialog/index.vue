<!--
 * @Description: 可移动对话框
 * @Author: andrewjm
 * @Date: 2021-01-13 10:13:15
-->
<template>
  <div v-if="visible" class="my_dialog">
    <!-- 遮罩层 -->
    <div class="my_dialog_mask" />
    <div id="my_dialog_box" v-drag class="my_dialog_box">
      <!-- 标题 -->
      <div class="my_dialog_title">
        {{ title }}
        <span class="my_dialog_close" @click="cancel"><i class="el-icon-close daily-close" /></span>
      </div>
      <!-- 内容 -->
      <div class="my_dialog_content">
        <slot />
      </div>
      <!-- 底部按钮 -->

      <slot name="footer" />

      <!-- <button v-if="showCancelButton" class="btn cancelBtn" @click="cancel">{{ canceltext }}</button>
        <button class="btn confirmBtn" @click="confirm">{{ confirmtext }}</button> -->

    </div>
  </div>
</template>

<script>
export default {
  name: 'move-dialog',
  directives: {
    drag: {
      inserted: function(el, binding, vnode) {
        vnode = vnode.elm
        el.onmousedown = (event) => {
          if (event.target.className !== 'my_dialog_title') {
            return
          }
          // (clientX, clientY)点击位置距离当前可视区域的坐标(x，y)
          // offsetLeft, offsetTop 距离上层或父级的左边距和上边距

          // 获取鼠标在弹窗中的位置
          const mouseX = event.clientX - vnode.offsetLeft
          const mouseY = event.clientY - vnode.offsetTop

          // 绑定移动和停止函数
          document.onmousemove = (event) => {
            let left, top

            // 获取新的鼠标位置(event.clientX, event.clientY)
            // 弹窗应该在的位置(left, top)
            left = event.clientX - mouseX
            top = event.clientY - mouseY

            // offsetWidth、offsetHeight 当前元素的宽度
            // innerWidth、innerHeight 浏览器可视区的宽度和高度

            // 获取弹窗在页面中距X轴的最小、最大 位置
            const minX = -vnode.offsetWidth / 2 + 100
            const maxX = window.innerWidth + vnode.offsetWidth / 2 - 100
            if (left <= minX) {
              left = minX
            } else if (left >= maxX) {
              left = maxX
            }

            // 获取弹窗在页面中距Y轴的最小、最大 位置
            const minY = vnode.offsetHeight / 2
            const maxY = window.innerHeight + vnode.offsetHeight / 2 - 100
            if (top <= minY) {
              top = minY
            } else if (top >= maxY) {
              top = maxY
            }
            // 赋值移动
            vnode.style.left = left + 'px'
            vnode.style.top = top + 'px'
          }
          document.onmouseup = () => {
            document.onmousemove = document.onmouseup = null
          }
        }
        window.onresize = () => {
          vnode.style.left = '50%'
          vnode.style.top = '50%'
        }
      }
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    canceltext: {
      type: String,
      default: ''
    },
    confirmtext: {
      type: String,
      default: ''
    },
    showCancelButton: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    cancel: function() {
      // .sync 实现弹窗显示 or 隐藏
      this.$emit('update:visible', false)
      // this.$emit('cancel')
    },
    confirm: function() {
      this.$emit('confirm')
    }
  }
}
</script>

<style lang="scss" scoped>
.my_dialog {
  position: fixed;
  z-index: 2000;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  pointer-events: auto;
}
.my_dialog_mask {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  // background-color: #1e2b41;
  // opacity: 0.6;
}
.my_dialog_box {
  position: absolute;
  width: 830px;
  height:auto;
  top: 50%;
  left: 50%;
  max-width: 100%;
  border-radius: 5px;
  overflow: hidden;
  background: #1e2b41;
  transform: translate(-50%, -50%);
}
.my_dialog_content {
  min-height: 100px;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  padding: 20px;
  text-align: left;
  overflow: hidden;
  box-sizing: border-box;
}
.my_dialog_title {
  cursor: all-scroll;
  word-break: keep-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  top: 0;
  left: 0;
  height: 54px;
  line-height: 54px;
  color:#e2e7f1;
  font-size: 18px;
  padding: 0 31px 0 18px;
  text-align: left;
  user-select: none;
}
.my_dialog_close {
  cursor: pointer;
  position: absolute;
  top: 50%;
  margin-top: -13px;
  right: 20px;
  width: 16px;
  height: 16px;
  line-height: 16px;
  color: #ccc;
}
.my_dialog_close:hover {
  color: #409eff;
}

.my_dialog_bottom {
  padding:0 20px 20px 0;
  display: flex;
  flex-direction: row-reverse;
  align-items:center;
  // justify-content:space-between;
  .popup-footer-btn {
    margin-right:20px;
  }
}

</style>

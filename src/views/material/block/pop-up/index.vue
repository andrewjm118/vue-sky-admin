<!--
 * @Description: 请输入....
 * @Author: andrewjm
 * @Date: 2021-01-08 14:21:50
-->
<template>
  <container>
    <el-button @click="dialogVisible = true">element ui 弹出框</el-button>
    <el-button @click="moveDialogVisible = true">原生可移动弹出框</el-button>
    <el-dialog
      title="提示(element ui 弹出框)"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <span>详细配置请查看element ui官网</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <move-dialog :visible.sync="moveDialogVisible" title="测试移动对话框">
      <div style="color:#fff">可移动弹出框内容</div>
      <div slot="footer">
        <div class="my_dialog_bottom">
          <div class="popup-footer-btn">
            <el-button type="primary" class="mr-5" @click="handleMoveDialog">确认</el-button>
            <el-button type="primary" @click="closeMoveDialog">取消</el-button>
          </div>
        </div>
      </div>
    </move-dialog>
    <multi-dialog />

  </container>
</template>

<script>
import MoveDialog from './components/move-dialog'
import MultiDialog from './components/multi-dialog'

export default {
  name: 'pop-up',
  components: {
    MoveDialog,
    MultiDialog
  },
  data() {
    return {
      dialogVisible: false,
      moveDialogVisible: false,
      multiDialogVisible: false,
      show: true
    }
  },
  methods: {
    movePopup() {

    },
    handleMoveDialog() {
      // todo
      this.moveDialogVisible = false
    },
    closeMoveDialog() {
      // todo
      this.moveDialogVisible = false
    }
  }
}
</script>

<style>

</style>

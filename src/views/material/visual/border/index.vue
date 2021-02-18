<!--
 * @Description: 可视化边框
 * @Author: andrewjm
 * @Date: 2021-01-19 16:35:12
-->
<template>
  <container>
    <el-row style="background:#282c34;padding:40px;">
      <el-row>
        <el-col :span="6">
          <dv-border-box-1 class="border-container">
            <div class="border-content">
              边框效果1
            </div>
          </dv-border-box-1>
        </el-col>
        <el-col :span="6">
          <dv-border-box-2  class="border-container">
            <div class="border-content">
              边框效果2
            </div>
          </dv-border-box-2>
        </el-col>
        <el-col :span="6">
          <dv-border-box-3  class="border-container">
            <div class="border-content">
              边框效果3
            </div>
          </dv-border-box-3>
        </el-col>
        <el-col :span="6">
          <dv-border-box-4 class="border-container">
            <div class="border-content">
              边框效果4
            </div>
          </dv-border-box-4>
        </el-col>
        <el-col :span="6">
          <dv-border-box-5 class="border-container">
            <div class="border-content">
              边框效果5
            </div>
          </dv-border-box-5>
        </el-col>
        <el-col :span="6">
          <dv-border-box-6 class="border-container">
            <div class="border-content">
              边框效果6
            </div>
          </dv-border-box-6>
        </el-col>
        <el-col :span="6">
          <dv-border-box-7 class="border-container">
            <div class="border-content">
              边框效果7
            </div>
          </dv-border-box-7>
        </el-col>
        <el-col :span="6">
          <dv-border-box-8 class="border-container">
            <div class="border-content">
              边框效果8
            </div>
          </dv-border-box-8>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <dv-border-box-9 class="border-container">
            <div class="border-content">
              边框效果9
            </div>
          </dv-border-box-9>
        </el-col>
        <el-col :span="6">
          <dv-border-box-10 class="border-container">
            <div class="border-content">
              边框效果10
            </div>
          </dv-border-box-10>
        </el-col>
        <el-col :span="6">
          <dv-border-box-12 class="border-container">
            <div class="border-content">
              边框效果11
            </div>
          </dv-border-box-12>
        </el-col>
        <el-col :span="6">
          <dv-border-box-13 class="border-container">
            <div class="border-content">
              边框效果12
            </div>
          </dv-border-box-13>
        </el-col>
      </el-row>
      <el-row>
        <dv-border-box-11 title="我是标题" style="width:500px; height:200px;">
          <div class="border-content">
            带title
          </div>
        </dv-border-box-11>
      </el-row>
    </el-row>
  </container>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      key: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.border-container {
  height:200px;
  width:200px;
  margin-bottom:20px;
}
.border-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height:200px;
  color: #46bd87;
}
</style>


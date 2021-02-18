<!--
 * @Description: 请输入....
 * @Author: andrewjm
 * @Date: 2021-01-20 09:53:37
-->
<template>
  <container>
    <el-row style="background:#282c34;padding:40px;">
      <el-col :span="6">
        <dv-decoration-1 style="width:200px;height:50px;" />
      </el-col>
      <el-col :span="6">
        <dv-decoration-1 :color="['red', 'green']" style="width:200px;height:50px;" />
      </el-col>
      <el-col :span="6">
        <dv-decoration-1 :color="['yellow', 'purple']" style="width:200px;height:50px;" />
      </el-col>
    </el-row>
    <el-row style="background:#282c34;padding:40px;">
      <el-col :span="6">
        <dv-decoration-2 style="width:200px;height:5px;" />
      </el-col>
      <el-col :span="6">
        <dv-decoration-2 :reverse="true" style="width:5px;height:150px;" />
      </el-col>
      <el-col :span="6">
        <dv-decoration-3 style="width:250px;height:30px;" />
      </el-col>
      <el-col :span="6">
        <dv-decoration-4 style="width:5px;height:150px;" />
      </el-col>
      <el-col :span="6">
        <dv-decoration-5 style="width:300px;height:40px;" />
      </el-col>
      <el-col :span="6">
        <dv-decoration-6 style="width:300px;height:30px;" />
      </el-col>
      <el-col :span="6">
        <dv-decoration-7 style="width:150px;height:30px;color:red;">系统</dv-decoration-7>
      </el-col>

    </el-row>
    <el-row style="background:#282c34;padding:40px;">
      <el-col :span="6">
        <dv-decoration-8 style="width:300px;height:50px;" />
      </el-col>
      <el-col :span="6">
        <dv-decoration-8 :reverse="true" style="width:300px;height:50px;" />
      </el-col>
      <el-col :span="6">
        <dv-decoration-10 style="width:90%;height:5px;" />
      </el-col>
      <el-col :span="6">
        <dv-decoration-11 style="width:200px;height:60px;color:red;">告警模块</dv-decoration-11>
      </el-col>
    </el-row>
    <el-row style="background:#282c34;padding:40px;">
      <el-col :span="6">
        <dv-decoration-12 style="width:150px;height:150px;" />
      </el-col>
    </el-row>
  </container>
</template>

<script>
export default {

}
</script>

<style>

</style>

<!--
 * @Description: 请输入....
 * @Author: andrewjm
 * @Date: 2021-01-20 11:30:13
-->
<template>
  <container>
    <el-row style="background:#282c34;padding:40px;">
      <el-col :span="12">
        <dv-scroll-ranking-board :config="config1" style="width:500px;height:300px" />
      </el-col>
      <el-col :span="12">
        <dv-scroll-ranking-board :config="config2" style="width:500px;height:300px" />
      </el-col>
    </el-row>
  </container>
</template>

<script>
export default {
  data() {
    return {
      config1: {
        data: [
          {
            name: '东城区',
            value: 55
          },
          {
            name: '西城区',
            value: 120
          },
          {
            name: '朝阳区',
            value: 78
          },
          {
            name: '海淀区',
            value: 66
          },
          {
            name: '通州区',
            value: 80
          },
          {
            name: '顺义区',
            value: 45
          },
          {
            name: '大兴区',
            value: 29
          }
        ]
      },
      config2: {
        data: [
          {
            name: '东城区',
            value: 55
          },
          {
            name: '西城区',
            value: 120
          },
          {
            name: '朝阳区',
            value: 78
          },
          {
            name: '海淀区',
            value: 66
          },
          {
            name: '通州区',
            value: 80
          },
          {
            name: '顺义区',
            value: 45
          },
          {
            name: '大兴区',
            value: 29
          }
        ],
        carousel: 'page'
      }
    }
  }
}
</script>

<style>

</style>

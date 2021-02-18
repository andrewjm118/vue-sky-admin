<!--
 * @Description: 请输入....
 * @Author: andrewjm
 * @Date: 2021-01-22 15:01:20
-->
<template>
  <container>
    <el-row>
      <el-col :span="6">
        <el-button type="primary" @click="kuayu">测试接口跨域</el-button>
        <el-button type="primary" @click="cvrLogin">easycvr登录</el-button>
        <tree-view :data="json.loginInfo" :options="options" />
      </el-col>
      <el-col :span="6">
        <el-button type="primary" @click="queryDay">按日查询通道录像</el-button>
        <tree-view :data="json.day" :options="options" />
      </el-col>
      <el-col :span="6">
        <el-button type="primary" @click="queryMonth">按月查询通道录像记录</el-button>
        <tree-view :data="json.loginInfo" :options="options" />
      </el-col>

    </el-row>
  </container>
</template>

<script>
import cvr from '@/api/modules/easycvr.api'
import Vue from 'vue'
import dayjs from 'dayjs'
import vueJsonTreeView from 'vue-json-tree-view'
Vue.use(vueJsonTreeView)
export default {
  data() {
    return {
      json: {
        loginInfo: null,
        day: null,
        month: null

      },
      options: {
        maxDepth: 10,
        rootObjectKey: 'EasyDarwin',
        modifiable: false
      }
    }
  },
  methods: {
    kuayu() {
      cvr.ceshi(8, '172.17.16.81').then((res) => {
        console.log(res)
      })
    },
    cvrLogin() {
      // todo
      cvr.login('easycvr', 'easycvr').then((res) => {
        console.log(res)
        this.json.loginInfo = res.data.EasyDarwin
      })
    },
    queryDay() {
      const currentDay = dayjs().format('YYYYMMDD')
      cvr.getApiV1RecordQuerydaily(2, 'Device', currentDay).then((res) => {
        console.log(res)
        // this.json.day = res.data.EasyDarwin
      })
    },

    queryMonth() {
      const currentMonth = dayjs().format('YYYYMM')
      cvr.getApiV1RecordQuerymonthly(2, 'Device', currentMonth).then((res) => {
        console.log(res)
        // this.json.day = res.data.EasyDarwin
      })
    }
  }
}
</script>

<style>

</style>

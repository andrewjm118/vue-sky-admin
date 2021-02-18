<!--
 * @Description: 请输入....
 * @Author: andrewjm
 * @Date: 2021-01-27 15:44:11
-->

<template>
  <container>
    <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
      <el-form-item label="请求url" prop="url">
        <el-input v-model="formData.url" placeholder="请输入请求url" clearable :style="{width: '100%'}" />
      </el-form-item>
      <el-form-item label="请求方式" prop="type">
        <el-select v-model="formData.type" placeholder="请选择请求方式" clearable :style="{width: '100%'}">
          <el-option
            v-for="(item, index) in typeOptions"
            :key="index"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="请求参数(json串)" prop="jsonData">
        <el-input
          v-model="formData.jsonData"
          type="textarea"
          placeholder="请输入请求参数"
          :autosize="{minRows: 4, maxRows: 4}"
          :style="{width: '100%'}"
        />
      </el-form-item>
      <el-form-item label="" prop="field104">
        <el-button type="primary" size="medium" @click="handle"> 确认 </el-button>
      </el-form-item>
    </el-form>
    <tree-view v-show="result" :data="result" :options="options" />
  </container>
</template>

<script>
import Vue from 'vue'
import axios_request from '@/libs/util.axios'
import vueJsonTreeView from 'vue-json-tree-view'
Vue.use(vueJsonTreeView)
export default {
  components: {},
  props: [],
  data() {
    return {
      result: null,
      formData: {
        url: undefined,
        type: undefined,
        jsonData: null
      },
      options: {
        maxDepth: 10,
        rootObjectKey: '',
        modifiable: false
      },
      rules: {
        url: [{
          required: true,
          message: '请输入请求url',
          trigger: 'blur'
        }],
        type: [{
          required: true,
          message: '请选择请求方式',
          trigger: 'change'
        }],
        jsonData: [{
          required: true,
          message: '请输入请求参数',
          trigger: 'blur'
        }]
      },
      typeOptions: [{
        'label': 'get',
        'value': 'get'
      }, {
        'label': 'post',
        'value': 'post'
      }]
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handle() {
      const data = {
        method: this.formData.type,
        url: this.formData.url
      }
      if (this.formData.type === 'get') {
        data['params'] = JSON.parse(this.formData.jsonData)
      } else {
        data['data'] = JSON.parse(this.formData.jsonData)
      }
      axios_request(data).then((res) => {
        this.result = res
      })
    }
  }
}

</script>

<style>

</style>

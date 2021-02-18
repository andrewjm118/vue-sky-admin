<template>
  <container>
    <template slot="header">代码高亮组件</template>
    <el-card shadow="never" class="d2-mb">
      <p slot="title">javascript</p>
      <highlight :code="codeJavascript" />
    </el-card>
    <el-card shadow="never" class="d2-mb">
      <p slot="title">css</p>
      <highlight :code="codeCSS" />
    </el-card>
    <el-card shadow="never" class="d2-mb">
      <p slot="title">scss</p>
      <highlight :code="codeSCSS" />
    </el-card>
    <el-card shadow="never">
      <p slot="title">html</p>
      <highlight :code="codeHTML" />
    </el-card>
  </container>
</template>

<script>
import codeJavascript from './code/javascript'
import codeCSS from './code/css'
import codeSCSS from './code/scss'
import codeHTML from './code/html'
export default {
  data() {
    return {
      codeJavascript,
      codeCSS,
      codeSCSS,
      codeHTML
    }
  }
}
</script>

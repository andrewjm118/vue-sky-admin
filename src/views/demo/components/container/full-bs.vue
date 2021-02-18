<template>
  <container better-scroll :better-scroll-options="bsOptions">
    <template slot="header">Header</template>
    <d2-demo-article />
    <template slot="footer">Header</template>
  </container>
</template>

<script>
import d2DemoArticle from './components/d2-demo-article'
export default {
  components: {
    'd2-demo-article': d2DemoArticle
  },
  data() {
    return {
      bsOptions: {
        preventDefault: false
      }
    }
  }
}
</script>

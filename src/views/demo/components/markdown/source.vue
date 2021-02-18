<template>
  <container>
    <template slot="header">指定资源</template>
    <markdown :source="doc" highlight />
  </container>
</template>

<script>
import doc from './md/vue-project-development-guide.md'
export default {
  data() {
    return {
      doc
    }
  }
}
</script>

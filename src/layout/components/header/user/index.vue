<template>
  <el-dropdown size="small" class="mr">
    <span class="btn-text">{{ info.name ? `你好 ${info.name}` : '未登录' }}</span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item @click.native="logOff">
        <icon name="power-off" class="mr-5" />
        注销
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('user', [
      'info'
    ])
  },
  methods: {
    ...mapActions('account', [
      'logout'
    ]),
    /**
     * @description 登出
     */
    logOff() {
      this.logout({
        confirm: true
      })
    }
  }
}
</script>

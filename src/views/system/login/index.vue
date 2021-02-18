<!--
 * @Description: 请输入....
 * @Author: andrewjm
 * @Date: 2021-01-08 14:22:48
-->
<template>
  <container>
    <div class="login-container">
      <video muted="" autoplay="" loop="" class="img" style="opacity:1"><source type="video/mp4" :src="`${$baseUrl}videos/photographer.mp4`"><p>not support!</p></video>
      <div class="logo">中后台管理系统</div>
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" autocomplete="on" label-position="left">
        <div class="login-form-content">
          <div class="title-container">
            <h3 class="title">欢迎登录</h3>
          </div>

          <el-form-item prop="username">
            <!-- <span class="svg-container">
              <icon-svg class="icon"  name="user" />
            </span> -->
            <el-input
              ref="username"
              v-model="loginForm.username"
              placeholder="用户名"
              name="username"
              type="text"
              tabindex="1"
              autocomplete="on"
            />
          </el-form-item>

          <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
            <el-form-item prop="password">
              <!-- <span class="svg-container">
                <icon-svg class="icon"  name="password" />
              </span> -->
              <el-input
                :key="passwordType"
                ref="password"
                v-model="loginForm.password"
                :type="passwordType"
                placeholder="密码"
                name="password"
                tabindex="2"
                autocomplete="on"
                @keyup.native="checkCapslock"
                @blur="capsTooltip = false"
                @keyup.enter.native="handleLogin"
              />
              <!-- <span class="show-pwd" @click="showPwd">
                <icon-svg class="icon"  :name="passwordType === 'password' ? 'eye' : 'eye-open'" />
              </span> -->
            </el-form-item>
          </el-tooltip>

          <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">登录</el-button>
        </div>

      </el-form>
      <div class="footer"><p>copyright © andrewjm </p></div>
    </div>
  </container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'login',
  data() {
    const validateUsername = (rule, value, callback) => {
      callback()
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 1) {
        callback(new Error('密码不能小于6位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: 'admin'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      showDialog: false
    }
  },
  methods: {
    ...mapActions('account', [
      'login'
    ]),
    checkCapslock({ shiftKey, key } = {}) {
      if (key && key.length === 1) {
        if (shiftKey && (key >= 'a' && key <= 'z') || !shiftKey && (key >= 'A' && key <= 'Z')) {
          this.capsTooltip = true
        } else {
          this.capsTooltip = false
        }
      }
      if (key === 'CapsLock' && this.capsTooltip === true) {
        this.capsTooltip = false
      }
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          // 登录
          // 注意 这里的演示没有传验证码
          // 具体需要传递的数据请自行修改代码
          this.login({
            username: this.loginForm.username,
            password: this.loginForm.password
          })
            .then((res) => {
              // 重定向对象不存在则返回顶层路径
              this.$router.replace(this.$route.query.redirect || '/')
            })
        } else {
          // 登录表单校验失败
          this.$message.error('表单校验失败')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#000;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  /*关键：否则位置不是中心*/
  background-position: center;
  /*关键：把背景图像扩展至足够大，以使背景图像完全覆盖背景区域。*/
  background-size: cover;
  background-repeat: no-repeat;

   .logo {
    position: absolute;
    margin: 0 3em;
    top: 6%;
    color: #000;
    font-weight: 700;
    font-size: 1.5em;
    letter-spacing: .1em;
    z-index: 2;
}

.footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
    color: #fff;
    text-transform: capitalize;
    font-size: .8em;
    z-index: 2;
}
// 如果单独运行打开此注释
  .img {
    // position: fixed;
    // top: 0;
    // left: 0;
    // z-index: 1;
    // min-width: 1024px;
    width: 100%;
}

  .login-form {
    position: fixed;
    top:50%;
    right:6%;
    z-index: 1;
    width: 290px;
    margin:-150px 0;
    max-width: 100%;

    .login-form-content {
      padding: 30px 35px 0;
      overflow: hidden;

      background: rgba(255,255,255,.5);
    border-radius: .2em;
    }
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 4px 15px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 20px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 18px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: left;
      font-weight: 400;
    }
    .big-title {
      font-size: 26px;
      color: #fff;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>

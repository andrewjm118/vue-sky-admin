<!--
 * @Description: 请输入....
 * @Author: andrewjm
 * @Date: 2021-01-08 16:27:36
-->
<template>
  <container>
    <div class="login-container">
      <!-- 背景视频 -->
      <video muted="" autoplay="" loop="" class="img" style="opacity:1"><source type="video/mp4" src="@/assets/video/b.mp4"><p>not support!</p></video>
      <div class="logo">项目名称</div>
      <div class="login-form">
        <el-card shadow="never">
          <el-form ref="loginForm" label-position="top" :rules="rules" :model="formLogin" size="default">
            <el-form-item prop="username">
              <el-input v-model="formLogin.username" type="text" placeholder="用户名">
                <i slot="prepend" class="fa fa-user-circle-o" />
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="formLogin.password" type="password" placeholder="密码">
                <i slot="prepend" class="fa fa-keyboard-o" />
              </el-input>
            </el-form-item>
            <el-form-item prop="code">
              <el-input v-model="formLogin.code" type="text" placeholder="- - - -">
                <!-- <template slot="prepend">验证码</template> -->
                <template slot="append">
                  <img class="login-code" src="./images/login-code.png">
                </template>
              </el-input>
            </el-form-item>
            <el-button size="default" type="primary" class="button-login" @click="submit">登录</el-button>
          </el-form>
        </el-card>
      </div>
      <div class="footer"><p>copyright © 研发中心 </p></div>
    </div>
  </container>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          name: '管理员',
          username: 'admin',
          password: 'admin'
        },
        {
          name: '编辑',
          username: 'editor',
          password: 'editor'
        },
        {
          name: '用户1',
          username: 'user1',
          password: 'user1'
        }
      ],
      // 表单
      formLogin: {
        username: 'admin',
        password: 'admin',
        code: 'v9am'
      },
      // 校验
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      }
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
    color: #fff;
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

// 登录表单
  .login-form {
    position: fixed;
    top:50%;
    right:6%;
    z-index: 1;
    width: 290px;
    margin:-150px 0;
    max-width: 100%;
    // 卡片
    .el-card {
        background: rgba(255,255,255,.5);
      margin-bottom: 15px;
    }
    // 登录按钮
    .button-login {
      width: 100%;
    }
    // 输入框左边的图表区域缩窄
    .el-input-group__prepend {
      padding: 0px 14px;
    }
    .login-code {
      height: 40px - 2px;
      display: block;
      margin: 0px -20px;
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
    }
    // 登陆选项
    .login-options {
      margin: 0px;
      padding: 0px;
      font-size: 14px;
      color: $color-primary;
      margin-bottom: 15px;
      font-weight: bold;
    }
    .login-quick {
      width: 100%;
    }
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
}

</style>

<template>
  <div class="sign flex center in">
    <div class="form">
      <img src="../../assets/img/logo.png" class="logo">
      <input class="form-input" type="text" placeholder="输入登录手机号" v-model="form.phone">
      <input class="form-input" type="password" placeholder="输入登录密码" v-model="form.password">
      <mt-button type="primary" size="large" @click="handleForm">登录</mt-button>
      <div class="flex between">
        <router-link to="" class="u-text-blue">忘记密码？</router-link>
        <router-link to="/sign/up" class="u-text-blue">注册新账号</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        form: {
          phone: '',
          password: ''
        }
      }
    },
    methods: {
      handleForm () {
        this.$http.post('api/login/index', this.form).then(res => {
          if (res.data.error === 0) {
            this.$app.setSid(res.data.data)
            this.$toast(res.data.tips)
            if (this.$route.query.from) {
              // 返回请求登录页
              this.$router.back()
            } else {
              // 返回首页
              window.setTimeout(() => {
                this.$router.replace('/')
              }, 1000)
            }
          } else {
            this.$toast(res.data.tips)
          }
        })
      }
    }
  }
</script>
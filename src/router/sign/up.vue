<template>
  <div class="sign up">
    <head-bar title="注册"></head-bar>
    <mt-field label="手机号码：" placeholder="输入手机号码"></mt-field>
    <mt-field label="验证码：" placeholder="输入验证码">
      <mt-button type="primary" plain size="small">发送验证码</mt-button>
    </mt-field>
    <mt-field label="登录密码：" placeholder="输入登录密码"></mt-field>
    <mt-field label="确认密码：" placeholder="再次输入登录密码"></mt-field>
    <mt-field label="昵称：" placeholder="输入昵称"></mt-field>
    <div style="padding: 50px 30px;">
      <mt-button type="primary" size="large" @click="handleForm">注册</mt-button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        disabled: false,
        check: true,
        form: {
          phone: '',
          code: '',
          password: '',
          repassword: '',
          name: ''
        }
      }
    },
    methods: {
      handleForm () {
        this.$http.post('api/login/register', this.form).then(res => {
          if (res.data.error == 0) {
            this.$router.push('/login/in')
            this.$toast(res.data.tips)
          } else {
            this.$toast(res.data.tips)
          }
        })
      }
    }
  }
</script>

<style lang="stylus">
  
</style>
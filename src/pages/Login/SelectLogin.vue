<template>
      <div class="select-login">
        <div class="select_img">
          <img src="./images/lk_logo_sm.png" width="200" alt="">
        </div>
        <h4>选择登入方式</h4>
        <router-link tag="button" to="/login">手机登录</router-link>
      </div>
</template>

<script>
    export default {
        name: "SelectLogin"
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .select-login
    background-color: #f5f5f5
    position: fixed
    left:0
    top:0
    width 100%
    height:100%
    z-index: 1000
    display: flex
    flex-direction:column //垂直显示
    justify-content:center //水平居中
    align-items: center //垂直居中
    button
      width 80%
      height 38px
      font-size: 20px
      color: #fff
      background-color: purple
      border none
      border-radius: 5px
      margin-top:30px
  .select_img
    position: fixed;
    top: 130px;
    left: 50%;
    margin-left: -100px;
</style>

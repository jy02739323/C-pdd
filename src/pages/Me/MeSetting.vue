<template>
  <div class="me-setting">
    <div>
      <me-common-cell left-icon="icon-2" left-title="免密码支付"/>
      <me-common-cell left-icon="icon-3" left-title="免拼单设置" :clickCell="dealCellClick" right-title="还剩0次免拼机会" right-title-color="#9c9c9c" right-title-font="14px"/>
      <me-common-cell left-icon="icon-1" left-title="消息接收设置"/>
    </div>

    <div style="margin-top: 10px;">
      <me-common-cell left-icon="icon-2" left-title="免密码支付" :clickCell="dealCellClick"/>
      <me-common-cell left-icon="icon-3" left-title="免密码支付"/>
    </div>

    <div style="margin-top: 10px;">
      <me-common-cell left-icon="icon-1" left-title="免密码支付"/>
    </div>

    <div class="logout" @click="dealLogout">退出登录</div>
  </div>
</template>

<script>
    import MeCommonCell from './MeCommonCell'
    import {Toast,MessageBox} from 'mint-ui'
    import {mapActions} from 'vuex'
    export default {
        name: "MeSetting",
        components:{
          MeCommonCell
        },
        methods:{
          ...mapActions(["logOut"]),
          dealCellClick(props) {
            Toast('点击了' + props);
          },

          dealLogout() {
            MessageBox.confirm('您确定退出登录吗?').then(action => {
              if('confirm' === action) {
                //退出登录
                let result = this.logOut({});
                console.log(result);
                //回到主界面
                this.$router.replace('/home');
              }
            })
          }
        }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .logout
    width 100%
    height 44px
    margin-top 10px
    background-color #fff
    display flex
    justify-content center
    align-items center
    text-align center
</style>

<template>
    <div class="Me-container">
    <router-link tag="div" class="Me-user" to="/detail">
      <div class="Me-user">
        <img src="./images/me_icon.png" alt="">
        <span>{{userInfo.user_phone  | phoneFormat}}</span>
        <i class="icon-map"></i>
      </div>
    </router-link>
      <div class="Me-older">
        <div class="older-top">
          <span class="older-left">我的订单</span>
          <span class="older-right">查看全部<i class="icon-more"></i></span>
        </div>
        <div class="older-bottom">
          <div class="bottom-item">
            <i class="icon-1"></i>
            <span>待付款</span>
          </div>
          <div class="bottom-item">
            <i class="icon-2"></i>
            <span>待分享</span>
          </div>
          <div class="bottom-item">
            <i class="icon-3"></i>
            <span>待发货</span>
          </div>
          <div class="bottom-item">
            <i class="icon-4"></i>
            <span>待收货</span>
          </div>
          <div class="bottom-item">
            <i class="icon-5"></i>
            <span>待评价</span>
          </div>
        </div>
      </div>
      <div class="Me-setting">
        <div class="setting-bottom">
          <div class="setting-item">
            <i class="icon-1"></i>
            <span>待付款</span>
          </div>
          <div class="setting-item">
            <i class="icon-2"></i>
            <span>待分享</span>
          </div>
          <div class="setting-item">
            <i class="icon-3"></i>
            <span>待发货</span>
          </div>
          <div class="setting-item">
            <i class="icon-4"></i>
            <span>待收货</span>
          </div>
          <div class="setting-item">
            <i class="icon-5"></i>
            <span>待评价</span>
          </div>
          <div class="setting-item">
            <i class="icon-6"></i>
            <span>待评价</span>
          </div>
          <div class="setting-item">
            <i class="icon-7"></i>
            <span>待评价</span>
          </div>
          <div class="setting-item">
            <i class="icon-8"></i>
            <span>待评价</span>
          </div>
          <router-link tag="div" class="setting-item" to="/setting">
              <i class="icon-set"></i>
              <span>设置</span>
          </router-link>
        </div>
      </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        name: "MeTop",
        computed:{
          ...mapState(["userInfo"])
        },
        filters: {
          phoneFormat(phone) {
            //转成数组
            let phoneArr = [...phone];
            //遍历
            let str = '';
            phoneArr.forEach((item,index)=>{
              if(index === 3 || index === 4 || index === 5 || index ===6){
                str += "*";
              }else {
                str += item;
              }
            });
            return str;
          }
        }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.Me-user
  background-color #fff
  display flex
  align-items center
  img
    border-radius: 50%;
    height: 90px;
    padding: 15px;
  i
    font-size 20px
    margin-left 10px
.Me-older
  background-color #fff
  margin-top 20px
  font-size 14px
  .older-top
    display flex
    flex-direction row
    padding 0 10px
    justify-content space-between
    height 44px
    line-height 44px
    .icon-more
      font-size 15px
      color black
  .older-bottom
    display flex
    .bottom-item
      flex 1
      height 60px
      display flex
      flex-direction column
      justify-content center
      align-items center
      i
        font-size 30px
        color #E9232C
        margin-bottom 5px
.Me-setting
  background #fff
  margin-top 20px
  font-size 14px
  .setting-bottom
    display flex
    justify-content space-between
    flex-wrap wrap
    .setting-item
      width 90px
      height 70px
      display flex
      flex-direction column
      justify-content center
      align-items center
      i
        font-size 30px
        color #E9232C
        margin-bottom 5px
</style>

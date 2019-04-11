<template>
  <a class="recommend-item" >
    <img :src="rec.thumb_url" alt="" width="100%" v-if="rec.thumb_url">
    <h4 class="item-title">{{rec.short_name}}</h4>
    <div class="item-bottom">
      <span class="item-price">¥{{rec.price / 100}}</span>
      <span class="item-sales">{{rec.sales_tip}}</span>
      <button class="item-btn" @click="clickCellBtn(rec)">找相关</button>
    </div>
  </a>
</template>

<script>
  export default {
    name: "ShopList",
    props: {
      rec: Object,
      clickCellBtn: {
        type: Function,
        default: ()=>{}
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .recommend-item:nth-child(2n-1)
    margin-right 1%

  .recommend-item
    width 49.5%
    background #FFF
    padding-bottom 15px
    margin-bottom 15px
    .item-title
      line-height 20px
      font-size 13px
      font-weight lighter
      height 20px
      overflow hidden
      margin 5px 0
      padding 0 5px
    .item-bottom
      display flex
      flex-direction row
      align-items center
      padding 0 6px
      .item-price
        flex 2
        color red
        font-weight bolder
        font-size 12px
      .item-sales
        flex 4
        font-size 10px
        color #666666
      .item-btn
        flex 2
        border 1px solid orangered
        height 26px
        border-radius 5px
        font-size 10px
        background-color transparent
        color red
</style>

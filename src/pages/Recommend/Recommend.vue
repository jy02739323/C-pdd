<template>
  <div class="recommend_container">
    <ul class="recommend_ul"  v-if="userInfo.id && recommend.length > 0">
      <shop-list
        tag="li"
        v-for="(rec, index) in recommend"
        :rec = rec
        :key="index"
        :clickCellBtn="dealWithCellBtnClick"
      />
    </ul>
    <select-login v-else/>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import ShopList from './../../components/ShopList/ShopList'
  import BScroll from 'better-scroll';
  import {Indicator} from 'mint-ui';
  import {addGoodsToCart} from './../../api/index';
  import SelectLogin from './../Login/SelectLogin';

  export default {
    name: "Recommend",
    data(){
      return {
        page:1,
        count:10,
      }
    },
    mounted() {
      Indicator.open('正在加载数据...');
      this.$store.dispatch('reqRecommend', {
        page: this.page, count: this.count, callback: () => {
          Indicator.close();
        }
      });
    },
    computed:{
      ...mapState(['recommend', 'userInfo'])
    },
    components: {
      ShopList,
      SelectLogin
    },
    watch: {
      recommend() {
        this.$nextTick(() => {
          // 让当前的页码+1
          this.page++;
          // 初始化
          this._initBScroll();
        })
      }
    },
    methods:{
      _initBScroll() {
        // 1.1 初始化
        this.listScroll = new BScroll('.recommend_container', {
          scrollY: true,
          probeType: 2
        });

        //列表滚动
        this.listScroll.on('touchEnd',(pos) => {
          //监听下拉
          if(pos.y >= 50){
            console.log('下拉刷新');

              Indicator.open('正在加载数据...');
              this.$store.dispatch('reqRecommend', {page: this.page, count: this.count, callback: ()=>{
                  Indicator.close();
                }});

          }

          //监听上拉
          if (this.listScroll.maxScrollY > pos.y + 20) {
            Indicator.open('正在加载数据...');
            this.$store.dispatch('reqRecommend', {page: this.page, count: this.count, callback: ()=>{
                Indicator.close();
              }});

          }

          //列表滚动结束
          this.listScroll.on('scrollEnd', () => {
            this.listScroll.refresh();
          });
        })
      },
      //监听商品点击
      async dealWithCellBtnClick(goods) {
        //发送请求
        let result = await addGoodsToCart(this.userInfo.id,goods.goods_id,goods.goods_name, goods.thumb_url, goods.price);
        console.log(result);
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .recommend_container
    background #f5f5f5
    width 100%
    height 100%
    overflow hidden
    .recommend_ul
      display flex
      flex-direction row
      flex-wrap wrap
      background #f5f5f5
      padding-bottom 50px

</style>

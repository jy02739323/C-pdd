<template>
  <div class="search">
    <!--搜索导航-->
    <search-nav :showSearchPanel="showSearchPanel"/>
    <div class="shop">
      <!--左边-->
      <div class="menu-wrapper">
        <ul>
          <!--current-->
          <li class="menu-item"
              v-for="(goods, index) in searchgoods"
              :key="index"
              :class="{current: index === currentIndex}"
              @click="clickLeftItem(index)"
              ref = 'menulist'
          >
            <span>{{goods.name}}</span>
          </li>
        </ul>
      </div>
      <!--右边-->
      <div class="shop-wrapper">
        <ul ref="shopsParent">
          <li class="shops-li" v-for="(goods, index1) in searchgoods" :key="index1">
            <div class="shops-title">
              <h4>{{goods.name}}</h4>
              <a href="">查看更多 ></a>
            </div>
            <ul class="phone-type" v-if="goods.tag === 'phone'">
              <li v-for="(phone, index) in goods.category" :key="index">
                <img :src="phone.icon" alt="">
              </li>
            </ul>
            <ul class="shops-items">
              <li v-for="(item, index2) in goods.items" :key="index2">
                <img :src="item.icon" alt="">
                <span>{{item.title}}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <!--搜索面板-->
    <search-panel v-if="isShow"  :showSearchPanel="showSearchPanel"/>
  </div>
</template>

<script>
  import SearchNav from './children/SearchNav'
  import SearchPanel from './children/SearchPanel'
  import {mapState} from 'vuex'

  import BScroll from 'better-scroll'

  export default {
    name: "Search",
    data() {
      return {
        scrollY: 0, //右侧列表滑动的Y轴
        rightLiTops: [],//所有分类的头部位置
        isShow: false //设置搜索面板的显示
      }
    },
    mounted() {
      this.$store.dispatch('reqSearchGoods');
    },
    computed: {
      ...mapState(['searchgoods']),
      //动态决定左侧哪个选项被选中
      currentIndex() {
        //获取数据
        const {scrollY,rightLiTops} = this;
        //索引
        return rightLiTops.findIndex((liTop,index) => {
          this._leftScroll(index);
          return scrollY >= liTop && scrollY < rightLiTops[index + 1];
        })
      }
    },
    components: {
      SearchNav,
      SearchPanel
    },
    watch: {
      searchgoods() {
        this.$nextTick(() => {
          // 1.1 初始化
          this._initBScroll();
          // 1.2 求出右边所有版块的头部位置
          this._initRightLiTops();
        })
      }
    },
    methods:{
      //  初始化
      _initBScroll() {
        //1.1左边
        this.leftScroll = new BScroll('.menu-wrapper', {
          click:true
        });
        // 1.2 右边
        this.rightScroll = new BScroll('.shop-wrapper', {
          probeType: 2,
        });
        //监听右侧的滑动事件
        this.rightScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(pos.y);
        })
      },
      //求出右边所有版块头部位置
      _initRightLiTops() {
        //临时数组
        const tempArr = [];
        //定义变量记录高度
        let top = 0;
        tempArr.push(top);
        //遍历li标签，取出高度
        let allLis = this.$refs.shopsParent.getElementsByClassName('shops-li');
        Array.prototype.slice.call(allLis).forEach(li => {
          top += li.clientHeight;
          tempArr.push(top);
        });
        //更新数据
        this.rightLiTops = tempArr;
      },

      //点击切换
      clickLeftItem(index) {
        this.scrollY = this.rightLiTops[index];
        this.rightScroll.scrollTo(0, -this.scrollY,300);
      },

      //左侧联动
      _leftScroll(index){
        let menuLists = this.$refs.menulist;
         // console.log(menuLists);
        let el = menuLists[index];
         // console.log(el);
        this.leftScroll.scrollToElement(el, 300, 0, -100)
      },

      //是否显示搜索面板
      showSearchPanel(flag){
        this.isShow = flag;
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .search
    background #F5F5F5
    width 100%
    height 100%
    overflow hidden

  .shop
    display flex
    position absolute
    top 60px
    bottom 50px
    width 100%
    overflow hidden
    .menu-wrapper
      background-color #e0e0e0
      width 80px
      flex 0 0 80px
      .menu-item
        width 100%
        height 60px
        background-color: #fafafa
        display flex
        justify-content center
        align-items center
        font-weight lighter
        color #666666
        position relative
      .current
        color #e02e24
      .current::before
        content: ''
        background-color #e02e24
        width 4px
        height 30px
        position absolute
        left 0
    .shop-wrapper
      flex 1
      background-color #fff
      .shops-title
        display flex
        flex-direction row
        padding 0 10px
        height 44px
        align-items center
        justify-content space-between
        color #999
        a
          color #999
          text-decoration none
          font-weight lighter
      .shops-items
        display flex
        flex-wrap wrap
        li
          display flex
          flex-direction column
          width 33.3%
          height 90px
          justify-content center
          align-items center
          color #666
          font-weight lighter
          font-size 14px
          img
            width 60%
            height 60%
            margin-bottom 5px
      .phone-type
        width 100%
        display flex
        flex-direction row
        flex-wrap wrap
        border-bottom-1px(#ccc)
        li
          width 33.3%
          display flex
          justify-content center
          align-items center
          margin 5px 0
          img
            width 70%
</style>

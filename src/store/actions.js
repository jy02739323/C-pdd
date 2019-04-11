import {
  getHomeCasual,
  getHomeNav,
  getHomeShopList,
  getRecommend,
  getSearchGoods,
  getUserInfo,
  getLogout,
  getCartsGoods,
} from '../api'

import {
  HOME_CASUAL,
  HOME_NAV,
  HOME_SHOP_LIST,
  RECOMMEND,
  SEARCH_GOODS,
  USER_INFO,
  RESET_USER_INFO,
  CART_GOODS_LIST,
  ADD_GOODS_COUNT,
  REDUCE_GOODS_COUNT,
  SELECTED_ALL_GOODS
} from './mutation-types'




export default {
  // 获取首页的轮播图
  async reqHomeCasual({commit}) {
    const result = await getHomeCasual();
    commit(HOME_CASUAL, {homecasual: result.message})
  },
  // 获取首页的导航
  async reqHomeNav({commit}) {
    const result = await getHomeNav();
    commit(HOME_NAV, {homenav: result.message})
  },
  // 获取首页商品列表
  async reqHomeShopList({commit},params) {
    const result = await getHomeShopList(params);
    commit(HOME_SHOP_LIST, {homeshoplist: result.message});
    params.callback && params.callback();
  },
  // 获取推荐商品列表
  async reqRecommend({commit},params) {
    const result = await getRecommend(params);
    commit(RECOMMEND, {recommend: result.message});
    params.callback && params.callback();
  },
  // 获取搜索列表
  async reqSearchGoods({commit}) {
    const result = await getSearchGoods();
    commit(SEARCH_GOODS, {searchgoods: result.message.data})
  },
  //同步用户的信息
  syncUserInfo({commit}, userInfo) {
    commit(USER_INFO, {userInfo});
  },
  //异步获取用户信息
  async getUserInfo({commit}) {
    const result = await getUserInfo();
    console.log(result);
    if (result.success_code === 200) {
      commit(USER_INFO, {userInfo: result.message});
    }
  },

  //清空用户信息，退出登录
  async logOut({commit}){
    const result = await getLogout();
    console.log(result);
    if(result.success_code === 200){
      commit(RESET_USER_INFO);
    }
  },

  //请求购物车数据
  async reqCartsGoods({commit}) {
    const result = await getCartsGoods();
    if(result.success_code === 200){
      commit(CART_GOODS_LIST, {cartgoods: result.message})
    }
  },

  //购物车单个商品的增加和减少
  updateGoodsCount({commit},{goods, isAdd}){
    if(isAdd){
      commit(ADD_GOODS_COUNT, {goods});
    } else {
      commit(REDUCE_GOODS_COUNT, {goods})
    }
  },

  //全选和取消全选
  selectedAll({commit},{isSelected}) {
    commit (SELECTED_ALL_GOODS, {isSelected});
  }
}

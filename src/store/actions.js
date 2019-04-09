import {
  getHomeCasual,
  getHomeNav,
  getHomeShopList,
  getRecommend,
  getSearchGoods,
  getUserInfo,
  getLogout
} from '../api'

import {
  HOME_CASUAL,
  HOME_NAV,
  HOME_SHOP_LIST,
  RECOMMEND,
  SEARCH_GOODS,
  USER_INFO,
  RESET_USER_INFO
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
  }
}

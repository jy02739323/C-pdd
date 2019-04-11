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

import Vue from 'vue'


export default {
  [HOME_CASUAL](state, {homecasual}){
    state.homecasual = homecasual;
  },
  [HOME_NAV](state, {homenav}){
    state.homenav = homenav;
  },
  [HOME_SHOP_LIST](state, {homeshoplist}){
    state.homeshoplist = state.homeshoplist.concat(homeshoplist);
  },
  [RECOMMEND](state, {recommend}){
    state.recommend = state.recommend.concat(recommend);
  },
  [SEARCH_GOODS](state, {searchgoods}){
    state.searchgoods = searchgoods;
  },

  [USER_INFO](state, {userInfo}) {
    state.userInfo = userInfo;
  },

  [RESET_USER_INFO](state) {
    state.userInfo = {};
  },

  [CART_GOODS_LIST](state, {cartgoods}) {
    state.cartgoods = cartgoods;
  },

  //购物车
  [ADD_GOODS_COUNT](state,{goods}) { //增加
    if(goods.buy_count){
      goods.buy_count++;
    }
  },
  [REDUCE_GOODS_COUNT](state,{goods}) { //减少
    if(goods.buy_count){
      goods.buy_count--;
      if(goods.buy_count === 0) {
        const index = state.cartgoods.indexOf(goods);
        state.cartgoods.splice(index,1);
      }
    }
  },
  [SELECTED_ALL_GOODS](state, {isSelected}){
    state.cartgoods.forEach((goods, index)=>{
      if(goods.checked){ // 存在该属性
        goods.checked = !isSelected;
      }else {
        Vue.set(goods, 'checked', !isSelected)
      }
    })
  },
}

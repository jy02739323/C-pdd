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
}

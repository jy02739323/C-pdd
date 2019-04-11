import ajax from './ajax'

//基础路径
const BASE_URL = '/api';

//请求方法
//请求首页轮播图
export const getHomeCasual = ()=>ajax(BASE_URL + '/api/homecasual');

//请求首页轮播图
export const getHomeNav = ()=>ajax(BASE_URL + '/api/homenav');

//请求首页商品列表
export const getHomeShopList = (params)=>ajax(BASE_URL + '/api/homeshoplist',params);

//请求推荐商品列表
export const getRecommend = (params)=>ajax(BASE_URL + '/api/recommend',params);

//请求搜索列表数据
export const getSearchGoods = ()=>ajax(BASE_URL + '/api/searchgoods');

//请求验证码数据
export const getPhoneCode = (phone) => ajax(BASE_URL +  '/api/send_code', {phone});

//手机验证码
export const phoneCodeLogin = (phone, code) => ajax(BASE_URL + '/api/login_code', {phone, code}, 'POST');

//  用户名和密码登录
export const pwdLogin = (name, pwd, captcha) => ajax(BASE_URL + '/api/login_pwd', {name, pwd, captcha}, 'POST');

//  获取登录的用户信息
export const getUserInfo = () => ajax(BASE_URL + '/api/user_info');

//  清空登录的用户信息
export const getLogout = () => ajax(BASE_URL + '/api/logout');

//  修改用户信息
export const changeUserInfo = (user_id, user_name, user_sex, user_address, user_birthday, user_sign) => ajax(BASE_URL + '/api/change_user_msg', {
  user_id,
  user_name,
  user_sex,
  user_address,
  user_birthday,
  user_sign
}, 'POST');

//加入购物车
export const addGoodsToCart = (user_id, goods_id, goods_name, thumb_url, price) => ajax(BASE_URL + '/api/add_shop_cart', {user_id, goods_id, goods_name, thumb_url, price}, 'POST');

//请求购物车的数据
export const getCartsGoods = () => ajax(BASE_URL + '/api/cart_goods');

// 1. 引入对应模块
import Vue from 'vue'
import VueRouter  from 'vue-router'

import Home from './../pages/Home/Home'
import Recommend from './../pages/Recommend/Recommend'
import Search from './../pages/Search/Search'
import Car from '../pages/Car/Car'
import Me from './../pages/Me/Me'
import Login from '../pages/Login/Login'

import Hot from '../pages/Home/Children/Hot/Hot'
import Box from './../pages/Home/Children/Box'
import Dress from './../pages/Home/Children/Dress'
import Ele from './../pages/Home/Children/Ele'
import Food from './../pages/Home/Children/Food'
import General from './../pages/Home/Children/General'
import Man from './../pages/Home/Children/Man'
import Mbaby from './../pages/Home/Children/Mbaby'
import Shirt from './../pages/Home/Children/Shirt'

import Mesetting from './../pages/Me/MeSetting'
import Medetail from './../pages/Me/MeDetail'

// 2. 声明使用
Vue.use(VueRouter);

// 3. 输出路由对象
export default  new VueRouter({
    // 3.1 配置一级路由
    routes: [
      {
        path: '/home',
        component: Home,
        children: [
          // 热门版块
          {path: 'hot', component: Hot,meta: {showBottomTabBar: true}},
          // 服饰版块
          {path: 'dress', component: Dress,meta: {showBottomTabBar: true}},
          // 鞋包版块
          {path: 'box', component: Box,meta: {showBottomTabBar: true}},
          // 母婴版块
          {path: 'mbaby', component: Mbaby,meta: {showBottomTabBar: true}},
          // 百货版块
          {path: 'general', component: General,meta: {showBottomTabBar: true}},
          // 食品版块
          {path: 'food', component: Food,meta: {showBottomTabBar: true}},
          // 内衣版块
          {path: 'shirt', component: Shirt,meta: {showBottomTabBar: true}},
          // 男装版块
          {path: 'man', component: Man,meta: {showBottomTabBar: true}},
          // 电器版块
          {path: 'ele', component: Ele,meta: {showBottomTabBar: true}},
          {path: '/home',redirect: '/home/hot'}
        ]
      },
      {
        path: '/recommend',
        component: Recommend,
        meta: {showBottomTabBar: true}
      },
      {
        path: '/search',
        component: Search,
        meta: {showBottomTabBar: true}
      },
      {
        path: '/car',
        component: Car,
        meta: {showBottomTabBar: true}
      },
      {
        path: '/me',
        component: Me,
        meta: {showBottomTabBar: true}
      },
      {
        path: '/setting',
        component: Mesetting
      },
      {
        path: '/detail',
        component: Medetail
      },
      {
        path: '/login',
        component: Login
      },
      {
        path: '/',
        redirect: '/home'
      },
    ]
});

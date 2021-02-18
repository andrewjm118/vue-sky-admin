/*
 * @Description: 请输入....
 * @Author: andrewjm
 * @Date: 2020-12-17 11:20:31
 */

import layout from '@/layout/'
import plugins from './modules/plugins'
import material from './modules/material'
import components from './modules/components'
import playground from './modules/playground'
import extension from './modules/extension'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)
// const _import = require('@/libs/util.import.production')
/**
 * 在主框架内显示
 */

const frameIn = [
  {
    path: '/',
    redirect: { name: 'index' },
    component: layout,
    children: [
      {
        path: 'index',
        name: 'index',
        meta: {
          title: '首页',
          auth: true
        },
        component: _import('system/index/index')
      },
      // 系统 前端日志
      {
        path: 'log',
        name: 'log',
        meta: {
          title: '前端日志',
          auth: true
        },
        component: _import('system/log')
      },
      // 刷新页面 必须保留
      {
        path: 'refresh',
        name: 'refresh',
        hidden: true,
        component: _import('system/function/refresh')
      },
      // 页面重定向 必须保留
      {
        path: 'redirect/:route*',
        name: 'redirect',
        hidden: true,
        component: _import('system/function/redirect')
      }
    ]
  },
  material,
  plugins,
  components,
  playground,
  extension

]

/**
 * 在主框架之外显示
 */
const frameOut = [
  // 登录
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: _import('system/login/index')
  }
]

// 导出需要显示菜单的
export const frameInRoutes = frameIn

// 重新组织后导出
export default [
  ...frameIn,
  ...frameOut
]

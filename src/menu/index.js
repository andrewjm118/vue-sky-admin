import { uniqueId } from 'lodash'

// 物料
import material from './modules/material'

// 插件
import demoPlugins from './modules/demo-plugins'

// 公共组件
import demoComponents from './modules/demo-components'

// 系统功能
import demoPlayground from './modules/demo-playground'

// 扩展
import extension from './modules/extension'

/**
 * @description 给菜单数据补充上 path 字段
 * @param {Array} menu 原始的菜单数据
 */
function supplementPath(menu) {
  return menu.map(e => ({
    ...e,
    path: e.path || uniqueId('menu-empty-'),
    ...e.children ? {
      children: supplementPath(e.children)
    } : {}
  }))
}

// 菜单 侧边栏
export const menuAside = supplementPath([
  material,
  demoPlugins,
  demoComponents,
  demoPlayground,
  extension
])

// 菜单 顶栏
export const menuHeader = supplementPath([
  {
    path: '/index',
    title: '首页',
    icon: 'home'
  },
  material,
  demoPlugins,
  demoComponents,
  demoPlayground,
  extension
])

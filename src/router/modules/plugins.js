/*
 * @Description: 请输入....
 * @Author: andrewjm
 * @Date: 2020-12-25 10:40:12
 */

import layout from '@/layout/'
// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true }

export default {
  path: '/demo/plugins',
  name: 'demo-plugins',
  meta,
  redirect: { name: 'demo-plugins-index' },
  component: layout,
  children: [
    { path: 'clipboard-polyfill', name: 'demo-plugins-clipboard-polyfill', component: _import('demo/plugins/clipboard-polyfill'), meta: { ...meta, title: '剪贴板访问' }},
    { path: 'day', name: 'demo-plugins-day', component: _import('demo/plugins/day'), meta: { ...meta, title: '日期计算' }},
    { path: 'export/table', name: 'demo-plugins-export-table', component: _import('demo/plugins/export/table.vue'), meta: { ...meta, title: '导出表格' }},
    { path: 'export/txt', name: 'demo-plugins-export-txt', component: _import('demo/plugins/export/txt.vue'), meta: { ...meta, title: '导出文本' }},
    { path: 'import/csv', name: 'demo-plugins-import-csv', component: _import('demo/plugins/import/csv.vue'), meta: { ...meta, title: '导入 csv' }},
    { path: 'import/xlsx', name: 'demo-plugins-import-xlsx', component: _import('demo/plugins/import/xlsx.vue'), meta: { ...meta, title: '导入 xlsx' }},
    { path: 'index', name: 'demo-plugins-index', component: _import('demo/plugins/index'), meta: { ...meta, title: '插件首页' }},
    { path: 'js-cookie', name: 'demo-plugins-js-cookie', component: _import('demo/plugins/js-cookie'), meta: { ...meta, title: 'Cookie' }}
  ]
}

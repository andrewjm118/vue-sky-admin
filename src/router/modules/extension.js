/*
 * @Description: 请输入....
 * @Author: andrewjm
 * @Date: 2021-02-01 17:13:11
 */

import layout from '@/layout/'
// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true }

export default {
  path: '/extension',
  name: 'extension',
  meta,
  // redirect: { name: 'extension-index' },
  component: layout,
  children: [
    { path: 'ui', name: 'extension-ui', component: _import('extension/ui/index'), meta: { ...meta, title: 'UI库' }},
    { path: 'ui/sky-ui', name: 'extension-ui-sky-ui', component: _import('extension/ui/sky-ui'), meta: { ...meta, title: 'SKY-UI' }}
  ]
}

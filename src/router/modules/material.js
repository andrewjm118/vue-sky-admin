/*
 * @Description: 请输入....
 * @Author: andrewjm
 * @Date: 2020-12-28 11:37:59
 */

import layout from '@/layout/'
// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true }

export default {
  path: '/material',
  name: 'material',
  meta,
  redirect: { name: 'material-index' },
  component: layout,
  children: [
    { path: 'index', name: 'material-index', component: _import('material/index'), meta: { ...meta, title: '物料清单' }},
    // 区块
    { path: 'block', name: 'material-block', component: _import('material/block/index'), meta: { ...meta, title: '区块' }},
    { path: 'block/login1', name: 'material-block-login1', component: _import('material/block/login/index1'), meta: { ...meta, title: '登录模块1' }},
    { path: 'block/login2', name: 'material-block-login2', component: _import('material/block/login/index2'), meta: { ...meta, title: '登录模块2' }},
    { path: 'block/easycvr', name: 'material-block-easycvr', component: _import('material/block/easycvr'), meta: { ...meta, title: 'easycvr' }},
    { path: 'block/api-test', name: 'material-block-api-test', component: _import('material/block/api-test'), meta: { ...meta, title: 'api测试' }},
    { path: 'block/video-playback', name: 'material-block-video-playback', component: _import('material/block/video-playback'), meta: { ...meta, title: '视频回放' }},
    { path: 'block/vuecode-editor', name: 'material-block-vuecode-editor', component: _import('material/block/vuecode-editor'), meta: { ...meta, title: 'vue代码编辑器' }},
    { path: 'block/pop-up', name: 'material-block-pop-up', component: _import('material/block/pop-up'), meta: { ...meta, title: '弹出框' }},
    { path: 'block/js-panel', name: 'material-block-js-panel', component: _import('material/block/pop-up/js-panel'), meta: { ...meta, title: 'jspanel弹出框' }},
    { path: 'block/canvas/time-bar', name: 'material-block-canvas-time-bar', component: _import('material/block/canvas/time-bar'), meta: { ...meta, title: '时间进度条' }},
    // { path: 'block/geo-table', name: 'geo-table', component: _import('material/block/table/geoTable'), meta: { ...meta, title: 'geoTable' }},
    // { path: 'block/topology-map', name: 'topology-map', component: _import('material/block/map/topologyMap'), meta: { ...meta, title: '地图拓扑' }},
    // { path: 'block/rod-map', name: 'rod-map', component: _import('material/block/map/rodMap'), meta: { ...meta, title: '热点地图' }},
    // 模板
    // { path: 'template', name: 'material-template', component: _import('material/template/index'), meta: { ...meta, title: '模板' }},
    // { path: 'template/map', name: 'material-template-map', component: _import('material/template/map'), meta: { ...meta, title: '地图模板' }},
    // { path: 'template/disposal', name: 'material-template-disposal', component: _import('material/template/disposal'), meta: { ...meta, title: '处置系统' }},
    // 可视化
    { path: 'visual', name: 'material-visual', component: _import('material/visual/index'), meta: { ...meta, title: '可视化' }},
    { path: 'visual/border', name: 'material-visual-border', component: _import('material/visual/border'), meta: { ...meta, title: '可视化边框' }},
    { path: 'visual/decorate', name: 'material-visual-decorate', component: _import('material/visual/decorate'), meta: { ...meta, title: '可视化装饰条' }},
    { path: 'visual/carousel', name: 'material-visual-carousel', component: _import('material/visual/carousel'), meta: { ...meta, title: '可视化轮播表' }},
    { path: 'visual/carousel-rank', name: 'material-visual-carousel-rank', component: _import('material/visual/carousel/rank'), meta: { ...meta, title: '可视化排名轮播表' }},
    // 生成工具
    { path: 'generate-tools/form', name: 'generate-tools-form', component: _import('material/generate-tools/form'), meta: { ...meta, title: '生成工具表单' }}
  ]
}

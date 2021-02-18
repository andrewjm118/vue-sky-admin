import Vue from 'vue'

import Container from './container'
import ContainerFrame from './container-frame'
import LinkBtn from './link-btn'

// 注意 有些组件使用异步加载会有影响
Vue.component('container', Container)
Vue.component('container-frame', ContainerFrame)
Vue.component('link-btn', LinkBtn)
// Vue.component('count-up', () => import('./count-up'))
Vue.component('highlight', () => import('./highlight'))
Vue.component('icon', () => import('./icon'))
Vue.component('icon-svg', () => import('./icon-svg/index.vue'))
Vue.component('icon-select', () => import('./icon-select/index.vue'))
Vue.component('icon-svg-select', () => import('./icon-svg-select/index.vue'))
Vue.component('markdown', () => import('./markdown'))
// Vue.component('mde', () => import('./mde'))
Vue.component('module-index-banner', () => import('./module-index-banner'))
Vue.component('module-index-menu', () => import('./module-index-menu'))
// Vue.component('quill', () => import('./quill'))
Vue.component('scrollbar', () => import('./scrollbar'))
// Vue.component('ueditor', () => import('./ueditor'))
Vue.component('code-review', () => import('./code-review'))

// 临时全局组件或者变量

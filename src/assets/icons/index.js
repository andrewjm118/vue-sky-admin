import Vue from 'vue'

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
const iconMap = requireAll(req)
Vue.prototype.$IconSvg = iconMap.map(e => e.default.id.slice(5))
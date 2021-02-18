/*
 * @Description: 请输入....
 * @Author: andrewjm
 * @Date: 2020-12-04 14:02:03
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const files = require.context('./modules', false, /\.js$/)
const modules = {}

files.keys().forEach(key => {
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

const store = new Vuex.Store({
  modules
})

export default store

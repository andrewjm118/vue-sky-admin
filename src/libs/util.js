import cookies from './util.cookies'
import db from './util.db'
import log from './util.log'

const util = {
  cookies,
  db,
  log
}
/**
 * @description: 更新标题
 * @param {String} val 标题
 * @Date: 2020-10-26 11:35:37
 */
util.title = function(val) {
  window.document.title = val
}

util.open = function(url) {
  var a = document.createElement('a')
  a.setAttribute('href', url)
  a.setAttribute('target', '_blank')
  a.setAttribute('id', 'temp-link')
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

export default util

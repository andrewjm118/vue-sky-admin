import Cookies from 'js-cookie'

const cookies = {}

/**
 * @description: 存储 cookies 值
 * @param {String} name cookie name
 * @param {String} value cookie value
 * @param {Object} setting cookie setting
 * @Date: 2020-10-23 11:27:42
 */
cookies.set = function(name = 'default', value = '', cookieSetting = {}) {
  const currentCookieSetting = {
    expires: 1
  }
  Object.assign(currentCookieSetting, cookieSetting)
  Cookies.set(`sky-${process.env.VUE_APP_VERSION}-${name}`, value, currentCookieSetting)
}

/**
 * @description: 获取 cookie 值
 * @param {String} name cookie name
 * @Date: 2020-10-23 11:33:36
 */
cookies.get = function(name = 'default') {
  return Cookies.get(`sky-${process.env.VUE_APP_VERSION}-${name}`)
}

/**
 * @description: 获取 cookie 全部值
 * @Date: 2020-10-23 11:34:25
 */
cookies.getAll = function() {
  return Cookies.get()
}

cookies.remove = function(name = 'default') {
  return Cookies.remove(name)
}

export default cookies

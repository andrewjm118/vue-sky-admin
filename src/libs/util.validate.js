/*
 * @Description: 请输入....
 * @Author: andrewjm
 * @Date: 2020-11-26 15:24:31
 */
const validate = {}

/**
 * @param {string} path
 * @returns {Boolean}
 */
validate.isExternal = function(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

export default validate

/*
 * @Description: 文件请求
 * @Author: andrewjm
 * @Date: 2021-01-04 14:34:13
 */
import { request } from '../service'

export default {
  file_get(url = '') {
    return request({
      baseURL: process.env.BASE_URL,
      url,
      method: 'get'
    })
  }
}

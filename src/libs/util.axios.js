import axios from 'axios'
import dayjs from 'dayjs'
const service = axios.create()

let requestTime = null

// 添加请求拦截器
service.interceptors.request.use(function(config) {
  requestTime = dayjs().format('YYYY-MM-DD HH:mm:ss:SSS')
  console.log(222, requestTime)
  return config
}, function(error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

var myInterceptor = service.interceptors.request.use(function(config) {
  console.log(config)
  return config
})

// // console.log(myInterceptor)
// service.interceptors.request.eject(myInterceptor)
// 添加响应拦截器
service.interceptors.response.use(function(response) {
  console.log('响应时间' + dayjs().diff(dayjs(requestTime), 'millisecond'), '毫秒')

  return response
}, function(error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default service

export {
  myInterceptor
}

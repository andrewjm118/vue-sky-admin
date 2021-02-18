/*
 * @Description: 请输入....
 * @Author: andrewjm
 * @Date: 2020-12-07 16:02:50
 */
import { Message } from 'element-ui'
import util from '@/libs/util'
import axios from 'axios'
import Adapter from 'axios-mock-adapter'
import store from '@/store'

function handleError(error) {
  // 添加到日志
  store.dispatch('log/push', {
    message: '',
    type: 'danger',
    meta: {
      error
    }
  })
  // 打印到控制台
  if (process.env.NODE_ENV === 'development') {
    util.log.danger('>>>>>> Error >>>>>>')
    console.log(error)
  }
  // 显示提示
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  })
}

/**
 * @description: 创建请求实例
 * @Date: 2020-12-14 13:58:46
 */
function createService() {
  // 创建一个 axios 实例
  const service = axios.create()
  // 请求拦截
  service.interceptors.request.use(
    config => config,
    error => {
      // 发送失败
      console.log(error)
      return Promise.reject(error)
    }
  )

  service.interceptors.response.use(
    response => {
      if (response.data.code === undefined) {
        return response.data
      }
      switch (response.data.code) {
        case 0: return response.data.data
        case 401 : throw new Error('请重新登录')
        default: throw new Error(`${response.data.msg}: ${response.config.url}`)
      }
    },
    error => {
      handleError(error)
      throw error
      // const status = response.status
      // switch (status) {
      //   case 400: error.message = '请求错误'; break
      //   case 401: error.message = '未授权，请登录'; break
      //   case 403: error.message = '拒绝访问'; break
      //   case 404: error.message = `请求地址出错: ${error.response.config.url}`; break
      //   case 408: error.message = '请求超时'; break
      //   case 500: error.message = '服务器内部错误'; break
      //   case 501: error.message = '服务未实现'; break
      //   case 502: error.message = '网关错误'; break
      //   case 503: error.message = '服务不可用'; break
      //   case 504: error.message = '网关超时'; break
      //   case 505: error.message = 'HTTP版本不受支持'; break
      //   default: break
      // }
    }
  )
  return service
}

function createRequest(service) {
  return function(config) {
    const token = util.cookies.get('token')
    const configDefault = {
      headers: {
        Authorization: token,
        // 'Content-Type': get(config, 'headers.Content-Type', 'application/json')
        'Content-Type': 'application/json'
      },
      timeout: 5000,
      baseURL: process.env.VUE_APP_API,
      data: {}
    }

    const option = Object.assign(configDefault, config)
    return service(option)
  }
}

export const service = createService()
export const request = createRequest(service)

// 用于模拟网络请求的实例和请求方法
export const serviceForMock = createService()
export const requestForMock = createRequest(serviceForMock)

// 网络请求数据模拟工具
export const mock = new Adapter(serviceForMock)

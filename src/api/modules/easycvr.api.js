/*
 * @Description: easycvr
 * @Author: andrewjm
 * @Date: 2021-01-22 15:13:24
 */

import axios from 'axios'
import md5 from 'md5'

export default {
  /**
   * @description: 登录
   * @param {*} username 用户名
   * @param {*} password 密码
   * @return {*}
   * @Date: 2021-01-22 16:01:58
   */
  login(username, password) {
    return axios({
      method: 'get',
      // withCredentials: true,
      url: '/api/v1/login',
      params: {
        username: username,
        password: md5(password)
      }
    })
  },
  /**
   * @description:  按日查询通道录像
   * @param {*} id      通道号
   * @param {*} device  录像类型 Device, Cloud
   * @param {*} period  日期, YYYYMMDD
   * @return {*}
   * @Date: 2021-01-22 16:25:31
   */
  getApiV1RecordQuerydaily(id, recordType, period) {
    return axios({
      method: 'get',
      // withCredentials: true,
      url: '/api/v1/record/querydaily',
      params: {
        id: id,
        recordType: recordType,
        period: period
      }
    })
  },

  getApiV1RecordQuerymonthly(id, recordType, period) {
    return axios({
      method: 'get',
      withCredentials: true,
      url: '/api/v1/record/querymonthly',
      params: {
        id: id,
        recordType: recordType,
        period: period
      }
    })
  },
  ceshi(controlType, ip) {
    return axios({
      method: 'get',
      // withCredentials: true,
      url: 'http://localhost:9062/Command/CyPanControl',
      params: {
        controlType: controlType,
        ip: ip
      }
    })
  }
}

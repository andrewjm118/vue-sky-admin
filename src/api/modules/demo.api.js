/*
 * @Description: 法大师傅大师傅....
 * @Author: andrewjm
 * @Date: 2020-12-15 08:46:05
 */
import { mock, requestForMock } from '../service'
import faker from 'faker/locale/zh_CN'
import * as tools from '../tools'
import { map, random } from 'lodash'

const businessIssue142Db = [
  { id: '1', name: '用户 1', address: '上海市普陀区金沙江路 1518 弄' },
  { id: '2', name: '用户 2', address: '上海市普陀区金沙江路 1517 弄' },
  { id: '3', name: '用户 3', address: '上海市普陀区金沙江路 1519 弄' },
  { id: '4', name: '用户 4', address: '上海市普陀区金沙江路 1516 弄' }
]

export default {
  simple() {
    mock.onGet('/demo/haha').reply(200, {
      code: 0,
      data: {
        hehe: 'hehe'
      },
      msg: 'success'
    })
    // 接口请求
    return requestForMock({
      url: '/demo/haha',
      method: 'get'
    })
  },
  demo1() {
    mock
      .onAny('/demo/business/issues/142/fetch')
      .reply(...tools.responseSuccess({ list: businessIssue142Db }))
      // 接口请求
    return requestForMock({
      url: '/demo/business/issues/142/fetch',
      method: 'get'
    })
  },
  demo2(params = {}) {
    mock
      .onAny('/demo/business/table/1/fetch')
      .reply(config => {
        return tools.responseSuccess({
          page: {
            total: 10000
          },
          list: map(Array(config.params.pageSize), () => ({
            key: faker.random.uuid(),
            value: [10, 100, 200, 500][random(0, 3)],
            type: faker.random.boolean(),
            admin: faker.name.firstName() + faker.name.lastName(),
            adminNote: faker.random.words(),
            dateTimeCreat: faker.date.past(),
            used: faker.random.boolean(),
            dateTimeUse: faker.date.past()
          }))
        })
      })
    // 接口请求
    return requestForMock({
      url: '/demo/business/table/1/fetch',
      method: 'get',
      params
    })
  }
}

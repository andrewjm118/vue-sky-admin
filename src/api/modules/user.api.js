/*
 * @Description: 请输入....
 * @Author: andrewjm
 * @Date: 2020-12-17 09:40:15
 */
import { mock, requestForMock } from '../service'
import faker from 'faker/locale/zh_CN'
import * as tools from '../tools'
import { find, assign } from 'lodash'

const users = [
  { username: 'admin', password: 'admin', uuid: 'admin-uuid', name: 'Admin' },
  { username: 'editor', password: 'editor', uuid: 'editor-uuid', name: 'Editor' },
  { username: 'user1', password: 'user1', uuid: 'user1-uuid', name: 'User1' }
]

export default {
  userLogin(data = {}) {
    mock
      .onAny('/login')
      .reply(config => {
        const user = find(users, tools.parse(config.data))
        return user
          ? tools.responseSuccess(assign({}, user, { token: faker.random.uuid() }))
          : tools.responseError({}, '账号或密码不正确')
      })
      // 接口请求
    return requestForMock({
      url: '/login',
      method: 'post',
      data
    })
  }
}

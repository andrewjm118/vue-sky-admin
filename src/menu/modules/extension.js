/*
 * @Description: 请输入....
 * @Author: andrewjm
 * @Date: 2021-02-01 17:07:17
 */
export default {
  path: '/extension',
  title: '扩展',
  children: [
    {
      path: '/extension/ui',
      title: 'UI库',
      icon: '',
      children: [
        { path: '/extension/ui/sky-ui', title: 'sky-ui', icon: 'envira' }
      ]
    }
  ]
}

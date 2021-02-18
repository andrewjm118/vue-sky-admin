export default {
  // 快捷键
  // 支持快捷键 例如 ctrl+shift+s
  hotkey: {
    search: {
      open: 's',
      close: 'esc'
    }
  },
  // 侧边栏默认配置
  menu: {
    asideCollapse: false,
    asideTransition: false
  },
  // 在读取持久化数据失败时默认页面
  page: {
    opened: [
      {
        name: 'index',
        fullPath: '/index',
        meta: {
          title: '首页',
          auth: false
        }
      }
    ]
  },
  // 菜单搜索
  search: {
    enable: true
  },
  // 注册的主题
  theme: {
    list: [
      {
        title: '冬奥',
        name: 'star',
        backgroundImage: 'static/images/theme/star/bg.jpg',
        preview: 'static/images/theme/star/preview@2x.png'
      },
      {
        title: 'Chester',
        name: 'chester',
        preview: 'static/images/theme/chester/preview@2x.png'
      },
      {
        title: 'Element',
        name: 'element',
        preview: 'static/images/theme/element/preview@2x.png'
      },
      {
        title: '紫罗兰',
        name: 'violet',
        preview: 'static/images/theme/violet/preview@2x.png'
      },
      {
        title: '简约线条',
        name: 'line',
        backgroundImage: 'static/images/theme/line/bg.jpg',
        preview: 'static/images/theme/line/preview@2x.png'
      },
      {
        title: 'Tomorrow Night Blue (vsCode)',
        name: 'tomorrow-night-blue',
        preview: 'static/images/theme/tomorrow-night-blue/preview@2x.png'
      }
    ]
  },
  // 是否默认开启页面切换动画
  transition: {
    active: true
  }
}

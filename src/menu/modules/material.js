/*
 * @Description: 请输入....
 * @Author: andrewjm
 * @Date: 2020-12-30 11:50:40
 */
export default {
  path: '/material',
  title: '物料',
  iconSvg: 'material',
  children: [
    { path: '/material/index', title: '物料清单', iconSvg: 'material' },
    {
      path: '/material/template',
      title: '模板',
      icon: '',
      children: [
        { path: '/material/template/map', title: '地图', icon: 'map-marker' },
        { path: '/material/template/disposal', title: '处置系统' }
      ]
    },
    { path: '/material/block',
      title: '业务区块',
      icon: 'cube',
      children: [
        { title: '登录', children: [
          { path: '/material/block/login1', title: '登录模板1', icon: 'user-circle' },
          { path: '/material/block/login2', title: '登录模板2', icon: 'user-circle' }
        ] },
        // { title: '业务交互', children: [
        //   { title: '视频' },
        //   { path: '/material/block/easycvr', title: 'easycvr', icon: 'youtube-play' },
        //   { path: '/material/block/api-test', title: 'api-test' }
        // ]
        // },
        { title: 'canvas', children: [
          { path: '/material/block/video-playback', title: '视频回放进度条', iconSvg: 'playback' },
          { path: '/material/block/canvas/time-bar', title: '时间进度条' }
        ]
        },
        { title: '弹出框', children: [
          { path: '/material/block/pop-up', title: '弹出框' },
          { path: '/material/block/js-panel', title: 'jspanel-弹出框' }
        ] }
        // { path: '/material/block/table',
        //   title: '表格',
        //   children: [
        //     { path: '/material/block/geo-table', title: 'geo-table' }
        //   ]
        // },
        // { path: '/material/',
        //   title: '地图',
        //   children: [
        //     { path: '/material/block/topology-map', title: '地图拓扑' },
        //     { path: '/material/block/rod-map', title: '热点地图' }
        //   ]
        // }

      ]
    },
    { path: '/material/visual',
      title: '可视化区块',
      icon: '',
      children: [
        { path: '/material/visual/border', title: '边框' },
        { path: '/material/visual/decorate', title: '装饰条' },
        { path: '/material/visual/carousel', title: '轮播表' },
        { path: '/material/visual/carousel-rank', title: '排名轮播表' }

      ]
    },
    { path: '/material/generate-tools',
      title: '生成工具',
      icon: '',
      children: [
        { path: '/material/generate-tools/form', title: '表单' },
        { path: 'http://plug.zzf9.com/#/curd', title: 'curd', icon: 'gitee' }
      ]
    }
  ]
}


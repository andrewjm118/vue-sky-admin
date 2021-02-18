<!--
 * @Description: 请输入....
 * @Author: andrewjm
 * @Date: 2021-01-19 11:54:17
-->
<template>
  <container>
    <el-button @click="demo1">基础例子</el-button>
    <el-button @click="demo2">带页头页脚</el-button>
    <el-button @click="demo3">播放mp4视频</el-button>
    <el-button @click="demo4">嵌入iframe</el-button>
  </container>
</template>

<script>

export default {
  methods: {
    demo1() {
      window.jsPanel.create({
        // position: 'left-top',
        content: '<p>弹框内容</p>',
        contentSize: '700 350',
        headerTitle: '多功能弹出框',
        theme: 'primary',
        callback: function(panel) {
        // do something if needed ...
        }
      })
    },
    demo2() {
      window.jsPanel.create({
        theme: 'dark',
        headerLogo: '<i class="fad fa-home-heart ml-2"></i>',
        headerTitle: '多功能弹出框',
        headerToolbar: '<span class="text-sm">页头</span>',
        footerToolbar: '<span class="flex flex-grow">页尾</span>' +
                   '<i class="fal fa-clock mr-2"></i><span class="clock">loading ...</span>',
        panelSize: {
          width: () => { return Math.min(800, window.innerWidth * 0.9) },
          height: () => { return Math.min(500, window.innerHeight * 0.6) }
        },
        animateIn: 'jsPanelFadeIn',
        // contentAjax: {
        //   url: 'https://jspanel.de/',
        //   done: (xhr, panel) => {
        //     panel.content.innerHTML = xhr.responseText
        //   }
        // },
        content: '<p>弹框内容</p>',
        onwindowresize: true,
        callback: function(panel) {
          function clock() {
            const time = new Date()
            const hours = time.getHours()
            const minutes = time.getMinutes()
            const seconds = time.getSeconds()
            panel.footer.querySelectorAll('.clock')[0].innerHTML = `${harold(hours)}:${harold(minutes)}:${harold(seconds)}`
            function harold(standIn) {
              if (standIn < 10) { standIn = '0' + standIn }
              return standIn
            }
          }
          setInterval(clock, 1000)
        }
      })
    },
    demo3() {
      window.jsPanel.create({
        content: "<video controls autoplay width='640' height='360'><source src='./videos/1.mp4' type='video/mp4'></video>",
        contentSize: 'auto',
        contentOverflow: 'hidden',
        headerTitle: 'content: HTML5 video',
        theme: '#304322 filled'
      })
    },
    demo4() {
      window.jsPanel.create({
        theme: '#011842 filled',
        headerTitle: 'Spherical Panorama Image',
        contentSize: {
          width: window.innerWidth * 0.8,
          height: window.innerHeight * 0.8
        },
        contentOverflow: 'hidden',
        content: '<iframe src="./report.html" style="width: 100%; height: 100%;"></iframe>'
      })
    }
  }
}
</script>

<style>

</style>

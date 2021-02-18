<!--
 * @Description: 请输入....
 * @Author: andrewjm
 * @Date: 2021-01-21 09:13:38
-->
<template>
  <container>
    <time-line ref="timeLine" :timecell="timecell" @mouseupFunc="mouseupFunc" />
    <el-row style="margin-top:40px;">
      <el-button @click="play">播放</el-button>
      <el-button @click="stop">停止播放</el-button>
      <el-button @click="handleTimecell">切换视频片段</el-button>
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="查看某天视频片段"
        style="margin-left:20px;"
        @change="changeDateTimeline"
      />
    </el-row>
    <p>当前播放时间：{{ this.playVal }}</p>
  </container>
</template>

<script>
import TimeLine from './time-line'
export default {
  components: {
    TimeLine
  },
  data() {
    return {
      value1: '',
      playVal: '',
      timecell: [
        {
          'beginTime': new Date().getTime() - 3 * 3600 * 1000,
          'endTime': new Date().getTime() - 1 * 3600 * 1000,
          'style': {
            'background': 'rgba(132, 244, 180, 0.498039)'
          }
        },
        {
          'beginTime': new Date().getTime() - 6 * 3600 * 1000,
          'endTime': new Date().getTime() - 4 * 3600 * 1000,
          'style': {
            'background': 'rgba(132, 244, 180, 0.498039)'
          }
        }
      ],
      timer: null
    }
  },
  methods: {
    play() {
      console.log('zlm333')
      this.timer = setInterval(() => {
        this.$refs.timeLine.play(new Date().getTime())
      }, 1000)
    },
    stop() {
      clearInterval(this.timer)
    },
    handleTimecell() {
      this.timecell = [
        {
          'beginTime': new Date().getTime() - 4 * 3600 * 1000,
          'endTime': new Date().getTime() - 1 * 3600 * 1000,
          'style': {
            'background': 'rgba(132, 244, 180, 0.498039)'
          }
        }
      ]
      const time1 = new Date().getTime() - 12 * 3600 * 1000

      this.$refs.timeLine.loadVideoClip(time1, this.timecell, false)
    },
    changeDateTimeline(e) {
      console.log(e)
      this.$refs.timeLine.play(new Date(e).getTime())
    },
    mouseupFunc(data) {
      console.log(data)
      this.playVal = data
    }
  }
}
</script>

<style>

</style>

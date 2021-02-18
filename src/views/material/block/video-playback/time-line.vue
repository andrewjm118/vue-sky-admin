<!--
 * @Description: 请输入....
 * @Author: andrewjm
 * @Date: 2021-01-21 13:41:57
-->
<template>
  <canvas
    id="timeline"
    :width="width"
    :height="height"
    style="cursor: pointer;border:1px solid #2b2f33;background-color: #2b2f33;position:relative"
    ondragstart="return false;"
    @mouseup="mouseupFunc"
    @mouseout="mouseoutFunc"
    @mousemove="mousemoveFunc"
    @mousedown="mousedownFunc"
  />
</template>

<script>

export default {
  name: 'time-line',
  props: {
    width: {
      type: String,
      default: '800'
    },
    height: {
      type: String,
      default: '62'
    },
    timecell: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      minutes_per_step: [1, 2, 5, 10, 15, 20, 30, 60, 120, 180, 240, 360, 720, 1440], // min/格
      graduation_step: 15, // 刻度间最小宽度，单位px
      hours_per_ruler: 24, // 时间轴显示24小时
      start_timestamp: new Date().getTime() - 12 * 60 * 60 * 1000,
      distance_between_gtitle: 50,
      zoom: 24,
      g_isMousedown: false, // 拖动 mousedown标记
      g_isMousemove: false, // 拖动 mousemove标记
      g_mousedownCursor: null, // 拖动mousedown的位置
      returnTime: null // mouseup返回时间
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.canvas = document.getElementById('timeline')
      this.ctx = this.canvas.getContext('2d')
      this.canvasWidth = this.canvas.width
      this.canvasHeight = this.canvas.height
      this.init(this.start_timestamp, this.timecell, false)
    })
  },
  methods: {
    /**
     * @description: 初始化
     * @param {*} start_timestamp 时间轴最左侧时间
     * @param {*} timecell 录像段数组
     * @return {*}
     * @Date: 2021-01-21 14:39:26
     */
    init(start_timestamp, timecell, redrawFlag) {
      this.drawCellBg()
      this.add_graduations(start_timestamp)
      this.add_cells(timecell)
      this.drawLine(0, this.canvasHeight, this.canvasWidth, this.canvasHeight, 'rgb(151, 158, 167)', 1) // 底线
      this.drawLine(this.canvasWidth / 2, 0, this.canvasWidth / 2, 33, 'rgb(64, 196, 255', 2) // 中间播放点时间线
      // 只有第一次进入才需要添加事件
      if (!redrawFlag) {
        this.add_events()
      }
      var time = start_timestamp + (this.hours_per_ruler * 3600 * 1000) / 2
      this.ctx.fillStyle = 'rgb(64, 196, 255)'
      this.ctx.fillText(this.changeTime(time), this.canvasWidth / 2 - 60, 50)
    },
    /**
     * @description: 绘制刻度
     * @param {*} start_timestamp 时间轴最左侧时间
     * @return {*}
     * @Date: 2021-01-21 14:59:58
     */
    add_graduations(start_timestamp) {
      var px_per_min = this.canvasWidth / (this.hours_per_ruler * 60) // px/min
      var px_per_ms = this.canvasWidth / (this.hours_per_ruler * 60 * 60 * 1000) // px/ms
      var px_per_step = this.graduation_step // px/格 默认最小值20px
      var min_per_step = px_per_step / px_per_min // min/格
      for (var i = 0; i < this.minutes_per_step.length; i++) {
        if (min_per_step <= this.minutes_per_step[i]) { // 让每格时间在this.minutes_per_step规定的范围内
          min_per_step = this.minutes_per_step[i]
          px_per_step = px_per_min * min_per_step
          break
        }
      }

      var medium_step = 30
      for (var j = 0; j < this.minutes_per_step.length; j++) {
        if (this.distance_between_gtitle / px_per_min <= this.minutes_per_step[j]) {
          medium_step = this.minutes_per_step[j]
          break
        }
      }

      var num_steps = this.canvasWidth / px_per_step // 总格数
      var graduation_left
      var graduation_time
      var lineH
      var ms_offset = this.ms_to_next_step(start_timestamp, min_per_step * 60 * 1000)// 开始的偏移时间 ms
      var px_offset = ms_offset * px_per_ms // 开始的偏移距离 px
      var ms_per_step = px_per_step / px_per_ms // ms/step
      for (var z = 0; z < num_steps; z++) {
        graduation_left = px_offset + z * px_per_step // 距离=开始的偏移距离+格数*px/格
        graduation_time = start_timestamp + ms_offset + z * ms_per_step // 时间=左侧开始时间+偏移时间+格数*ms/格
        var date = new Date(graduation_time)
        if (date.getUTCHours() === 0 && date.getUTCMinutes() === 0) {
          lineH = 25
          var big_date = this.graduation_title(date)
          this.ctx.fillText(big_date, graduation_left - 20, 30)
          this.ctx.fillStyle = 'rgba(151,158,167,1)'
        } else if (graduation_time / (60 * 1000) % medium_step === 0) {
          lineH = 15
          var middle_date = this.graduation_title(date)
          this.ctx.fillText(middle_date, graduation_left - 20, 30)
          this.ctx.fillStyle = 'rgba(151,158,167,1)'
        } else {
          lineH = 10
        }
        this.drawLine(graduation_left, 0, graduation_left, lineH, 'rgba(151,158,167,1)', 1)
      }
    },
    /**
     * @description: 绘制线
     * @param {*} beginX
     * @param {*} beginY
     * @param {*} endX
     * @param {*} endY
     * @param {*} color
     * @param {*} width
     * @return {*}
     * @Date: 2021-01-21 14:59:51
     */
    drawLine(beginX, beginY, endX, endY, color, width) {
      this.ctx.beginPath()
      this.ctx.moveTo(beginX, beginY)
      this.ctx.lineTo(endX, endY)
      this.ctx.strokeStyle = color
      this.ctx.lineWidth = width
      this.ctx.stroke()
    },
    /**
     * @description: 添加录像段
     * @param {*} cells 录像数组
     * @return {*}
     * @Date: 2021-01-21 15:01:06
     */
    add_cells(cells) {
      cells.forEach(cell => {
        this.draw_cell(cell)
      })
    },
    /**
     * @description: 绘制录像块
     * @param {*} cell cell包括beginTime ms;endTime ms;style
     * @return {*}
     * @Date: 2021-01-21 15:02:14
     */
    draw_cell(cell) {
      var _this = this
      var px_per_ms = _this.canvasWidth / (_this.hours_per_ruler * 60 * 60 * 1000) // px/ms
      var beginX = (cell.beginTime - _this.start_timestamp) * px_per_ms
      var cell_width = (cell.endTime - cell.beginTime) * px_per_ms
      _this.ctx.fillStyle = cell.style.background
      _this.ctx.fillRect(beginX, 0, cell_width, 15)
    },
    /**
     * @description: 绘制录像块背景
     * @param {*}
     * @return {*}
     * @Date: 2021-01-21 15:03:02
     */
    drawCellBg() {
      this.ctx.fillStyle = 'rgba(69, 72, 76, 0.5)'
      this.ctx.fillRect(0, 0, this.canvasWidth, 15)
    },
    add_events() {
      var _this = this
      if (_this.canvas.addEventListener) {
        _this.canvas.addEventListener('mousewheel', _this.mousewheelFunc.bind(_this))
        // _this.canvas.addEventListener('mousedown', _this.mousedownFunc.bind(_this))
        // _this.canvas.addEventListener('mousemove', _this.mousemoveFunc.bind(_this))
        // _this.canvas.addEventListener('mouseup', _this.mouseupFunc.bind(_this))
        // _this.canvas.addEventListener('mouseout', _this.mouseoutFunc.bind(_this))
      }
    },
    /**
     * @description: 拖动/点击 mousedown事件
     * @param {*} e
     * @return {*}
     * @Date: 2021-01-21 15:04:33
     */
    mousedownFunc(e) {
      this.g_isMousedown = true
      this.g_mousedownCursor = this.get_cursor_x_position(e, true)// 记住mousedown的位置
    },
    /**
     * @description: 拖动/鼠标 hover显示 mousemove事件
     * @param {*} e
     * @return {*}
     * @Date: 2021-01-21 15:05:04
     */
    mousemoveFunc(e) {
      var _this = this
      var pos_x = _this.get_cursor_x_position(e, true)
      var px_per_ms = _this.canvasWidth / (_this.hours_per_ruler * 60 * 60 * 1000) // px/ms
      _this.clearCanvas()
      if (_this.g_isMousedown) {
        var diff_x = pos_x - _this.g_mousedownCursor
        _this.start_timestamp = _this.start_timestamp - Math.round(diff_x / px_per_ms)
        _this.init(_this.start_timestamp, _this.timecell, true)
        _this.g_isMousemove = true
        _this.g_mousedownCursor = pos_x
      } else {
        var time = _this.start_timestamp + pos_x / px_per_ms
        _this.init(_this.start_timestamp, _this.timecell, true)
        _this.drawLine(pos_x, 0, pos_x, 50, 'rgb(194, 202, 215)', 1)
        _this.ctx.fillStyle = 'rgb(194, 202, 215)'
        _this.ctx.fillText(_this.changeTime(time), pos_x - 50, 60)
      }
    },
    /**
     * @description: 点击 mouseup事件
     * @param {*} e
     * @return {*}
     * @Date: 2021-01-21 15:05:27
     */
    mouseupFunc(e) {
      var _this = this
      if (_this.g_isMousemove) { // 拖动 事件
        _this.g_isMousemove = false
        _this.g_isMousedown = false
        _this.returnTime = _this.start_timestamp + (_this.hours_per_ruler * 3600 * 1000) / 2
      } else { // click 事件
        _this.g_isMousedown = false
        var posx = _this.get_cursor_x_position(e, true) // 鼠标距离 px
        var ms_per_px = (_this.zoom * 3600 * 1000) / _this.canvasWidth // ms/px
        _this.returnTime = _this.start_timestamp + posx * ms_per_px
        _this.set_time_to_middle(_this.returnTime)
      }
      this.$emit('mouseupFunc', _this.returnTime)
    },
    /**
     * @description: 鼠标移出隐藏时间 mouseout事件
     * @param {*}
     * @return {*}
     * @Date: 2021-01-21 15:05:51
     */
    mouseoutFunc() {
      var _this = this
      _this.clearCanvas()
      _this.init(_this.start_timestamp, _this.timecell, true)
    },
    /**
     * @description: 滚轮放大缩小，以时间轴中心为准 mousewheel事件
     * @param {*} event
     * @return {*}
     * @Date: 2021-01-21 15:06:19
     */
    mousewheelFunc(event) {
      var _this = this
      if (event && event.preventDefault) {
        event.preventDefault()
      } else {
        window.event.returnValue = false
        return false
      }

      var e = window.event || event
      var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)))
      var middle_time = _this.start_timestamp + (_this.hours_per_ruler * 3600 * 1000) / 2 // ms 记住当前中间的时间
      if (delta < 0) {
        _this.zoom = _this.zoom + 4
        if (_this.zoom >= 24) {
          _this.zoom = 24// 放大最大24小时
        }
        _this.hours_per_ruler = _this.zoom
      } else if (delta > 0) { // 放大
        _this.zoom = _this.zoom - 4
        if (_this.zoom <= 1) {
          _this.zoom = 1// 缩小最小1小时
        }
        _this.hours_per_ruler = _this.zoom
      }

      _this.clearCanvas()
      _this.start_timestamp = middle_time - (_this.hours_per_ruler * 3600 * 1000) / 2 // start_timestamp = 当前中间的时间 - zoom/2
      _this.init(_this.start_timestamp, _this.timecell, true)
    },
    /**
     * @description: 获取鼠标posx
     * @param {*} e
     * @return {*}
     * @Date: 2021-01-21 15:07:13
     */
    get_cursor_x_position(e, isRelativePosition) {
      var posx = 0
      if (!e) {
        e = window.event
      }
      if (isRelativePosition) {
        posx = e.offsetX
      } else {
        if (e.pageX || e.pageY) {
          posx = e.pageX
        } else if (e.clientX || e.clientY) {
          posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft
        }
      }

      return posx
    },
    /**
     * @description: 返回时间轴上刻度的时间
     * @param {*} datetime new Date 格式
     * @return {*}
     * @Date: 2021-01-21 15:07:54
     */
    graduation_title(datetime) {
      if (datetime.getHours() === 0 && datetime.getMinutes() === 0 && datetime.getMilliseconds() === 0) {
        return ('0' + datetime.getDate().toString()).substr(-2) + '.' +
            ('0' + (datetime.getMonth() + 1).toString()).substr(-2) + '.' +
            datetime.getFullYear()
      }
      return datetime.getHours() + ':' + ('0' + datetime.getMinutes().toString()).substr(-2)
    },
    /**
     * @description: 左侧开始时间的偏移，返回单位ms
     * @param {*} timestamp
     * @param {*} step
     * @return {*}
     * @Date: 2021-01-21 15:08:51
     */
    ms_to_next_step(timestamp, step) {
      var remainder = timestamp % step
      return remainder ? step - remainder : 0
    },
    /**
     * @description: 设置时间，让这个时间点跳到中间红线处
     * @param {*} time
     * @return {*}
     * @Date: 2021-01-21 15:09:12
     */
    set_time_to_middle(time) {
      this.clearCanvas()
      this.start_timestamp = time - (this.hours_per_ruler * 60 * 60 * 1000) / 2
      this.init(this.start_timestamp, this.timecell, true)
    },
    /**
     * @description: 返回点击或者拖动的时间点
     * @param {*} callback
     * @return {*}
     * @Date: 2021-01-21 15:09:42
     */
    returnMouseupTime(callback) {
      var _this = this
      if (_this.returnTime != null) {
        if (callback) {
          callback(_this.returnTime)
        }
      }
    },
    /**
     * @description: 清除canvas 每次重新绘制需要先清除
     * @param {*}
     * @return {*}
     * @Date: 2021-01-21 15:10:01
     */
    clearCanvas() {
      this.ctx.clearRect(0, 0, 1500, 150)
    },
    changeTime(time) {
      var newTime = new Date(time)
      var year = newTime.getFullYear()
      var month = newTime.getMonth() + 1
      if (month < 10) {
        month = '0' + month
      }
      var date = newTime.getDate()
      if (date < 10) {
        date = '0' + date
      }
      var hour = newTime.getHours()
      if (hour < 10) {
        hour = '0' + hour
      }
      var minute = newTime.getMinutes()
      if (minute < 10) {
        minute = '0' + minute
      }
      var second = newTime.getSeconds()
      if (second < 10) {
        second = '0' + second
      }
      return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second
    },
    play(time) {
      this.set_time_to_middle(time)
    },
    loadVideoClip(start_timestamp, timecell, redrawFlag) {
      this.clearCanvas()
      this.init(start_timestamp, timecell, redrawFlag)
    }

  }
}
</script>

<style>

</style>

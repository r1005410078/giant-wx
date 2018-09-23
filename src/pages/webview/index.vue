<template>
  <div>
    <!-- <web-view
      :src="address"
    ></web-view> -->
    <div class="text">用浏览器扫一扫下方二维码，进入推荐路线地图</div>
    <canvas @click="previewImage" style="width: 300px; height: 300px;" canvas-id="myQrcode"></canvas>
  </div>
</template>

<script>
import store from './store'
import drawQrcode from 'weapp-qrcode'
export default {
  computed: {
    address () {
      return store.state.address
    }
  },
  onLoad (options) {
    drawQrcode({
      width: 300,
      height: 300,
      canvasId: 'myQrcode',
      text: store.state.address
    })
  },
  methods: {
    previewImage () {
      wx.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: 300,
        height: 300,
        destWidth: 300,
        destHeight: 300,
        canvasId: 'myQrcode',
        success: res => {
          wx.previewImage({
            current: res.tempFilePath, // 当前显示图片的http链接
            urls: [res.tempFilePath] // 需要预览的图片http链接列表
          })
        }
      })
    }
  }
}
</script>

<style scoped>
  .text {
    text-align: center;
    margin-top: 15px;
  }
  canvas {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -150px;
    margin-left: -150px;
  }
</style>

<template>
  <div class="page">
    <div class="home-image" v-show="!!miao" @click="onClick">
      <image
        mode="aspectFit"
        :src="homeImageUrl"
      />
      <div class="tiaoguo">{{miao}}s<span style="margin-left: 0px; margin-right: 5px;">|</span><span>跳过</span></div>
    </div>
    <div class="weui-msg" v-show="showLogin">
      <div class="weui-msg__icon-area">
          <icon type="success" size="93"></icon>
      </div>
      <div class="weui-msg__text-area">
          <div class="weui-msg__title">登陆成功</div>
          <div class="weui-msg__desc">当前网络安全， 确认微信授权</div>
      </div>
      <div class="weui-msg__opr-area">
          <div class="weui-btn-area">
              <button open-type="getUserInfo" @click="getUserInfo" class="weui-btn">允许</button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../getApi'
export default {
  data () {
    return {
      timer: null,
      miao: 5,
      homeImageUrl: '',
      showLogin: false
    }
  },
  onLoad () {
    wx.showLoading({
      title: '登陆中...'
    })
    api.welcome.post({}).success(res => {
      // 如果上次请求了，下次会更快
      this.homeImageUrl = res.img_url
    })
    this.timer = setInterval(() => {
      if (this.miao <= 0) {
        if (wx.getStorageSync('userInfo')) {
          wx.switchTab({url: '/pages/index/main'})
        }
        clearInterval(this.timer)
      }
      if (this.miao > 0) {
        this.miao--
      }
    }, 1000)
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          // 发起网络请求
          api.login.post({
            code: res.code
          }).success(res => {
            wx.setStorageSync('access_token', res.access_token)
            wx.setStorageSync('code', res.code)
            wx.hideLoading()
            api.welcome.post({}).success(res => {
              this.homeImageUrl = res.img_url
            })
            if (!wx.getStorageSync('userInfo')) {
              this.showLogin = true
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  methods: {
    onClick () {
      this.miao = 0
      clearInterval(this.timer)
      if (wx.getStorageSync('userInfo')) {
        wx.switchTab({url: '/pages/index/main'})
      }
    },
    getUserInfo () {
      wx.setStorageSync('userInfo', {})
      wx.switchTab({url: '/pages/index/main'})
    }
  }
}
</script>

<style scoped>
.home-image {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: #fff;
}
.home-image > image {
  width: 100%;
  height: 100%;
}
.tiaoguo {
  height: 20px;
  width: 60px;
  line-height: 20px;
  color: #fff;
  text-align: center;
  font-size: 12px;
  border-radius: 10px;
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(0, 0, 0, 0.3);
}
</style>

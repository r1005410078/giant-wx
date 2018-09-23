<template>
  <div class="page" v-show="showLogin">
    <div class="weui-msg">
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
      showLogin: false
    }
  },
  onLoad () {
    wx.showLoading({
      title: '登陆中...'
    })
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
            if (wx.getStorageSync('userInfo')) {
              wx.switchTab({url: '/pages/index/main'})
            } else {
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
    getUserInfo () {
      wx.setStorageSync('userInfo', {})
      wx.switchTab({url: '/pages/index/main'})
    }
  }
}
</script>

<style scoped>

</style>

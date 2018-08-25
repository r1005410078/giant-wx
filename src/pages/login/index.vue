<template>
  <div>

  </div>
</template>

<script>
import api from '../getApi'
export default {
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
            wx.showToast({
              title: '登陆成功',
              icon: 'success',
              duration: 1000
            })
            wx.setStorageSync('access_token', res.access_token)
            wx.setStorageSync('code', res.code)
            wx.hideLoading()
            wx.switchTab({url: '/pages/index/main'})
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }
}
</script>

<style scoped>

</style>

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
          wx.getSetting({
            success: res => {
              if (res.authSetting['scope.userInfo']) {
                // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                wx.getUserInfo({
                  success: res => {
                    // 可以将 res 发送给后台解码出 unionId
                    this.userInfo = res.userInfo
                    console.log(res)
                    // // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                    // // 所以此处加入 callback 以防止这种情况
                    // if (this.userInfoReadyCallback) {
                    //   this.userInfoReadyCallback(res)
                    // }
                  }
                })
              }
            }
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

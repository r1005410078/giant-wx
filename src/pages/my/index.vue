<template>
<div>
  <div class="weui-panel weui-panel_access">
    <navigator url="/pages/userinfo/main" class="weui-media-box weui-media-box_appmsg " hover-class="weui-cell_active">
      <div class="weui-media-box__hd weui-media-box__hd_in-appmsg">
         <!-- :src="userInfo.avatarUrl||'/resource/images/dingdan.jpg'" -->
        <image class="weui-media-box__thumb" :src="userInfo.avatarUrl||'/resource/images/avatarurl.jpg'" />
      </div>
       <div class="weui-media-box__bd weui-media-box__bd_in-appmsg weui-cell__ft_in-access">
          <div class="weui-media-box__title">{{userInfo.nickName || '去设置基本信息'}}</div>
          <div class="weui-media-box__desc">{{user.phone}}</div>
        </div>
    </navigator>
  </div>
  <div class="weui-panel">
    <div class="weui-panel__bd">
        <div class="weui-media-box weui-media-box_small-appmsg">
            <div class="weui-cells weui-cells_in-small-appmsg">
                <navigator url="/pages/myOrder/main" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
                    <div class="weui-cell__hd"><image src="/resource/images/dingdan.png" style="width: 20px;height: 20px;margin-right: 5px" /></div>
                    <div class="weui-cell__bd weui-cell_primary">
                      <div>我的订单</div>
                    </div>
                    <div class="weui-cell__ft weui-cell__ft_in-access"></div>
                </navigator>
                <navigator url="/pages/myRedEnvelope/main" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
                  <div class="weui-cell__hd"><image src="/resource/images/hongbao.png" style="width: 20px;height: 20px;margin-right: 5px" /></div>
                  <div class="weui-cell__bd weui-cell_primary">
                    <div>我的红包</div>
                  </div>
                  <div class="weui-cell__ft weui-cell__ft_in-access"></div>
                </navigator>
                <!-- <navigator url="/pages/cyclingRecord/main" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
                    <div class="weui-cell__hd"><image src="/resource/images/zxc.png" style="width: 20px;height: 20px;margin-right: 5px" /></div>
                    <div class="weui-cell__bd weui-cell_primary">
                        <div>骑行记录</div>
                    </div>
                    <div class="weui-cell__ft weui-cell__ft_in-access"></div>
                </navigator> -->
            </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import gStore from '../globalStore'

export default {
  computed: {
    user () {
      return gStore.state.user.info
    }
  },
  data () {
    return {
      userInfo: {}
    }
  },
  onLoad () {
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.userInfo = res.userInfo
              wx.setStorageSync('userInfo', res.userInfo)
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
  }
}
</script>

<style>
  .weui-panel__bd {

  }
</style>

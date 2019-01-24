<template>
  <div class="weui-panel">
    <div v-for="(item, index) in data" :key="index" class="weui-panel__bd">
      <div class="weui-media-box weui-media-box_appmsg" hover-class="weui-cell_active">
        <div @click="skipDetail(item.content, item.map_name)" class="weui-media-box__hd weui-media-box__hd_in-appmsg">
            <image class="weui-media-box__thumb" :src="item.cover_img" />
        </div>
        <div class="weui-media-box__bd weui-media-box__bd_in-appmsg">
            <div @click="skipDetail(item.content, item.map_name)" class="weui-media-box__title weui-media-box__title_in-text weui-cell__ft_in-access">{{item.title}}</div>
            <div class="weui-media-box__desc">{{item.sub_title}} </div>
            <!-- <div class="weui-media-box__info">
              <div @click="skipWebview(item.route[0])" class="weui-media-box__info__meta">
                <image class="gen-wo-zou" src="/resource/images/zxc.png" />
                <span>跟我走</span>
              </div>
            </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../webview/store'
import detailStore from '../detail/store'
import api from '../getApi'
export default {
  data () {
    return {
      data: []
    }
  },
  onLoad () {
    wx.getClipboardData({
      success: function (res) {
        console.log(res.data)
      }
    })
    api.aarticleList.post({
      page: 1,
      page_size: 99,
      type: 1
    }).success(res => {
      this.data = res.data
    })
  },
  methods: {
    skipDetail (content, mapName) {
      console.log(1111, mapName)
      detailStore.commit('setDetail', content)
      wx.navigateTo({
        url: `/pages/detail/main?map_name=${mapName}`
      })
    },
    skipWebview (route) {
      store.commit('setAddress', route ? route.address : '')
      wx.navigateTo({
        url: '/pages/webview/main'
      })
    }
  }
}
</script>

<style scoped>
  .weui-media-box__title_in-text {
    margin-bottom: 0px;
    margin-top: 5px;
  }
  .weui-media-box {
    padding:15px;
    position:relative;
    border-bottom:1px solid #eee;
  }
  .weui-media-box__hd {
    width:110px;
    height:90px;
  }
  .gen-wo-zou {
    height:25rpx;
    width:29rpx;
    margin-right:5px;
  }
  .weui-media-box__info__meta {
    color: #0099FF;
  }
</style>

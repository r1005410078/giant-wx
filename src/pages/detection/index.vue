<template>
    <div class="weui-panel__bd">
        <div class="weui-media-box weui-media-box_small-appmsg">
            <div class="weui-cells weui-cells_in-small-appmsg">
              <div @click="onReceiveRedEnvelopes" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
                <div class="weui-cell__hd"><image src="/resource/images/hongbao.png" style="width: 20px;height: 20px;margin-right: 5px" /></div>
                <div class="weui-cell__bd weui-cell_primary">
                  <div style="color: #CC3366">领取红包</div>
                </div>
              </div>
            </div>
            <div v-for="(item, index) in data" :key="index" class="weui-cells weui-cells_in-small-appmsg">
              <div @click="skipDetail(item.content)" class="weui-media-box weui-media-box_appmsg" hover-class="weui-cell_active">
                  <view class="weui-media-box__hd weui-media-box__hd_in-appmsg">
                    <image class="weui-media-box__thumb" :src="item.cover_img" />
                  </view>
                  <view class="weui-media-box__bd weui-media-box__bd_in-appmsg">
                    <view class="weui-media-box__title">{{item.title}}</view>
                  </view>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '../getApi'
import detailStore from '../detail/store'
export default {
  data () {
    return {
      data: []
    }
  },
  onLoad () {
    api.aarticleList.post({
      page: 1,
      page_size: 99,
      type: 3
    }).success(res => {
      this.data = res.data
    })
  },
  methods: {
    skipDetail (content) {
      detailStore.commit('setDetail', content)
      wx.navigateTo({
        url: '/pages/detail/main'
      })
    },
    onReceiveRedEnvelopes () {
      api.redpacketLucky.post().success()
    }
  }
}
</script>

<style scoped>

</style>

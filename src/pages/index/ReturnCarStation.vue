<template>
  <div class="weui-panel">
    <div v-for="(item, index) in data" :key="index" class="weui-panel__bd">
      <div class="weui-media-box weui-media-box_appmsg" hover-class="weui-cell_active">
        <div @click="skipDetail(item.content)"  class="weui-media-box__hd weui-media-box__hd_in-appmsg">
            <image class="weui-media-box__thumb" :src="item.cover_img" />
        </div>
        <div class="weui-media-box__bd weui-media-box__bd_in-appmsg">
            <div @click="skipDetail(item.content)" class="weui-media-box__title weui-media-box__title_in-text weui-cell__ft_in-access">{{item.name}}</div>
            <div class="weui-media-box__desc">地址：{{item.address.address}} </div>
            <div class="weui-media-box__info" @click="openMap(item.address)" >
                <div class="weui-media-box__info__meta">
                  <image class="gen-wo-zou" src="/resource/images/zxc.png" />
                  <span>跟我走</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from './store'
import detailStore from '../detail/store'
import QQMapWX from 'rongts-qq-map'
import api from '../getApi'
export default {
  data () {
    return {
      data: []
    }
  },
  onLoad () {
    this.qqmapsdk = new QQMapWX({
      key: 'KMDBZ-RGRK2-OVNU4-CWO6V-O5MME-TJBPE'
    })
    api.stationList.post({
      page: 1,
      page_size: 99
    }).success(res => {
      this.data = res.data
      store.commit('saveStations', this.data)
    })
  },
  methods: {
    skipDetail (content) {
      detailStore.commit('setDetail', content)
      wx.navigateTo({
        url: '/pages/detail/main'
      })
    },
    openMap (address) {
      this.qqmapsdk.reverseGeocoder({
        location: {
          latitude: Number(address.lat),
          longitude: Number(address.lng)
        },
        coord_type: 3, // baidu经纬度
        success: res => {
          const location = res.result.ad_info.location
          wx.openLocation({
            latitude: location.lat,
            longitude: location.lng,
            scale: 28
          })
        },
        complete: function (res) {
          console.log(res)
        }
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

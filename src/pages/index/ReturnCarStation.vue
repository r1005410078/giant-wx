<template>
  <div class='weui-panel'>
    <div v-for='(item, index) in data' :key='index' class='weui-panel__bd'>
      <div class='weui-media-box weui-media-box_appmsg' hover-class='weui-cell_active'>
        <div @click='skipDetail(item.content)'  class='weui-media-box__hd weui-media-box__hd_in-appmsg'>
            <image class='weui-media-box__thumb' :src='item.cover_img' />
        </div>
        <div class='weui-media-box__bd weui-media-box__bd_in-appmsg'>
            <div @click='skipDetail(item.content)' class='weui-media-box__title weui-media-box__title_in-text weui-cell__ft_in-access'>{{item.name}}</div>
            <div class='weui-media-box__desc'>地址：{{item.address.address}} </div>
            <div class='weui-media-box__info' @click='openMap(item.address)' >
                <div class='weui-media-box__info__meta'>
                  <!-- <image class='gen-wo-zou' src='/resource/images/zxc.png' /> -->
                  <span v-show="!item.distance">跟我走</span>
                  <span v-show="item.distance">跟我走,距离您({{ item.distance }}公里)</span>
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
      this.getSetting()
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
       wx.openLocation({
        latitude: Number(address.lat),
        longitude: Number(address.lng),
        scale: 50
      })
      // this.qqmapsdk.geocoder({
      //   address: address.address,
      //   success: res => {
      //     const location = res.result.location
      //     wx.openLocation({
      //       latitude: location.lat,
      //       longitude: location.lng,
      //       scale: 32
      //     })
      //   }
      // })
    },
    // 微信获得经纬度
    getLocation: function () {
      wx.getLocation({
        type: 'wgs84',
        success: (res) => {
          const result = []
          const latitude = res.latitude
          const longitude = res.longitude
          const loop = (data, index = 0) => {
            const item = data[index]
            const location = item.address
            this.qqmapsdk.calculateDistance({
              to: [{
                latitude: latitude,
                longitude: longitude
              }, {
                latitude: location.lat,
                longitude: location.lng
              }],
              success: (res) => {
                result.push({ ...item, distance: (res.result.elements[1].distance / 1000).toFixed(1) })
                if (data[index + 1]) {
                  setTimeout(() => loop(data, index + 1), 500)
                } else {
                  result.sort((item1, item2) => {
                    if (Number(item1.distance) < Number(item2.distance)) {
                      return -1
                    } else {
                      return 1
                    }
                  })
                  console.log(result.map(item => item.distance))
                  this.data = result
                  wx.showToast({
                    title: `驿站推荐成功`,
                    icon: 'error',
                    duration: 5000
                  })
                }
              }
            })
          }
          loop(this.data)
        },
        fail: function (res) {
          console.error(res)
        }
      })
    },
    getSetting () {
      let vm = this
      wx.getSetting({
        success: (res) => {
          // res.authSetting['scope.userLocation'] == undefined    表示 初始化进入该页面
          // res.authSetting['scope.userLocation'] == false    表示 非初始化进入该页面,且未授权
          // res.authSetting['scope.userLocation'] == true    表示 地理位置授权
          if (res.authSetting['scope.userLocation'] !== undefined && res.authSetting['scope.userLocation'] !== true) {
            wx.showModal({
              title: '请求授权当前位置',
              content: '需要获取您的地理位置，请确认授权',
              success: function (res) {
                if (res.cancel) {
                  wx.showToast({
                    title: '拒绝授权',
                    icon: 'none',
                    duration: 1000
                  })
                } else if (res.confirm) {
                  wx.openSetting({
                    success: function (dataAu) {
                      if (dataAu.authSetting['scope.userLocation'] === true) {
                        wx.showToast({
                          title: '授权成功',
                          icon: 'success',
                          duration: 1000
                        })
                        // 再次授权，调用wx.getLocation的API
                      } else {
                        wx.showToast({
                          title: '授权失败',
                          icon: 'none',
                          duration: 1000
                        })
                      }
                    }
                  })
                }
              }
            })
          } else if (res.authSetting['scope.userLocation'] === undefined) {
            // 调用wx.getLocation的API
            vm.getLocation()
          } else {
            // 调用wx.getLocation的API
            vm.getLocation()
          }
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
    height:55rpx;
    width:59rpx;
    margin-right:5px;
  }
  .weui-media-box__info__meta {
    color: #0099FF;
  }
</style>

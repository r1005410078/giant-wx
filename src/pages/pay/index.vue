<template>
  <div>
    <form @submit="formSubmit" bindreset="formReset" :report-submit="true">
      <div class="weui-cells__title">支付方式</div>
        <div class="weui-cells weui-cells_after-title">
          <radio-group name="pay_type" @change="payChange">
            <label v-for="item in payItems" :key="item.value" class="weui-cell weui-check__label">
              <radio class="weui-check" :value="item.value" :checked="item.checked"/>
              <div class="weui-cell__bd">{{item.name}}</div>
              <div class="weui-cell__ft weui-cell__ft_in-radio" v-if="item.checked">
                <icon class="weui-icon-radio" type="success_no_circle" size="16"></icon>
              </div>
            </label>
          </radio-group>
      </div>
      <div class="weui-cells__title">所在驿站</div>
      <div class="weui-cells weui-cells_after-title">
        <radio-group name="station_id" @change="locationChange">
          <label v-for="item in stations" :key="item.id" class="weui-cell weui-check__label">
            <radio class="weui-check" :value="item.id" :checked="item.checked"/>
            <div class="weui-cell__bd">{{item.address.address}}</div>
            <div class="weui-cell__ft weui-cell__ft_in-radio" v-if="item.checked">
              <icon class="weui-icon-radio" type="success_no_circle" size="16"></icon>
            </div>
          </label>
        </radio-group>
      </div>
      <div class="weui-btn-area">
        <button formType="submit" class="weui-btn" type="primary">提交订单</button>
      </div>
    </form>
  </div>
</template>

<script>
import api from '../getApi'
import store from '../index/store'
export default {
  computed: {
    selectCombo () {
      return store.state.list
        .filter(item => item.car_list.length > 0)
        .map(item => {
          return {
            bike_list: item.car_list.map(car => car.id),
            combo_id: item.id
          }
        })
    }
  },
  data () {
    return {
      stations: [],
      payItems: [
        {name: '微信', value: '1', checked: true},
        {name: '支付宝', value: '2'},
        {name: '现金', value: '3'}
      ]
    }
  },
  onLoad () {
    this.stations = store.state.stations.map((station, index) => {
      if (index === 0) {
        station.checked = true
      } else {
        station.checked = false
      }
      return station
    })
  },
  methods: {
    locationChange (e) {
      const stations = this.stations.slice()
      for (let i = 0, len = stations.length; i < len; ++i) {
        stations[i].checked = stations[i].id === Number(e.target.value)
      }
      this.stations = stations
    },
    payChange (e) {
      const payItems = this.payItems.slice()
      for (let i = 0, len = payItems.length; i < len; ++i) {
        payItems[i].checked = payItems[i].value === e.target.value
      }
      this.payItems = payItems
    },
    async formSubmit (e) {
      const val = e.target.value
      const res = await api.payCreate.post({
        pay_type: val.pay_type,
        station_id: val.station_id,
        combo_bike: this.selectCombo
      }).toPromise()
      store.commit('clearShop')
      if (res.error_code === 409) {
        wx.showModal({
          title: '提交失败',
          content: '请先绑定手机号!',
          confirmText: '去绑定',
          cancelText: '取消',
          success: function (res) {
            if (res.confirm) {
              wx.navigateTo({url: '/pages/userinfo/main'})
            }
          }
        })
      }

      this.order_no = res.data.order_no

      if (val.pay_type === '1') {
        // 微信支付
        const result = await api.payOrder.post({ order_no: this.order_no }).toPromise()
        const ret = result.data
        const params = {
          'timeStamp': ret.time_stamp,
          'nonceStr': ret.nonce_str,
          'package': ret.package,
          'signType': ret.sign_type,
          'paySign': ret.pay_sign,
          success: res => {
            wx.showModal({
              content: '押金支付成功',
              showCancel: false,
              success: function (res) {
                if (res.confirm) {
                  wx.navigateBack({
                    delta: 1
                  })
                  wx.hideTabBarRedDot({index: 1})
                }
              }
            })
          },
          fail: error => {
            if (error.errMsg === 'requestPayment:fail cancel') {
              wx.showModal({
                content: '订单创建成功, 请去我的订单中的待付押金中支付',
                showCancel: false,
                success: function (res) {
                  if (res.confirm) {
                    wx.navigateBack({
                      delta: 1
                    })
                    wx.hideTabBarRedDot({index: 1})
                  }
                }
              })
            } else {
              wx.showToast({
                title: '支付失败：' + error,
                icon: 'none',
                duration: 2000
              })
            }
          }
        }
        wx.requestPayment(params)
      } else {
        wx.showModal({
          content: '订单创建成功, 请联系店长扫码支付或现金支付',
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              // console.log('用户点击确定')
              wx.navigateBack({
                delta: 1
              })
              wx.hideTabBarRedDot({index: 1})
            }
          }
        })
      }
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div>
    <form @submit="formSubmit" bindreset="formReset" :report-submit="true">
      <div class="weui-cells__title">支付方式</div>
        <div class="weui-cells weui-cells_after-title">
          <radio-group name="pay_type" class="radio-group">
            <label v-for="item in payItems" :key="item.value" class="weui-cell weui-check__label" >
              <span class="text">{{item.name}}</span>
              <radio class="weui-cell__ft weui-cell__ft_in-radio" :value="item.value" :checked="item.checked"/>
            </label>
          </radio-group>
      </div>
      <div class="weui-cells__title" style="color: red">温馨提醒：因为押金是原路径退回，尽量选择余额支付，以免影响到账时间。</div>
      <div class="weui-cells__title">所在驿站</div>
      <div class="weui-cells weui-cells_after-title">
        <radio-group name="station_id" class="radio-group">
          <label v-for="item in stations" :key="item.id" class="weui-cell weui-check__label" >
            <span class="text">{{item.name}}</span>
            <radio class="weui-cell__ft weui-cell__ft_in-radio" :value="item.id" :checked="item.checked"/>
          </label>
        </radio-group>
      </div>
      <div class="weui-btn-area">
        <button formType="submit" class="weui-btn" type="primary">提交租车订单</button>
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
    this.stations = store.state.stations
    // .map((station, index) => {
    //   if (index === 0) {
    //     station.checked = true
    //   } else {
    //     station.checked = false
    //   }
    //   return station
    // })
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
    async payOrder (res, val) {
      const that = this
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
              content: '押金支付成功，该订单可以在我的订单里面查询',
              showCancel: false,
              success: function (res) {
                if (res.confirm) {
                  wx.navigateBack({
                    delta: 1
                  })
                  that.hideTabBarRedDot()
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
                    that.hideTabBarRedDot({index: 1})
                  }
                }
              })
            } else {
              wx.showToast({
                title: '支付失败：' + error,
                icon: 'none',
                duration: 5000
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
              that.hideTabBarRedDot({index: 1})
            }
          }
        })
      }
    },
    async formSubmit (e) {
      const val = e.target.value
      if (!val.station_id) {
        return wx.showToast({
          title: '请选择正确的驿站',
          duration: 5000
        })
      }
      const payCreateParmas = {
        pay_type: val.pay_type,
        station_id: val.station_id,
        combo_bike: this.selectCombo
      }
      const res = await api.payCreate.post(payCreateParmas).toPromise()
      store.commit('clearShop')
      if (res.error_code === 409) {
        // wx.navigateTo({url: '/pages/userinfo/main'})
        wx.showModal({
          title: '提交失败',
          content: '请先绑定手机号!',
          confirmText: '去绑定',
          cancelText: '取消',
          showCancel: true,
          success: function (res) {
            if (res.confirm) {
              wx.navigateTo({url: '/pages/userinfo/main'})
            }
          }
        })
        return
      }

      if (val.pay_type === '1') {
        wx.showModal({
          title: `支付押金 ￥${res.data.money}`,
          content: '',
          confirmColor: '#0099FF',
          confirmText: '确定支付',
          cancelText: '返回',
          showCancel: true,
          success: (ret) => {
            if (ret.confirm) {
              this.payOrder(res, val)
            } else {
              wx.showModal({
                content: '订单创建成功, 请去我的订单中的待付押金中支付',
                showCancel: false,
                success: (res) => {
                  if (res.confirm) {
                    wx.navigateBack({
                      delta: 1
                    })
                    this.hideTabBarRedDot({index: 1})
                  }
                }
              })
            }
          }
        })
      } else {
        this.payOrder(res, val)
      }
    },
    hideTabBarRedDot () {
      setTimeout(() => {
        wx.hideTabBarRedDot({index: 1})
      }, 500)
    }
  }
}
</script>

<style scoped>
  .weui-cell__ft_in-radio {
    position: absolute;
    right: 15px;
  }
</style>

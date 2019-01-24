<template>
  <div class="page" v-bind:style="{height: scrollHeight + 'px'}">
    <div class="weui-tab">
      <div class="weui-navbar" id="navbar">
        <div v-bind:id="index" v-for="(item, index) in tabs" :key="item" class="weui-navbar__item" v-bind:class="{'weui-bar__item_on': activeIndex == index}" @tap="tabClick">
          <div class="weui-navbar__title">{{item}}</div>
        </div>
        <div class="weui-navbar__slider" v-bind:style="{left: sliderLeft + 'px', transform: 'translateX(' + sliderOffset + 'px)'}"></div>
      </div>
      <div scroll-y class="weui-tab__panel" v-bind:style="{height: scrollHeight + 'px'}">
        <div class="weui-tab__content" v-show="activeIndex == 0">
          <div v-for="item in tabsData0" :key="item.deposit_order_no" class="page__bd">
            <div class="weui-form-preview">
                <div class="weui-form-preview__hd">
                  <div class="weui-form-preview__item">
                    <div class="weui-form-preview__label">合计押金</div>
                    <div class="weui-form-preview__value_in-hd" style="color: #CC3366">¥{{item.deposit_money}}</div>
                  </div>
                </div>
                <div class="weui-form-preview__bd">
                    <div class="weui-form-preview__item">
                      <div class="weui-form-preview__label">订单号</div>
                      <view class="weui-form-preview__value">{{item.deposit_order_no}}</view>
                    </div>
                    <div class="weui-form-preview__item">
                      <div class="weui-form-preview__label">支付方式</div>
                      <div class="weui-form-preview__value">{{pays[item.deposit_type - 1]}}</div>
                    </div>
                    <div class="weui-form-preview__item">
                      <div class="weui-form-preview__label">租金驿站</div>
                      <div class="weui-form-preview__value">{{item.rent_station_name}}</div>
                    </div>
                    <div class="weui-form-preview__item">
                      <div class="weui-form-preview__label">车辆编号</div>
                      <div class="weui-form-preview__value">{{item.bike_num_list}}</div>
                    </div>
                    <div class="weui-form-preview__item">
                      <div class="weui-form-preview__label">红包</div>
                      <div class="weui-form-preview__value">{{item.redpackets_money}}</div>
                    </div>
                </div>
                <div class="weui-form-preview__ft">
                  <div v-if="item.deposit_type === 1" @click="payDeposit(item)" class="weui-form-preview__btn weui-form-preview__btn_primary" hover-class="weui-form-preview__btn_active">
                    支付押金
                  </div>
                  <div v-if="item.deposit_type !== 1" class="weui-form-preview__btn weui-form-preview__btn_primary">
                    请联系店长扫码支付或现金支付！
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div class="weui-tab__content" v-show="activeIndex == 1">
          <div v-for="item in tabsData1" :key="item.deposit_order_no" class="page__bd">
            <div class="weui-form-preview">
                <div class="weui-form-preview__hd">
                  <div class="weui-form-preview__item">
                    <div class="weui-form-preview__label">租金合计</div>
                    <div class="weui-form-preview__value_in-hd" style="color: #CC3366">¥{{item.rent_money}}</div>
                  </div>
                </div>
                <div class="weui-form-preview__bd">
                    <div class="weui-form-preview__item">
                        <div class="weui-form-preview__label">订单号</div>
                        <view class="weui-form-preview__value">{{item.deposit_order_no}}</view>
                    </div>
                    <div class="weui-form-preview__item">
                      <div class="weui-form-preview__label">车辆编号</div>
                      <div class="weui-form-preview__value">{{item.bike_num_list}}</div>
                    </div>
                    <div class="weui-form-preview__item">
                        <div class="weui-form-preview__label">合计押金</div>
                        <div class="weui-form-preview__value">{{item.deposit_money}}</div>
                    </div>
                    <div class="weui-form-preview__item">
                      <div class="weui-form-preview__label">时长</div>
                      <div class="weui-form-preview__value">{{item.rent_time}}</div>
                    </div>
                     <div class="weui-form-preview__item" @click="selectPay(item)">
                      <div class="weui-form-preview__label">租金支付方式</div>
                      <div class="weui-form-preview__value select-value weui-cell__ft_in-access">
                        {{pays[item.pay_type]}}
                      </div>
                    </div>
                    <div class="weui-form-preview__item" @click="showPicker(item)">
                      <div class="weui-form-preview__label">还车驿站</div>
                      <div class="weui-form-preview__value select-value weui-cell__ft_in-access">
                        {{stations[item.station_id] ? stations[item.station_id].name : '请选择驿站'}}
                      </div>
                    </div>
                    <div class="weui-form-preview__item" @click="selectRedEnvelope(item)">
                      <div class="weui-form-preview__label">红包</div>
                      <div class="weui-form-preview__value select-value weui-cell__ft_in-access">{{redEnvelope[item.redpackets_index] && redEnvelope[item.redpackets_index].money}}</div>
                    </div>
                </div>
                <div class="weui-form-preview__ft">
                  <div @click="payRent(item)" class="weui-form-preview__btn weui-form-preview__btn_primary" hover-class="weui-form-preview__btn_active">支付租金</div>
                </div>
            </div>
          </div>
        </div>
        <div class="weui-tab__content" v-show="activeIndex == 2">
          <div v-for="item in tabsData2" :key="item.deposit_order_no" class="page__bd">
            <div class="weui-form-preview">
              <div class="weui-form-preview__hd">
                <div class="weui-form-preview__item">
                  <div class="weui-form-preview__label">租金合计</div>
                  <div class="weui-form-preview__value_in-hd" style="color: #CC3366">¥{{item.rent_money}}</div>
                </div>
              </div>
              <div class="weui-form-preview__bd">
                  <div class="weui-form-preview__item">
                      <div class="weui-form-preview__label">订单号</div>
                      <view class="weui-form-preview__value">{{item.deposit_order_no}}</view>
                  </div>
                  <div class="weui-form-preview__item">
                      <div class="weui-form-preview__label">合计押金</div>
                      <div class="weui-form-preview__value">{{item.deposit_money}}</div>
                  </div>
                  <div class="weui-form-preview__item">
                    <div class="weui-form-preview__label">时长</div>
                    <div class="weui-form-preview__value">{{item.rent_time}}</div>
                  </div>
                  <div class="weui-form-preview__item">
                    <div class="weui-form-preview__label">押金支付方式</div>
                    <div class="weui-form-preview__value">{{pays[item.deposit_type - 1]}}</div>
                  </div>
                  <div class="weui-form-preview__item">
                    <div class="weui-form-preview__label">租金驿站</div>
                    <div class="weui-form-preview__value">{{item.rent_station_name}}</div>
                  </div>
                  <div class="weui-form-preview__item">
                    <div class="weui-form-preview__label">还车驿站</div>
                    <div class="weui-form-preview__value">{{item.return_station_name}}</div>
                  </div>
                  <div class="weui-form-preview__item">
                    <div class="weui-form-preview__label">红包</div>
                    <div class="weui-form-preview__value">{{item.redpackets_money}}</div>
                  </div>
                  <div class="weui-form-preview__item">
                    <div class="weui-form-preview__label">留言评论</div>
                    <navigator
                      :url="'/pages/leaveMessage/main?deposit_order_no=' + item.deposit_order_no + '&comment=' + item.comment + '&score1=' + item.score1 + '&score2=' + item.score2 + '&score3=' + item.score3"
                      class="weui-form-preview__value weui-cell__ft_in-access submit">去留言打分
                    </navigator>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <mpvue-picker ref="mpvuePicker" :pickerValueDefault="pickerValueDefault" @onChange="onChange" @onConfirm="onConfirm" @onCancel="onCancel" :pickerValueArray="pickerValue"></mpvue-picker>
  </div>
</template>

<script>
import mpvuePicker from '@/components/mpvuePicker'
import {MillisecondToDate} from '../../utils'
import store from '../index/store'
import api from '../getApi'
const sliderWidth = 96 // 需要设置slider的宽度，用于计算中间位置

export default {
  components: {
    mpvuePicker
  },
  data () {
    return {
      pays: ['微信', '支付宝', '现金'],
      tabs: ['待付押金', '待付租金', '已完成'],
      tabsData0: [],
      tabsData1: [],
      tabsData2: [],
      payInfo: {},
      stations: [],
      pickerValue: [1],
      pickerValueDefault: [1],
      redEnvelope: [], // 红包
      activeIndex: 0,
      sliderOffset: 0,
      sliderLeft: 0,
      scrollHeight: 500
    }
  },
  onLoad: function () {
    wx.getSystemInfo({
      success: res => {
        this.sliderLeft = (res.windowWidth / this.tabs.length - sliderWidth) / 2
        this.sliderOffset = res.windowWidth / this.tabs.length * this.activeIndex

        this.scrollHeight = res.windowHeight
      }
    })
    // 获取红包
    api.redpacketList.post({
      page: 1,
      page_size: 99
    }).success(res => {
      this.redEnvelope = res
      store.commit('saveRedEnvelope', this.redEnvelope)
    })
    this.stations = store.state.stations
    this.pickerValue = this.stations.map((item, i) => ({
      label: item.name,
      value: i,
    }))
    // 加载订单
    this.loadOrder()
  },
  methods: {
    showPicker (payInfo) {
      this.payInfo = payInfo
      this.$refs.mpvuePicker.show()
    },
    onConfirm (e) {
      console.log(e)
    },
    onChange (e) {
      console.log(this.payInfo )
      this.tabsData1 = this.tabsData1.map(info => {
        if (this.payInfo.deposit_order_no === info.deposit_order_no) {
          return {
            ...info,
            station_id: e.value[0]
          }
        }
        return info
      })
    },
    onCancel (e) {
      console.log(e)
    },
    millisecondToDate (timer) {
      return MillisecondToDate(timer)
    },
    loadOrder () {
      // 待付押金
      api.payOrderList.post({
        page: 1,
        page_size: 99,
        deposit_status: 0,
        rent_status: 0
      }).success(res => {
        this.tabsData0 = res.data.map(info => {
          info.rent_time = MillisecondToDate(info.rent_time)
          return info
        })
      })

      // 待付租金
      api.payOrderList.post({
        page: 1,
        page_size: 99,
        deposit_status: 1,
        rent_status: 0
      }).success(res => {
        this.tabsData1 = res.data.map(info => {
          return {
            ...info,
            rent_time: MillisecondToDate(info.rent_time),
            pay_type: info.rent_type - 1,
            station_id: -1,
            redpackets_index: 0
          }
        })
      })

      // 已完成
      api.payOrderList.post({
        page: 1,
        page_size: 99,
        deposit_status: 2,
        rent_status: 1
      }).success(res => {
        this.tabsData2 = res.data.map(info => {
          return {
            ...info,
            rent_time: MillisecondToDate(info.rent_time),
            pay_type: 0,
            station_id: 0
          }
        })
      })
    },
    // 选择红包
    selectRedEnvelope (payInfo) {
      wx.showActionSheet({
        itemList: this.redEnvelope.map(redE => String(redE.money)),
        success: (res) => {
          if (!res.cancel) {}
          this.tabsData1 = this.tabsData1.map(info => {
            if (payInfo.deposit_order_no === info.deposit_order_no) {
              return {
                ...info,
                redpackets_index: res.tapIndex
              }
            }
            return info
          })
        }
      })
    },
    // 选择支付方式
    selectPay (payInfo) {
      wx.showActionSheet({
        itemList: this.pays,
        success: (res) => {
          if (!res.cancel) {}
          this.tabsData1 = this.tabsData1.map(info => {
            if (payInfo.deposit_order_no === info.deposit_order_no) {
              return {
                ...info,
                pay_type: res.tapIndex
              }
            }
            return info
          })
        }
      })
    },
    // 选择地址
    selectPost  (payInfo) {
      wx.showActionSheet({
        itemList: this.stations.map(station => station.name),
        success: (res) => {
          if (!res.cancel) {}
          this.tabsData1 = this.tabsData1.map(info => {
            if (payInfo.deposit_order_no === info.deposit_order_no) {
              return {
                ...info,
                station_id: res.tapIndex
              }
            }
            return info
          })
        }
      })
    },
    // 支付押金
    async payDeposit (payInfo) {
      if (payInfo.deposit_type === 1) {
        // 押金订单支付接口
        const orderRet = await api.payOrder.post({
          order_no: payInfo.deposit_order_no
        }).toPromise()

        if (!orderRet.ok) {
          return wx.showToast({
            title: '服务的错误',
            duration: 5000
          })
        }

        // 微信支付
        const res = orderRet.data
        const params = {
          'timeStamp': res.time_stamp,
          'nonceStr': res.nonce_str,
          'package': res.package,
          'signType': res.sign_type,
          'paySign': res.pay_sign,
          success: res => {
            this.loadOrder()
            wx.showToast({
              title: '支付成功！',
              duration: 5000
            })
          },
          fail: error => {
            console.log('支付失败', error)
          }
        }
        wx.requestPayment(params)
      } else {
        wx.showModal({
          content: '订单创建成功，请联系店长扫码支付或现金支付！',
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })
      }
    },
    // 支付租金
    async payRent (payInfo) {
      if (!this.stations[payInfo.station_id]) {
        return wx.showToast({
          title: '请选择正确的驿站',
          duration: 5000
        })
      }

      // 租金订单创建接口
      const ret = await api.payRent.post({
        order_sn: payInfo.deposit_order_no,
        pay_type: payInfo.pay_type + 1,
        redpackets_id: this.redEnvelope[payInfo.redpackets_index] ? this.redEnvelope[payInfo.redpackets_index].id : 0,
        station_id: this.stations[payInfo.station_id].id
      }).toPromise()

      if (!ret.ok) {
        return wx.showToast({
          title: '服务的错误',
          duration: 5000
        })
      }

      if (payInfo.pay_type + 1 === 1) {
        const orderRet = await api.payRentOrder.post({
          order_no: ret.data.order_no
        }).toPromise()

        if (!orderRet.ok) {
          return wx.showToast({
            title: '服务的错误',
            duration: 5000
          })
        }

        // 微信支付
        const res = orderRet.data
        const params = {
          'timeStamp': res.time_stamp,
          'nonceStr': res.nonce_str,
          'package': res.package,
          'signType': res.sign_type,
          'paySign': res.pay_sign,
          success: res => {
            this.loadOrder()
            wx.showModal({
              content: '租金支付成功, 等待店长确认订单， 退还押金',
              showCancel: false,
              success: function (res) {
                if (res.confirm) {

                }
              }
            })
          },
          fail: error => {
            if (error.errMsg === 'requestPayment:fail cancel') {
              wx.showModal({
                content: '取消支付成功， 您可以选择其他方式支付',
                showCancel: false,
                success: function (res) {
                  if (res.confirm) {
                    // wx.navigateBack({
                    //   delta: 1
                    // })
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
              // wx.navigateBack({
              //   delta: 1
              // })
            }
          }
        })
      }
    },
    tabClick (e) {
      this.sliderOffset = e.currentTarget.offsetLeft
      this.activeIndex = e.currentTarget.id
      this.loadOrder()
    }
  }
}
</script>

<style scoped>
  #navbar {
    background: #eeeeee;
  }
  .weui-form-preview__item {
    font-size: 16px;
  }
  .select-value {
    color: #3399CC;
    /* text-decoration: underline; */
  }
  .submit {
    /* text-decoration: underline; */
    color: rgb(0, 162, 255);
  }
</style>

<!--
待付押金
<div class="weui-tab__content" v-show="activeIndex == 0">
  <div v-for="item in tabsData0" :key="item.deposit_order_no" class="page__bd">
    <div class="weui-form-preview">
        <div class="weui-form-preview__hd">
          <div class="weui-form-preview__item">
            <div class="weui-form-preview__label">租金合计</div>
            <div class="weui-form-preview__value_in-hd">¥{{item.rent_money}}</div>
          </div>
        </div>
        <div class="weui-form-preview__bd">
            <div class="weui-form-preview__item">
                <div class="weui-form-preview__label">订单号</div>
                <view class="weui-form-preview__value">{{item.deposit_order_no}}</view>
            </div>
            <div class="weui-form-preview__item">
                <div class="weui-form-preview__label">合计押金</div>
                <div class="weui-form-preview__value">{{item.deposit_money}}</div>
            </div>
            <div class="weui-form-preview__item">
              <div class="weui-form-preview__label">时长</div>
              <div class="weui-form-preview__value">{{item.rent_time}}</div>
            </div>
              <div class="weui-form-preview__item" @click="selectPay(item)">
              <div class="weui-form-preview__label">支付方式</div>
              <div class="weui-form-preview__value select-value">{{pays[item.pay_type]}}</div>
            </div>
            <div class="weui-form-preview__item" @click="selectPost(item)">
              <div class="weui-form-preview__label">还车驿站</div>
              <div class="weui-form-preview__value select-value">{{stations[item.station_id] && stations[item.station_id].name}}</div>
            </div>
        </div>
        <div class="weui-form-preview__ft">
          <div @click="Pay(item)" class="weui-form-preview__btn weui-form-preview__btn_primary" hover-class="weui-form-preview__btn_active">确认支付</div>
        </div>
    </div>
  </div>
</div> -->

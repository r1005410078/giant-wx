<template>
  <view class="weui-panel weui-panel_access">
    <view class="weui-panel__hd">
      <span>{{comboItem.name}} </span>
      <span>还需添加 {{count}} 辆车</span>
      <div class="sao-yi-sao" @click="add(comboItem.id)" v-show="count">
        <image class="sao-yi-sao-image" src="/resource/images/saoyisao.png" />
        <span class="sao-yi-sao-text">添加车辆</span>
      </div>
    </view>
    <view class="weui-panel__bd">
      <div v-for="(item, index) in comboItem.car_list" :key="index" class="weui-media-box weui-media-box_appmsg" hover-class="weui-cell_active">
        <div class="weui-media-box__hd weui-media-box__hd_in-appmsg">
          <image class="weui-media-box__thumb" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532975901157&di=7781c88bcbbd4f6884445cebbd340732&imgtype=0&src=http%3A%2F%2Fimg.alicdn.com%2Ftfscom%2Fi3%2F3018155508%2FTB1FFkJXwvGK1Jjy0FeXXXYupXa_%2521%25210-item_pic.jpg" />
        </div>
        <div class="weui-media-box__bd weui-media-box__bd_in-appmsg">
          <div style="color: red" class="weui-media-box__info" @click="remove(comboItem.id, item.id)">
            删除
          </div>
          <div>
            <div class="weui-media-box__title">车辆编号: {{item.bike_no}}</div>
            <div class="weui-media-box__desc">押金：{{item.bike_money}}, 车辆类型：{{item.bike_type}}, 创建时间: {{item.create_time}}</div>
          </div>
        </div>
      </div>
    </view>
    <div class="tab-footer">
      <div v-show="isPay" class='jie-suan' @click="Pay">
       支付押金
      </div>
      <div v-show="!isPay" class='jie-suan' style="background: #666;">
        未选满车辆
      </div>
      <div class="pice">
        <!-- ￥0 -->
      </div>
    </div>
  </view>
</template>

<script>
import store from '../index/store'
import api from '../getApi'
import gStore from '../globalStore'

export default {
  data () {
    return {
      id: null
    }
  },
  computed: {
    count () {
      const comboItem = this.comboItem
      return comboItem.bike_count * comboItem.shop_count - comboItem.car_list.length
    },
    comboItem () {
      const item = store.state.list.filter(item => this.id === item.id)
      return item[0]
    },
    data () {
      return gStore.state.combo.list.filter(item => item.shop_count > 0)
    },
    isPay () {
      return this.data.length > 0 && !this.data.some(item => !(item.car_list && item.car_list.length === item.shop_count * item.bike_count))
    }
  },
  onLoad (options) {
    this.id = Number(options.id)
  },
  methods: {
    Pay () {
      // store.commit('clearShop')
      if (this.isPay) {
        wx.navigateTo({url: '/pages/pay/main'})
      } else {
        wx.showToast({
          title: '车辆未选满！',
          duration: 5000
        })
      }
    },
    add (id) {
      wx.scanCode({
        success: (res) => {
          api.bikeDetail.post({
            id: res.result
          }).success(res => {
            const data = res
            store.commit('addCarToShop', {id: id, data: data})
          })
        }
      })
    },
    add2 (id) {
      api.bikeDetail.post({
        id: 1
      }).success(res => {
        const data = res
        store.commit('addCarToShop', {id: id, data: data})
      })
    },
    remove (id, carId) {
      store.commit('removeAtShopTheCar', {id, carId})
    }
  }
}
</script>

<style scoped>
  .sao-yi-sao {
    float: right;
  }
  .sao-yi-sao-image {
    height: 22px;
    width: 25px;
    /* margin-top: 10px; */
  }
  .sao-yi-sao-text {
    font-size: 15px;
    margin-left: 5px;
    line-height: 20px;
    color: #666;
    position: relative;
    top: -5px;
  }
  .weui-media-box__info {
    width: 40px;
    float: right;
  }
  .weui-media-box__info__meta {
    height:60rpx;
    width:60rpx;
    float:right;
    position:relative;
    left:25rpx;
  }
  /*  */
    .tab-footer {
    height: 45px;
    background: #FFF;
  }
  .pice {
    color: #CC3333;
    font-size: 22px;
    line-height: 45px;
    text-indent: 10px;
  }
  .jie-suan {
    width: 120px;
    text-align: center;
    line-height: 45px;
    font-size: 16px;
    color: #FFF;
    font-weight: 700;
    transition: 0.2s all;
    background: #CC3366;
    float: right;
  }
  .jie-suan:active {
    background: #CC6666;
  }
  .zxc {
    height: 20px;
    width: 20px;
    vertical-align: middle;
  }
</style>

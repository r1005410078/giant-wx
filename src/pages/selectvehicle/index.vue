<template>
  <view class="weui-panel weui-panel_access">
    <view class="weui-panel__hd">
      <span>套餐名字: {{comboItem.name}}, </span>
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
          <div class="weui-media-box__info" @click="remove(comboItem.id, item.id)">
            <image class="weui-media-box__info__meta" src="/resource/images/dels.png" />
          </div>
          <div>
            <div class="weui-media-box__title">车辆编号: {{item.bike_no}}</div>
            <div class="weui-media-box__desc">押金：{{item.bike_money}}, 车辆类型：{{item.bike_type}}, 创建时间: {{item.create_time}}</div>
          </div>
        </div>
      </div>
    </view>
  </view>
</template>

<script>
import store from '../index/store'
import api from '../getApi'

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
    }
  },
  onLoad (options) {
    this.id = Number(options.id)
  },
  methods: {
    add2 (id) {
      wx.scanCode({
        success: (res) => {
          api.bikeDetail.post({
            id: res.result
          }).success(res => {
            const data = res.data.data
            store.commit('addCarToShop', {id: id, data: data})
          })
        }
      })
    },
    add (id) {
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
</style>

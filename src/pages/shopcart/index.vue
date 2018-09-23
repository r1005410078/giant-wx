<template>
  <div v-bind:style="{height: windowHeight + 'px'}">
    <scroll-view scroll-y v-bind:style="{height: scrollHeight + 'px'}">
      <div v-for="(item, index) in data" :key="index">
        <inputPanel :comboInfo="item" />
      </div>
    </scroll-view>
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
  </div>
</template>

<script>
import inputPanel from '@/components/inputPanel'
import gStore from '../globalStore'
// import store from '../index/store'

export default {
  data () {
    return {
      windowHeight: 0,
      scrollHeight: 0
    }
  },
  computed: {
    data () {
      return gStore.state.combo.list.filter(item => item.shop_count > 0)
    },
    isPay () {
      return this.data.length > 0 && !this.data.some(item => !(item.car_list && item.car_list.length === item.shop_count * item.bike_count))
    }
  },
  methods: {
    bindPickerChange () {
      console.log('套餐')
    },
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
    }
  },
  onLoad: function () {
    wx.getSystemInfo({
      success: res => {
        this.windowHeight = res.windowHeight
        this.scrollHeight = res.windowHeight - 45
      }
    })
  },
  components: {
    inputPanel
  }
}
</script>

<style scoped>
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

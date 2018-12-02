<template>
  <div class="weui-panel__bd">
    <div class="weui-media-box weui-media-box_appmsg">
      <div @click="skipDetail(comboInfo.content)" class="weui-media-box__hd weui-media-box__hd_in-appmsg input-weui-media-box__thumb">
        <image class="weui-media-box__thumb" :src="comboInfo.cover_img" />
      </div>
      <div class="weui-media-box__bd weui-media-box__bd_in-appmsg">
        <div @click="skipDetail(comboInfo.content)" class="weui-media-box__title weui-media-box__title_in-text">{{comboInfo.name}}</div>
        <div class="weui-media-box__desc">
          <!--  v-show="comboInfo.shop_count" -->
          <p v-for="val in comboInfo.interval" :key="val.start_time">
            <span class="price">￥{{val.money}}</span> 收费区间：{{val.start_time}}分钟 至 {{val.end_time < 9999 ? val.end_time + '分钟' : '9小时' }}
          </p>
          <navigator :url="'/pages/selectvehicle/main?id='+comboInfo.id" class="sao-yi-sao">
            <image class="sao-yi-sao-image" src="/resource/images/saoyisao.png" />
            <span class="sao-yi-sao-text weui-cell__ft_in-access">您已选 {{comboInfo.car_list.length}} 辆, 还需选择 {{comboInfo.bike_count * comboInfo.shop_count - comboInfo.car_list.length}} 辆</span>
          </navigator>
        </div>
        <div class="weui-media-box__info">
          <div class="weui-media-box__info__meta add-remove">
            <div class="remove" @click="removeComdo(comboInfo)">-</div>
            <div class='num'>{{comboInfo.shop_count || 0}}</div>
            <div class='add' @click="addCombo(comboInfo)">+</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gStore from '../pages/globalStore'
import detailStore from '../pages/detail/store'
export default {
  props: {
    comboInfo: {
      type: Object,
      default: {}
    }
  },
  methods: {
    skipDetail (content) {
      detailStore.commit('setDetail', content)
      wx.navigateTo({
        url: '/pages/detail/main'
      })
    },
    addCombo (comboInfo) {
      let shopCount = comboInfo.shop_count || 0
      gStore.commit('addShop', { id: comboInfo.id, shopCount: shopCount + 1 })
    },
    removeComdo (comboInfo) {
      let shopCount = comboInfo.shop_count || 0
      shopCount = shopCount - 1 < 0 ? 0 : shopCount - 1
      gStore.commit('addShop', { id: comboInfo.id, shopCount: shopCount })
    }
  }
}
</script>

<style scoped>
  .sao-yi-sao {
    margin-top: 5px;
    height: 30px;
  }
  .sao-yi-sao-image {
    height: 18px;
    width: 21px;
    /* margin-top: 10px; */
  }
  .sao-yi-sao-text {
    font-size: 12px;
    margin-left: 5px;
    line-height: 20px;
    color: #0099FF;
    position: relative;
    /* text-decoration: underline; */
    top: -5px;
  }
  .weui-cell__ft_in-access {
    color: #0099FF !important;
  }
  .weui-media-box__title_in-text {
    margin-bottom: 0px;
    margin-top: 5px;
  }
  .weui-media-box {
    padding:5px;
    position:relative;
    border-bottom:1px solid #eee;
  }
  .input-weui-media-box__thumb {
    width: 80px;
    height: 60px;
  }
  .weui-media-box__hd_in-appmsg  {
    position: relative;
    top: -40px;
  }
  .add-remove {
    float: right;
  }
  .add-remove > div {
    float: left;
  }
  .num {
    color: #000;
    font-size: 16px;
    line-height: 26px;
    margin: 0 5px;
  }
  .add, .remove {
    height: 24px;
    width: 24px;
    border-radius: 50%;
    color: aliceblue;
    background: #0099FF;
    text-align: center;
    line-height: 24px;
    font-size: 25px;
  }
  .add:active, .remove:active {
    background: #66CCFF;
  }
  .remove {
    line-height: 21px;
    font-size: 35px;
    /* font-weight: 200px; */
  }
  .price {
    color: #CC3366;
    font-size: 14px;
    font-weight: 700;
  }
  .sao-yi-sao-text {
    font-size: 16px;
    font-weight: 600;
  }
</style>

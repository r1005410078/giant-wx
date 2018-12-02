<template>
  <div>
    <div class="weui-panel weui-panel_access">
      <div class="weui-panel__bd ">
        <div v-for="item in data" :key="item.id" class="weui-media-box weui-media-box_text">
          <div class="weui-media-box__title weui-media-box__title_in-text ">红包金额 <span class="money">￥{{item.money}}</span></div>
          <div class="weui-media-box__desc"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../index/store'
import api from '../getApi'

export default {
  data () {
    return {
      data: []
    }
  },
  onLoad () {
    api.redpacketList.post({
      page: 1,
      page_size: 99
    }).success(res => {
      this.data = res
      store.commit('saveRedEnvelope', this.data)
    })
  }
}
</script>

<style scoped>
  .money {
    color: #CC3333;
    font-size: 22px;
    font-weight: 700;
  }
</style>

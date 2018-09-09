<template>
  <div class="precautions">
    <div class="weui-panel" v-for="(item, index) in data" :key="index" >
      <div @click="skipDetail(item.content)" class="weui-media-box weui-media-box_text">
        <div class="weui-media-box__image">
          <image class="weui-media-box__thumb" :src="item.cover_img" />
        </div>
        <div class="weui-media-box__title weui-media-box__title_in-text">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../getApi'
import detailStore from '../detail/store'
export default {
  data () {
    return {
      data: []
    }
  },
  onLoad () {
    api.aarticleList.post({
      page: 1,
      page_size: 99,
      type: 2
    }).success(res => {
      this.data = res.data
    })
  },
  methods: {
    skipDetail (content) {
      detailStore.commit('setDetail', content)
      wx.navigateTo({
        url: '/pages/detail/main'
      })
    }
  }
}
</script>

<style scoped>
  .precautions {
    padding:10px 10px;
  }
  .weui-panel__bd {
    margin-bottom: 15px;
  }
  .weui-media-box__image {
    height: 167px;
    margin-bottom: 15px;
  }
  .weui-media-box {
    border:1px solid #eee;
    border-radius: 5px;
  }
</style>

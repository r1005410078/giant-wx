<template>
  <div class="page" v-bind:style="{height: scrollHeight + 'px'}">
    <div class="weui-tab">
      <div class="weui-navbar" id="navbar">
        <div v-bind:id="index" v-for="(item, index) in tabs" :key="index" class="weui-navbar__item" v-bind:class="{'weui-bar__item_on': activeIndex == index}" @tap="tabClick">
            <div class="weui-navbar__title">{{item}}</div>
        </div>
        <div class="weui-navbar__slider" v-bind:style="{left: sliderLeft + 'px', transform: 'translateX(' + sliderOffset + 'px)'}"></div>
      </div>
      <div scroll-y class="weui-tab__panel" v-bind:style="{height: scrollHeight + 'px'}">
        <div class="weui-tab__content" v-show="activeIndex == 0">
          <swiper
            style="height: 160px"
            :indicator-dots="indicatorDots"
            :autoplay="autoplay"
            :interval="interval"
            :duration="duration"
          >
            <block v-for="(item, index) in imgUrls" :key="index">
              <swiper-item @click="skipDetail(item.content)">
                <image style="width: 100%; height: 160px" :mode="aspectFit" :src="item.cover_img" />
              </swiper-item>
            </block>
          </swiper>
          <div v-for="(item, index) in comboList" :key="index" >
            <inputPanel :comboInfo="item" />
          </div>
        </div>
        <div class="weui-tab__content" v-show="activeIndex == 1">
          <RouteSuggestion />
        </div>
        <div class="weui-tab__content" v-show="activeIndex == 2">
          <ReturnCarStation />
        </div>
        <view class="weui-tab__content" v-show="activeIndex == 3" >
          <Precautions />
        </view>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../getApi'
import store from './store'
import card from '@/components/card'
import inputPanel from '@/components/inputPanel'
import RouteSuggestion from './RouteSuggestion'
import ReturnCarStation from './ReturnCarStation'
import Precautions from './Precautions'
import detailStore from '../detail/store'

const sliderWidth = 96 // 需要设置slider的宽度，用于计算中间位置
export default {
  data () {
    return {
      imgUrls: [
        'http://pic1.nipic.com/2008-12-30/200812308231244_2.jpg',
        'http://pic2.ooopic.com/12/40/58/18bOOOPIC9c.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      tabs: ['选车租车', '路线推荐', '环湖驿站', '流程须知'],
      activeIndex: 0,
      sliderOffset: 0,
      sliderLeft: 0,
      scrollHeight: 500
    }
  },
  computed: {
    comboList () {
      if (store.state.list.length === 0) {
        api.comboList.post({ page: 1, page_size: 99 })
          .success(res => {
            store.commit('getComboList', res.data)
          })
      }
      return store.state.list
    }
  },
  onLoad () {
    wx.getSystemInfo({
      success: res => {
        this.sliderLeft = (res.windowWidth / this.tabs.length - sliderWidth) / 2
        this.sliderOffset = res.windowWidth / this.tabs.length * this.activeIndex

        this.scrollHeight = res.windowHeight
      }
    })
    api.aarticleList.post({
      page: 1,
      page_size: 99,
      type: 4
    }).success(res => {
      this.imgUrls = res.data
    })
  },

  components: {
    card,
    inputPanel,
    RouteSuggestion,
    ReturnCarStation,
    Precautions
  },

  methods: {
    skipDetail (content) {
      detailStore.commit('setDetail', content)
      wx.navigateTo({
        url: '/pages/detail/main'
      })
    },
    tabClick: function (e) {
      this.sliderOffset = e.currentTarget.offsetLeft
      this.activeIndex = e.currentTarget.id
    },
    binddivTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {

    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped>
.page {
  overflow: hidden;
}
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
.weui-navbar  {
  background: #fff;
}

</style>

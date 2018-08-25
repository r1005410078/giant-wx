<template>
  <div class="weui-panel__bd">
    <div v-for="(item, index) in data" :key="index" class="weui-media-box weui-media-box_text">
      <div class="weui-media-box__image">
        <image class="weui-media-box__thumb" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533060139438&di=8fb519b717143b00f9b7c4de6a13e1b6&imgtype=0&src=http%3A%2F%2Fs16.sinaimg.cn%2Fmw690%2F001tcIsrgy6V5NOQAF19f%26690" />
      </div>
      <div class="weui-media-box__title weui-media-box__title_in-text">千岛湖一圈</div>
      <div class="weui-media-box__desc">骑自行车有什么禁忌?当下骑自行车不再是简单的出行，作为一个代步工具使用了，而更多的是作为一种休闲锻炼工具使用，很多人饭后休闲都会约上三五个朋友去郊外骑骑自行车，那么骑自行车有什么禁忌呢，骑自行车需要注意什么呢?</div>
      <view class="weui-media-box__info">
        <view class="weui-media-box__info__meta">用时 8h</view>
        <view class="weui-media-box__info__meta">公里 27km</view>
        <view class="weui-media-box__info__meta weui-media-box__info__meta_extra">500col</view>
      </view>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        data: new Array(10)
      }
    }
  }
</script>

<style scoped>
  .weui-media-box__image {
    height: 167px;
    margin-bottom: 15px;
  }
  .weui-media-box {
    border: 1px solid #eee;
    border-radius: 5px;
  }
</style>

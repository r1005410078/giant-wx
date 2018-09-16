<template>
  <form @submit="submit" report-submit="true">
    <div class="weui-panel__bd">
      <div class="weui-cells__title">对这次服务打个分把</div>
      <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <span class="text">小二服务: </span>
            <div class="xing-xing" v-for="(item, index) in xingxing" :key="index" @click="onXingXing('score1', item)">
              <image :src="'/resource/images/' + (item > score1 ? 'xx2.png' : 'xx1.png')" />
            </div>
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <span class="text">车辆品质: </span>
            <div class="xing-xing" v-for="(item, index) in xingxing" :key="index" @click="onXingXing('score2', item)">
              <image :src="'/resource/images/' + (item > score2 ? 'xx2.png' : 'xx1.png')" />
            </div>
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <span class="text">骑行环境: </span>
            <div class="xing-xing" v-for="(item, index) in xingxing" :key="index" @click="onXingXing('score3', item)">
              <image  :src="'/resource/images/' + (item > score3 ? 'xx2.png' : 'xx1.png')" />
            </div>
          </div>
        </div>
      </div>
      <div class="weui-cells__title">请给我们留言评论</div>
      <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <textarea name="comment" :value="comment" class="weui-textarea" placeholder="请输入留言" style="height: 5.3em" />
          </div>
        </div>
      </div>
      <div class="weui-btn-area">
        <button v-if="!comment" class="weui-btn" formType="submit" type="primary">提交</button>
      </div>
    </div>
  </form>
</template>

<script>
import api from '../getApi'
export default {
  data: function () {
    return {
      comment: '',
      xingxing: [1, 2, 3, 4, 5],
      score1: 3,
      score2: 4,
      score3: 2,
      items: [
        {name: 0, value: '特别满意'},
        {name: 1, value: '比较满意'},
        {name: 2, value: '不满意'}
      ]
    }
  },
  onLoad (option) {
    this.order_sn = option.deposit_order_no
    this.comment = option.comment || ''
    this.items = this.items.map(item => ({
      ...item,
      checked: Number(option.score) === item.name
    }))
  },
  methods: {
    onXingXing (score, num) {
      this[score] = num
    },
    async submit (e) {
      const res = await api.leaveMessage.post({
        comment: e.target.value.comment,
        score1: this.score1,
        score2: this.score1,
        score3: this.score1,
        order_sn: this.order_sn
      }).toPromise()
      if (res.ok) {
        wx.showModal({
          content: '感谢您的留言与评价',
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              wx.navigateBack({
                delta: 1
              })
            }
          }
        })
      } else {
        wx.showToast({
          title: '留言失败',
          duration: 5000
        })
      }
    }
  }
}
</script>

<style scoped>
  .text {
    float: left;
    font-size: 14px;
  }
  .xing-xing {
    float: left;
    margin-left: 15px;
  }
  .xing-xing image{
    height: 20px;
    width: 20px;
    float: left;
  }
</style>

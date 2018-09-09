<template>
  <form @submit="submit" report-submit="true">
    <div class="weui-panel__bd">
      <div class="weui-cells__title">对这次服务打个分把</div>
      <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <radio-group class="radio-group" name="score">
              <label class="radio" v-for="(item, index) in items" :key="index">
                <radio :value="item.name" :checked="item.checked" />{{item.value}}
              </label>
            </radio-group>
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
        <button class="weui-btn" formType="submit" type="primary">提交</button>
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
      items: [
        {name: 0, value: '特别满意'},
        {name: 1, value: '比较满意'},
        {name: 2, value: '不满意'}
      ]
    }
  },
  onLoad (option) {
    console.log(option)
    this.order_sn = option.deposit_order_no
    this.comment = option.comment || ''
    this.items = this.items.map(item => ({
      ...item,
      checked: Number(option.score) === item.name
    }))
  },
  methods: {
    async submit (e) {
      const res = await api.leaveMessage.post({
        comment: e.target.value.comment,
        score: e.target.value.score,
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
          duration: 500
        })
      }
    }
  }
}
</script>

<style scoped>

</style>

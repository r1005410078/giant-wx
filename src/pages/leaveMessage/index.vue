<template>
  <form @submit="submit" report-submit="true">
    <div class="weui-panel__bd">
      <div class="weui-cells__title">请给我们留言评论</div>
      <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <textarea name="comment" class="weui-textarea" placeholder="请输入留言" style="height: 5.3em" />
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
  onLoad (option) {
    this.order_sn = option.deposit_order_no
  },
  methods: {
    async submit (e) {
      const res = await api.leaveMessage.post({
        comment: e.target.value.comment,
        order_sn: this.order_sn
      }).toPromise()
      if (res.ok) {
        wx.showModal({
          content: '感谢您的留言',
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

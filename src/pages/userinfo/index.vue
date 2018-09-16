<template>
  <div class="page__bd">
     <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell weui-cell_input">
          <div class="weui-cell__hd">
            <div class="weui-label">真实姓名</div>
          </div>
          <div class="weui-cell__bd">
              <input @input="onNameChange" :value="name" class="weui-input" placeholder="请输入姓名"/>
          </div>
        </div>
        <div class="weui-cell weui-cell_input">
          <div class="weui-cell__hd">
            <div class="weui-label">身份证</div>
          </div>
          <div class="weui-cell__bd">
            <input @input="onIDCardChange" :value="id_card" class="weui-input" placeholder="请输入身份证"/>
            <span class="id-card">填写身份可享受免费保险</span>
          </div>
        </div>
        <div class="weui-cell weui-cell_input weui-cell_vcode">
          <div class="weui-cell__hd">
            <div class="weui-label">手机号</div>
          </div>
          <div class="weui-cell__bd">
            <input @input="onPhoneChange" :value="phone" type="number" class="weui-input" placeholder="请输入手机号" />
          </div>
          <div class="weui-cell__ft">
            <div class="weui-vcode-btn" @click="getVerificationCode" v-if="code === 0">获取验证码</div>
            <div class="weui-vcode-btn" v-if="code > 0">{{code}}</div>
          </div>
        </div>
        <div class="weui-cell weui-cell_input weui-cell_vcode">
          <div class="weui-cell__hd">
            <div class="weui-label">手机验证码</div>
          </div>
          <div class="weui-cell__bd">
            <input @input="onCodeChange" type="number" class="weui-input" placeholder="请输入手机验证码" />
          </div>
        </div>
    </div>
    <div class="weui-btn-area">
        <button class="weui-btn" type="primary" @click="save">保存</button>
    </div>
  </div>
</template>

<script>
import api from '../getApi'
import store from './store'
export default {
  data () {
    return {
      code: 0,
      name: '',
      phone: '',
      sms_code: '',
      id_card: ''
    }
  },
  onLoad: function () {
    api.userDetail.post().success(ret => {
      const info = ret.data
      this.name = info.nickname
      this.phone = info.phone
      this.id_card = info.id_card
    })
  },
  methods: {
    verificationPhone () {
      const myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/
      if (!myreg.test(this.phone)) {
        wx.showToast({
          title: '请输入有效的手机号码！',
          icon: 'error',
          duration: 5000
        })
        return false
      }
      return true
    },
    getVerificationCode () {
      if (this.verificationPhone()) {
        this.code = 60
        this.timer = setInterval(() => {
          this.code -= 1
          if (this.code <= 0) {
            clearTimeout(this.timer)
            this.code = 0
          }
        }, 1000)
        api.sendSms.post({ phone: this.phone }).success()
      }
    },
    onNameChange (e) {
      this.name = e.target.value
    },
    onIDCardChange (e) {
      this.id_card = e.target.value
    },
    onPhoneChange (e) {
      this.phone = e.target.value
    },
    onCodeChange (e) {
      this.sms_code = e.target.value
    },
    save () {
      this.verificationPhone()
      const idcardreg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
      if (this.id_card && !idcardreg.test(this.id_card)) {
        wx.showToast({
          title: '身份证格式错误！',
          icon: 'error',
          duration: 5000
        })
        return
      }
      if (!this.sms_code) {
        wx.showToast({
          title: '验证码不能为空',
          icon: 'error',
          duration: 5000
        })
        return
      }
      wx.showLoading({
        title: '保存中...'
      })
      api.userUpdate.post({
        nick_name: this.name,
        phone: this.phone,
        real_name: this.name,
        sms_code: this.sms_code,
        id_card: this.id_card
      }).success(res => {
        if (!res.error_code) {
          wx.showToast({
            title: '保存成功',
            icon: 'success',
            duration: 5000
          })
          store.commit('saveUserInfo', {name: this.name, phone: this.phone})
          wx.hideLoading()
          setTimeout(() => {
            wx.navigateBack({
              delta: 1
            })
          }, 1000)
        } else {
          wx.showToast({
            title: res.error_msg,
            icon: 'error',
            duration: 5000
          })
          wx.hideLoading()
        }
      })
    }
  }
}
</script>

<style scoped>
  .weui-btn-area {
    margin-top: 35px;
  }
  .id-card {
    font-size: 12px;
  }
</style>

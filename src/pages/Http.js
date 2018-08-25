export default class Http {
  baseUrl = 'https://minapp.coder4j.cn/'
  constructor () {
    this.result = new Promise((resolve, reject) => {
      this.resolve = resolve
      this.reject = reject
    })
  }
  send (data, config = {}) {
    this.config = Object.assign({data}, config)
    wx.showLoading({
      title: '加载中'
    })
    wx.request(Object.assign({
      url: this.baseUrl + this.url,
      method: this.method,
      header: {
        'content-type': 'application/json',
        'access_token': wx.getStorageSync('access_token')
      },
      success: res => {
        if (res.data.ok) {
          this.resolve(res.data)
        } else {
          wx.showToast({
            title: res.data.error_msg,
            icon: 'none',
            duration: 3000
          })
          this.reject(res)
        }
      },
      fail: _err => {
        console.log('err', _err)
      },
      complete: () => wx.hideLoading()
    }, this.config))
    return this
  }
  post (data, config) {
    this.method = 'post'
    this.send(data, config)
    return this
  }
  get (data, config) {
    this.method = 'get'
    this.send(data, config)
    return this
  }
  toPromise () {
    return this.result
  }
  success (next) {
    this.result.then(res => {
      next(res)
    })
    return this
  }
  error (next) {
    this.result.error(err => {
      wx.showToast({
        title: '服务的错误' + err,
        duration: 2000
      })
      next(err)
    })
    return this
  }
}

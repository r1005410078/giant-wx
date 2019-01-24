
import Http from './Http'

// 套餐接口
export class ComboList extends Http {
  url = 'minapp/combo/list'
  success (next) {
    this.result.then(res => {
      next(res.data)
    })
    return this
  }
}

export class Login extends Http {
  url = 'minapp/login'
  success (next) {
    this.result.then(res => {
      next(res.data)
    })
    return this
  }
}

// 红包
export class RedpacketList extends Http {
  url = 'minapp/redpacket/list'
  success (next) {
    this.result.then(res => {
      next(res.data)
    })
    return this
  }
}

// 订单
export class PayOrderList extends Http {
  url = 'minapp/pay/orderList'
  success (next) {
    this.result.then(res => {
      next(res.data)
    })
    return this
  }
}

// 创建订单
export class PayCreate extends Http {
  url = 'minapp/pay/create'
  success (next) {
    this.result.then(res => {
      next(res.data)
    })
    return this
  }
}

// 租金订单创建接口
export class PayOrder extends Http {
  url = 'minapp/pay/order'
  success (next) {
    this.result.then(res => {
      next(res.data)
    })
    return this
  }
}

// 租金订单创建接口
export class PayRent extends Http {
  url = 'minapp/pay/rent'
  success (next) {
    this.result.then(res => {
      next(res.data)
    })
    return this
  }
}

// 车辆
export class BikeDetail extends Http {
  url = 'minapp/bike/detail'
  success (next) {
    this.result.then(res => {
      next(res.data)
    })
    return this
  }
}

export class PayRentOrder extends Http {
  url = 'minapp/pay/rentOrder'
  success (next) {
    this.result.then(res => {
      next(res.data)
    })
    return this
  }
}

// 文章发表
export class AarticleList extends Http {
  url = 'minapp/article/list'
  success (next) {
    this.result.then(res => {
      next(res.data)
    })
    return this
  }
}

// 驿站
export class StationList extends Http {
  url = 'minapp/station/list'
  success (next) {
    this.result.then(res => {
      next(res.data)
    })
    return this
  }
}

// 发短信
export class SendSms extends Http {
  url = 'minapp/user/sendSms'
  success (next = () => {}) {
    this.result.then(res => {
      next(res)
    })
    return this
  }
}

// 修改用户信息
export class UserUpdate extends Http {
  url = 'minapp/user/update'
  success (next) {
    this.result.then(res => {
      next(res)
    })
    return this
  }
}

export class UserDetail extends Http {
  url = 'minapp/user/detail'
  success (next) {
    this.result.then(res => {
      next(res)
    })
    return this
  }
}

// 领取红包
export class RedpacketLucky extends Http {
  url = 'minapp/redpacket/lucky'
  success (next) {
    this.result.then(res => {
      console.log(res)
      if (res.data > 0) {
        wx.showToast({
          title: `领取 ${res.data}`,
          icon: 'success',
          duration: 5000
        })
      } else if (res.data === 0) {
        wx.showToast({
          title: `没有红包啦`,
          icon: 'error',
          duration: 5000
        })
      }
      next && next(res.data)
    })
    return this
  }
}

// 租金订单创建接口
export class LeaveMessage extends Http {
  url = '/minapp/pay/orderComment'
  success (next) {
    this.result.then(res => {
      next(res.data)
    })
    return this
  }
}

// 租金订单创建接口
export class Welcome extends Http {
  url = '/minapp/advert/welcome'
  success (next) {
    this.result.then(res => {
      next(res.data)
    })
    return this
  }
}

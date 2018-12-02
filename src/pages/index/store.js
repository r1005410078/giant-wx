// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    list: [ // 套餐列表数据， 包括操作的数据
      // {'id': 1, 'name': 'xxx', 'interval': [{'start_time': 10, 'end_time': 1, 'money': 100}], 'bike_count': 2, 'status': 1, 'cover_img': '333', 'content': '22', 'create_time': '2018-06-26 20:52:04', 'update_time': '2018-06-26 20:52:04'},
      // {'id': 2, 'name': 'xxx', 'interval': [{'start_time': 10, 'end_time': 1, 'money': 100}], 'bike_count': 3, 'status': 1, 'cover_img': '333', 'content': '22', 'create_time': '2018-06-26 20:52:04', 'update_time': '2018-06-26 20:52:04'},
      // {'id': 3, 'name': 'xxx', 'interval': [{'start_time': 10, 'end_time': 1, 'money': 100}], 'bike_count': 3, 'status': 1, 'cover_img': '333', 'content': '22', 'create_time': '2018-06-26 20:52:04', 'update_time': '2018-06-26 20:52:04'},
      // {'id': 4, 'name': 'xxx', 'interval': [{'start_time': 10, 'end_time': 1, 'money': 100}], 'bike_count': 1, 'status': 1, 'cover_img': '333', 'content': '22', 'create_time': '2018-06-26 20:52:04', 'update_time': '2018-06-26 20:52:04'},
      // {'id': 5, 'name': 'xxx', 'interval': [{'start_time': 10, 'end_time': 1, 'money': 100}], 'bike_count': 4, 'status': 1, 'cover_img': '333', 'content': '22', 'create_time': '2018-06-26 20:52:04', 'update_time': '2018-06-26 20:52:04'}
    ],
    stations: [], // 驿站
    redEnvelope: []
  },
  mutations: {
    saveRedEnvelope (state, list) {
      state.redEnvelope = list
    },
    saveStations (state, list) {
      state.stations = list
    },
    getComboList: (state, list) => {
      state.list = list.map(item => {
        return {
          ...item,
          car_list: [], // 套餐的车
          shop_count: 0 // 套餐购物车数量
        }
      })
    },
    clearShop (state) {
      state.list = this.state.list.map(item => {
        return {
          ...item,
          shop_count: 0,
          car_list: []
        }
      })
      wx.hideTabBarRedDot({index: 1})
      console.log('隐藏')
    },
    addShop (state, {id, shopCount}) {
      let sum = 0
      state.list = this.state.list.map(item => {
        if (item.id === id) {
          item = { ...item, shop_count: shopCount }
          if (item.car_list.length > shopCount) {
            // 套餐的数量小于的 车辆
            item = { ...item, shop_count: shopCount, car_list: [] }
          }
        }
        sum += (item.shop_count || 0)
        return item
      })
      wx.setTabBarBadge({
        index: 1,
        text: String(sum)
      })
      if (sum === 0) {
        wx.hideTabBarRedDot({index: 1})
      }
    },
    addCarToShop (state, {id, data}) {
      state.list = this.state.list.map(item => {
        if (item.id === id) {
          if (item.car_list.filter(car => car.id === data.id).length > 0) {
            wx.showToast({
              title: `不能重复添加相同车辆`,
              icon: 'none',
              duration: 5000
            })
            return item
          }
          item = { ...item, car_list: item.car_list.concat([data]) }
        }
        return item
      })
    },
    removeAtShopTheCar (state, {id, carId}) {
      state.list = this.state.list.map(item => {
        if (item.id === id) {
          item = { ...item, car_list: item.car_list.filter(car => car.id !== carId) }
        }
        return item
      })
    }
  }
})

export default store

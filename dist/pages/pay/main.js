require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([7],{

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(209);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0a4db1dd_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(213);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(210)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0a4db1dd"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0a4db1dd_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\pay\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0a4db1dd", Component.options)
  } else {
    hotAPI.reload("data-v-0a4db1dd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 210:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getApi__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_store__ = __webpack_require__(14);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  computed: {
    selectCombo: function selectCombo() {
      return __WEBPACK_IMPORTED_MODULE_3__index_store__["a" /* default */].state.list.filter(function (item) {
        return item.car_list.length > 0;
      }).map(function (item) {
        return {
          bike_list: item.car_list.map(function (car) {
            return car.id;
          }),
          combo_id: item.id
        };
      });
    }
  },
  data: function data() {
    return {
      stations: [],
      payItems: [{ name: '微信', value: '1', checked: true }, { name: '支付宝', value: '2' }, { name: '现金', value: '3' }]
    };
  },
  onLoad: function onLoad() {
    this.stations = __WEBPACK_IMPORTED_MODULE_3__index_store__["a" /* default */].state.stations;
    // .map((station, index) => {
    //   if (index === 0) {
    //     station.checked = true
    //   } else {
    //     station.checked = false
    //   }
    //   return station
    // })
  },

  methods: {
    locationChange: function locationChange(e) {
      var stations = this.stations.slice();
      for (var i = 0, len = stations.length; i < len; ++i) {
        stations[i].checked = stations[i].id === Number(e.target.value);
      }
      this.stations = stations;
    },
    payChange: function payChange(e) {
      var payItems = this.payItems.slice();
      for (var i = 0, len = payItems.length; i < len; ++i) {
        payItems[i].checked = payItems[i].value === e.target.value;
      }
      this.payItems = payItems;
    },
    payOrder: function payOrder(res, val) {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var that, result, ret, params;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = _this;

                _this.order_no = res.data.order_no;

                if (!(val.pay_type === '1')) {
                  _context.next = 11;
                  break;
                }

                _context.next = 5;
                return __WEBPACK_IMPORTED_MODULE_2__getApi__["a" /* default */].payOrder.post({ order_no: _this.order_no }).toPromise();

              case 5:
                result = _context.sent;
                ret = result.data;
                params = {
                  'timeStamp': ret.time_stamp,
                  'nonceStr': ret.nonce_str,
                  'package': ret.package,
                  'signType': ret.sign_type,
                  'paySign': ret.pay_sign,
                  success: function success(res) {
                    wx.showModal({
                      content: '押金支付成功，该订单可以在我的订单里面查询',
                      showCancel: false,
                      success: function success(res) {
                        if (res.confirm) {
                          wx.navigateBack({
                            delta: 1
                          });
                          that.hideTabBarRedDot();
                        }
                      }
                    });
                  },
                  fail: function fail(error) {
                    if (error.errMsg === 'requestPayment:fail cancel') {
                      wx.showModal({
                        content: '订单创建成功, 请去我的订单中的待付押金中支付',
                        showCancel: false,
                        success: function success(res) {
                          if (res.confirm) {
                            wx.navigateBack({
                              delta: 1
                            });
                            that.hideTabBarRedDot({ index: 1 });
                          }
                        }
                      });
                    } else {
                      wx.showToast({
                        title: '支付失败：' + error,
                        icon: 'none',
                        duration: 5000
                      });
                    }
                  }
                };

                wx.requestPayment(params);
                _context.next = 12;
                break;

              case 11:
                wx.showModal({
                  content: '订单创建成功, 请联系店长扫码支付或现金支付',
                  showCancel: false,
                  success: function success(res) {
                    if (res.confirm) {
                      // console.log('用户点击确定')
                      wx.navigateBack({
                        delta: 1
                      });
                      that.hideTabBarRedDot({ index: 1 });
                    }
                  }
                });

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    formSubmit: function formSubmit(e) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var val, payCreateParmas, res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                val = e.target.value;

                if (val.station_id) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt('return', wx.showToast({
                  title: '请选择正确的驿站',
                  duration: 5000
                }));

              case 3:
                payCreateParmas = {
                  pay_type: val.pay_type,
                  station_id: val.station_id,
                  combo_bike: _this2.selectCombo
                };
                _context2.next = 6;
                return __WEBPACK_IMPORTED_MODULE_2__getApi__["a" /* default */].payCreate.post(payCreateParmas).toPromise();

              case 6:
                res = _context2.sent;

                __WEBPACK_IMPORTED_MODULE_3__index_store__["a" /* default */].commit('clearShop');

                if (!(res.error_code === 409)) {
                  _context2.next = 11;
                  break;
                }

                // wx.navigateTo({url: '/pages/userinfo/main'})
                wx.showModal({
                  title: '提交失败',
                  content: '请先绑定手机号!',
                  confirmText: '去绑定',
                  cancelText: '取消',
                  showCancel: true,
                  success: function success(res) {
                    if (res.confirm) {
                      wx.navigateTo({ url: '/pages/userinfo/main' });
                    }
                  }
                });
                return _context2.abrupt('return');

              case 11:

                if (val.pay_type === '1') {
                  wx.showModal({
                    title: '\u652F\u4ED8\u62BC\u91D1 \uFFE5' + res.data.money,
                    content: '',
                    confirmColor: '#0099FF',
                    confirmText: '确定支付',
                    cancelText: '返回',
                    showCancel: true,
                    success: function success(ret) {
                      if (ret.confirm) {
                        _this2.payOrder(res, val);
                      } else {
                        wx.showModal({
                          content: '订单创建成功, 请去我的订单中的待付押金中支付',
                          showCancel: false,
                          success: function success(res) {
                            if (res.confirm) {
                              wx.navigateBack({
                                delta: 1
                              });
                              _this2.hideTabBarRedDot({ index: 1 });
                            }
                          }
                        });
                      }
                    }
                  });
                } else {
                  _this2.payOrder(res, val);
                }

              case 12:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    hideTabBarRedDot: function hideTabBarRedDot() {
      setTimeout(function () {
        wx.hideTabBarRedDot({ index: 1 });
      }, 500);
    }
  }
  // this.selectCombo.forEach((item, index) => {
  //   const id = item.combo_id
  //   for (let l = 0; l < store.state.list.length; l++) {
  //     const it = store.state.list[l];
  //     if (id === it.id) {
  //       const bike_count = it.bike_count
  //       const list = item.bike_list
  //       const num = list.length / bike_count
  //       if (num > 1) {
  //         for (let index = 0; index < num; index++) {
  //           const bike_list = []
  //           for (let j = 0; j < bike_count; j++) {
  //             bike_list.push(list.pop())
  //           }
  //           this.selectCombo.push({
  //             bike_list,
  //             combo_id: it.id
  //           })
  //         }
  //       }
  //       break
  //     }
  //   }
  // });

});

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('form', {
    attrs: {
      "bindreset": "formReset",
      "report-submit": true,
      "eventid": '0'
    },
    on: {
      "submit": _vm.formSubmit
    }
  }, [_c('div', {
    staticClass: "weui-cells__title"
  }, [_vm._v("支付方式")]), _vm._v(" "), _c('div', {
    staticClass: "weui-cells weui-cells_after-title"
  }, [_c('radio-group', {
    staticClass: "radio-group",
    attrs: {
      "name": "pay_type",
      "mpcomid": '0'
    }
  }, _vm._l((_vm.payItems), function(item, index) {
    return _c('label', {
      key: item.value,
      staticClass: "weui-cell weui-check__label"
    }, [_c('span', {
      staticClass: "text"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('radio', {
      staticClass: "weui-cell__ft weui-cell__ft_in-radio",
      attrs: {
        "value": item.value,
        "checked": item.checked
      }
    })], 1)
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "weui-cells__title",
    staticStyle: {
      "color": "red"
    }
  }, [_vm._v("温馨提醒：因为押金是原路径退回，尽量选择余额支付，以免影响到账时间。")]), _vm._v(" "), _c('div', {
    staticClass: "weui-cells__title"
  }, [_vm._v("所在驿站")]), _vm._v(" "), _c('div', {
    staticClass: "weui-cells weui-cells_after-title"
  }, [_c('radio-group', {
    staticClass: "radio-group",
    attrs: {
      "name": "station_id",
      "mpcomid": '1'
    }
  }, _vm._l((_vm.stations), function(item, index) {
    return _c('label', {
      key: item.id,
      staticClass: "weui-cell weui-check__label"
    }, [_c('span', {
      staticClass: "text"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('radio', {
      staticClass: "weui-cell__ft weui-cell__ft_in-radio",
      attrs: {
        "value": item.id,
        "checked": item.checked
      }
    })], 1)
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "weui-btn-area"
  }, [_c('button', {
    staticClass: "weui-btn",
    attrs: {
      "formType": "submit",
      "type": "primary"
    }
  }, [_vm._v("提交租车订单")])], 1)])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0a4db1dd", esExports)
  }
}

/***/ })

},[208]);
//# sourceMappingURL=main.js.map
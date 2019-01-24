require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([1],{

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(149);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2313df07_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(171);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(150)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2313df07"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2313df07_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2313df07", Component.options)
  } else {
    hotAPI.reload("data-v-2313df07", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 150:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getApi__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_card__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_inputPanel__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RouteSuggestion__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ReturnCarStation__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Precautions__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__detail_store__ = __webpack_require__(11);
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










var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      imgUrls: ['http://pic1.nipic.com/2008-12-30/200812308231244_2.jpg', 'http://pic2.ooopic.com/12/40/58/18bOOOPIC9c.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      tabs: ['选车租车', '路线推荐', '环湖驿站', '流程须知'],
      activeIndex: 0,
      sliderOffset: 0,
      sliderLeft: 0,
      scrollHeight: 500
    };
  },

  computed: {
    comboList: function comboList() {
      if (__WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].state.list.length === 0) {
        __WEBPACK_IMPORTED_MODULE_0__getApi__["a" /* default */].comboList.post({ page: 1, page_size: 99 }).success(function (res) {
          __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].commit('getComboList', res.data);
        });
      }
      return __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].state.list;
    }
  },
  onLoad: function onLoad() {
    var _this = this;

    wx.getSystemInfo({
      success: function success(res) {
        _this.sliderLeft = (res.windowWidth / _this.tabs.length - sliderWidth) / 2;
        _this.sliderOffset = res.windowWidth / _this.tabs.length * _this.activeIndex;

        _this.scrollHeight = res.windowHeight;
      }
    });
    __WEBPACK_IMPORTED_MODULE_0__getApi__["a" /* default */].aarticleList.post({
      page: 1,
      page_size: 99,
      type: 4
    }).success(function (res) {
      _this.imgUrls = res.data;
    });
  },


  components: {
    card: __WEBPACK_IMPORTED_MODULE_2__components_card__["a" /* default */],
    inputPanel: __WEBPACK_IMPORTED_MODULE_3__components_inputPanel__["a" /* default */],
    RouteSuggestion: __WEBPACK_IMPORTED_MODULE_4__RouteSuggestion__["a" /* default */],
    ReturnCarStation: __WEBPACK_IMPORTED_MODULE_5__ReturnCarStation__["a" /* default */],
    Precautions: __WEBPACK_IMPORTED_MODULE_6__Precautions__["a" /* default */]
  },

  methods: {
    skipDetail: function skipDetail(content) {
      __WEBPACK_IMPORTED_MODULE_7__detail_store__["a" /* default */].commit('setDetail', content);
      wx.navigateTo({
        url: '/pages/detail/main'
      });
    },

    tabClick: function tabClick(e) {
      this.sliderOffset = e.currentTarget.offsetLeft;
      this.activeIndex = e.currentTarget.id;
    },
    binddivTap: function binddivTap() {
      var url = '../logs/main';
      wx.navigateTo({ url: url });
    },
    getUserInfo: function getUserInfo() {},
    clickHandle: function clickHandle(msg, ev) {
      console.log('clickHandle:', msg, ev);
    }
  },

  created: function created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
  }
});

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_RouteSuggestion_vue__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1b724982_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_RouteSuggestion_vue__ = __webpack_require__(161);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(159)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1b724982"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_RouteSuggestion_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1b724982_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_RouteSuggestion_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\RouteSuggestion.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] RouteSuggestion.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1b724982", Component.options)
  } else {
    hotAPI.reload("data-v-1b724982", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 159:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__webview_store__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__detail_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getApi__ = __webpack_require__(5);
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
  data: function data() {
    return {
      data: []
    };
  },
  onLoad: function onLoad() {
    var _this = this;

    wx.getClipboardData({
      success: function success(res) {
        console.log(res.data);
      }
    });
    __WEBPACK_IMPORTED_MODULE_2__getApi__["a" /* default */].aarticleList.post({
      page: 1,
      page_size: 99,
      type: 1
    }).success(function (res) {
      _this.data = res.data;
    });
  },

  methods: {
    skipDetail: function skipDetail(content, mapName) {
      console.log(1111, mapName);
      __WEBPACK_IMPORTED_MODULE_1__detail_store__["a" /* default */].commit('setDetail', content);
      wx.navigateTo({
        url: '/pages/detail/main?map_name=' + mapName
      });
    },
    skipWebview: function skipWebview(route) {
      __WEBPACK_IMPORTED_MODULE_0__webview_store__["a" /* default */].commit('setAddress', route ? route.address : '');
      wx.navigateTo({
        url: '/pages/webview/main'
      });
    }
  }
});

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-panel"
  }, _vm._l((_vm.data), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "weui-panel__bd"
    }, [_c('div', {
      staticClass: "weui-media-box weui-media-box_appmsg",
      attrs: {
        "hover-class": "weui-cell_active"
      }
    }, [_c('div', {
      staticClass: "weui-media-box__hd weui-media-box__hd_in-appmsg",
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.skipDetail(item.content, item.map_name)
        }
      }
    }, [_c('image', {
      staticClass: "weui-media-box__thumb",
      attrs: {
        "src": item.cover_img
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "weui-media-box__bd weui-media-box__bd_in-appmsg"
    }, [_c('div', {
      staticClass: "weui-media-box__title weui-media-box__title_in-text weui-cell__ft_in-access",
      attrs: {
        "eventid": '1-' + index
      },
      on: {
        "click": function($event) {
          _vm.skipDetail(item.content, item.map_name)
        }
      }
    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('div', {
      staticClass: "weui-media-box__desc"
    }, [_vm._v(_vm._s(item.sub_title) + " ")])])])])
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1b724982", esExports)
  }
}

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_ReturnCarStation_vue__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1e944e0b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_ReturnCarStation_vue__ = __webpack_require__(166);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(163)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1e944e0b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_ReturnCarStation_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1e944e0b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_ReturnCarStation_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\ReturnCarStation.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ReturnCarStation.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e944e0b", Component.options)
  } else {
    hotAPI.reload("data-v-1e944e0b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 163:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rongts_qq_map__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rongts_qq_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rongts_qq_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getApi__ = __webpack_require__(5);

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
  data: function data() {
    return {
      data: []
    };
  },
  onLoad: function onLoad() {
    var _this = this;

    this.qqmapsdk = new __WEBPACK_IMPORTED_MODULE_3_rongts_qq_map___default.a({
      key: 'KMDBZ-RGRK2-OVNU4-CWO6V-O5MME-TJBPE'
    });
    __WEBPACK_IMPORTED_MODULE_4__getApi__["a" /* default */].stationList.post({
      page: 1,
      page_size: 99
    }).success(function (res) {
      _this.data = res.data;
      _this.getSetting();
      __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].commit('saveStations', _this.data);
    });
  },

  methods: {
    skipDetail: function skipDetail(content) {
      __WEBPACK_IMPORTED_MODULE_2__detail_store__["a" /* default */].commit('setDetail', content);
      wx.navigateTo({
        url: '/pages/detail/main'
      });
    },
    openMap: function openMap(address) {
      wx.openLocation({
        latitude: Number(address.lat),
        longitude: Number(address.lng),
        scale: 50
      });
      // this.qqmapsdk.geocoder({
      //   address: address.address,
      //   success: res => {
      //     const location = res.result.location
      //     wx.openLocation({
      //       latitude: location.lat,
      //       longitude: location.lng,
      //       scale: 32
      //     })
      //   }
      // })
    },

    // 微信获得经纬度
    getLocation: function getLocation() {
      var _this2 = this;

      wx.getLocation({
        type: 'wgs84',
        success: function success(res) {
          var result = [];
          var latitude = res.latitude;
          var longitude = res.longitude;
          var loop = function loop(data) {
            var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            var item = data[index];
            var location = item.address;
            _this2.qqmapsdk.calculateDistance({
              to: [{
                latitude: latitude,
                longitude: longitude
              }, {
                latitude: location.lat,
                longitude: location.lng
              }],
              success: function success(res) {
                result.push(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, item, { distance: (res.result.elements[1].distance / 1000).toFixed(1) }));
                if (data[index + 1]) {
                  setTimeout(function () {
                    return loop(data, index + 1);
                  }, 500);
                } else {
                  result.sort(function (item1, item2) {
                    if (Number(item1.distance) < Number(item2.distance)) {
                      return -1;
                    } else {
                      return 1;
                    }
                  });
                  console.log(result.map(function (item) {
                    return item.distance;
                  }));
                  _this2.data = result;
                  wx.showToast({
                    title: '\u9A7F\u7AD9\u63A8\u8350\u6210\u529F',
                    icon: 'error',
                    duration: 5000
                  });
                }
              }
            });
          };
          loop(_this2.data);
        },
        fail: function fail(res) {
          console.error(res);
        }
      });
    },
    getSetting: function getSetting() {
      var vm = this;
      wx.getSetting({
        success: function success(res) {
          // res.authSetting['scope.userLocation'] == undefined    表示 初始化进入该页面
          // res.authSetting['scope.userLocation'] == false    表示 非初始化进入该页面,且未授权
          // res.authSetting['scope.userLocation'] == true    表示 地理位置授权
          if (res.authSetting['scope.userLocation'] !== undefined && res.authSetting['scope.userLocation'] !== true) {
            wx.showModal({
              title: '请求授权当前位置',
              content: '需要获取您的地理位置，请确认授权',
              success: function success(res) {
                if (res.cancel) {
                  wx.showToast({
                    title: '拒绝授权',
                    icon: 'none',
                    duration: 1000
                  });
                } else if (res.confirm) {
                  wx.openSetting({
                    success: function success(dataAu) {
                      if (dataAu.authSetting['scope.userLocation'] === true) {
                        wx.showToast({
                          title: '授权成功',
                          icon: 'success',
                          duration: 1000
                        });
                        // 再次授权，调用wx.getLocation的API
                      } else {
                        wx.showToast({
                          title: '授权失败',
                          icon: 'none',
                          duration: 1000
                        });
                      }
                    }
                  });
                }
              }
            });
          } else if (res.authSetting['scope.userLocation'] === undefined) {
            // 调用wx.getLocation的API
            vm.getLocation();
          } else {
            // 调用wx.getLocation的API
            vm.getLocation();
          }
        }
      });
    }
  }
});

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-panel"
  }, _vm._l((_vm.data), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "weui-panel__bd"
    }, [_c('div', {
      staticClass: "weui-media-box weui-media-box_appmsg",
      attrs: {
        "hover-class": "weui-cell_active"
      }
    }, [_c('div', {
      staticClass: "weui-media-box__hd weui-media-box__hd_in-appmsg",
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.skipDetail(item.content)
        }
      }
    }, [_c('image', {
      staticClass: "weui-media-box__thumb",
      attrs: {
        "src": item.cover_img
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "weui-media-box__bd weui-media-box__bd_in-appmsg"
    }, [_c('div', {
      staticClass: "weui-media-box__title weui-media-box__title_in-text weui-cell__ft_in-access",
      attrs: {
        "eventid": '1-' + index
      },
      on: {
        "click": function($event) {
          _vm.skipDetail(item.content)
        }
      }
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('div', {
      staticClass: "weui-media-box__desc"
    }, [_vm._v("地址：" + _vm._s(item.address.address) + " ")]), _vm._v(" "), _c('div', {
      staticClass: "weui-media-box__info",
      attrs: {
        "eventid": '2-' + index
      },
      on: {
        "click": function($event) {
          _vm.openMap(item.address)
        }
      }
    }, [_c('div', {
      staticClass: "weui-media-box__info__meta"
    }, [_c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (!item.distance),
        expression: "!item.distance"
      }]
    }, [_vm._v("跟我走")]), _vm._v(" "), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (item.distance),
        expression: "item.distance"
      }]
    }, [_vm._v("跟我走,距离您(" + _vm._s(item.distance) + "公里)")])])])])])])
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1e944e0b", esExports)
  }
}

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Precautions_vue__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_14bfbde0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Precautions_vue__ = __webpack_require__(170);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(168)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-14bfbde0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Precautions_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_14bfbde0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Precautions_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\Precautions.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Precautions.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-14bfbde0", Component.options)
  } else {
    hotAPI.reload("data-v-14bfbde0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 168:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getApi__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__detail_store__ = __webpack_require__(11);
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
  data: function data() {
    return {
      data: []
    };
  },
  onLoad: function onLoad() {
    var _this = this;

    __WEBPACK_IMPORTED_MODULE_0__getApi__["a" /* default */].aarticleList.post({
      page: 1,
      page_size: 99,
      type: 2
    }).success(function (res) {
      _this.data = res.data;
    });
  },

  methods: {
    skipDetail: function skipDetail(content) {
      __WEBPACK_IMPORTED_MODULE_1__detail_store__["a" /* default */].commit('setDetail', content);
      wx.navigateTo({
        url: '/pages/detail/main'
      });
    }
  }
});

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "precautions"
  }, _vm._l((_vm.data), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "weui-panel"
    }, [_c('div', {
      staticClass: "weui-media-box weui-media-box_text",
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.skipDetail(item.content)
        }
      }
    }, [_c('div', {
      staticClass: "weui-media-box__image"
    }, [_c('image', {
      staticClass: "weui-media-box__thumb",
      attrs: {
        "src": item.cover_img
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "weui-media-box__title weui-media-box__title_in-text weui-cell__ft_in-access"
    }, [_vm._v(_vm._s(item.title))])])])
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-14bfbde0", esExports)
  }
}

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page",
    style: ({
      height: _vm.scrollHeight + 'px'
    })
  }, [_c('div', {
    staticClass: "weui-tab"
  }, [_c('div', {
    staticClass: "weui-navbar",
    attrs: {
      "id": "navbar"
    }
  }, [_vm._l((_vm.tabs), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "weui-navbar__item",
      class: {
        'weui-bar__item_on': _vm.activeIndex == index
      },
      attrs: {
        "id": index,
        "eventid": '0-' + index
      },
      on: {
        "tap": _vm.tabClick
      }
    }, [_c('div', {
      staticClass: "weui-navbar__title"
    }, [_vm._v(_vm._s(item))])])
  }), _vm._v(" "), _c('div', {
    staticClass: "weui-navbar__slider",
    style: ({
      left: _vm.sliderLeft + 'px',
      transform: 'translateX(' + _vm.sliderOffset + 'px)'
    })
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "weui-tab__panel",
    style: ({
      height: _vm.scrollHeight + 'px'
    }),
    attrs: {
      "scroll-y": ""
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.activeIndex == 0),
      expression: "activeIndex == 0"
    }],
    staticClass: "weui-tab__content"
  }, [_c('swiper', {
    staticStyle: {
      "height": "160px"
    },
    attrs: {
      "indicator-dots": _vm.indicatorDots,
      "autoplay": _vm.autoplay,
      "interval": _vm.interval,
      "duration": _vm.duration
    }
  }, _vm._l((_vm.imgUrls), function(item, index) {
    return _c('block', {
      key: index
    }, [_c('swiper-item', {
      attrs: {
        "eventid": '1-' + index,
        "mpcomid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.skipDetail(item.content)
        }
      }
    }, [_c('image', {
      staticStyle: {
        "width": "100%",
        "height": "160px"
      },
      attrs: {
        "mode": _vm.aspectFit,
        "src": item.cover_img
      }
    })])], 1)
  })), _vm._v(" "), _vm._l((_vm.comboList), function(item, index) {
    return _c('div', {
      key: index
    }, [_c('inputPanel', {
      attrs: {
        "comboInfo": item,
        "mpcomid": '1-' + index
      }
    })], 1)
  })], 2), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.activeIndex == 1),
      expression: "activeIndex == 1"
    }],
    staticClass: "weui-tab__content"
  }, [_c('RouteSuggestion', {
    attrs: {
      "mpcomid": '2'
    }
  })], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.activeIndex == 2),
      expression: "activeIndex == 2"
    }],
    staticClass: "weui-tab__content"
  }, [_c('ReturnCarStation', {
    attrs: {
      "mpcomid": '3'
    }
  })], 1), _vm._v(" "), _c('view', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.activeIndex == 3),
      expression: "activeIndex == 3"
    }],
    staticClass: "weui-tab__content"
  }, [_c('Precautions', {
    attrs: {
      "mpcomid": '4'
    }
  })], 1)])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2313df07", esExports)
  }
}

/***/ })

},[148]);
//# sourceMappingURL=main.js.map
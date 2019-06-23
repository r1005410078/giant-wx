require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([6],{

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(214);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_83997536_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(217);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(215)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-83997536"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_83997536_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\selectvehicle\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-83997536", Component.options)
  } else {
    hotAPI.reload("data-v-83997536", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 215:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_store__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getApi__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globalStore__ = __webpack_require__(29);
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





/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      id: null
    };
  },

  computed: {
    count: function count() {
      var comboItem = this.comboItem;
      return comboItem.bike_count * comboItem.shop_count - comboItem.car_list.length;
    },
    comboItem: function comboItem() {
      var _this = this;

      var item = __WEBPACK_IMPORTED_MODULE_0__index_store__["a" /* default */].state.list.filter(function (item) {
        return _this.id === item.id;
      });
      return item[0];
    },
    data: function data() {
      return __WEBPACK_IMPORTED_MODULE_2__globalStore__["a" /* default */].state.combo.list.filter(function (item) {
        return item.shop_count > 0;
      });
    },
    isPay: function isPay() {
      return this.data.length > 0 && !this.data.some(function (item) {
        return !(item.car_list && item.car_list.length === item.shop_count * item.bike_count);
      });
    }
  },
  onLoad: function onLoad(options) {
    this.id = Number(options.id);
  },

  methods: {
    Pay: function Pay() {
      // store.commit('clearShop')
      if (this.isPay) {
        wx.navigateTo({ url: '/pages/pay/main' });
      } else {
        wx.showToast({
          title: '车辆未选满！',
          duration: 5000
        });
      }
    },
    add: function add(id) {
      wx.scanCode({
        success: function success(res) {
          __WEBPACK_IMPORTED_MODULE_1__getApi__["a" /* default */].bikeDetail.post({
            id: res.result
          }).success(function (res) {
            var data = res;
            __WEBPACK_IMPORTED_MODULE_0__index_store__["a" /* default */].commit('addCarToShop', { id: id, data: data });
          });
        }
      });
    },
    add2: function add2(id) {
      __WEBPACK_IMPORTED_MODULE_1__getApi__["a" /* default */].bikeDetail.post({
        id: 1
      }).success(function (res) {
        var data = res;
        __WEBPACK_IMPORTED_MODULE_0__index_store__["a" /* default */].commit('addCarToShop', { id: id, data: data });
      });
    },
    remove: function remove(id, carId) {
      __WEBPACK_IMPORTED_MODULE_0__index_store__["a" /* default */].commit('removeAtShopTheCar', { id: id, carId: carId });
    }
  }
});

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "weui-panel weui-panel_access"
  }, [_c('view', {
    staticClass: "weui-panel__hd"
  }, [_c('span', [_vm._v(_vm._s(_vm.comboItem.name) + " ")]), _vm._v(" "), _c('span', [_vm._v("还需添加 " + _vm._s(_vm.count) + " 辆车")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.count),
      expression: "count"
    }],
    staticClass: "sao-yi-sao",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.add(_vm.comboItem.id)
      }
    }
  }, [_c('image', {
    staticClass: "sao-yi-sao-image",
    attrs: {
      "src": "/resource/images/saoyisao.png"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "sao-yi-sao-text"
  }, [_vm._v("添加车辆")])])]), _vm._v(" "), _c('view', {
    staticClass: "weui-panel__bd"
  }, _vm._l((_vm.comboItem.car_list), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "weui-media-box weui-media-box_appmsg",
      attrs: {
        "hover-class": "weui-cell_active"
      }
    }, [_vm._m(0, true), _vm._v(" "), _c('div', {
      staticClass: "weui-media-box__bd weui-media-box__bd_in-appmsg"
    }, [_c('div', {
      staticClass: "weui-media-box__info",
      staticStyle: {
        "color": "red"
      },
      attrs: {
        "eventid": '1-' + index
      },
      on: {
        "click": function($event) {
          _vm.remove(_vm.comboItem.id, item.id)
        }
      }
    }, [_vm._v("\n          删除\n        ")]), _vm._v(" "), _c('div', [_c('div', {
      staticClass: "weui-media-box__title"
    }, [_vm._v("车辆编号: " + _vm._s(item.bike_no))]), _vm._v(" "), _c('div', {
      staticClass: "weui-media-box__desc"
    }, [_vm._v("押金：" + _vm._s(item.bike_money) + ", 车辆类型：" + _vm._s(item.bike_type) + ", 创建时间: " + _vm._s(item.create_time))])])])])
  })), _vm._v(" "), _c('div', {
    staticClass: "tab-footer"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isPay),
      expression: "isPay"
    }],
    staticClass: "jie-suan",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.Pay
    }
  }, [_vm._v("\n     支付押金\n    ")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.isPay),
      expression: "!isPay"
    }],
    staticClass: "jie-suan",
    staticStyle: {
      "background": "#666"
    }
  }, [_vm._v("\n      未选满车辆\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "pice"
  })])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-media-box__hd weui-media-box__hd_in-appmsg"
  }, [_c('image', {
    staticClass: "weui-media-box__thumb",
    attrs: {
      "src": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532975901157&di=7781c88bcbbd4f6884445cebbd340732&imgtype=0&src=http%3A%2F%2Fimg.alicdn.com%2Ftfscom%2Fi3%2F3018155508%2FTB1FFkJXwvGK1Jjy0FeXXXYupXa_%2521%25210-item_pic.jpg"
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-83997536", esExports)
  }
}

/***/ })

},[213]);
//# sourceMappingURL=main.js.map
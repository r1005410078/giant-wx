require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([5],{

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(220);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2ee7ba52_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(223);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(221)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2ee7ba52"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2ee7ba52_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\shopcart\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2ee7ba52", Component.options)
  } else {
    hotAPI.reload("data-v-2ee7ba52", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 221:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_inputPanel__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globalStore__ = __webpack_require__(42);
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



// import store from '../index/store'

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      windowHeight: 0,
      scrollHeight: 0
    };
  },

  computed: {
    data: function data() {
      return __WEBPACK_IMPORTED_MODULE_1__globalStore__["a" /* default */].state.combo.list.filter(function (item) {
        return item.shop_count > 0;
      });
    },
    isPay: function isPay() {
      return this.data.length > 0 && !this.data.some(function (item) {
        return !(item.car_list && item.car_list.length === item.shop_count * item.bike_count);
      });
    }
  },
  methods: {
    bindPickerChange: function bindPickerChange() {
      console.log('套餐');
    },
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
    }
  },
  onLoad: function onLoad() {
    var _this = this;

    wx.getSystemInfo({
      success: function success(res) {
        _this.windowHeight = res.windowHeight;
        _this.scrollHeight = res.windowHeight - 45;
      }
    });
  },
  components: {
    inputPanel: __WEBPACK_IMPORTED_MODULE_0__components_inputPanel__["a" /* default */]
  }
});

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    style: ({
      height: _vm.windowHeight + 'px'
    })
  }, [_c('scroll-view', {
    style: ({
      height: _vm.scrollHeight + 'px'
    }),
    attrs: {
      "scroll-y": ""
    }
  }, _vm._l((_vm.data), function(item, index) {
    return _c('div', {
      key: index
    }, [_c('inputPanel', {
      attrs: {
        "comboInfo": item,
        "mpcomid": '0-' + index
      }
    })], 1)
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
      "eventid": '0'
    },
    on: {
      "click": _vm.Pay
    }
  }, [_vm._v("\n      支付押金\n    ")]), _vm._v(" "), _c('div', {
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
  })])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2ee7ba52", esExports)
  }
}

/***/ })

},[219]);
//# sourceMappingURL=main.js.map
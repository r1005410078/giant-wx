require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([11],{

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(180);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2be494de_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(183);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(181)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2be494de"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2be494de_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\login\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2be494de", Component.options)
  } else {
    hotAPI.reload("data-v-2be494de", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 181:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getApi__ = __webpack_require__(5);
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
      timer: null,
      miao: 5,
      homeImageUrl: '',
      showLogin: false
    };
  },
  onLoad: function onLoad() {
    var _this = this;

    wx.showLoading({
      title: '登陆中...'
    });
    __WEBPACK_IMPORTED_MODULE_0__getApi__["a" /* default */].welcome.post({}).success(function (res) {
      // 如果上次请求了，下次会更快
      _this.homeImageUrl = res.img_url;
    });
    this.timer = setInterval(function () {
      if (_this.miao <= 0) {
        if (wx.getStorageSync('userInfo')) {
          wx.switchTab({ url: '/pages/index/main' });
        }
        clearInterval(_this.timer);
      }
      if (_this.miao > 0) {
        _this.miao--;
      }
    }, 1000);
    // 登录
    wx.login({
      success: function success(res) {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          // 发起网络请求
          __WEBPACK_IMPORTED_MODULE_0__getApi__["a" /* default */].login.post({
            code: res.code
          }).success(function (res) {
            wx.setStorageSync('access_token', res.access_token);
            wx.setStorageSync('code', res.code);
            wx.hideLoading();
            __WEBPACK_IMPORTED_MODULE_0__getApi__["a" /* default */].welcome.post({}).success(function (res) {
              _this.homeImageUrl = res.img_url;
            });
            if (!wx.getStorageSync('userInfo')) {
              _this.showLogin = true;
            }
          });
        } else {
          console.log('登录失败！' + res.errMsg);
        }
      }
    });
  },

  methods: {
    onClick: function onClick() {
      this.miao = 0;
      clearInterval(this.timer);
      if (wx.getStorageSync('userInfo')) {
        wx.switchTab({ url: '/pages/index/main' });
      }
    },
    getUserInfo: function getUserInfo() {
      wx.setStorageSync('userInfo', {});
      wx.switchTab({ url: '/pages/index/main' });
    }
  }
});

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!!_vm.miao),
      expression: "!!miao"
    }],
    staticClass: "home-image",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.onClick
    }
  }, [_c('image', {
    attrs: {
      "mode": "aspectFit",
      "src": _vm.homeImageUrl
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "tiaoguo"
  }, [_vm._v(_vm._s(_vm.miao) + "s"), _c('span', {
    staticStyle: {
      "margin-left": "0px",
      "margin-right": "5px"
    }
  }, [_vm._v("|")]), _c('span', [_vm._v("跳过")])])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showLogin),
      expression: "showLogin"
    }],
    staticClass: "weui-msg"
  }, [_c('div', {
    staticClass: "weui-msg__icon-area"
  }, [_c('icon', {
    attrs: {
      "type": "success",
      "size": "93"
    }
  })], 1), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "weui-msg__opr-area"
  }, [_c('div', {
    staticClass: "weui-btn-area"
  }, [_c('button', {
    staticClass: "weui-btn",
    attrs: {
      "open-type": "getUserInfo",
      "eventid": '1'
    },
    on: {
      "click": _vm.getUserInfo
    }
  }, [_vm._v("允许")])], 1)])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-msg__text-area"
  }, [_c('div', {
    staticClass: "weui-msg__title"
  }, [_vm._v("登陆成功")]), _vm._v(" "), _c('div', {
    staticClass: "weui-msg__desc"
  }, [_vm._v("当前网络安全， 确认微信授权")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2be494de", esExports)
  }
}

/***/ })

},[179]);
//# sourceMappingURL=main.js.map
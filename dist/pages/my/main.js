require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([8],{

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(190);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_66a4166d_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(193);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(191)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_66a4166d_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\my\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-66a4166d", Component.options)
  } else {
    hotAPI.reload("data-v-66a4166d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 191:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__globalStore__ = __webpack_require__(42);
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
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  computed: {
    user: function user() {
      return __WEBPACK_IMPORTED_MODULE_0__globalStore__["a" /* default */].state.user.info;
    }
  },
  data: function data() {
    return {
      userInfo: {}
    };
  },
  onLoad: function onLoad() {
    var _this = this;

    // 获取用户信息
    wx.getSetting({
      success: function success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: function success(res) {
              // 可以将 res 发送给后台解码出 unionId
              _this.userInfo = res.userInfo;
              wx.setStorageSync('userInfo', res.userInfo);
              // // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // // 所以此处加入 callback 以防止这种情况
              // if (this.userInfoReadyCallback) {
              //   this.userInfoReadyCallback(res)
              // }
            }
          });
        }
      }
    });
  }
});

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "weui-panel weui-panel_access"
  }, [_c('navigator', {
    staticClass: "weui-media-box weui-media-box_appmsg ",
    attrs: {
      "url": "/pages/userinfo/main",
      "hover-class": "weui-cell_active"
    }
  }, [_c('div', {
    staticClass: "weui-media-box__hd weui-media-box__hd_in-appmsg"
  }, [_c('image', {
    staticClass: "weui-media-box__thumb",
    attrs: {
      "src": _vm.userInfo.avatarUrl || '/resource/images/avatarurl.jpg'
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "weui-media-box__bd weui-media-box__bd_in-appmsg weui-cell__ft_in-access"
  }, [_c('div', {
    staticClass: "weui-media-box__title"
  }, [_vm._v(_vm._s(_vm.userInfo.nickName || '去设置基本信息'))]), _vm._v(" "), _c('div', {
    staticClass: "weui-media-box__desc"
  }, [_vm._v(_vm._s(_vm.user.phone))])])])], 1), _vm._v(" "), _c('div', {
    staticClass: "weui-panel"
  }, [_c('div', {
    staticClass: "weui-panel__bd"
  }, [_c('div', {
    staticClass: "weui-media-box weui-media-box_small-appmsg"
  }, [_c('div', {
    staticClass: "weui-cells weui-cells_in-small-appmsg"
  }, [_c('navigator', {
    staticClass: "weui-cell weui-cell_access",
    attrs: {
      "url": "/pages/myOrder/main",
      "hover-class": "weui-cell_active"
    }
  }, [_c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('image', {
    staticStyle: {
      "width": "20px",
      "height": "20px",
      "margin-right": "5px"
    },
    attrs: {
      "src": "/resource/images/dingdan.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd weui-cell_primary"
  }, [_c('div', [_vm._v("我的订单")])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__ft weui-cell__ft_in-access"
  })]), _vm._v(" "), _c('navigator', {
    staticClass: "weui-cell weui-cell_access",
    attrs: {
      "url": "/pages/myRedEnvelope/main",
      "hover-class": "weui-cell_active"
    }
  }, [_c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('image', {
    staticStyle: {
      "width": "20px",
      "height": "20px",
      "margin-right": "5px"
    },
    attrs: {
      "src": "/resource/images/hongbao.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd weui-cell_primary"
  }, [_c('div', [_vm._v("我的红包")])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__ft weui-cell__ft_in-access"
  })])], 1)])])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-66a4166d", esExports)
  }
}

/***/ })

},[189]);
//# sourceMappingURL=main.js.map
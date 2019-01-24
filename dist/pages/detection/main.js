require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([13],{

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-panel__bd"
  }, [_c('div', {
    staticClass: "weui-media-box weui-media-box_small-appmsg"
  }, [_c('div', {
    staticClass: "weui-cells weui-cells_in-small-appmsg"
  }, [_c('div', {
    staticClass: "weui-cell weui-cell_access",
    attrs: {
      "hover-class": "weui-cell_active",
      "eventid": '0'
    },
    on: {
      "click": _vm.onReceiveRedEnvelopes
    }
  }, [_vm._m(0), _vm._v(" "), _vm._m(1)])]), _vm._v(" "), _vm._l((_vm.data), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "weui-cells weui-cells_in-small-appmsg"
    }, [_c('div', {
      staticClass: "weui-media-box weui-media-box_appmsg ",
      attrs: {
        "hover-class": "weui-cell_active",
        "eventid": '1-' + index
      },
      on: {
        "click": function($event) {
          _vm.skipDetail(item.content)
        }
      }
    }, [_c('view', {
      staticClass: "weui-media-box__hd weui-media-box__hd_in-appmsg"
    }, [_c('image', {
      staticClass: "weui-media-box__thumb",
      attrs: {
        "src": item.cover_img
      }
    })]), _vm._v(" "), _c('view', {
      staticClass: "weui-media-box__bd weui-media-box__bd_in-appmsg weui-cell__ft_in-access"
    }, [_c('view', {
      staticClass: "weui-media-box__title"
    }, [_vm._v(_vm._s(item.title))])])])])
  })], 2)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
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
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell__bd weui-cell_primary"
  }, [_c('div', {
    staticStyle: {
      "color": "#CC3366"
    }
  }, [_vm._v("领取红包")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0e6fdffa", esExports)
  }
}

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(90);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0e6fdffa_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(147);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(91)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0e6fdffa"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0e6fdffa_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\detection\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0e6fdffa", Component.options)
  } else {
    hotAPI.reload("data-v-0e6fdffa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 91:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 92:
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
      type: 3
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
    },
    onReceiveRedEnvelopes: function onReceiveRedEnvelopes() {
      __WEBPACK_IMPORTED_MODULE_0__getApi__["a" /* default */].redpacketLucky.post().success();
    }
  }
});

/***/ })

},[89]);
//# sourceMappingURL=main.js.map
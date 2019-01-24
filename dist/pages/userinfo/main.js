require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([4],{

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(225);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1fe12a0c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(228);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(226)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1fe12a0c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1fe12a0c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\userinfo\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1fe12a0c", Component.options)
  } else {
    hotAPI.reload("data-v-1fe12a0c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 226:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getApi__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(71);
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
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      code: 0,
      name: '',
      phone: '',
      sms_code: '',
      id_card: ''
    };
  },

  onLoad: function onLoad() {
    var _this = this;

    __WEBPACK_IMPORTED_MODULE_0__getApi__["a" /* default */].userDetail.post().success(function (ret) {
      var info = ret.data;
      _this.name = info.nickname;
      _this.phone = info.phone;
      _this.id_card = info.id_card;
    });
  },
  methods: {
    verificationPhone: function verificationPhone() {
      var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
      if (!myreg.test(this.phone)) {
        wx.showToast({
          title: '请输入有效的手机号码！',
          icon: 'error',
          duration: 5000
        });
        return false;
      }
      return true;
    },
    getVerificationCode: function getVerificationCode() {
      var _this2 = this;

      if (this.verificationPhone()) {
        this.code = 60;
        this.timer = setInterval(function () {
          _this2.code -= 1;
          if (_this2.code <= 0) {
            clearTimeout(_this2.timer);
            _this2.code = 0;
          }
        }, 1000);
        __WEBPACK_IMPORTED_MODULE_0__getApi__["a" /* default */].sendSms.post({ phone: this.phone }).success();
      }
    },
    onNameChange: function onNameChange(e) {
      this.name = e.target.value;
    },
    onIDCardChange: function onIDCardChange(e) {
      this.id_card = e.target.value;
    },
    onPhoneChange: function onPhoneChange(e) {
      this.phone = e.target.value;
    },
    onCodeChange: function onCodeChange(e) {
      this.sms_code = e.target.value;
    },
    save: function save() {
      var _this3 = this;

      this.verificationPhone();
      var idcardreg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      if (this.id_card && !idcardreg.test(this.id_card)) {
        wx.showToast({
          title: '身份证格式错误！',
          icon: 'error',
          duration: 5000
        });
        return;
      }
      if (!this.sms_code) {
        wx.showToast({
          title: '验证码不能为空',
          icon: 'error',
          duration: 5000
        });
        return;
      }
      wx.showLoading({
        title: '保存中...'
      });
      __WEBPACK_IMPORTED_MODULE_0__getApi__["a" /* default */].userUpdate.post({
        nick_name: this.name,
        phone: this.phone,
        real_name: this.name,
        sms_code: this.sms_code,
        id_card: this.id_card
      }).success(function (res) {
        if (!res.error_code) {
          wx.showToast({
            title: '保存成功',
            icon: 'success',
            duration: 5000
          });
          __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].commit('saveUserInfo', { name: _this3.name, phone: _this3.phone });
          wx.hideLoading();
          setTimeout(function () {
            wx.navigateBack({
              delta: 1
            });
          }, 1000);
        } else {
          wx.showToast({
            title: res.error_msg,
            icon: 'error',
            duration: 5000
          });
          wx.hideLoading();
        }
      });
    }
  }
});

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page__bd"
  }, [_c('div', {
    staticClass: "weui-cells weui-cells_after-title"
  }, [_c('div', {
    staticClass: "weui-cell weui-cell_input"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('input', {
    staticClass: "weui-input",
    attrs: {
      "value": _vm.name,
      "placeholder": "请输入姓名",
      "eventid": '0'
    },
    on: {
      "input": _vm.onNameChange
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell weui-cell_input"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('input', {
    staticClass: "weui-input",
    attrs: {
      "value": _vm.id_card,
      "placeholder": "请输入身份证",
      "eventid": '1'
    },
    on: {
      "input": _vm.onIDCardChange
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "id-card"
  }, [_vm._v("填写身份证号码可享受免费户外保险一份")])])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell weui-cell_input weui-cell_vcode"
  }, [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('input', {
    staticClass: "weui-input",
    attrs: {
      "value": _vm.phone,
      "type": "number",
      "placeholder": "请输入手机号",
      "eventid": '2'
    },
    on: {
      "input": _vm.onPhoneChange
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__ft"
  }, [(_vm.code === 0) ? _c('div', {
    staticClass: "weui-vcode-btn",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.getVerificationCode
    }
  }, [_vm._v("获取验证码")]) : _vm._e(), _vm._v(" "), (_vm.code > 0) ? _c('div', {
    staticClass: "weui-vcode-btn"
  }, [_vm._v(_vm._s(_vm.code))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell weui-cell_input weui-cell_vcode"
  }, [_vm._m(3), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('input', {
    staticClass: "weui-input",
    attrs: {
      "type": "number",
      "placeholder": "请输入手机验证码",
      "eventid": '4'
    },
    on: {
      "input": _vm.onCodeChange
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "weui-btn-area"
  }, [_c('button', {
    staticClass: "weui-btn",
    attrs: {
      "type": "primary",
      "eventid": '5'
    },
    on: {
      "click": _vm.save
    }
  }, [_vm._v("保存")])], 1)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('div', {
    staticClass: "weui-label"
  }, [_vm._v("真实姓名")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('div', {
    staticClass: "weui-label"
  }, [_vm._v("身份证")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('div', {
    staticClass: "weui-label"
  }, [_vm._v("手机号")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('div', {
    staticClass: "weui-label"
  }, [_vm._v("手机验证码")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1fe12a0c", esExports)
  }
}

/***/ })

},[224]);
//# sourceMappingURL=main.js.map
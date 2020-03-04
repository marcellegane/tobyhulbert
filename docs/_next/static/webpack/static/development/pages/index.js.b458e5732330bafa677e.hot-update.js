webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/NavigationLink/index.js":
/*!********************************************!*\
  !*** ./components/NavigationLink/index.js ***!
  \********************************************/
/*! exports provided: NavigationLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationLink", function() { return ThisNavigationLink; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gsap/dist/gsap */ "./node_modules/gsap/dist/gsap.js");
/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var gsap_dist_ScrollToPlugin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gsap/dist/ScrollToPlugin.js */ "./node_modules/gsap/dist/ScrollToPlugin.js");
/* harmony import */ var gsap_dist_ScrollToPlugin_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollToPlugin_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _svgs_SineWave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../svgs/SineWave */ "./components/svgs/SineWave/index.js");
/* harmony import */ var _svgs_SquareWave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../svgs/SquareWave */ "./components/svgs/SquareWave/index.js");
/* harmony import */ var _svgs_TriangleWave__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../svgs/TriangleWave */ "./components/svgs/TriangleWave/index.js");
/* harmony import */ var _index_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index.style */ "./components/NavigationLink/index.style.js");
/* harmony import */ var _TextMask__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../TextMask */ "./components/TextMask/index.js");







var _jsxFileName = "/Users/marcel/dev/tobyhulbert/components/NavigationLink/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;








gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_8___default.a.registerPlugin(gsap_dist_ScrollToPlugin_js__WEBPACK_IMPORTED_MODULE_9__["ScrollToPlugin"]);

var ThisNavigationLink =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ThisNavigationLink, _React$Component);

  function ThisNavigationLink(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ThisNavigationLink);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ThisNavigationLink).call(this, props));
    _this.svgPath = null;
    _this.isRepeating = true;
    _this.tl = gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_8___default.a.timeline({
      repeat: -1,
      paused: true,
      defaults: {
        duration: 0.5,
        ease: 'none'
      },
      onRepeat: function onRepeat() {
        if (!_this.isRepeating) {
          _this.tl.pause();
        }
      }
    });
    _this.handleMouseEnter = _this.handleMouseEnter.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleMouseLeave = _this.handleMouseLeave.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ThisNavigationLink, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var pathLength = this.svgPath.getTotalLength();
      gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_8___default.a.set(this.svgPath, {
        opacity: 1,
        strokeDasharray: pathLength,
        strokeDashoffset: 0
      });
      this.tl.fromTo(this.svgPath, {
        strokeDashoffset: 0
      }, {
        strokeDashoffset: -pathLength
      }).fromTo(this.svgPath, {
        strokeDashoffset: pathLength
      }, {
        strokeDashoffset: 0
      }); // Page load animations

      gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_8___default.a.fromTo(this.svgPath, {
        strokeDashoffset: pathLength
      }, {
        strokeDashoffset: 0,
        ease: 'power2.inOut',
        duration: 0.7
      });
    }
  }, {
    key: "handleMouseEnter",
    value: function handleMouseEnter() {
      this.isRepeating = true;
      this.tl.play();
    }
  }, {
    key: "handleMouseLeave",
    value: function handleMouseLeave() {
      this.isRepeating = false;
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      var _this$props = this.props,
          href = _this$props.href,
          menuIsOpen = _this$props.menuIsOpen;
      e.preventDefault();
      gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_8___default.a.to(window, {
        duration: 0.8,
        scrollTo: {
          y: href,
          offsetY: 32
        },
        ease: 'power3.out'
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          showText = _this$props2.showText,
          href = _this$props2.href,
          text = _this$props2.text,
          width = _this$props2.width,
          svg = _this$props2.svg,
          svgWidth = _this$props2.svgWidth,
          svgHeight = _this$props2.svgHeight;
      return __jsx(_index_style__WEBPACK_IMPORTED_MODULE_13__["NavigationLink"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_13__["NavigationLinkMain"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, __jsx(_TextMask__WEBPACK_IMPORTED_MODULE_14__["TextMask"], {
        show: showText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_13__["NavigationLinkText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, text)), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_13__["NavigationLinkUnderline"], {
        width: width,
        svgWidth: svgWidth,
        svgHeight: svgHeight,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, svg === 'sine' && __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(_svgs_SineWave__WEBPACK_IMPORTED_MODULE_10__["SineWave"], {
        ref: function ref(path) {
          return _this2.svgPath = path;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      })), svg === 'square' && __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(_svgs_SquareWave__WEBPACK_IMPORTED_MODULE_11__["SquareWave"], {
        ref: function ref(path) {
          return _this2.svgPath = path;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      })), svg === 'triangle' && __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(_svgs_TriangleWave__WEBPACK_IMPORTED_MODULE_12__["TriangleWave"], {
        ref: function ref(path) {
          return _this2.svgPath = path;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      })))));
    }
  }]);

  return ThisNavigationLink;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.b458e5732330bafa677e.hot-update.js.map
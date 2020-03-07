webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _n8tb1t_use_scroll_position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @n8tb1t/use-scroll-position */ "./node_modules/@n8tb1t/use-scroll-position/lib/index.js");
/* harmony import */ var _n8tb1t_use_scroll_position__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_n8tb1t_use_scroll_position__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Luna_components_layouts_default_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Luna/components/layouts/default.style */ "./Luna/components/layouts/default.style.js");
/* harmony import */ var _components_pages_Home_index_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/pages/Home/index.style */ "./components/pages/Home/index.style.js");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Hero */ "./components/Hero/index.js");
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Navigation */ "./components/Navigation/index.js");
/* harmony import */ var _components_Work__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Work */ "./components/Work/index.js");
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/About */ "./components/About/index.js");
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Contact */ "./components/Contact/index.js");
/* harmony import */ var _components_svgs_SineWave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/svgs/SineWave */ "./components/svgs/SineWave/index.js");
var _jsxFileName = "/Users/marcel/dev/tobyhulbert/pages/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












var Index = function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showText = _useState[0],
      setShowText = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      menuIsOpen = _useState2[0],
      setMenuIsOpen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      heroIsHidden = _useState3[0],
      setHeroIsHidden = _useState3[1];

  var toggleNavigation = function toggleNavigation() {
    setMenuIsOpen(!menuIsOpen);
  };

  Object(_n8tb1t_use_scroll_position__WEBPACK_IMPORTED_MODULE_2__["useScrollPosition"])(function (_ref) {
    var currPos = _ref.currPos;
    console.log('usescroll');
    var shouldBeHidden = currPos.y < -50;

    if (shouldBeHidden !== heroIsHidden) {
      setHeroIsHidden(shouldBeHidden);
    }
  }, [heroIsHidden]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setTimeout(function () {
      setShowText(true);
    }, 400);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Toby Hulbert | Engineer. Mixer. Producer")), __jsx(_Luna_components_layouts_default_style__WEBPACK_IMPORTED_MODULE_3__["GlobalStyle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx(_components_pages_Home_index_style__WEBPACK_IMPORTED_MODULE_4__["MenuToggle"], {
    onClick: toggleNavigation,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(_components_pages_Home_index_style__WEBPACK_IMPORTED_MODULE_4__["MenuToggleText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Open menu"), __jsx(_components_svgs_SineWave__WEBPACK_IMPORTED_MODULE_10__["SineWave"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  })), __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_6__["Navigation"], {
    menuIsOpen: menuIsOpen,
    setMenuIsOpen: setMenuIsOpen,
    showText: showText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx(_Luna_components_layouts_default_style__WEBPACK_IMPORTED_MODULE_3__["Main"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_5__["Hero"], {
    isHidden: heroIsHidden,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), __jsx(_components_pages_Home_index_style__WEBPACK_IMPORTED_MODULE_4__["HomeMain"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(_components_Work__WEBPACK_IMPORTED_MODULE_7__["Work"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), __jsx(_components_About__WEBPACK_IMPORTED_MODULE_8__["About"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), __jsx(_components_Contact__WEBPACK_IMPORTED_MODULE_9__["Contact"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.7b965c869335ada82829.hot-update.js.map
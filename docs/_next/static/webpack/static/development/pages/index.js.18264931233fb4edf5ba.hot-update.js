webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Navigation/index.js":
/*!****************************************!*\
  !*** ./components/Navigation/index.js ***!
  \****************************************/
/*! exports provided: Navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return ThisNavigation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavigationLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../NavigationLink */ "./components/NavigationLink/index.js");
/* harmony import */ var _index_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.style */ "./components/Navigation/index.style.js");
var _jsxFileName = "/Users/marcel/dev/tobyhulbert/components/Navigation/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var ThisNavigation = function ThisNavigation(_ref) {
  var menuIsOpen = _ref.menuIsOpen,
      setMenuIsOpen = _ref.setMenuIsOpen,
      showText = _ref.showText;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showProjects = _useState[0],
      setShowProjects = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showAbout = _useState2[0],
      setShowAbout = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showContact = _useState3[0],
      setShowContact = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var enterDelay = 150;
    setTimeout(function () {
      setShowProjects(true);
    }, enterDelay);
    setTimeout(function () {
      setShowAbout(true);
    }, enterDelay * 2);
    setTimeout(function () {
      setShowContact(true);
    }, enterDelay * 3);
  });
  return __jsx(_index_style__WEBPACK_IMPORTED_MODULE_2__["Navigation"], {
    menuIsOpen: menuIsOpen,
    "data-test": menuIsOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(_NavigationLink__WEBPACK_IMPORTED_MODULE_1__["NavigationLink"], {
    index: 1,
    showText: showProjects,
    href: "#work",
    text: "Projects",
    width: 90,
    svg: "sine",
    svgWidth: 100,
    svgHeight: 18,
    position: "topLeft",
    menuIsOpen: menuIsOpen,
    setMenuIsOpen: setMenuIsOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx(_NavigationLink__WEBPACK_IMPORTED_MODULE_1__["NavigationLink"], {
    index: 2,
    showText: showAbout,
    href: "#about",
    text: "About",
    width: 74,
    svg: "triangle",
    svgWidth: 84,
    svgHeight: 18,
    position: "topRight",
    menuIsOpen: menuIsOpen,
    setMenuIsOpen: setMenuIsOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx(_NavigationLink__WEBPACK_IMPORTED_MODULE_1__["NavigationLink"], {
    index: 3,
    showText: showContact,
    href: "#contact",
    text: "Contact",
    width: 100,
    svg: "square",
    svgWidth: 108,
    svgHeight: 18,
    position: "bottomLeft",
    menuIsOpen: menuIsOpen,
    setMenuIsOpen: setMenuIsOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }));
};



/***/ })

})
//# sourceMappingURL=index.js.18264931233fb4edf5ba.hot-update.js.map
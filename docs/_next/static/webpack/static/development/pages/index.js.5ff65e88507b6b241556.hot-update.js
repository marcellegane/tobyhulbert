webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Navigation/index.style.js":
/*!**********************************************!*\
  !*** ./components/Navigation/index.style.js ***!
  \**********************************************/
/*! exports provided: Navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return Navigation; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Luna__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Luna */ "./Luna/index.js");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 100vh;\n    z-index: ", ";\n    pointer-events: ", ";\n    transform: ", ";\n    background: ", ";\n    transition: all 0.4s ease;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Navigation = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].nav.withConfig({
  displayName: "indexstyle__Navigation",
  componentId: "sc-1lp44tb-0"
})(["", ""], _Luna__WEBPACK_IMPORTED_MODULE_2__["LunaMedia"].below('large')(_templateObject(), _Luna__WEBPACK_IMPORTED_MODULE_2__["Luna"].layout.zIndex.nav, function (props) {
  return props.menuIsOpen ? "visible" : "none";
}, function (props) {
  return props.menuIsOpen ? 'translateX(0)' : 'translateX(-100%)';
}, _Luna__WEBPACK_IMPORTED_MODULE_2__["Luna"].color.background));


/***/ })

})
//# sourceMappingURL=index.js.5ff65e88507b6b241556.hot-update.js.map
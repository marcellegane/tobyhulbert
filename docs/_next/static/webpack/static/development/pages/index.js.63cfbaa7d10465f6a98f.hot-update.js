webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/NavigationLink/index.style.js":
/*!**************************************************!*\
  !*** ./components/NavigationLink/index.style.js ***!
  \**************************************************/
/*! exports provided: NavigationLink, NavigationLinkMain, NavigationLinkText, NavigationLinkUnderline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationLink", function() { return NavigationLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationLinkMain", function() { return NavigationLinkMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationLinkText", function() { return NavigationLinkText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationLinkUnderline", function() { return NavigationLinkUnderline; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Luna__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Luna */ "./Luna/index.js");


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: fixed;\n    padding: ", " ", " ", ";\n    z-index: ", ";\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    opacity: ", ";\n    transition: ", ";\n\n    & + & {\n      margin-top: 1.5em;\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var NavigationLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "indexstyle__NavigationLink",
  componentId: "sc-1up4iy-0"
})(["position:relative;color:", ";text-decoration:none;", " ", " ", ""], _Luna__WEBPACK_IMPORTED_MODULE_2__["Luna"].color.secondary.one, _Luna__WEBPACK_IMPORTED_MODULE_2__["LunaMedia"].below('large')(_templateObject(), function (props) {
  return props.menuIsOpen ? 1 : 0;
}, function (props) {
  return props.menuIsOpen ? "opacity 0.4s ease ".concat(props.index * 0.1, "s") : 'opacity 0.4s ease';
}), _Luna__WEBPACK_IMPORTED_MODULE_2__["LunaMedia"].above('large')(_templateObject2(), Object(_Luna__WEBPACK_IMPORTED_MODULE_2__["pxToRem"])('default', 1.5), Object(_Luna__WEBPACK_IMPORTED_MODULE_2__["pxToRem"])('default', 1.75), Object(_Luna__WEBPACK_IMPORTED_MODULE_2__["pxToRem"])('default', 2), _Luna__WEBPACK_IMPORTED_MODULE_2__["Luna"].layout.zIndex.nav), function (props) {
  var position = props.position;

  if (position === 'topLeft') {
    return "\n        top: 0;\n        left: 0;\n      ";
  }

  if (position === 'topRight') {
    return "\n        top: 0;\n        right: 0;\n      ";
  }

  if (position === 'bottomLeft') {
    return "\n        bottom: 0;\n        left: 0;\n      ";
  }
});
var NavigationLinkMain = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "indexstyle__NavigationLinkMain",
  componentId: "sc-1up4iy-1"
})(["position:relative;padding-bottom:", ";"], Object(_Luna__WEBPACK_IMPORTED_MODULE_2__["pxToRem"])(18));
var NavigationLinkText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "indexstyle__NavigationLinkText",
  componentId: "sc-1up4iy-2"
})(["display:block;font-size:", ";font-weight:", ";"], Object(_Luna__WEBPACK_IMPORTED_MODULE_2__["pxToRem"])(24), _Luna__WEBPACK_IMPORTED_MODULE_2__["Luna"].font.weight.bold);
var NavigationLinkUnderline = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "indexstyle__NavigationLinkUnderline",
  componentId: "sc-1up4iy-3"
})(["position:absolute;bottom:0;left:50%;transform:translateX(-50%);display:block;width:100%;:before{content:'';display:block;width:100%;height:0;", "}svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;}path{opacity:0;}"], function (props) {
  return "\n      padding-bottom: ".concat(props.svgHeight / props.svgWidth * 100, "%;\n    ");
});


/***/ })

})
//# sourceMappingURL=index.js.63cfbaa7d10465f6a98f.hot-update.js.map
webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/WorkItem/index.js":
/*!**************************************!*\
  !*** ./components/WorkItem/index.js ***!
  \**************************************/
/*! exports provided: WorkItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkItem", function() { return ThisWorkItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _index_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.style */ "./components/WorkItem/index.style.js");
var _jsxFileName = "/Users/marcel/dev/tobyhulbert/components/WorkItem/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var ThisWorkItem = function ThisWorkItem(_ref) {
  var content = _ref.content,
      loaded = _ref.loaded;
  var imageSrc = content.imageSrc,
      artist = content.artist,
      project = content.project,
      role = content.role;
  var backgroundRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var overlayRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var tlReveal = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
    paused: true
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    tlReveal.fromTo(backgroundRef.current, {
      scaleY: 0
    }, {
      scaleY: 1,
      duration: 0.25,
      ease: 'power3.out'
    }).fromTo(overlayRef.current, {
      opacity: 0,
      y: 20
    }, {
      opacity: 1,
      y: 0,
      duration: 0.25,
      ease: 'power2.out'
    });
  }, [tlReveal]);

  var handleEnter = function handleEnter() {
    if (!loaded) return;
    tlReveal.play();
  };

  var handleLeave = function handleLeave() {
    if (!loaded) return;
    tlReveal.reverse();
  };

  return __jsx(_index_style__WEBPACK_IMPORTED_MODULE_3__["WorkItem"], {
    onFocus: handleEnter,
    onMouseEnter: handleEnter,
    onBlur: handleLeave,
    onMouseLeave: handleLeave,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_3__["WorkImg"], {
    src: "images/work/".concat(imageSrc),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_3__["WorkBackground"], {
    ref: backgroundRef,
    "data-work-loader": true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_3__["WorkOverlay"], {
    ref: overlayRef,
    loaded: loaded,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_3__["WorkArtist"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, artist), project && __jsx(_index_style__WEBPACK_IMPORTED_MODULE_3__["WorkProject"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, project), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_3__["WorkRole"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, role)));
};

ThisWorkItem.propTypes = {
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  loaded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};


/***/ })

})
//# sourceMappingURL=index.js.9106ad45cb958b004961.hot-update.js.map
webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Work/index.js":
/*!**********************************!*\
  !*** ./components/Work/index.js ***!
  \**********************************/
/*! exports provided: Work */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Work", function() { return ThisWork; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var react_images_loaded__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-images-loaded */ "./node_modules/react-images-loaded/dist/index.js");
/* harmony import */ var react_images_loaded__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_images_loaded__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _WorkItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../WorkItem */ "./components/WorkItem/index.js");
/* harmony import */ var _index_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.style */ "./components/Work/index.style.js");
var _jsxFileName = "/Users/marcel/dev/tobyhulbert/components/Work/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // Images max-width 430px

var workItems = [{
  artist: 'Anderson East',
  project: 'Maybe We Never Die',
  role: 'Engineer',
  imageSrc: 'anderson-east_maybe-we-never-die.jpg'
}, {
  artist: 'Barry Gibb',
  project: 'Greenfields The Gibb Brothers’ Songbook',
  role: 'Assistant Engineer, Handclapping',
  imageSrc: 'barry-gibb_songbook.jpg'
}, {
  artist: 'Certainly So',
  project: 'Future Self Only Dreams',
  role: 'Producer, Mixer',
  imageSrc: 'certainly-so_future-self-only-dreams.jpg'
}, {
  artist: 'Dennis Caravello',
  project: '52 Pickup (Single)',
  role: 'Producer, Mixer',
  imageSrc: 'dennis-caravello_52-pickup-single.jpg'
}, {
  artist: 'Dennis Caravello',
  project: 'Susanna (Single)',
  role: 'Producer, Mixer',
  imageSrc: 'dennis-caravello_susanna.jpg'
}, {
  artist: 'Jade Bird',
  project: 'Different Kinds of Light',
  role: 'Additional Engineer',
  imageSrc: 'jade-bird_different-kinds-of-light.jpg'
}, {
  artist: 'Preditah',
  project: 'Glucose (D Double E Remix)',
  role: 'Vocal Engineer',
  imageSrc: 'preditah_glucose.jpg'
}, {
  artist: 'Swordbeach',
  project: 'Overlord',
  role: 'Mixer',
  imageSrc: 'swordbeach_overload.jpg'
}, {
  artist: 'Eddy Luna',
  project: 'If I Died',
  role: 'Mixer',
  imageSrc: 'eddy-luna_if-i-died.jpg'
}, {
  artist: 'Eddy Luna',
  project: 'What’s The Difference',
  role: 'Mixer',
  imageSrc: 'eddy-luna_whats-the-difference.jpg'
}, {
  artist: 'Nick Cave and the Bad Seeds',
  project: 'Live Concert 5.1 Mix',
  role: 'Mixing',
  imageSrc: 'nc-distant-sky.jpg'
}, {
  artist: 'Yussef Dayes x Alfa Mist',
  project: 'Love is the Message Live Session',
  role: 'Engineer',
  imageSrc: 'yussef-dayes.jpg'
}, {
  artist: 'Oh Wonder',
  project: 'Oh Wonder',
  role: 'Strings Engineer',
  imageSrc: 'oh-wonder.jpg'
}, {
  artist: 'Frank Ocean',
  project: 'Blonde',
  role: 'Assistant Engineer',
  imageSrc: 'frank-ocean-blond.jpg'
}, {
  artist: 'Yann Tiersen',
  project: 'Eusa',
  role: 'Engineer',
  imageSrc: 'yann-tiersen-eusa.png'
}, {
  artist: 'Kasabian',
  project: '48.13',
  role: 'Strings Engineer',
  imageSrc: 'kasabian-4813.jpg'
}, {
  artist: 'The 1975',
  project: 'A Brief Enquiry Into Online Relationships',
  role: 'Strings Assistant Engineer',
  imageSrc: 'the-1975.png'
}, {
  artist: 'Airbourne',
  project: 'Boneshaker',
  role: 'Engineer',
  imageSrc: 'airbourne.jpg'
}, {
  artist: 'Dirty Heads',
  project: 'Super Moon',
  role: 'Engineer, Mixing',
  imageSrc: 'dirty-heads.jpg'
}, {
  artist: 'Keith Urban',
  project: 'Burden',
  role: 'Engineer',
  imageSrc: 'keith-urban-burden.jpg'
}, {
  artist: 'The Highwomen',
  project: 'The Highwomen',
  role: 'Assistant Engineer',
  imageSrc: 'thehighwomen-thehighwomen.jpg'
}, {
  artist: 'The Highwomen',
  project: 'The Chain',
  role: 'Engineer',
  imageSrc: 'thehighwomen-thechain.jpg'
}, {
  artist: 'Chic / Nile Rodgers',
  project: "It's About Time",
  role: 'Assistant Engineer',
  imageSrc: 'chic-time.jpg'
}, {
  artist: 'Dawes',
  project: 'Good Luck With Whatever',
  role: 'Engineer, Mixing',
  imageSrc: 'dawes-good-luck.jpg'
}, {
  artist: 'Lori McKenna',
  project: 'The Balladeer',
  role: 'Engineer, Mixing',
  imageSrc: 'lori-mckenna-the-balladeer.jpg'
}, {
  artist: 'Amanda Shires',
  project: 'Deciphering Dreams',
  role: 'Engineer',
  imageSrc: 'amanda-shires-decipheringdreams.jpg'
}, {
  artist: 'Crown Lands',
  project: 'Crown Lands',
  role: 'Assistant & Additional Engineering',
  imageSrc: 'crown-lands-crown-lands.jpg'
}, {
  artist: 'Jason Isbell and the 400 Unit',
  project: 'Reunions',
  role: 'Assistant Engineer',
  imageSrc: 'jason-isbell-and-the-400-unit-reunions.jpg'
}, {
  artist: 'Wheeler Walker, Jr.',
  project: 'Drunk As Fuck (Single)',
  role: 'Engineer',
  imageSrc: 'wheeler-walker-jr-drunk-as-fuck-go-big-or-go-home.jpg'
}];
var filmItems = [{
  artist: 'The Rising',
  role: 'Mixing',
  imageSrc: 'the-rising.jpg'
}, {
  artist: 'The Eyes of Tammy Faye',
  role: 'Songs Engineer',
  imageSrc: 'the-eyes-of-tammy-faye.jpg'
}, {
  artist: 'Together',
  role: 'Mixer',
  imageSrc: 'together.jpg'
}, {
  artist: 'The Control Room',
  role: 'Strings Engineer',
  imageSrc: 'the-control-room.jpg'
}, {
  artist: "Trainwreck- Woodstock '99",
  role: 'Mixer',
  imageSrc: 'trainwreck-woodstock.jpg'
}, {
  artist: "A Serial Killer's Guide to Life",
  role: 'Recording Engineer and Mixer',
  imageSrc: 'film-serial.jpg'
}, {
  artist: "Journey's End",
  role: 'Engineer and Score Mixer',
  imageSrc: 'film-journeys-end.jpg'
}, {
  artist: 'Suburbicon',
  role: 'Score Recordist',
  imageSrc: 'film-suburbicon.jpg'
}, {
  artist: 'Allied',
  role: 'Score Recordist',
  imageSrc: 'film-allied.jpg'
}, {
  artist: 'The Martian',
  role: 'Digital Scoring Engineer',
  imageSrc: 'film-the-martian.jpg'
}, {
  artist: 'Suffragette',
  role: 'Score Editor and Score Recordist',
  imageSrc: 'film-suffragette.jpg'
}, {
  artist: 'Avengers: Age of Ultron',
  role: 'Score Recordist',
  imageSrc: 'film-avengers.jpg'
}, {
  artist: 'The Imitation Game',
  role: 'Score Recordist and Mix Assistant',
  imageSrc: 'film-the-imitation-game.jpg'
}, {
  artist: 'Gravity',
  role: 'Score Recordist',
  imageSrc: 'film-gravity.jpg'
}, {
  artist: 'Rocketman',
  role: 'Asssistant Engineer',
  imageSrc: 'film-rocketman.jpg'
}];

var ThisWork = function ThisWork() {
  var forwardedRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      imagesLoaded = _useState[0],
      setImagesLoaded = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      workLoaded = _useState2[0],
      setWorkLoaded = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      startLoadAnimation = _useState3[0],
      setStartLoadAnimation = _useState3[1];

  var onImagesLoaded = function onImagesLoaded() {
    setImagesLoaded(true);
  };

  setTimeout(function () {
    setStartLoadAnimation(true);
  }, 500);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (imagesLoaded && startLoadAnimation) {
      var workBlocks = forwardedRef.current;
      var loaders = workBlocks.querySelectorAll('[data-work-loader]');
      var imgs = workBlocks.querySelectorAll('img');
      var tl = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({
        onComplete: function onComplete() {
          setWorkLoaded(true);
        }
      });
      tl.to(loaders, {
        scaleY: 1,
        duration: 0.4,
        ease: 'power3.in',
        stagger: 0.05
      });
      tl.set(imgs, {
        opacity: 1,
        stagger: 0.05
      }, 0.4);
      tl.set(loaders, {
        transformOrigin: '50% 100%',
        stagger: 0.05
      }, 0.4);
      tl.to(loaders, {
        scaleY: 0,
        duration: 0.4,
        ease: 'power3.in',
        stagger: 0.05
      }, 0.4);
    }
  }, [forwardedRef, imagesLoaded, startLoadAnimation]);
  return __jsx(_index_style__WEBPACK_IMPORTED_MODULE_4__["Work"], {
    id: "work",
    ref: forwardedRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: this
  }, __jsx(react_images_loaded__WEBPACK_IMPORTED_MODULE_2___default.a, {
    done: onImagesLoaded,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: this
  }, __jsx(_index_style__WEBPACK_IMPORTED_MODULE_4__["WorkGrid"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  }, workItems.map(function (workItem, index) {
    return __jsx(_WorkItem__WEBPACK_IMPORTED_MODULE_3__["WorkItem"], {
      key: index,
      content: workItem,
      loaded: workLoaded,
      square: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315
      },
      __self: this
    });
  })), __jsx(_index_style__WEBPACK_IMPORTED_MODULE_4__["WorkGrid"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  }, filmItems.map(function (workItem, index) {
    return __jsx(_WorkItem__WEBPACK_IMPORTED_MODULE_3__["WorkItem"], {
      key: index,
      content: workItem,
      loaded: workLoaded,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326
      },
      __self: this
    });
  }))));
};

ThisWork.displayName = 'Work';


/***/ })

})
//# sourceMappingURL=index.js.1c513c411d97837c9483.hot-update.js.map
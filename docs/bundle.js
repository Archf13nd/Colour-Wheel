(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["colorWheel"] = factory();
	else
		root["colorWheel"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./themes/default/styles.css":
/*!***********************************!*\
  !*** ./themes/default/styles.css ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.cw__container {
  --height: 30.3125em;
  /* --fw: 500; */
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 18.75em;
  height: var(--height);
  padding: 0 calc(var(--height) / 20);
  border: 2px solid black;
  border-radius: 0.45em;
  position: relative;
}

.cw__container * {
  box-sizing: inherit;
}

.m1 {
  margin-top: 1rem;
}

.top-thirds {
  height: calc(var(--height) * 0.66);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.bottom-third {
  flex-shrink: 0;
  height: calc(var(--height) * 0.33);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.cw__wheel {
  width: calc(var(--height) / 2);
  align-self: center;
}
.cw__field {
}

.cw__label {
  font-weight: var(--fw, 700);
  /* color: green; */
}

.cw__color-input {
  height: 2.5rem;
  width: 100%;
}

.cw__palette {
  width: 100%;
  height: calc(calc(var(--height) / 8) - 1rem);
  border: 1px solid black;
}

.cw__color-codes {
  display: flex;
  width: 100%;
  justify-content: space-around;
  height: 1em;
  /* font-size: 0.8em; */
}

.cw__color-codes > div {
  font-size: 0.875em;
  text-align: center;
}

.select {
  position: absolute;
  top: 0;
  width: 12rem;
  height: 2.5rem;
  font-family: Sans-serif;
  font-size: 1rem;
}

.select-custom,
.select-native {
  width: 100%;
  height: 100%;
  position: relative;
  border: 1px solid black;
  font-family: inherit;
  /* padding-left: 0.6rem; */
  font-size: inherit;
}

.select-custom {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  display: none;
  z-index: 100;
}

.select-native {
  /* background: red; */
}

.select-custom__display {
  height: 100%;
  text-transform: capitalize;
  cursor: pointer;
  display: flex;
  align-items: center;
  background: #fff;
  padding-left: 0.3rem;
}

.select-custom__options {
  position: absolute;
  border: 1px solid black;
  background: #fff;
  top: 3rem;
  width: 12rem;
  display: none;
  cursor: pointer;
}

@media (hover: hover) {
  .select-custom {
    display: block;
  }

  .select-native:focus + .select-custom {
    display: none;
  }
}

.select-native:focus,
.select-custom.isActive .select-custom-trigger {
  outline: none;
  box-shadow:
    white 0 0 0 0.2rem,
    #000 0 0 0 0.4rem;
}

.select-custom.isActive .select-custom__options {
  display: block;
}

.select-custom__option {
  width: 100%;
  height: 2.5rem;
  display: flex;
  align-items: center;
}
.select-custom__option:hover {
  background: #eee;
}
`, "",{"version":3,"sources":["webpack://./themes/default/styles.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,sBAAsB;EACtB,cAAc;EACd,qBAAqB;EACrB,mCAAmC;EACnC,uBAAuB;EACvB,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kCAAkC;EAClC,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;AACA;EACE,cAAc;EACd,kCAAkC;EAClC,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,8BAA8B;EAC9B,kBAAkB;AACpB;AACA;AACA;;AAEA;EACE,2BAA2B;EAC3B,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,WAAW;AACb;;AAEA;EACE,WAAW;EACX,4CAA4C;EAC5C,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,6BAA6B;EAC7B,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,YAAY;EACZ,cAAc;EACd,uBAAuB;EACvB,eAAe;AACjB;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;EACvB,oBAAoB;EACpB,0BAA0B;EAC1B,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,0BAA0B;EAC1B,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,gBAAgB;EAChB,SAAS;EACT,YAAY;EACZ,aAAa;EACb,eAAe;AACjB;;AAEA;EACE;IACE,cAAc;EAChB;;EAEA;IACE,aAAa;EACf;AACF;;AAEA;;EAEE,aAAa;EACb;;qBAEmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,gBAAgB;AAClB","sourcesContent":[".cw__container {\r\n  --height: 30.3125em;\r\n  /* --fw: 500; */\r\n  display: flex;\r\n  flex-direction: column;\r\n  box-sizing: border-box;\r\n  width: 18.75em;\r\n  height: var(--height);\r\n  padding: 0 calc(var(--height) / 20);\r\n  border: 2px solid black;\r\n  border-radius: 0.45em;\r\n  position: relative;\r\n}\r\n\r\n.cw__container * {\r\n  box-sizing: inherit;\r\n}\r\n\r\n.m1 {\r\n  margin-top: 1rem;\r\n}\r\n\r\n.top-thirds {\r\n  height: calc(var(--height) * 0.66);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n.bottom-third {\r\n  flex-shrink: 0;\r\n  height: calc(var(--height) * 0.33);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.cw__wheel {\r\n  width: calc(var(--height) / 2);\r\n  align-self: center;\r\n}\r\n.cw__field {\r\n}\r\n\r\n.cw__label {\r\n  font-weight: var(--fw, 700);\r\n  /* color: green; */\r\n}\r\n\r\n.cw__color-input {\r\n  height: 2.5rem;\r\n  width: 100%;\r\n}\r\n\r\n.cw__palette {\r\n  width: 100%;\r\n  height: calc(calc(var(--height) / 8) - 1rem);\r\n  border: 1px solid black;\r\n}\r\n\r\n.cw__color-codes {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: space-around;\r\n  height: 1em;\r\n  /* font-size: 0.8em; */\r\n}\r\n\r\n.cw__color-codes > div {\r\n  font-size: 0.875em;\r\n  text-align: center;\r\n}\r\n\r\n.select {\r\n  position: absolute;\r\n  top: 0;\r\n  width: 12rem;\r\n  height: 2.5rem;\r\n  font-family: Sans-serif;\r\n  font-size: 1rem;\r\n}\r\n\r\n.select-custom,\r\n.select-native {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n  border: 1px solid black;\r\n  font-family: inherit;\r\n  /* padding-left: 0.6rem; */\r\n  font-size: inherit;\r\n}\r\n\r\n.select-custom {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  display: none;\r\n  z-index: 100;\r\n}\r\n\r\n.select-native {\r\n  /* background: red; */\r\n}\r\n\r\n.select-custom__display {\r\n  height: 100%;\r\n  text-transform: capitalize;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  background: #fff;\r\n  padding-left: 0.3rem;\r\n}\r\n\r\n.select-custom__options {\r\n  position: absolute;\r\n  border: 1px solid black;\r\n  background: #fff;\r\n  top: 3rem;\r\n  width: 12rem;\r\n  display: none;\r\n  cursor: pointer;\r\n}\r\n\r\n@media (hover: hover) {\r\n  .select-custom {\r\n    display: block;\r\n  }\r\n\r\n  .select-native:focus + .select-custom {\r\n    display: none;\r\n  }\r\n}\r\n\r\n.select-native:focus,\r\n.select-custom.isActive .select-custom-trigger {\r\n  outline: none;\r\n  box-shadow:\r\n    white 0 0 0 0.2rem,\r\n    #000 0 0 0 0.4rem;\r\n}\r\n\r\n.select-custom.isActive .select-custom__options {\r\n  display: block;\r\n}\r\n\r\n.select-custom__option {\r\n  width: 100%;\r\n  height: 2.5rem;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.select-custom__option:hover {\r\n  background: #eee;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./themes/default/template.html":
/*!**************************************!*\
  !*** ./themes/default/template.html ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"cw__container\">\r\n  <div class=\"top-thirds\">\r\n    <div class=\"select\">\r\n      <select name=\"\" class=\"select-native\" id=\"cw-select-harmony\">\r\n        <option value=\"\" disabled=\"true\">Select Harmony</option>\r\n        <option value=\"complementary\">Complementary</option>\r\n        <option value=\"tetradic\">Tetradic</option>\r\n        <option value=\"analogous\">Analogous</option>\r\n        <option value=\"triadic\">Triadic</option>\r\n      </select>\r\n      <div class=\"select-custom\" id=\"cw-select-custom\" aria-hidden=\"true\">\r\n        <div class=\"select-custom__display\">Select harmony ..</div>\r\n        <div class=\"select-custom__options\">\r\n          <div value=\"complementary\" class=\"select-custom__option\">Complementary</div>\r\n          <div value=\"tetradic\" class=\"select-custom__option\">Tetradic</div>\r\n          <div value=\"analogous\" class=\"select-custom__option\">Analogous</div>\r\n          <div value=\"triadic\" class=\"select-custom__option\">Triadic</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <canvas class=\"cw__wheel\" id=\"cw-color-wheel\"></canvas>\r\n  </div>\r\n  <div class=\"bottom-third\">\r\n    <!-- <div class=\"cw__field\">\r\n      <label for=\"cw-color-input\" class=\"cw__label\">Pick a colour</label>\r\n      <input class=\"cw__color-input\" id=\"cw-color-input\" type=\"text\" />\r\n    </div> -->\r\n    <div class=\"m1 cw__palette\" id=\"cw-palette\"></div>\r\n    <div class=\"cw__color-codes\" id=\"cw-color-codes\"></div>\r\n  </div>\r\n</div>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/controllers/updateHarmony.js":
/*!******************************************!*\
  !*** ./src/controllers/updateHarmony.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state.js */ "./src/state.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((harmony) => {
  if (harmony === 'complementary') {
    _state_js__WEBPACK_IMPORTED_MODULE_0__["default"].write('harmony', 'complementary')
  }
  if (harmony === 'triadic') {
    _state_js__WEBPACK_IMPORTED_MODULE_0__["default"].write('harmony', 'triadic')
  }
  if (harmony === 'analogous') {
    _state_js__WEBPACK_IMPORTED_MODULE_0__["default"].write('harmony', 'analogous')
  }
  if (harmony === 'tetradic') {
    _state_js__WEBPACK_IMPORTED_MODULE_0__["default"].write('harmony', 'tetradic')
  }
});


/***/ }),

/***/ "./src/controllers/updateMousePosition.js":
/*!************************************************!*\
  !*** ./src/controllers/updateMousePosition.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state.js */ "./src/state.js");
/* harmony import */ var _util_mathUtil_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/mathUtil.js */ "./src/util/mathUtil.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ offsetX, offsetY }) => {
  const radius = _state_js__WEBPACK_IMPORTED_MODULE_0__["default"].read('radius')
  if (!(0,_util_mathUtil_js__WEBPACK_IMPORTED_MODULE_1__.calcCircleBounds)(offsetX - radius, offsetY - radius, radius)) {
    return
  }
  if (!_state_js__WEBPACK_IMPORTED_MODULE_0__["default"].read('isMouseDown')) {
    return
  }

  _state_js__WEBPACK_IMPORTED_MODULE_0__["default"].write('mouseX', offsetX)
  _state_js__WEBPACK_IMPORTED_MODULE_0__["default"].write('mouseY', offsetY)
});


/***/ }),

/***/ "./src/controllers/updateTargets.js":
/*!******************************************!*\
  !*** ./src/controllers/updateTargets.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_mathUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/mathUtil.js */ "./src/util/mathUtil.js");
/* harmony import */ var _models_mapCoords_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/mapCoords.js */ "./src/models/mapCoords.js");
/* harmony import */ var _models_drawTargets_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/drawTargets.js */ "./src/models/drawTargets.js");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state.js */ "./src/state.js");
/* harmony import */ var _models_resetWheel_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/resetWheel.js */ "./src/models/resetWheel.js");
/* harmony import */ var _models_colourPicker_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/colourPicker.js */ "./src/models/colourPicker.js");
/* harmony import */ var _models_generatePalette_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/generatePalette.js */ "./src/models/generatePalette.js");
/* harmony import */ var _views_populateColorCode_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/populateColorCode.js */ "./src/views/populateColorCode.js");










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((force = false) => {
  // Where on the canvas user clicked
  // Is click within bounds of wheel?
  // Update State
  // get position of main target
  // get position of secondary target/s
  // call update canvas with new data

  const buffer = 1
  const x = _state_js__WEBPACK_IMPORTED_MODULE_3__["default"].read('mouseX')
  const y = _state_js__WEBPACK_IMPORTED_MODULE_3__["default"].read('mouseY')

  const radius = _state_js__WEBPACK_IMPORTED_MODULE_3__["default"].read('radius')
  if (!(0,_util_mathUtil_js__WEBPACK_IMPORTED_MODULE_0__.calcCircleBounds)(x - radius, y - radius, radius - buffer)) {
    return
  }
  if (!_state_js__WEBPACK_IMPORTED_MODULE_3__["default"].read('isMouseDown') && !force) {
    return
  }

  // Deletes current painted targets
  const ctx = _state_js__WEBPACK_IMPORTED_MODULE_3__["default"].read('ctx')
  const wheelImage = _state_js__WEBPACK_IMPORTED_MODULE_3__["default"].read('wheelImage')

  ;(0,_models_resetWheel_js__WEBPACK_IMPORTED_MODULE_4__["default"])(ctx, wheelImage)

  _state_js__WEBPACK_IMPORTED_MODULE_3__["default"].write('mouseX', x)
  _state_js__WEBPACK_IMPORTED_MODULE_3__["default"].write('mouseY', y)

  //   r and theta are polar coordinates used in unit circle calculations
  const { r, theta } = (0,_util_mathUtil_js__WEBPACK_IMPORTED_MODULE_0__.cartesian2Polar)(x, y)

  // Store new paths array in state
  const newTargets = (0,_models_mapCoords_js__WEBPACK_IMPORTED_MODULE_1__["default"])(r, theta, _state_js__WEBPACK_IMPORTED_MODULE_3__["default"].read('radius'), _state_js__WEBPACK_IMPORTED_MODULE_3__["default"].read('harmony'))
  _state_js__WEBPACK_IMPORTED_MODULE_3__["default"].write('targets', newTargets)

  const colors = (0,_models_colourPicker_js__WEBPACK_IMPORTED_MODULE_5__["default"])(ctx, newTargets)

  _state_js__WEBPACK_IMPORTED_MODULE_3__["default"].write('colors', colors)

  //   Paints new targets on canvas
  ;(0,_models_drawTargets_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_state_js__WEBPACK_IMPORTED_MODULE_3__["default"].read('ctx'), _state_js__WEBPACK_IMPORTED_MODULE_3__["default"].read('targets'))

  // Populate color codes
  ;(0,_views_populateColorCode_js__WEBPACK_IMPORTED_MODULE_7__["default"])()

  // Paints colors on palette
  const palette = _state_js__WEBPACK_IMPORTED_MODULE_3__["default"].read('root').getElementById('cw-palette')
  const palletteColors = (0,_models_generatePalette_js__WEBPACK_IMPORTED_MODULE_6__["default"])(colors)
  palette.style.background = palletteColors
  palette.setAttribute('colors', colors)
});


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _controllers_updateTargets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/updateTargets.js */ "./src/controllers/updateTargets.js");
/* harmony import */ var _models_generateWheelImage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/generateWheelImage.js */ "./src/models/generateWheelImage.js");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state.js */ "./src/state.js");
/* harmony import */ var _util_mathUtil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/mathUtil.js */ "./src/util/mathUtil.js");
/* harmony import */ var _views_registerAllElements_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/registerAllElements.js */ "./src/views/registerAllElements.js");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((root) => {
  // Sets the apps root if given. Useful for encapsulating component to shadowDom
  if (root) {
    _state_js__WEBPACK_IMPORTED_MODULE_2__["default"].write('root', root)
  } else {
    _state_js__WEBPACK_IMPORTED_MODULE_2__["default"].write('root', document)
  }

  const canvas = _state_js__WEBPACK_IMPORTED_MODULE_2__["default"].read('root').getElementById('cw-color-wheel')
  const ctx = canvas.getContext('2d')
  _state_js__WEBPACK_IMPORTED_MODULE_2__["default"].write('canvas', canvas)
  _state_js__WEBPACK_IMPORTED_MODULE_2__["default"].write('ctx', ctx)

  const size = Math.max(canvas.offsetWidth, canvas.offsetHeight)
  if (canvas.width !== canvas.height) {
    canvas.width = size
    canvas.height = size
    console.log(canvas.width, canvas.height)
  }
  const radius = size / 2
  _state_js__WEBPACK_IMPORTED_MODULE_2__["default"].write('radius', radius)

  // Set default x and y positions
  _state_js__WEBPACK_IMPORTED_MODULE_2__["default"].write('mouseX', radius)
  _state_js__WEBPACK_IMPORTED_MODULE_2__["default"].write('mouseY', radius - canvas.width / 5)

  // Init conversion map inside mathUtil.js
  ;(0,_util_mathUtil_js__WEBPACK_IMPORTED_MODULE_3__.createCoordConversionMaps)(canvas.width, canvas.height, size / 2)

  const wheelImage = (0,_models_generateWheelImage_js__WEBPACK_IMPORTED_MODULE_1__["default"])(canvas, ctx)
  _state_js__WEBPACK_IMPORTED_MODULE_2__["default"].write('wheelImage', wheelImage)
  ctx.putImageData(wheelImage, 0, 0)

  ;(0,_views_registerAllElements_js__WEBPACK_IMPORTED_MODULE_4__["default"])()

  ;(0,_controllers_updateTargets_js__WEBPACK_IMPORTED_MODULE_0__["default"])(true)

  return _state_js__WEBPACK_IMPORTED_MODULE_2__["default"]
});


/***/ }),

/***/ "./src/models/colourPicker.js":
/*!************************************!*\
  !*** ./src/models/colourPicker.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// INCOMPLETE MODULE ///////////////////////////

const colourPicker = (ctx, targets) => {
  const colours = []
  targets.forEach((e) => {
    const pixelData = ctx.getImageData(e.x, e.y, 1, 1).data
    colours.push(`rgba(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]}, ${pixelData[3] / 255})`)
  })
  return colours
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (colourPicker);


/***/ }),

/***/ "./src/models/createEvents.js":
/*!************************************!*\
  !*** ./src/models/createEvents.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_callCanvasEventFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/callCanvasEventFunctions.js */ "./src/views/callCanvasEventFunctions.js");
/* harmony import */ var _views_callButtonEventFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/callButtonEventFunctions.js */ "./src/views/callButtonEventFunctions.js");
/* harmony import */ var _views_callSelectEventFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/callSelectEventFunctions.js */ "./src/views/callSelectEventFunctions.js");




const createEvent = (theEvent, cb, element) => {
  element.addEventListener(theEvent, cb)
  // Assigns the cb without removing any existing methods
  return { theEvent, cb }
}

// Returns cb function used in event listeners
// while keeping id in memory with closure
const createCBfunction = (element) => {
  const tag = element.tagName

  return (e) => {
    if (tag === 'CANVAS') {
      (0,_views_callCanvasEventFunctions_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e)
    }
    if (tag === 'BUTTON') {
      (0,_views_callButtonEventFunctions_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e)
    }
    if (tag === 'SELECT') {
      (0,_views_callSelectEventFunctions_js__WEBPACK_IMPORTED_MODULE_2__["default"])(e)
    }
  }
}

const createEvents = (element, newEvent) => {
  const cb = createCBfunction(element)
  return createEvent(newEvent, cb, element)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createEvents);


/***/ }),

/***/ "./src/models/createSmallCircle.js":
/*!*****************************************!*\
  !*** ./src/models/createSmallCircle.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createSmallCircle = ({ x, y }, radius) => {
  const path = new Path2D()
  path.arc(x, y, radius, 0, 2 * Math.PI)
  return path
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSmallCircle);


/***/ }),

/***/ "./src/models/drawTargets.js":
/*!***********************************!*\
  !*** ./src/models/drawTargets.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createSmallCircle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createSmallCircle.js */ "./src/models/createSmallCircle.js");


const drawTargets = (ctx, coords) => {
  coords.forEach((e, i) => {
    let path
    if (i === 0) {
      path = (0,_createSmallCircle_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e, 15)
    } else {
      path = (0,_createSmallCircle_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e, 10)
    }
    ctx.stroke(path)
  })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (drawTargets);


/***/ }),

/***/ "./src/models/generatePalette.js":
/*!***************************************!*\
  !*** ./src/models/generatePalette.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const generatePalette = (colours) => {
  const numColors = colours.length
  const patchSize = 100 / numColors
  let linearGradient = `linear-gradient(90deg,`
  colours.forEach((col, i) => {
    linearGradient += `${col} ${Math.floor(patchSize * i)}%, ${col} ${Math.floor(
      patchSize * (i + 1)
    )}%`
    if (i < numColors - 1) {
      linearGradient += `,`
    } else {
      linearGradient += `)`
    }
  })

  return linearGradient
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generatePalette);


/***/ }),

/***/ "./src/models/generateWheelImage.js":
/*!******************************************!*\
  !*** ./src/models/generateWheelImage.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_convertHSV2RGB_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/convertHSV2RGB.js */ "./src/util/convertHSV2RGB.js");
/* harmony import */ var _util_mathUtil_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/mathUtil.js */ "./src/util/mathUtil.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((canvas, ctx) => {
  if (canvas.width !== canvas.height) {
    throw new Error('Canvas width is not equal to canvas height')
  }

  const radius = canvas.width / 2
  const image = ctx.createImageData(2 * radius, 2 * radius)

  // Traverses each pixel one line at a time left to right
  for (let x = -radius; x < radius; x += 1) {
    for (let y = -radius; y < radius; y += 1) {
      if (!(0,_util_mathUtil_js__WEBPACK_IMPORTED_MODULE_1__.calcCircleBounds)(x, y, radius)) {
        continue
      }

      // Get's the current line and position on it
      // Multiplies by 4 because every pixel is represented by 4 colour channels
      const index = (radius * 2 * (x + radius) + (y + radius)) * 4
      // Hue is degrees around circle
      const hue = Math.floor((0,_util_mathUtil_js__WEBPACK_IMPORTED_MODULE_1__.calcAngleDegrees)(x, y))
      const r = (0,_util_mathUtil_js__WEBPACK_IMPORTED_MODULE_1__.calcHypotenuse)(x, y)
      // Saturation is highest when r is closest to radius
      const saturation = r / radius

      let [red, green, blue] = (0,_util_convertHSV2RGB_js__WEBPACK_IMPORTED_MODULE_0__["default"])(hue, saturation, 1)
      let alpha = 255
      image.data[index + 0] = red
      image.data[index + 1] = green
      image.data[index + 2] = blue
      image.data[index + 3] = alpha
    }
  }
  return image
});


/***/ }),

/***/ "./src/models/mapCoords.js":
/*!*********************************!*\
  !*** ./src/models/mapCoords.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_mathUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/mathUtil.js */ "./src/util/mathUtil.js");


const getTriadCoords = (r, theta, radius) => {
  const triad1PolarTheta = (theta + Math.PI * 0.666) % (2 * Math.PI)
  const triad2PolarTheta = (theta + Math.PI * 1.333) % (2 * Math.PI)
  const triad1Coords = (0,_util_mathUtil_js__WEBPACK_IMPORTED_MODULE_0__.uncenterCartesianCoords)((0,_util_mathUtil_js__WEBPACK_IMPORTED_MODULE_0__.polar2Cartesian)(r, triad1PolarTheta), radius)
  const triad2Coords = (0,_util_mathUtil_js__WEBPACK_IMPORTED_MODULE_0__.uncenterCartesianCoords)((0,_util_mathUtil_js__WEBPACK_IMPORTED_MODULE_0__.polar2Cartesian)(r, triad2PolarTheta), radius)
  return [triad1Coords, triad2Coords]
}

const getComplementaryCoords = (r, theta, radius) => {
  const complementaryPolarTheta = (theta + Math.PI) % (2 * Math.PI)
  const complementaryCoords = (0,_util_mathUtil_js__WEBPACK_IMPORTED_MODULE_0__.uncenterCartesianCoords)(
    (0,_util_mathUtil_js__WEBPACK_IMPORTED_MODULE_0__.polar2Cartesian)(r, complementaryPolarTheta),
    radius
  )

  return [complementaryCoords]
}
const getAnalogousCoords = (r, theta, radius) => {
  const analogous1PolarTheta = (theta + Math.PI / 6) % (2 * Math.PI)
  const analogous2PolarTheta = (theta + Math.PI / -6) % (2 * Math.PI)
  const analogous1Coords = (0,_util_mathUtil_js__WEBPACK_IMPORTED_MODULE_0__.uncenterCartesianCoords)((0,_util_mathUtil_js__WEBPACK_IMPORTED_MODULE_0__.polar2Cartesian)(r, analogous1PolarTheta), radius)
  const analogous2Coords = (0,_util_mathUtil_js__WEBPACK_IMPORTED_MODULE_0__.uncenterCartesianCoords)((0,_util_mathUtil_js__WEBPACK_IMPORTED_MODULE_0__.polar2Cartesian)(r, analogous2PolarTheta), radius)

  return [analogous1Coords, analogous2Coords]
}
const getTetradicCoords = (r, theta, radius) => {
  const tetradic1PolarTheta = (theta + Math.PI / 2) % (2 * Math.PI)
  const tetradic2PolarTheta = (theta + Math.PI) % (2 * Math.PI)
  const tetradic3PolarTheta = (theta - Math.PI / 2) % (2 * Math.PI)
  const tetradic1Coords = (0,_util_mathUtil_js__WEBPACK_IMPORTED_MODULE_0__.uncenterCartesianCoords)((0,_util_mathUtil_js__WEBPACK_IMPORTED_MODULE_0__.polar2Cartesian)(r, tetradic1PolarTheta), radius)
  const tetradic2Coords = (0,_util_mathUtil_js__WEBPACK_IMPORTED_MODULE_0__.uncenterCartesianCoords)((0,_util_mathUtil_js__WEBPACK_IMPORTED_MODULE_0__.polar2Cartesian)(r, tetradic2PolarTheta), radius)
  const tetradic3Coords = (0,_util_mathUtil_js__WEBPACK_IMPORTED_MODULE_0__.uncenterCartesianCoords)((0,_util_mathUtil_js__WEBPACK_IMPORTED_MODULE_0__.polar2Cartesian)(r, tetradic3PolarTheta), radius)

  return [tetradic1Coords, tetradic2Coords, tetradic3Coords]
}

const mapCoords = (r, theta, radius, type = 'complementary') => {
  // Index 0 is main target
  const coords = []
  const mainTarget = (0,_util_mathUtil_js__WEBPACK_IMPORTED_MODULE_0__.uncenterCartesianCoords)((0,_util_mathUtil_js__WEBPACK_IMPORTED_MODULE_0__.polar2Cartesian)(r, theta), radius)
  coords.push(mainTarget)
  if (type === 'triadic') coords.push(...getTriadCoords(r, theta, radius))
  if (type === 'complementary') coords.push(...getComplementaryCoords(r, theta, radius))
  if (type === 'analogous') coords.push(...getAnalogousCoords(r, theta, radius))
  if (type === 'tetradic') coords.push(...getTetradicCoords(r, theta, radius))

  return coords
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCoords);


/***/ }),

/***/ "./src/models/resetWheel.js":
/*!**********************************!*\
  !*** ./src/models/resetWheel.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const resetWheel = (ctx, wheelImage) => {
  ctx.putImageData(wheelImage, 0, 0)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resetWheel);


/***/ }),

/***/ "./src/state.js":
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const state = {
  root: null,
  canvas: null,
  ctx: null,
  colors: [],
  eventListeners: {},
  wheelImage: null,
  targets: [],
  mouseX: null,
  mouseY: null,
  radius: null,
  isMouseDown: null,
  harmony: 'triadic',
  elements: [
    {
      id: 'cw-color-wheel',
      events: ['mousemove', 'mousedown', 'mouseup', 'mouseleave']
    },
    {
      id: 'cw-btn-complementary',
      events: ['click']
    },
    {
      id: 'cw-btn-triadic',
      events: ['click']
    },
    {
      id: 'cw-btn-tetradic',
      events: ['click']
    },
    {
      id: 'cw-btn-analogous',
      events: ['click']
    },
    {
      id: 'cw-palette',
      events: ['click']
    },
    {
      id: 'cw-select-harmony',
      events: ['change']
    },
    {
      id: 'cw-color-codes',
      events: ['click']
    }
  ]
}

const read = (key) => {
  if (key in state) {
    return state[key]
  } else {
    throw new Error(`Tried to read property ${key}. It doesn't exist`)
  }
}

const write = (key, value) => {
  if (key in state) {
    state[key] = value
  } else {
    throw new Error(`Tried to write property ${key}. It doesn't exist`)
  }
}

const writeEvent = (key, value) => {
  if (key in state.events) {
    state.events[key] = value
  } else {
    throw new Error(`Tried to write property ${key} in ${state.events}. It doesn't exist`)
  }
}

const readEvent = (key) => {
  if (key in state.events) {
    // Returns shallow copy. Opting out of deep copy for performance
    return { ...state.events[key] }
  } else {
    throw new Error(`Tried to read property ${key} in ${state.events}. It doesn't exist`)
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ write, read, writeEvent, readEvent });


/***/ }),

/***/ "./src/util/convertHSV2RGB.js":
/*!************************************!*\
  !*** ./src/util/convertHSV2RGB.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const convertHSV2RGB = (hue, saturation, value) => {
    let chroma = value * saturation;
    let hue1 = hue / 60;
    let x = chroma * (1- Math.abs((hue1 % 2) - 1));
    let r1, g1, b1;
    if (hue1 >= 0 && hue1 <= 1) {
      ([r1, g1, b1] = [chroma, x, 0]);
    } else if (hue1 >= 1 && hue1 <= 2) {
      ([r1, g1, b1] = [x, chroma, 0]);
    } else if (hue1 >= 2 && hue1 <= 3) {
      ([r1, g1, b1] = [0, chroma, x]);
    } else if (hue1 >= 3 && hue1 <= 4) {
      ([r1, g1, b1] = [0, x, chroma]);
    } else if (hue1 >= 4 && hue1 <= 5) {
      ([r1, g1, b1] = [x, 0, chroma]);
    } else if (hue1 >= 5 && hue1 <= 6) {
      ([r1, g1, b1] = [chroma, 0, x]);
    }
    
    let m = value - chroma;
    let [r,g,b] = [r1+m, g1+m, b1+m];
    
 
    return [255*r,255*g,255*b];
  }

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (convertHSV2RGB);

/***/ }),

/***/ "./src/util/formatting.js":
/*!********************************!*\
  !*** ./src/util/formatting.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatRBGAString: () => (/* binding */ formatRBGAString)
/* harmony export */ });
const formatRBGAString = (string) => {
  let numbers = string.slice(4, 17)
  numbers += ')'
  numbers = numbers.split(' ').join('')
  return numbers
}




/***/ }),

/***/ "./src/util/mathUtil.js":
/*!******************************!*\
  !*** ./src/util/mathUtil.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calcAngleDegrees: () => (/* binding */ calcAngleDegrees),
/* harmony export */   calcCircleBounds: () => (/* binding */ calcCircleBounds),
/* harmony export */   calcHypotenuse: () => (/* binding */ calcHypotenuse),
/* harmony export */   cartesian2Polar: () => (/* binding */ cartesian2Polar),
/* harmony export */   combineValues: () => (/* binding */ combineValues),
/* harmony export */   createCoordConversionMaps: () => (/* binding */ createCoordConversionMaps),
/* harmony export */   polar2Cartesian: () => (/* binding */ polar2Cartesian),
/* harmony export */   uncenterCartesianCoords: () => (/* binding */ uncenterCartesianCoords)
/* harmony export */ });
// STATE
const cartesian2PolarMap = {}

const calcHypotenuse = (x, y) => {
  // Pythagorean Theorem a^2 + b^2 = c^2
  return Math.sqrt(x * x + y * y)
}

const calcAngleRadians = (x, y) => {
  return Math.atan2(y, x)
}

const calcAngleDegrees = (x, y) => {
  const radians = -calcAngleRadians(x, y)
  // Convert radians to degrees
  return (180 / Math.PI) * (radians + Math.PI)
}

const calcCircleBounds = (x, y, radius) => {
  const r = calcHypotenuse(x, y)
  return r < radius
}

// polar2Cartesian converts to cartesian coords with 0 at centre.
// This brings 0 back to top left
const uncenterCartesianCoords = ({ x, y }, radius) => {
  y = y + radius
  x = x + radius
  return { x, y }
}

const polar2Cartesian = (r, theta) => {
  const x = r * Math.cos(theta)
  const y = r * Math.sin(theta)
  return { x, y }
}

const cartesian2Polar = (x, y) => {
  return cartesian2PolarMap[combineValues(x, y)]
}

const combineValues = (x, y) => {
  return (x << 16) | y
}

// Maps each cartesian coord to a polar coord. The key is a mapping of the x and y values
// and to retrieve polar coords you must use the combineValues function in mathUtils.js
const createCoordConversionMaps = (width, height, radius) => {
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const r = calcHypotenuse(x - radius, y - radius)
      const theta = calcAngleRadians(x - radius, y - radius)
      cartesian2PolarMap[combineValues(x, y)] = { r, theta }
    }
  }
}




/***/ }),

/***/ "./src/views/callButtonEventFunctions.js":
/*!***********************************************!*\
  !*** ./src/views/callButtonEventFunctions.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _controllers_updateHarmony_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/updateHarmony.js */ "./src/controllers/updateHarmony.js");
/* harmony import */ var _controllers_updateTargets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/updateTargets.js */ "./src/controllers/updateTargets.js");



const click = (e) => {
  const id = e.target.id
  const harmony = id.match(/(complementary|triadic|analogous|tetradic)/g)[0]
  ;(0,_controllers_updateHarmony_js__WEBPACK_IMPORTED_MODULE_0__["default"])(harmony)
  ;(0,_controllers_updateTargets_js__WEBPACK_IMPORTED_MODULE_1__["default"])(true)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((e) => {
  const type = e.type

  if (type === 'click') click(e)
});


/***/ }),

/***/ "./src/views/callCanvasEventFunctions.js":
/*!***********************************************!*\
  !*** ./src/views/callCanvasEventFunctions.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _controllers_updateMousePosition_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/updateMousePosition.js */ "./src/controllers/updateMousePosition.js");
/* harmony import */ var _controllers_updateTargets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/updateTargets.js */ "./src/controllers/updateTargets.js");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state.js */ "./src/state.js");


// Only use state for view specific changes. i.e. updating mouseX or mousedown


const mouseMove = (e) => {
  (0,_controllers_updateMousePosition_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e)
  ;(0,_controllers_updateTargets_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
}

const mouseDown = () => {
  _state_js__WEBPACK_IMPORTED_MODULE_2__["default"].write('isMouseDown', true)
  ;(0,_controllers_updateTargets_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
}

const mouseUp = () => {
  _state_js__WEBPACK_IMPORTED_MODULE_2__["default"].write('isMouseDown', false)
}

const mouseLeave = () => {
  _state_js__WEBPACK_IMPORTED_MODULE_2__["default"].write('isMouseDown', false)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((e) => {
  const type = e.type
  if (type === 'mousemove') mouseMove(e)
  if (type === 'mousedown') mouseDown(e)
  if (type === 'mouseup') mouseUp(e)
  if (type === 'mouseleave') mouseLeave(e)
});


/***/ }),

/***/ "./src/views/callSelectEventFunctions.js":
/*!***********************************************!*\
  !*** ./src/views/callSelectEventFunctions.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _controllers_updateHarmony_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/updateHarmony.js */ "./src/controllers/updateHarmony.js");
/* harmony import */ var _controllers_updateTargets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/updateTargets.js */ "./src/controllers/updateTargets.js");



const change = (e) => {
  const harmony = e.target.value.toLowerCase()
  ;(0,_controllers_updateHarmony_js__WEBPACK_IMPORTED_MODULE_0__["default"])(harmony)
  ;(0,_controllers_updateTargets_js__WEBPACK_IMPORTED_MODULE_1__["default"])(true)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((e) => {
  const type = e.type

  if (type === 'change') change(e)
});


/***/ }),

/***/ "./src/views/populateColorCode.js":
/*!****************************************!*\
  !*** ./src/views/populateColorCode.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state.js */ "./src/state.js");
/* harmony import */ var _util_formatting_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/formatting.js */ "./src/util/formatting.js");


const populateColorCodes = () => {
  const codeContainer = _state_js__WEBPACK_IMPORTED_MODULE_0__["default"].read('root').getElementById('cw-color-codes')
  codeContainer.innerText = ''
  const colors = _state_js__WEBPACK_IMPORTED_MODULE_0__["default"].read('colors')
  console.log(colors)
  colors.forEach((col) => {
    const newString = (0,_util_formatting_js__WEBPACK_IMPORTED_MODULE_1__.formatRBGAString)(col)

    codeContainer.insertAdjacentHTML('afterbegin', `<div>${newString}</div>`)
  })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populateColorCodes);


/***/ }),

/***/ "./src/views/registerAllElements.js":
/*!******************************************!*\
  !*** ./src/views/registerAllElements.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_createEvents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/createEvents.js */ "./src/models/createEvents.js");
/* harmony import */ var _callCanvasEventFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./callCanvasEventFunctions.js */ "./src/views/callCanvasEventFunctions.js");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state.js */ "./src/state.js");




const registerAllElements = () => {
  const elements = _state_js__WEBPACK_IMPORTED_MODULE_2__["default"].read('elements')
  elements.forEach((el) => {
    const element = _state_js__WEBPACK_IMPORTED_MODULE_2__["default"].read('root').getElementById(el.id)
    // Checks if element is present. If not nothing is generated for it
    if (element) {
      for (let i = 0; i < el.events.length; i++) {
        const events = (0,_models_createEvents_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element, el.events[i])
        // TODO -> Prevent previous data being lost on rewrite
        // Important for destroying event listeners
        _state_js__WEBPACK_IMPORTED_MODULE_2__["default"].write('eventListeners', events)
      }
    }
  })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (registerAllElements);


/***/ }),

/***/ "./themes/default/customSelect.js":
/*!****************************************!*\
  !*** ./themes/default/customSelect.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((root) => {
  const customSelect = root.getElementById('cw-select-custom')
  const nativeSelect = root.getElementById('cw-select-harmony')

  const handleSelectOpen = () => {
    customSelect.classList.add('isActive')
    customSelect.setAttribute('aria-hidden', false)
  }

  const handleSelectClose = () => {}

  nativeSelect.addEventListener('change', (e) => {
    const value = e.target.value
    customSelect.value = value
    customSelect.querySelector('div').innerText = value
  })

  root.addEventListener('click', (e) => {
    const isCustomCustomSelect = e.target.closest('#cw-select-custom')

    // return if target is not custom select element
    if (!isCustomCustomSelect) {
      handleSelectClose()
      return
    }
    handleSelectOpen()
    const option = e.target.closest('.select-custom__option')

    // return if target isn't select option
    if (!option) return

    const value = option.getAttribute('value')
    customSelect.value = value
    customSelect.querySelector('div').innerText = value
    nativeSelect.value = value
    nativeSelect.dispatchEvent(new Event('change', { view: window, bubbles: true }))
    customSelect.classList.remove('isActive')
  })

  document.addEventListener('click', (e) => {
    if (e.target.tagName !== 'COLOR-WHEEL') {
      customSelect.classList.remove('isActive')
    }
  })
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./themes/default/index.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/index.js */ "./src/index.js");
/* harmony import */ var _customSelect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customSelect.js */ "./themes/default/customSelect.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./themes/default/styles.css");
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template.html */ "./themes/default/template.html");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  customElements.define(
    'color-wheel',
    class extends HTMLElement {
      constructor() {
        super()

        const template = document.createElement('template')
        template.innerHTML = _template_html__WEBPACK_IMPORTED_MODULE_3__["default"]

        let templateContent = template.content
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(templateContent)
        const styleEl = document.createElement('style')
        styleEl.textContent = _styles_css__WEBPACK_IMPORTED_MODULE_2__["default"]
        this.shadowRoot.appendChild(styleEl)
      }
      connectedCallback() {
        (0,_customSelect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.shadowRoot)
        ;(0,_src_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.shadowRoot)
      }
    }
  )
});

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUM7QUFDTztBQUNYO0FBQ1M7QUFDMUM7QUFDQSxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHNEQUFZO0FBQ3pDO0FBQ0E7QUFDQSw0QkFBNEIsY0FBYztBQUMxQztBQUNBO0FBQ0EsOEJBQThCLG1EQUFNO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNERBQVk7QUFDcEIsUUFBUSwwREFBSTtBQUNaO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2xvcldoZWVsL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9jb2xvcldoZWVsLy4vdGhlbWVzL2RlZmF1bHQvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9jb2xvcldoZWVsLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jb2xvcldoZWVsLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY29sb3JXaGVlbC8uL3RoZW1lcy9kZWZhdWx0L3RlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vY29sb3JXaGVlbC8uL3NyYy9jb250cm9sbGVycy91cGRhdGVIYXJtb255LmpzIiwid2VicGFjazovL2NvbG9yV2hlZWwvLi9zcmMvY29udHJvbGxlcnMvdXBkYXRlTW91c2VQb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly9jb2xvcldoZWVsLy4vc3JjL2NvbnRyb2xsZXJzL3VwZGF0ZVRhcmdldHMuanMiLCJ3ZWJwYWNrOi8vY29sb3JXaGVlbC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb2xvcldoZWVsLy4vc3JjL21vZGVscy9jb2xvdXJQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vY29sb3JXaGVlbC8uL3NyYy9tb2RlbHMvY3JlYXRlRXZlbnRzLmpzIiwid2VicGFjazovL2NvbG9yV2hlZWwvLi9zcmMvbW9kZWxzL2NyZWF0ZVNtYWxsQ2lyY2xlLmpzIiwid2VicGFjazovL2NvbG9yV2hlZWwvLi9zcmMvbW9kZWxzL2RyYXdUYXJnZXRzLmpzIiwid2VicGFjazovL2NvbG9yV2hlZWwvLi9zcmMvbW9kZWxzL2dlbmVyYXRlUGFsZXR0ZS5qcyIsIndlYnBhY2s6Ly9jb2xvcldoZWVsLy4vc3JjL21vZGVscy9nZW5lcmF0ZVdoZWVsSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vY29sb3JXaGVlbC8uL3NyYy9tb2RlbHMvbWFwQ29vcmRzLmpzIiwid2VicGFjazovL2NvbG9yV2hlZWwvLi9zcmMvbW9kZWxzL3Jlc2V0V2hlZWwuanMiLCJ3ZWJwYWNrOi8vY29sb3JXaGVlbC8uL3NyYy9zdGF0ZS5qcyIsIndlYnBhY2s6Ly9jb2xvcldoZWVsLy4vc3JjL3V0aWwvY29udmVydEhTVjJSR0IuanMiLCJ3ZWJwYWNrOi8vY29sb3JXaGVlbC8uL3NyYy91dGlsL2Zvcm1hdHRpbmcuanMiLCJ3ZWJwYWNrOi8vY29sb3JXaGVlbC8uL3NyYy91dGlsL21hdGhVdGlsLmpzIiwid2VicGFjazovL2NvbG9yV2hlZWwvLi9zcmMvdmlld3MvY2FsbEJ1dHRvbkV2ZW50RnVuY3Rpb25zLmpzIiwid2VicGFjazovL2NvbG9yV2hlZWwvLi9zcmMvdmlld3MvY2FsbENhbnZhc0V2ZW50RnVuY3Rpb25zLmpzIiwid2VicGFjazovL2NvbG9yV2hlZWwvLi9zcmMvdmlld3MvY2FsbFNlbGVjdEV2ZW50RnVuY3Rpb25zLmpzIiwid2VicGFjazovL2NvbG9yV2hlZWwvLi9zcmMvdmlld3MvcG9wdWxhdGVDb2xvckNvZGUuanMiLCJ3ZWJwYWNrOi8vY29sb3JXaGVlbC8uL3NyYy92aWV3cy9yZWdpc3RlckFsbEVsZW1lbnRzLmpzIiwid2VicGFjazovL2NvbG9yV2hlZWwvLi90aGVtZXMvZGVmYXVsdC9jdXN0b21TZWxlY3QuanMiLCJ3ZWJwYWNrOi8vY29sb3JXaGVlbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb2xvcldoZWVsL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NvbG9yV2hlZWwvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NvbG9yV2hlZWwvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jb2xvcldoZWVsL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY29sb3JXaGVlbC8uL3RoZW1lcy9kZWZhdWx0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImNvbG9yV2hlZWxcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiY29sb3JXaGVlbFwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmN3X19jb250YWluZXIge1xyXG4gIC0taGVpZ2h0OiAzMC4zMTI1ZW07XHJcbiAgLyogLS1mdzogNTAwOyAqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHdpZHRoOiAxOC43NWVtO1xyXG4gIGhlaWdodDogdmFyKC0taGVpZ2h0KTtcclxuICBwYWRkaW5nOiAwIGNhbGModmFyKC0taGVpZ2h0KSAvIDIwKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAwLjQ1ZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY3dfX2NvbnRhaW5lciAqIHtcclxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xyXG59XHJcblxyXG4ubTEge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbi50b3AtdGhpcmRzIHtcclxuICBoZWlnaHQ6IGNhbGModmFyKC0taGVpZ2h0KSAqIDAuNjYpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uYm90dG9tLXRoaXJkIHtcclxuICBmbGV4LXNocmluazogMDtcclxuICBoZWlnaHQ6IGNhbGModmFyKC0taGVpZ2h0KSAqIDAuMzMpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY3dfX3doZWVsIHtcclxuICB3aWR0aDogY2FsYyh2YXIoLS1oZWlnaHQpIC8gMik7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcbi5jd19fZmllbGQge1xyXG59XHJcblxyXG4uY3dfX2xhYmVsIHtcclxuICBmb250LXdlaWdodDogdmFyKC0tZncsIDcwMCk7XHJcbiAgLyogY29sb3I6IGdyZWVuOyAqL1xyXG59XHJcblxyXG4uY3dfX2NvbG9yLWlucHV0IHtcclxuICBoZWlnaHQ6IDIuNXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmN3X19wYWxldHRlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGNhbGMoY2FsYyh2YXIoLS1oZWlnaHQpIC8gOCkgLSAxcmVtKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmN3X19jb2xvci1jb2RlcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBoZWlnaHQ6IDFlbTtcclxuICAvKiBmb250LXNpemU6IDAuOGVtOyAqL1xyXG59XHJcblxyXG4uY3dfX2NvbG9yLWNvZGVzID4gZGl2IHtcclxuICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2VsZWN0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMnJlbTtcclxuICBoZWlnaHQ6IDIuNXJlbTtcclxuICBmb250LWZhbWlseTogU2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5zZWxlY3QtY3VzdG9tLFxyXG4uc2VsZWN0LW5hdGl2ZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAvKiBwYWRkaW5nLWxlZnQ6IDAuNnJlbTsgKi9cclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5zZWxlY3QtY3VzdG9tIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgei1pbmRleDogMTAwO1xyXG59XHJcblxyXG4uc2VsZWN0LW5hdGl2ZSB7XHJcbiAgLyogYmFja2dyb3VuZDogcmVkOyAqL1xyXG59XHJcblxyXG4uc2VsZWN0LWN1c3RvbV9fZGlzcGxheSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwYWRkaW5nLWxlZnQ6IDAuM3JlbTtcclxufVxyXG5cclxuLnNlbGVjdC1jdXN0b21fX29wdGlvbnMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHRvcDogM3JlbTtcclxuICB3aWR0aDogMTJyZW07XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XHJcbiAgLnNlbGVjdC1jdXN0b20ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuc2VsZWN0LW5hdGl2ZTpmb2N1cyArIC5zZWxlY3QtY3VzdG9tIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VsZWN0LW5hdGl2ZTpmb2N1cyxcclxuLnNlbGVjdC1jdXN0b20uaXNBY3RpdmUgLnNlbGVjdC1jdXN0b20tdHJpZ2dlciB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3gtc2hhZG93OlxyXG4gICAgd2hpdGUgMCAwIDAgMC4ycmVtLFxyXG4gICAgIzAwMCAwIDAgMCAwLjRyZW07XHJcbn1cclxuXHJcbi5zZWxlY3QtY3VzdG9tLmlzQWN0aXZlIC5zZWxlY3QtY3VzdG9tX19vcHRpb25zIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnNlbGVjdC1jdXN0b21fX29wdGlvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5zZWxlY3QtY3VzdG9tX19vcHRpb246aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNlZWU7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi90aGVtZXMvZGVmYXVsdC9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLG1DQUFtQztFQUNuQyx1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsY0FBYztFQUNkLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsa0JBQWtCO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLDRDQUE0QztFQUM1Qyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sWUFBWTtFQUNaLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLDBCQUEwQjtFQUMxQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7O0VBRUUsYUFBYTtFQUNiOztxQkFFbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmN3X19jb250YWluZXIge1xcclxcbiAgLS1oZWlnaHQ6IDMwLjMxMjVlbTtcXHJcXG4gIC8qIC0tZnc6IDUwMDsgKi9cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHdpZHRoOiAxOC43NWVtO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpO1xcclxcbiAgcGFkZGluZzogMCBjYWxjKHZhcigtLWhlaWdodCkgLyAyMCk7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNDVlbTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmN3X19jb250YWluZXIgKiB7XFxyXFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4ubTEge1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvcC10aGlyZHMge1xcclxcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWhlaWdodCkgKiAwLjY2KTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5ib3R0b20tdGhpcmQge1xcclxcbiAgZmxleC1zaHJpbms6IDA7XFxyXFxuICBoZWlnaHQ6IGNhbGModmFyKC0taGVpZ2h0KSAqIDAuMzMpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jd19fd2hlZWwge1xcclxcbiAgd2lkdGg6IGNhbGModmFyKC0taGVpZ2h0KSAvIDIpO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG4uY3dfX2ZpZWxkIHtcXHJcXG59XFxyXFxuXFxyXFxuLmN3X19sYWJlbCB7XFxyXFxuICBmb250LXdlaWdodDogdmFyKC0tZncsIDcwMCk7XFxyXFxuICAvKiBjb2xvcjogZ3JlZW47ICovXFxyXFxufVxcclxcblxcclxcbi5jd19fY29sb3ItaW5wdXQge1xcclxcbiAgaGVpZ2h0OiAyLjVyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmN3X19wYWxldHRlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBjYWxjKGNhbGModmFyKC0taGVpZ2h0KSAvIDgpIC0gMXJlbSk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmN3X19jb2xvci1jb2RlcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGhlaWdodDogMWVtO1xcclxcbiAgLyogZm9udC1zaXplOiAwLjhlbTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmN3X19jb2xvci1jb2RlcyA+IGRpdiB7XFxyXFxuICBmb250LXNpemU6IDAuODc1ZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3Qge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEycmVtO1xcclxcbiAgaGVpZ2h0OiAyLjVyZW07XFxyXFxuICBmb250LWZhbWlseTogU2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdC1jdXN0b20sXFxyXFxuLnNlbGVjdC1uYXRpdmUge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgLyogcGFkZGluZy1sZWZ0OiAwLjZyZW07ICovXFxyXFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3QtY3VzdG9tIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3QtbmF0aXZlIHtcXHJcXG4gIC8qIGJhY2tncm91bmQ6IHJlZDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdC1jdXN0b21fX2Rpc3BsYXkge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDAuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdC1jdXN0b21fX29wdGlvbnMge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgdG9wOiAzcmVtO1xcclxcbiAgd2lkdGg6IDEycmVtO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcXHJcXG4gIC5zZWxlY3QtY3VzdG9tIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VsZWN0LW5hdGl2ZTpmb2N1cyArIC5zZWxlY3QtY3VzdG9tIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdC1uYXRpdmU6Zm9jdXMsXFxyXFxuLnNlbGVjdC1jdXN0b20uaXNBY3RpdmUgLnNlbGVjdC1jdXN0b20tdHJpZ2dlciB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm94LXNoYWRvdzpcXHJcXG4gICAgd2hpdGUgMCAwIDAgMC4ycmVtLFxcclxcbiAgICAjMDAwIDAgMCAwIDAuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdC1jdXN0b20uaXNBY3RpdmUgLnNlbGVjdC1jdXN0b21fX29wdGlvbnMge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3QtY3VzdG9tX19vcHRpb24ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDIuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uc2VsZWN0LWN1c3RvbV9fb3B0aW9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGRpdiBjbGFzcz1cXFwiY3dfX2NvbnRhaW5lclxcXCI+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJ0b3AtdGhpcmRzXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwic2VsZWN0XFxcIj5cXHJcXG4gICAgICA8c2VsZWN0IG5hbWU9XFxcIlxcXCIgY2xhc3M9XFxcInNlbGVjdC1uYXRpdmVcXFwiIGlkPVxcXCJjdy1zZWxlY3QtaGFybW9ueVxcXCI+XFxyXFxuICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJcXFwiIGRpc2FibGVkPVxcXCJ0cnVlXFxcIj5TZWxlY3QgSGFybW9ueTwvb3B0aW9uPlxcclxcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiY29tcGxlbWVudGFyeVxcXCI+Q29tcGxlbWVudGFyeTwvb3B0aW9uPlxcclxcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwidGV0cmFkaWNcXFwiPlRldHJhZGljPC9vcHRpb24+XFxyXFxuICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJhbmFsb2dvdXNcXFwiPkFuYWxvZ291czwvb3B0aW9uPlxcclxcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwidHJpYWRpY1xcXCI+VHJpYWRpYzwvb3B0aW9uPlxcclxcbiAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNlbGVjdC1jdXN0b21cXFwiIGlkPVxcXCJjdy1zZWxlY3QtY3VzdG9tXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZWxlY3QtY3VzdG9tX19kaXNwbGF5XFxcIj5TZWxlY3QgaGFybW9ueSAuLjwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VsZWN0LWN1c3RvbV9fb3B0aW9uc1xcXCI+XFxyXFxuICAgICAgICAgIDxkaXYgdmFsdWU9XFxcImNvbXBsZW1lbnRhcnlcXFwiIGNsYXNzPVxcXCJzZWxlY3QtY3VzdG9tX19vcHRpb25cXFwiPkNvbXBsZW1lbnRhcnk8L2Rpdj5cXHJcXG4gICAgICAgICAgPGRpdiB2YWx1ZT1cXFwidGV0cmFkaWNcXFwiIGNsYXNzPVxcXCJzZWxlY3QtY3VzdG9tX19vcHRpb25cXFwiPlRldHJhZGljPC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXYgdmFsdWU9XFxcImFuYWxvZ291c1xcXCIgY2xhc3M9XFxcInNlbGVjdC1jdXN0b21fX29wdGlvblxcXCI+QW5hbG9nb3VzPC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXYgdmFsdWU9XFxcInRyaWFkaWNcXFwiIGNsYXNzPVxcXCJzZWxlY3QtY3VzdG9tX19vcHRpb25cXFwiPlRyaWFkaWM8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGNhbnZhcyBjbGFzcz1cXFwiY3dfX3doZWVsXFxcIiBpZD1cXFwiY3ctY29sb3Itd2hlZWxcXFwiPjwvY2FudmFzPlxcclxcbiAgPC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJib3R0b20tdGhpcmRcXFwiPlxcclxcbiAgICA8IS0tIDxkaXYgY2xhc3M9XFxcImN3X19maWVsZFxcXCI+XFxyXFxuICAgICAgPGxhYmVsIGZvcj1cXFwiY3ctY29sb3ItaW5wdXRcXFwiIGNsYXNzPVxcXCJjd19fbGFiZWxcXFwiPlBpY2sgYSBjb2xvdXI8L2xhYmVsPlxcclxcbiAgICAgIDxpbnB1dCBjbGFzcz1cXFwiY3dfX2NvbG9yLWlucHV0XFxcIiBpZD1cXFwiY3ctY29sb3ItaW5wdXRcXFwiIHR5cGU9XFxcInRleHRcXFwiIC8+XFxyXFxuICAgIDwvZGl2PiAtLT5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibTEgY3dfX3BhbGV0dGVcXFwiIGlkPVxcXCJjdy1wYWxldHRlXFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY3dfX2NvbG9yLWNvZGVzXFxcIiBpZD1cXFwiY3ctY29sb3ItY29kZXNcXFwiPjwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsImltcG9ydCBzdGF0ZSBmcm9tICcuLi9zdGF0ZS5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChoYXJtb255KSA9PiB7XHJcbiAgaWYgKGhhcm1vbnkgPT09ICdjb21wbGVtZW50YXJ5Jykge1xyXG4gICAgc3RhdGUud3JpdGUoJ2hhcm1vbnknLCAnY29tcGxlbWVudGFyeScpXHJcbiAgfVxyXG4gIGlmIChoYXJtb255ID09PSAndHJpYWRpYycpIHtcclxuICAgIHN0YXRlLndyaXRlKCdoYXJtb255JywgJ3RyaWFkaWMnKVxyXG4gIH1cclxuICBpZiAoaGFybW9ueSA9PT0gJ2FuYWxvZ291cycpIHtcclxuICAgIHN0YXRlLndyaXRlKCdoYXJtb255JywgJ2FuYWxvZ291cycpXHJcbiAgfVxyXG4gIGlmIChoYXJtb255ID09PSAndGV0cmFkaWMnKSB7XHJcbiAgICBzdGF0ZS53cml0ZSgnaGFybW9ueScsICd0ZXRyYWRpYycpXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBzdGF0ZSBmcm9tICcuLi9zdGF0ZS5qcydcclxuaW1wb3J0IHsgY2FsY0NpcmNsZUJvdW5kcyB9IGZyb20gJy4uL3V0aWwvbWF0aFV0aWwuanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoeyBvZmZzZXRYLCBvZmZzZXRZIH0pID0+IHtcclxuICBjb25zdCByYWRpdXMgPSBzdGF0ZS5yZWFkKCdyYWRpdXMnKVxyXG4gIGlmICghY2FsY0NpcmNsZUJvdW5kcyhvZmZzZXRYIC0gcmFkaXVzLCBvZmZzZXRZIC0gcmFkaXVzLCByYWRpdXMpKSB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgaWYgKCFzdGF0ZS5yZWFkKCdpc01vdXNlRG93bicpKSB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIHN0YXRlLndyaXRlKCdtb3VzZVgnLCBvZmZzZXRYKVxyXG4gIHN0YXRlLndyaXRlKCdtb3VzZVknLCBvZmZzZXRZKVxyXG59XHJcbiIsImltcG9ydCB7IGNhbGNDaXJjbGVCb3VuZHMgfSBmcm9tICcuLi91dGlsL21hdGhVdGlsLmpzJ1xyXG5pbXBvcnQgeyBjYXJ0ZXNpYW4yUG9sYXIgfSBmcm9tICcuLi91dGlsL21hdGhVdGlsLmpzJ1xyXG5pbXBvcnQgbWFwQ29vcmRzIGZyb20gJy4uL21vZGVscy9tYXBDb29yZHMuanMnXHJcbmltcG9ydCBkcmF3VGFyZ2V0cyBmcm9tICcuLi9tb2RlbHMvZHJhd1RhcmdldHMuanMnXHJcbmltcG9ydCBzdGF0ZSBmcm9tICcuLi9zdGF0ZS5qcydcclxuaW1wb3J0IHJlc2V0V2hlZWwgZnJvbSAnLi4vbW9kZWxzL3Jlc2V0V2hlZWwuanMnXHJcbmltcG9ydCBjb2xvdXJQaWNrZXIgZnJvbSAnLi4vbW9kZWxzL2NvbG91clBpY2tlci5qcydcclxuaW1wb3J0IGdlbmVyYXRlUGFsZXR0ZSBmcm9tICcuLi9tb2RlbHMvZ2VuZXJhdGVQYWxldHRlLmpzJ1xyXG5pbXBvcnQgcG9wdWxhdGVDb2xvckNvZGVzIGZyb20gJy4uL3ZpZXdzL3BvcHVsYXRlQ29sb3JDb2RlLmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGZvcmNlID0gZmFsc2UpID0+IHtcclxuICAvLyBXaGVyZSBvbiB0aGUgY2FudmFzIHVzZXIgY2xpY2tlZFxyXG4gIC8vIElzIGNsaWNrIHdpdGhpbiBib3VuZHMgb2Ygd2hlZWw/XHJcbiAgLy8gVXBkYXRlIFN0YXRlXHJcbiAgLy8gZ2V0IHBvc2l0aW9uIG9mIG1haW4gdGFyZ2V0XHJcbiAgLy8gZ2V0IHBvc2l0aW9uIG9mIHNlY29uZGFyeSB0YXJnZXQvc1xyXG4gIC8vIGNhbGwgdXBkYXRlIGNhbnZhcyB3aXRoIG5ldyBkYXRhXHJcblxyXG4gIGNvbnN0IGJ1ZmZlciA9IDFcclxuICBjb25zdCB4ID0gc3RhdGUucmVhZCgnbW91c2VYJylcclxuICBjb25zdCB5ID0gc3RhdGUucmVhZCgnbW91c2VZJylcclxuXHJcbiAgY29uc3QgcmFkaXVzID0gc3RhdGUucmVhZCgncmFkaXVzJylcclxuICBpZiAoIWNhbGNDaXJjbGVCb3VuZHMoeCAtIHJhZGl1cywgeSAtIHJhZGl1cywgcmFkaXVzIC0gYnVmZmVyKSkge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIGlmICghc3RhdGUucmVhZCgnaXNNb3VzZURvd24nKSAmJiAhZm9yY2UpIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgLy8gRGVsZXRlcyBjdXJyZW50IHBhaW50ZWQgdGFyZ2V0c1xyXG4gIGNvbnN0IGN0eCA9IHN0YXRlLnJlYWQoJ2N0eCcpXHJcbiAgY29uc3Qgd2hlZWxJbWFnZSA9IHN0YXRlLnJlYWQoJ3doZWVsSW1hZ2UnKVxyXG5cclxuICByZXNldFdoZWVsKGN0eCwgd2hlZWxJbWFnZSlcclxuXHJcbiAgc3RhdGUud3JpdGUoJ21vdXNlWCcsIHgpXHJcbiAgc3RhdGUud3JpdGUoJ21vdXNlWScsIHkpXHJcblxyXG4gIC8vICAgciBhbmQgdGhldGEgYXJlIHBvbGFyIGNvb3JkaW5hdGVzIHVzZWQgaW4gdW5pdCBjaXJjbGUgY2FsY3VsYXRpb25zXHJcbiAgY29uc3QgeyByLCB0aGV0YSB9ID0gY2FydGVzaWFuMlBvbGFyKHgsIHkpXHJcblxyXG4gIC8vIFN0b3JlIG5ldyBwYXRocyBhcnJheSBpbiBzdGF0ZVxyXG4gIGNvbnN0IG5ld1RhcmdldHMgPSBtYXBDb29yZHMociwgdGhldGEsIHN0YXRlLnJlYWQoJ3JhZGl1cycpLCBzdGF0ZS5yZWFkKCdoYXJtb255JykpXHJcbiAgc3RhdGUud3JpdGUoJ3RhcmdldHMnLCBuZXdUYXJnZXRzKVxyXG5cclxuICBjb25zdCBjb2xvcnMgPSBjb2xvdXJQaWNrZXIoY3R4LCBuZXdUYXJnZXRzKVxyXG5cclxuICBzdGF0ZS53cml0ZSgnY29sb3JzJywgY29sb3JzKVxyXG5cclxuICAvLyAgIFBhaW50cyBuZXcgdGFyZ2V0cyBvbiBjYW52YXNcclxuICBkcmF3VGFyZ2V0cyhzdGF0ZS5yZWFkKCdjdHgnKSwgc3RhdGUucmVhZCgndGFyZ2V0cycpKVxyXG5cclxuICAvLyBQb3B1bGF0ZSBjb2xvciBjb2Rlc1xyXG4gIHBvcHVsYXRlQ29sb3JDb2RlcygpXHJcblxyXG4gIC8vIFBhaW50cyBjb2xvcnMgb24gcGFsZXR0ZVxyXG4gIGNvbnN0IHBhbGV0dGUgPSBzdGF0ZS5yZWFkKCdyb290JykuZ2V0RWxlbWVudEJ5SWQoJ2N3LXBhbGV0dGUnKVxyXG4gIGNvbnN0IHBhbGxldHRlQ29sb3JzID0gZ2VuZXJhdGVQYWxldHRlKGNvbG9ycylcclxuICBwYWxldHRlLnN0eWxlLmJhY2tncm91bmQgPSBwYWxsZXR0ZUNvbG9yc1xyXG4gIHBhbGV0dGUuc2V0QXR0cmlidXRlKCdjb2xvcnMnLCBjb2xvcnMpXHJcbn1cclxuIiwiaW1wb3J0IHVwZGF0ZVRhcmdldHMgZnJvbSAnLi9jb250cm9sbGVycy91cGRhdGVUYXJnZXRzLmpzJ1xyXG5pbXBvcnQgZ2VuZXJhdGVXaGVlbEltYWdlIGZyb20gJy4vbW9kZWxzL2dlbmVyYXRlV2hlZWxJbWFnZS5qcydcclxuaW1wb3J0IHN0YXRlIGZyb20gJy4vc3RhdGUuanMnXHJcbmltcG9ydCB7IGNyZWF0ZUNvb3JkQ29udmVyc2lvbk1hcHMgfSBmcm9tICcuL3V0aWwvbWF0aFV0aWwuanMnXHJcbmltcG9ydCByZWdpc3RlckFsbEVsZW1lbnRzIGZyb20gJy4vdmlld3MvcmVnaXN0ZXJBbGxFbGVtZW50cy5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChyb290KSA9PiB7XHJcbiAgLy8gU2V0cyB0aGUgYXBwcyByb290IGlmIGdpdmVuLiBVc2VmdWwgZm9yIGVuY2Fwc3VsYXRpbmcgY29tcG9uZW50IHRvIHNoYWRvd0RvbVxyXG4gIGlmIChyb290KSB7XHJcbiAgICBzdGF0ZS53cml0ZSgncm9vdCcsIHJvb3QpXHJcbiAgfSBlbHNlIHtcclxuICAgIHN0YXRlLndyaXRlKCdyb290JywgZG9jdW1lbnQpXHJcbiAgfVxyXG5cclxuICBjb25zdCBjYW52YXMgPSBzdGF0ZS5yZWFkKCdyb290JykuZ2V0RWxlbWVudEJ5SWQoJ2N3LWNvbG9yLXdoZWVsJylcclxuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxyXG4gIHN0YXRlLndyaXRlKCdjYW52YXMnLCBjYW52YXMpXHJcbiAgc3RhdGUud3JpdGUoJ2N0eCcsIGN0eClcclxuXHJcbiAgY29uc3Qgc2l6ZSA9IE1hdGgubWF4KGNhbnZhcy5vZmZzZXRXaWR0aCwgY2FudmFzLm9mZnNldEhlaWdodClcclxuICBpZiAoY2FudmFzLndpZHRoICE9PSBjYW52YXMuaGVpZ2h0KSB7XHJcbiAgICBjYW52YXMud2lkdGggPSBzaXplXHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gc2l6ZVxyXG4gICAgY29uc29sZS5sb2coY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxyXG4gIH1cclxuICBjb25zdCByYWRpdXMgPSBzaXplIC8gMlxyXG4gIHN0YXRlLndyaXRlKCdyYWRpdXMnLCByYWRpdXMpXHJcblxyXG4gIC8vIFNldCBkZWZhdWx0IHggYW5kIHkgcG9zaXRpb25zXHJcbiAgc3RhdGUud3JpdGUoJ21vdXNlWCcsIHJhZGl1cylcclxuICBzdGF0ZS53cml0ZSgnbW91c2VZJywgcmFkaXVzIC0gY2FudmFzLndpZHRoIC8gNSlcclxuXHJcbiAgLy8gSW5pdCBjb252ZXJzaW9uIG1hcCBpbnNpZGUgbWF0aFV0aWwuanNcclxuICBjcmVhdGVDb29yZENvbnZlcnNpb25NYXBzKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCwgc2l6ZSAvIDIpXHJcblxyXG4gIGNvbnN0IHdoZWVsSW1hZ2UgPSBnZW5lcmF0ZVdoZWVsSW1hZ2UoY2FudmFzLCBjdHgpXHJcbiAgc3RhdGUud3JpdGUoJ3doZWVsSW1hZ2UnLCB3aGVlbEltYWdlKVxyXG4gIGN0eC5wdXRJbWFnZURhdGEod2hlZWxJbWFnZSwgMCwgMClcclxuXHJcbiAgcmVnaXN0ZXJBbGxFbGVtZW50cygpXHJcblxyXG4gIHVwZGF0ZVRhcmdldHModHJ1ZSlcclxuXHJcbiAgcmV0dXJuIHN0YXRlXHJcbn1cclxuIiwiLy8gSU5DT01QTEVURSBNT0RVTEUgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5jb25zdCBjb2xvdXJQaWNrZXIgPSAoY3R4LCB0YXJnZXRzKSA9PiB7XHJcbiAgY29uc3QgY29sb3VycyA9IFtdXHJcbiAgdGFyZ2V0cy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICBjb25zdCBwaXhlbERhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKGUueCwgZS55LCAxLCAxKS5kYXRhXHJcbiAgICBjb2xvdXJzLnB1c2goYHJnYmEoJHtwaXhlbERhdGFbMF19LCAke3BpeGVsRGF0YVsxXX0sICR7cGl4ZWxEYXRhWzJdfSwgJHtwaXhlbERhdGFbM10gLyAyNTV9KWApXHJcbiAgfSlcclxuICByZXR1cm4gY29sb3Vyc1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb2xvdXJQaWNrZXJcclxuIiwiaW1wb3J0IGNhbGxDYW52YXNFdmVudEZ1bmN0aW9ucyBmcm9tICcuLi92aWV3cy9jYWxsQ2FudmFzRXZlbnRGdW5jdGlvbnMuanMnXHJcbmltcG9ydCBjYWxsQnV0dG9uRXZlbnRGdW5jdGlvbnMgZnJvbSAnLi4vdmlld3MvY2FsbEJ1dHRvbkV2ZW50RnVuY3Rpb25zLmpzJ1xyXG5pbXBvcnQgY2FsbFNlbGVjdEV2ZW50RnVuY3Rpb25zIGZyb20gJy4uL3ZpZXdzL2NhbGxTZWxlY3RFdmVudEZ1bmN0aW9ucy5qcydcclxuXHJcbmNvbnN0IGNyZWF0ZUV2ZW50ID0gKHRoZUV2ZW50LCBjYiwgZWxlbWVudCkgPT4ge1xyXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGVFdmVudCwgY2IpXHJcbiAgLy8gQXNzaWducyB0aGUgY2Igd2l0aG91dCByZW1vdmluZyBhbnkgZXhpc3RpbmcgbWV0aG9kc1xyXG4gIHJldHVybiB7IHRoZUV2ZW50LCBjYiB9XHJcbn1cclxuXHJcbi8vIFJldHVybnMgY2IgZnVuY3Rpb24gdXNlZCBpbiBldmVudCBsaXN0ZW5lcnNcclxuLy8gd2hpbGUga2VlcGluZyBpZCBpbiBtZW1vcnkgd2l0aCBjbG9zdXJlXHJcbmNvbnN0IGNyZWF0ZUNCZnVuY3Rpb24gPSAoZWxlbWVudCkgPT4ge1xyXG4gIGNvbnN0IHRhZyA9IGVsZW1lbnQudGFnTmFtZVxyXG5cclxuICByZXR1cm4gKGUpID0+IHtcclxuICAgIGlmICh0YWcgPT09ICdDQU5WQVMnKSB7XHJcbiAgICAgIGNhbGxDYW52YXNFdmVudEZ1bmN0aW9ucyhlKVxyXG4gICAgfVxyXG4gICAgaWYgKHRhZyA9PT0gJ0JVVFRPTicpIHtcclxuICAgICAgY2FsbEJ1dHRvbkV2ZW50RnVuY3Rpb25zKGUpXHJcbiAgICB9XHJcbiAgICBpZiAodGFnID09PSAnU0VMRUNUJykge1xyXG4gICAgICBjYWxsU2VsZWN0RXZlbnRGdW5jdGlvbnMoZSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZUV2ZW50cyA9IChlbGVtZW50LCBuZXdFdmVudCkgPT4ge1xyXG4gIGNvbnN0IGNiID0gY3JlYXRlQ0JmdW5jdGlvbihlbGVtZW50KVxyXG4gIHJldHVybiBjcmVhdGVFdmVudChuZXdFdmVudCwgY2IsIGVsZW1lbnQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUV2ZW50c1xyXG4iLCJjb25zdCBjcmVhdGVTbWFsbENpcmNsZSA9ICh7IHgsIHkgfSwgcmFkaXVzKSA9PiB7XHJcbiAgY29uc3QgcGF0aCA9IG5ldyBQYXRoMkQoKVxyXG4gIHBhdGguYXJjKHgsIHksIHJhZGl1cywgMCwgMiAqIE1hdGguUEkpXHJcbiAgcmV0dXJuIHBhdGhcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU21hbGxDaXJjbGVcclxuIiwiaW1wb3J0IGNyZWF0ZVNtYWxsQ2lyY2xlIGZyb20gJy4vY3JlYXRlU21hbGxDaXJjbGUuanMnXHJcblxyXG5jb25zdCBkcmF3VGFyZ2V0cyA9IChjdHgsIGNvb3JkcykgPT4ge1xyXG4gIGNvb3Jkcy5mb3JFYWNoKChlLCBpKSA9PiB7XHJcbiAgICBsZXQgcGF0aFxyXG4gICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgcGF0aCA9IGNyZWF0ZVNtYWxsQ2lyY2xlKGUsIDE1KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGF0aCA9IGNyZWF0ZVNtYWxsQ2lyY2xlKGUsIDEwKVxyXG4gICAgfVxyXG4gICAgY3R4LnN0cm9rZShwYXRoKVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRyYXdUYXJnZXRzXHJcbiIsImNvbnN0IGdlbmVyYXRlUGFsZXR0ZSA9IChjb2xvdXJzKSA9PiB7XHJcbiAgY29uc3QgbnVtQ29sb3JzID0gY29sb3Vycy5sZW5ndGhcclxuICBjb25zdCBwYXRjaFNpemUgPSAxMDAgLyBudW1Db2xvcnNcclxuICBsZXQgbGluZWFyR3JhZGllbnQgPSBgbGluZWFyLWdyYWRpZW50KDkwZGVnLGBcclxuICBjb2xvdXJzLmZvckVhY2goKGNvbCwgaSkgPT4ge1xyXG4gICAgbGluZWFyR3JhZGllbnQgKz0gYCR7Y29sfSAke01hdGguZmxvb3IocGF0Y2hTaXplICogaSl9JSwgJHtjb2x9ICR7TWF0aC5mbG9vcihcclxuICAgICAgcGF0Y2hTaXplICogKGkgKyAxKVxyXG4gICAgKX0lYFxyXG4gICAgaWYgKGkgPCBudW1Db2xvcnMgLSAxKSB7XHJcbiAgICAgIGxpbmVhckdyYWRpZW50ICs9IGAsYFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGluZWFyR3JhZGllbnQgKz0gYClgXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIGxpbmVhckdyYWRpZW50XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlUGFsZXR0ZVxyXG4iLCJpbXBvcnQgY29udmVydEhTVjJSR0IgZnJvbSAnLi4vdXRpbC9jb252ZXJ0SFNWMlJHQi5qcydcclxuaW1wb3J0IHsgY2FsY0FuZ2xlRGVncmVlcywgY2FsY0NpcmNsZUJvdW5kcywgY2FsY0h5cG90ZW51c2UgfSBmcm9tICcuLi91dGlsL21hdGhVdGlsLmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGNhbnZhcywgY3R4KSA9PiB7XHJcbiAgaWYgKGNhbnZhcy53aWR0aCAhPT0gY2FudmFzLmhlaWdodCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW52YXMgd2lkdGggaXMgbm90IGVxdWFsIHRvIGNhbnZhcyBoZWlnaHQnKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmFkaXVzID0gY2FudmFzLndpZHRoIC8gMlxyXG4gIGNvbnN0IGltYWdlID0gY3R4LmNyZWF0ZUltYWdlRGF0YSgyICogcmFkaXVzLCAyICogcmFkaXVzKVxyXG5cclxuICAvLyBUcmF2ZXJzZXMgZWFjaCBwaXhlbCBvbmUgbGluZSBhdCBhIHRpbWUgbGVmdCB0byByaWdodFxyXG4gIGZvciAobGV0IHggPSAtcmFkaXVzOyB4IDwgcmFkaXVzOyB4ICs9IDEpIHtcclxuICAgIGZvciAobGV0IHkgPSAtcmFkaXVzOyB5IDwgcmFkaXVzOyB5ICs9IDEpIHtcclxuICAgICAgaWYgKCFjYWxjQ2lyY2xlQm91bmRzKHgsIHksIHJhZGl1cykpIHtcclxuICAgICAgICBjb250aW51ZVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBHZXQncyB0aGUgY3VycmVudCBsaW5lIGFuZCBwb3NpdGlvbiBvbiBpdFxyXG4gICAgICAvLyBNdWx0aXBsaWVzIGJ5IDQgYmVjYXVzZSBldmVyeSBwaXhlbCBpcyByZXByZXNlbnRlZCBieSA0IGNvbG91ciBjaGFubmVsc1xyXG4gICAgICBjb25zdCBpbmRleCA9IChyYWRpdXMgKiAyICogKHggKyByYWRpdXMpICsgKHkgKyByYWRpdXMpKSAqIDRcclxuICAgICAgLy8gSHVlIGlzIGRlZ3JlZXMgYXJvdW5kIGNpcmNsZVxyXG4gICAgICBjb25zdCBodWUgPSBNYXRoLmZsb29yKGNhbGNBbmdsZURlZ3JlZXMoeCwgeSkpXHJcbiAgICAgIGNvbnN0IHIgPSBjYWxjSHlwb3RlbnVzZSh4LCB5KVxyXG4gICAgICAvLyBTYXR1cmF0aW9uIGlzIGhpZ2hlc3Qgd2hlbiByIGlzIGNsb3Nlc3QgdG8gcmFkaXVzXHJcbiAgICAgIGNvbnN0IHNhdHVyYXRpb24gPSByIC8gcmFkaXVzXHJcblxyXG4gICAgICBsZXQgW3JlZCwgZ3JlZW4sIGJsdWVdID0gY29udmVydEhTVjJSR0IoaHVlLCBzYXR1cmF0aW9uLCAxKVxyXG4gICAgICBsZXQgYWxwaGEgPSAyNTVcclxuICAgICAgaW1hZ2UuZGF0YVtpbmRleCArIDBdID0gcmVkXHJcbiAgICAgIGltYWdlLmRhdGFbaW5kZXggKyAxXSA9IGdyZWVuXHJcbiAgICAgIGltYWdlLmRhdGFbaW5kZXggKyAyXSA9IGJsdWVcclxuICAgICAgaW1hZ2UuZGF0YVtpbmRleCArIDNdID0gYWxwaGFcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGltYWdlXHJcbn1cclxuIiwiaW1wb3J0IHsgcG9sYXIyQ2FydGVzaWFuLCB1bmNlbnRlckNhcnRlc2lhbkNvb3JkcyB9IGZyb20gJy4uL3V0aWwvbWF0aFV0aWwuanMnXHJcblxyXG5jb25zdCBnZXRUcmlhZENvb3JkcyA9IChyLCB0aGV0YSwgcmFkaXVzKSA9PiB7XHJcbiAgY29uc3QgdHJpYWQxUG9sYXJUaGV0YSA9ICh0aGV0YSArIE1hdGguUEkgKiAwLjY2NikgJSAoMiAqIE1hdGguUEkpXHJcbiAgY29uc3QgdHJpYWQyUG9sYXJUaGV0YSA9ICh0aGV0YSArIE1hdGguUEkgKiAxLjMzMykgJSAoMiAqIE1hdGguUEkpXHJcbiAgY29uc3QgdHJpYWQxQ29vcmRzID0gdW5jZW50ZXJDYXJ0ZXNpYW5Db29yZHMocG9sYXIyQ2FydGVzaWFuKHIsIHRyaWFkMVBvbGFyVGhldGEpLCByYWRpdXMpXHJcbiAgY29uc3QgdHJpYWQyQ29vcmRzID0gdW5jZW50ZXJDYXJ0ZXNpYW5Db29yZHMocG9sYXIyQ2FydGVzaWFuKHIsIHRyaWFkMlBvbGFyVGhldGEpLCByYWRpdXMpXHJcbiAgcmV0dXJuIFt0cmlhZDFDb29yZHMsIHRyaWFkMkNvb3Jkc11cclxufVxyXG5cclxuY29uc3QgZ2V0Q29tcGxlbWVudGFyeUNvb3JkcyA9IChyLCB0aGV0YSwgcmFkaXVzKSA9PiB7XHJcbiAgY29uc3QgY29tcGxlbWVudGFyeVBvbGFyVGhldGEgPSAodGhldGEgKyBNYXRoLlBJKSAlICgyICogTWF0aC5QSSlcclxuICBjb25zdCBjb21wbGVtZW50YXJ5Q29vcmRzID0gdW5jZW50ZXJDYXJ0ZXNpYW5Db29yZHMoXHJcbiAgICBwb2xhcjJDYXJ0ZXNpYW4ociwgY29tcGxlbWVudGFyeVBvbGFyVGhldGEpLFxyXG4gICAgcmFkaXVzXHJcbiAgKVxyXG5cclxuICByZXR1cm4gW2NvbXBsZW1lbnRhcnlDb29yZHNdXHJcbn1cclxuY29uc3QgZ2V0QW5hbG9nb3VzQ29vcmRzID0gKHIsIHRoZXRhLCByYWRpdXMpID0+IHtcclxuICBjb25zdCBhbmFsb2dvdXMxUG9sYXJUaGV0YSA9ICh0aGV0YSArIE1hdGguUEkgLyA2KSAlICgyICogTWF0aC5QSSlcclxuICBjb25zdCBhbmFsb2dvdXMyUG9sYXJUaGV0YSA9ICh0aGV0YSArIE1hdGguUEkgLyAtNikgJSAoMiAqIE1hdGguUEkpXHJcbiAgY29uc3QgYW5hbG9nb3VzMUNvb3JkcyA9IHVuY2VudGVyQ2FydGVzaWFuQ29vcmRzKHBvbGFyMkNhcnRlc2lhbihyLCBhbmFsb2dvdXMxUG9sYXJUaGV0YSksIHJhZGl1cylcclxuICBjb25zdCBhbmFsb2dvdXMyQ29vcmRzID0gdW5jZW50ZXJDYXJ0ZXNpYW5Db29yZHMocG9sYXIyQ2FydGVzaWFuKHIsIGFuYWxvZ291czJQb2xhclRoZXRhKSwgcmFkaXVzKVxyXG5cclxuICByZXR1cm4gW2FuYWxvZ291czFDb29yZHMsIGFuYWxvZ291czJDb29yZHNdXHJcbn1cclxuY29uc3QgZ2V0VGV0cmFkaWNDb29yZHMgPSAociwgdGhldGEsIHJhZGl1cykgPT4ge1xyXG4gIGNvbnN0IHRldHJhZGljMVBvbGFyVGhldGEgPSAodGhldGEgKyBNYXRoLlBJIC8gMikgJSAoMiAqIE1hdGguUEkpXHJcbiAgY29uc3QgdGV0cmFkaWMyUG9sYXJUaGV0YSA9ICh0aGV0YSArIE1hdGguUEkpICUgKDIgKiBNYXRoLlBJKVxyXG4gIGNvbnN0IHRldHJhZGljM1BvbGFyVGhldGEgPSAodGhldGEgLSBNYXRoLlBJIC8gMikgJSAoMiAqIE1hdGguUEkpXHJcbiAgY29uc3QgdGV0cmFkaWMxQ29vcmRzID0gdW5jZW50ZXJDYXJ0ZXNpYW5Db29yZHMocG9sYXIyQ2FydGVzaWFuKHIsIHRldHJhZGljMVBvbGFyVGhldGEpLCByYWRpdXMpXHJcbiAgY29uc3QgdGV0cmFkaWMyQ29vcmRzID0gdW5jZW50ZXJDYXJ0ZXNpYW5Db29yZHMocG9sYXIyQ2FydGVzaWFuKHIsIHRldHJhZGljMlBvbGFyVGhldGEpLCByYWRpdXMpXHJcbiAgY29uc3QgdGV0cmFkaWMzQ29vcmRzID0gdW5jZW50ZXJDYXJ0ZXNpYW5Db29yZHMocG9sYXIyQ2FydGVzaWFuKHIsIHRldHJhZGljM1BvbGFyVGhldGEpLCByYWRpdXMpXHJcblxyXG4gIHJldHVybiBbdGV0cmFkaWMxQ29vcmRzLCB0ZXRyYWRpYzJDb29yZHMsIHRldHJhZGljM0Nvb3Jkc11cclxufVxyXG5cclxuY29uc3QgbWFwQ29vcmRzID0gKHIsIHRoZXRhLCByYWRpdXMsIHR5cGUgPSAnY29tcGxlbWVudGFyeScpID0+IHtcclxuICAvLyBJbmRleCAwIGlzIG1haW4gdGFyZ2V0XHJcbiAgY29uc3QgY29vcmRzID0gW11cclxuICBjb25zdCBtYWluVGFyZ2V0ID0gdW5jZW50ZXJDYXJ0ZXNpYW5Db29yZHMocG9sYXIyQ2FydGVzaWFuKHIsIHRoZXRhKSwgcmFkaXVzKVxyXG4gIGNvb3Jkcy5wdXNoKG1haW5UYXJnZXQpXHJcbiAgaWYgKHR5cGUgPT09ICd0cmlhZGljJykgY29vcmRzLnB1c2goLi4uZ2V0VHJpYWRDb29yZHMociwgdGhldGEsIHJhZGl1cykpXHJcbiAgaWYgKHR5cGUgPT09ICdjb21wbGVtZW50YXJ5JykgY29vcmRzLnB1c2goLi4uZ2V0Q29tcGxlbWVudGFyeUNvb3JkcyhyLCB0aGV0YSwgcmFkaXVzKSlcclxuICBpZiAodHlwZSA9PT0gJ2FuYWxvZ291cycpIGNvb3Jkcy5wdXNoKC4uLmdldEFuYWxvZ291c0Nvb3JkcyhyLCB0aGV0YSwgcmFkaXVzKSlcclxuICBpZiAodHlwZSA9PT0gJ3RldHJhZGljJykgY29vcmRzLnB1c2goLi4uZ2V0VGV0cmFkaWNDb29yZHMociwgdGhldGEsIHJhZGl1cykpXHJcblxyXG4gIHJldHVybiBjb29yZHNcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFwQ29vcmRzXHJcbiIsImNvbnN0IHJlc2V0V2hlZWwgPSAoY3R4LCB3aGVlbEltYWdlKSA9PiB7XHJcbiAgY3R4LnB1dEltYWdlRGF0YSh3aGVlbEltYWdlLCAwLCAwKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXNldFdoZWVsXHJcbiIsImNvbnN0IHN0YXRlID0ge1xyXG4gIHJvb3Q6IG51bGwsXHJcbiAgY2FudmFzOiBudWxsLFxyXG4gIGN0eDogbnVsbCxcclxuICBjb2xvcnM6IFtdLFxyXG4gIGV2ZW50TGlzdGVuZXJzOiB7fSxcclxuICB3aGVlbEltYWdlOiBudWxsLFxyXG4gIHRhcmdldHM6IFtdLFxyXG4gIG1vdXNlWDogbnVsbCxcclxuICBtb3VzZVk6IG51bGwsXHJcbiAgcmFkaXVzOiBudWxsLFxyXG4gIGlzTW91c2VEb3duOiBudWxsLFxyXG4gIGhhcm1vbnk6ICd0cmlhZGljJyxcclxuICBlbGVtZW50czogW1xyXG4gICAge1xyXG4gICAgICBpZDogJ2N3LWNvbG9yLXdoZWVsJyxcclxuICAgICAgZXZlbnRzOiBbJ21vdXNlbW92ZScsICdtb3VzZWRvd24nLCAnbW91c2V1cCcsICdtb3VzZWxlYXZlJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnY3ctYnRuLWNvbXBsZW1lbnRhcnknLFxyXG4gICAgICBldmVudHM6IFsnY2xpY2snXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICdjdy1idG4tdHJpYWRpYycsXHJcbiAgICAgIGV2ZW50czogWydjbGljayddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ2N3LWJ0bi10ZXRyYWRpYycsXHJcbiAgICAgIGV2ZW50czogWydjbGljayddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ2N3LWJ0bi1hbmFsb2dvdXMnLFxyXG4gICAgICBldmVudHM6IFsnY2xpY2snXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICdjdy1wYWxldHRlJyxcclxuICAgICAgZXZlbnRzOiBbJ2NsaWNrJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnY3ctc2VsZWN0LWhhcm1vbnknLFxyXG4gICAgICBldmVudHM6IFsnY2hhbmdlJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnY3ctY29sb3ItY29kZXMnLFxyXG4gICAgICBldmVudHM6IFsnY2xpY2snXVxyXG4gICAgfVxyXG4gIF1cclxufVxyXG5cclxuY29uc3QgcmVhZCA9IChrZXkpID0+IHtcclxuICBpZiAoa2V5IGluIHN0YXRlKSB7XHJcbiAgICByZXR1cm4gc3RhdGVba2V5XVxyXG4gIH0gZWxzZSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFRyaWVkIHRvIHJlYWQgcHJvcGVydHkgJHtrZXl9LiBJdCBkb2Vzbid0IGV4aXN0YClcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHdyaXRlID0gKGtleSwgdmFsdWUpID0+IHtcclxuICBpZiAoa2V5IGluIHN0YXRlKSB7XHJcbiAgICBzdGF0ZVtrZXldID0gdmFsdWVcclxuICB9IGVsc2Uge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBUcmllZCB0byB3cml0ZSBwcm9wZXJ0eSAke2tleX0uIEl0IGRvZXNuJ3QgZXhpc3RgKVxyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgd3JpdGVFdmVudCA9IChrZXksIHZhbHVlKSA9PiB7XHJcbiAgaWYgKGtleSBpbiBzdGF0ZS5ldmVudHMpIHtcclxuICAgIHN0YXRlLmV2ZW50c1trZXldID0gdmFsdWVcclxuICB9IGVsc2Uge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBUcmllZCB0byB3cml0ZSBwcm9wZXJ0eSAke2tleX0gaW4gJHtzdGF0ZS5ldmVudHN9LiBJdCBkb2Vzbid0IGV4aXN0YClcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlYWRFdmVudCA9IChrZXkpID0+IHtcclxuICBpZiAoa2V5IGluIHN0YXRlLmV2ZW50cykge1xyXG4gICAgLy8gUmV0dXJucyBzaGFsbG93IGNvcHkuIE9wdGluZyBvdXQgb2YgZGVlcCBjb3B5IGZvciBwZXJmb3JtYW5jZVxyXG4gICAgcmV0dXJuIHsgLi4uc3RhdGUuZXZlbnRzW2tleV0gfVxyXG4gIH0gZWxzZSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFRyaWVkIHRvIHJlYWQgcHJvcGVydHkgJHtrZXl9IGluICR7c3RhdGUuZXZlbnRzfS4gSXQgZG9lc24ndCBleGlzdGApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7IHdyaXRlLCByZWFkLCB3cml0ZUV2ZW50LCByZWFkRXZlbnQgfVxyXG4iLCJjb25zdCBjb252ZXJ0SFNWMlJHQiA9IChodWUsIHNhdHVyYXRpb24sIHZhbHVlKSA9PiB7XHJcbiAgICBsZXQgY2hyb21hID0gdmFsdWUgKiBzYXR1cmF0aW9uO1xyXG4gICAgbGV0IGh1ZTEgPSBodWUgLyA2MDtcclxuICAgIGxldCB4ID0gY2hyb21hICogKDEtIE1hdGguYWJzKChodWUxICUgMikgLSAxKSk7XHJcbiAgICBsZXQgcjEsIGcxLCBiMTtcclxuICAgIGlmIChodWUxID49IDAgJiYgaHVlMSA8PSAxKSB7XHJcbiAgICAgIChbcjEsIGcxLCBiMV0gPSBbY2hyb21hLCB4LCAwXSk7XHJcbiAgICB9IGVsc2UgaWYgKGh1ZTEgPj0gMSAmJiBodWUxIDw9IDIpIHtcclxuICAgICAgKFtyMSwgZzEsIGIxXSA9IFt4LCBjaHJvbWEsIDBdKTtcclxuICAgIH0gZWxzZSBpZiAoaHVlMSA+PSAyICYmIGh1ZTEgPD0gMykge1xyXG4gICAgICAoW3IxLCBnMSwgYjFdID0gWzAsIGNocm9tYSwgeF0pO1xyXG4gICAgfSBlbHNlIGlmIChodWUxID49IDMgJiYgaHVlMSA8PSA0KSB7XHJcbiAgICAgIChbcjEsIGcxLCBiMV0gPSBbMCwgeCwgY2hyb21hXSk7XHJcbiAgICB9IGVsc2UgaWYgKGh1ZTEgPj0gNCAmJiBodWUxIDw9IDUpIHtcclxuICAgICAgKFtyMSwgZzEsIGIxXSA9IFt4LCAwLCBjaHJvbWFdKTtcclxuICAgIH0gZWxzZSBpZiAoaHVlMSA+PSA1ICYmIGh1ZTEgPD0gNikge1xyXG4gICAgICAoW3IxLCBnMSwgYjFdID0gW2Nocm9tYSwgMCwgeF0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsZXQgbSA9IHZhbHVlIC0gY2hyb21hO1xyXG4gICAgbGV0IFtyLGcsYl0gPSBbcjErbSwgZzErbSwgYjErbV07XHJcbiAgICBcclxuIFxyXG4gICAgcmV0dXJuIFsyNTUqciwyNTUqZywyNTUqYl07XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjb252ZXJ0SFNWMlJHQiIsImNvbnN0IGZvcm1hdFJCR0FTdHJpbmcgPSAoc3RyaW5nKSA9PiB7XHJcbiAgbGV0IG51bWJlcnMgPSBzdHJpbmcuc2xpY2UoNCwgMTcpXHJcbiAgbnVtYmVycyArPSAnKSdcclxuICBudW1iZXJzID0gbnVtYmVycy5zcGxpdCgnICcpLmpvaW4oJycpXHJcbiAgcmV0dXJuIG51bWJlcnNcclxufVxyXG5cclxuZXhwb3J0IHsgZm9ybWF0UkJHQVN0cmluZyB9XHJcbiIsIi8vIFNUQVRFXHJcbmNvbnN0IGNhcnRlc2lhbjJQb2xhck1hcCA9IHt9XHJcblxyXG5jb25zdCBjYWxjSHlwb3RlbnVzZSA9ICh4LCB5KSA9PiB7XHJcbiAgLy8gUHl0aGFnb3JlYW4gVGhlb3JlbSBhXjIgKyBiXjIgPSBjXjJcclxuICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpXHJcbn1cclxuXHJcbmNvbnN0IGNhbGNBbmdsZVJhZGlhbnMgPSAoeCwgeSkgPT4ge1xyXG4gIHJldHVybiBNYXRoLmF0YW4yKHksIHgpXHJcbn1cclxuXHJcbmNvbnN0IGNhbGNBbmdsZURlZ3JlZXMgPSAoeCwgeSkgPT4ge1xyXG4gIGNvbnN0IHJhZGlhbnMgPSAtY2FsY0FuZ2xlUmFkaWFucyh4LCB5KVxyXG4gIC8vIENvbnZlcnQgcmFkaWFucyB0byBkZWdyZWVzXHJcbiAgcmV0dXJuICgxODAgLyBNYXRoLlBJKSAqIChyYWRpYW5zICsgTWF0aC5QSSlcclxufVxyXG5cclxuY29uc3QgY2FsY0NpcmNsZUJvdW5kcyA9ICh4LCB5LCByYWRpdXMpID0+IHtcclxuICBjb25zdCByID0gY2FsY0h5cG90ZW51c2UoeCwgeSlcclxuICByZXR1cm4gciA8IHJhZGl1c1xyXG59XHJcblxyXG4vLyBwb2xhcjJDYXJ0ZXNpYW4gY29udmVydHMgdG8gY2FydGVzaWFuIGNvb3JkcyB3aXRoIDAgYXQgY2VudHJlLlxyXG4vLyBUaGlzIGJyaW5ncyAwIGJhY2sgdG8gdG9wIGxlZnRcclxuY29uc3QgdW5jZW50ZXJDYXJ0ZXNpYW5Db29yZHMgPSAoeyB4LCB5IH0sIHJhZGl1cykgPT4ge1xyXG4gIHkgPSB5ICsgcmFkaXVzXHJcbiAgeCA9IHggKyByYWRpdXNcclxuICByZXR1cm4geyB4LCB5IH1cclxufVxyXG5cclxuY29uc3QgcG9sYXIyQ2FydGVzaWFuID0gKHIsIHRoZXRhKSA9PiB7XHJcbiAgY29uc3QgeCA9IHIgKiBNYXRoLmNvcyh0aGV0YSlcclxuICBjb25zdCB5ID0gciAqIE1hdGguc2luKHRoZXRhKVxyXG4gIHJldHVybiB7IHgsIHkgfVxyXG59XHJcblxyXG5jb25zdCBjYXJ0ZXNpYW4yUG9sYXIgPSAoeCwgeSkgPT4ge1xyXG4gIHJldHVybiBjYXJ0ZXNpYW4yUG9sYXJNYXBbY29tYmluZVZhbHVlcyh4LCB5KV1cclxufVxyXG5cclxuY29uc3QgY29tYmluZVZhbHVlcyA9ICh4LCB5KSA9PiB7XHJcbiAgcmV0dXJuICh4IDw8IDE2KSB8IHlcclxufVxyXG5cclxuLy8gTWFwcyBlYWNoIGNhcnRlc2lhbiBjb29yZCB0byBhIHBvbGFyIGNvb3JkLiBUaGUga2V5IGlzIGEgbWFwcGluZyBvZiB0aGUgeCBhbmQgeSB2YWx1ZXNcclxuLy8gYW5kIHRvIHJldHJpZXZlIHBvbGFyIGNvb3JkcyB5b3UgbXVzdCB1c2UgdGhlIGNvbWJpbmVWYWx1ZXMgZnVuY3Rpb24gaW4gbWF0aFV0aWxzLmpzXHJcbmNvbnN0IGNyZWF0ZUNvb3JkQ29udmVyc2lvbk1hcHMgPSAod2lkdGgsIGhlaWdodCwgcmFkaXVzKSA9PiB7XHJcbiAgZm9yIChsZXQgeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7XHJcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7XHJcbiAgICAgIGNvbnN0IHIgPSBjYWxjSHlwb3RlbnVzZSh4IC0gcmFkaXVzLCB5IC0gcmFkaXVzKVxyXG4gICAgICBjb25zdCB0aGV0YSA9IGNhbGNBbmdsZVJhZGlhbnMoeCAtIHJhZGl1cywgeSAtIHJhZGl1cylcclxuICAgICAgY2FydGVzaWFuMlBvbGFyTWFwW2NvbWJpbmVWYWx1ZXMoeCwgeSldID0geyByLCB0aGV0YSB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGNhbGNIeXBvdGVudXNlLFxyXG4gIGNhbGNBbmdsZURlZ3JlZXMsXHJcbiAgY2FsY0NpcmNsZUJvdW5kcyxcclxuICBjcmVhdGVDb29yZENvbnZlcnNpb25NYXBzLFxyXG4gIGNvbWJpbmVWYWx1ZXMsXHJcbiAgcG9sYXIyQ2FydGVzaWFuLFxyXG4gIGNhcnRlc2lhbjJQb2xhcixcclxuICB1bmNlbnRlckNhcnRlc2lhbkNvb3Jkc1xyXG59XHJcbiIsImltcG9ydCB1cGRhdGVIYXJtb255IGZyb20gJy4uL2NvbnRyb2xsZXJzL3VwZGF0ZUhhcm1vbnkuanMnXHJcbmltcG9ydCB1cGRhdGVUYXJnZXRzIGZyb20gJy4uL2NvbnRyb2xsZXJzL3VwZGF0ZVRhcmdldHMuanMnXHJcblxyXG5jb25zdCBjbGljayA9IChlKSA9PiB7XHJcbiAgY29uc3QgaWQgPSBlLnRhcmdldC5pZFxyXG4gIGNvbnN0IGhhcm1vbnkgPSBpZC5tYXRjaCgvKGNvbXBsZW1lbnRhcnl8dHJpYWRpY3xhbmFsb2dvdXN8dGV0cmFkaWMpL2cpWzBdXHJcbiAgdXBkYXRlSGFybW9ueShoYXJtb255KVxyXG4gIHVwZGF0ZVRhcmdldHModHJ1ZSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGUpID0+IHtcclxuICBjb25zdCB0eXBlID0gZS50eXBlXHJcblxyXG4gIGlmICh0eXBlID09PSAnY2xpY2snKSBjbGljayhlKVxyXG59XHJcbiIsImltcG9ydCB1cGRhdGVNb3VzZVBvc2l0aW9uIGZyb20gJy4uL2NvbnRyb2xsZXJzL3VwZGF0ZU1vdXNlUG9zaXRpb24uanMnXHJcbmltcG9ydCB1cGRhdGVUYXJnZXRzIGZyb20gJy4uL2NvbnRyb2xsZXJzL3VwZGF0ZVRhcmdldHMuanMnXHJcbi8vIE9ubHkgdXNlIHN0YXRlIGZvciB2aWV3IHNwZWNpZmljIGNoYW5nZXMuIGkuZS4gdXBkYXRpbmcgbW91c2VYIG9yIG1vdXNlZG93blxyXG5pbXBvcnQgc3RhdGUgZnJvbSAnLi4vc3RhdGUuanMnXHJcblxyXG5jb25zdCBtb3VzZU1vdmUgPSAoZSkgPT4ge1xyXG4gIHVwZGF0ZU1vdXNlUG9zaXRpb24oZSlcclxuICB1cGRhdGVUYXJnZXRzKClcclxufVxyXG5cclxuY29uc3QgbW91c2VEb3duID0gKCkgPT4ge1xyXG4gIHN0YXRlLndyaXRlKCdpc01vdXNlRG93bicsIHRydWUpXHJcbiAgdXBkYXRlVGFyZ2V0cygpXHJcbn1cclxuXHJcbmNvbnN0IG1vdXNlVXAgPSAoKSA9PiB7XHJcbiAgc3RhdGUud3JpdGUoJ2lzTW91c2VEb3duJywgZmFsc2UpXHJcbn1cclxuXHJcbmNvbnN0IG1vdXNlTGVhdmUgPSAoKSA9PiB7XHJcbiAgc3RhdGUud3JpdGUoJ2lzTW91c2VEb3duJywgZmFsc2UpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChlKSA9PiB7XHJcbiAgY29uc3QgdHlwZSA9IGUudHlwZVxyXG4gIGlmICh0eXBlID09PSAnbW91c2Vtb3ZlJykgbW91c2VNb3ZlKGUpXHJcbiAgaWYgKHR5cGUgPT09ICdtb3VzZWRvd24nKSBtb3VzZURvd24oZSlcclxuICBpZiAodHlwZSA9PT0gJ21vdXNldXAnKSBtb3VzZVVwKGUpXHJcbiAgaWYgKHR5cGUgPT09ICdtb3VzZWxlYXZlJykgbW91c2VMZWF2ZShlKVxyXG59XHJcbiIsImltcG9ydCB1cGRhdGVIYXJtb255IGZyb20gJy4uL2NvbnRyb2xsZXJzL3VwZGF0ZUhhcm1vbnkuanMnXHJcbmltcG9ydCB1cGRhdGVUYXJnZXRzIGZyb20gJy4uL2NvbnRyb2xsZXJzL3VwZGF0ZVRhcmdldHMuanMnXHJcblxyXG5jb25zdCBjaGFuZ2UgPSAoZSkgPT4ge1xyXG4gIGNvbnN0IGhhcm1vbnkgPSBlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpXHJcbiAgdXBkYXRlSGFybW9ueShoYXJtb255KVxyXG4gIHVwZGF0ZVRhcmdldHModHJ1ZSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGUpID0+IHtcclxuICBjb25zdCB0eXBlID0gZS50eXBlXHJcblxyXG4gIGlmICh0eXBlID09PSAnY2hhbmdlJykgY2hhbmdlKGUpXHJcbn1cclxuIiwiaW1wb3J0IHN0YXRlIGZyb20gJy4uL3N0YXRlLmpzJ1xyXG5pbXBvcnQgeyBmb3JtYXRSQkdBU3RyaW5nIH0gZnJvbSAnLi4vdXRpbC9mb3JtYXR0aW5nLmpzJ1xyXG5jb25zdCBwb3B1bGF0ZUNvbG9yQ29kZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29kZUNvbnRhaW5lciA9IHN0YXRlLnJlYWQoJ3Jvb3QnKS5nZXRFbGVtZW50QnlJZCgnY3ctY29sb3ItY29kZXMnKVxyXG4gIGNvZGVDb250YWluZXIuaW5uZXJUZXh0ID0gJydcclxuICBjb25zdCBjb2xvcnMgPSBzdGF0ZS5yZWFkKCdjb2xvcnMnKVxyXG4gIGNvbnNvbGUubG9nKGNvbG9ycylcclxuICBjb2xvcnMuZm9yRWFjaCgoY29sKSA9PiB7XHJcbiAgICBjb25zdCBuZXdTdHJpbmcgPSBmb3JtYXRSQkdBU3RyaW5nKGNvbClcclxuXHJcbiAgICBjb2RlQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGA8ZGl2PiR7bmV3U3RyaW5nfTwvZGl2PmApXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcG9wdWxhdGVDb2xvckNvZGVzXHJcbiIsImltcG9ydCBjcmVhdGVFdmVudHMgZnJvbSAnLi4vbW9kZWxzL2NyZWF0ZUV2ZW50cy5qcydcclxuaW1wb3J0IGNyZWF0ZUNhbnZhc0V2ZW50RnVuY3Rpb25zIGZyb20gJy4vY2FsbENhbnZhc0V2ZW50RnVuY3Rpb25zLmpzJ1xyXG5pbXBvcnQgc3RhdGUgZnJvbSAnLi4vc3RhdGUuanMnXHJcblxyXG5jb25zdCByZWdpc3RlckFsbEVsZW1lbnRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGVsZW1lbnRzID0gc3RhdGUucmVhZCgnZWxlbWVudHMnKVxyXG4gIGVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gc3RhdGUucmVhZCgncm9vdCcpLmdldEVsZW1lbnRCeUlkKGVsLmlkKVxyXG4gICAgLy8gQ2hlY2tzIGlmIGVsZW1lbnQgaXMgcHJlc2VudC4gSWYgbm90IG5vdGhpbmcgaXMgZ2VuZXJhdGVkIGZvciBpdFxyXG4gICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbC5ldmVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBldmVudHMgPSBjcmVhdGVFdmVudHMoZWxlbWVudCwgZWwuZXZlbnRzW2ldKVxyXG4gICAgICAgIC8vIFRPRE8gLT4gUHJldmVudCBwcmV2aW91cyBkYXRhIGJlaW5nIGxvc3Qgb24gcmV3cml0ZVxyXG4gICAgICAgIC8vIEltcG9ydGFudCBmb3IgZGVzdHJveWluZyBldmVudCBsaXN0ZW5lcnNcclxuICAgICAgICBzdGF0ZS53cml0ZSgnZXZlbnRMaXN0ZW5lcnMnLCBldmVudHMpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlckFsbEVsZW1lbnRzXHJcbiIsImV4cG9ydCBkZWZhdWx0IChyb290KSA9PiB7XHJcbiAgY29uc3QgY3VzdG9tU2VsZWN0ID0gcm9vdC5nZXRFbGVtZW50QnlJZCgnY3ctc2VsZWN0LWN1c3RvbScpXHJcbiAgY29uc3QgbmF0aXZlU2VsZWN0ID0gcm9vdC5nZXRFbGVtZW50QnlJZCgnY3ctc2VsZWN0LWhhcm1vbnknKVxyXG5cclxuICBjb25zdCBoYW5kbGVTZWxlY3RPcGVuID0gKCkgPT4ge1xyXG4gICAgY3VzdG9tU2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2lzQWN0aXZlJylcclxuICAgIGN1c3RvbVNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgZmFsc2UpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTZWxlY3RDbG9zZSA9ICgpID0+IHt9XHJcblxyXG4gIG5hdGl2ZVNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgY3VzdG9tU2VsZWN0LnZhbHVlID0gdmFsdWVcclxuICAgIGN1c3RvbVNlbGVjdC5xdWVyeVNlbGVjdG9yKCdkaXYnKS5pbm5lclRleHQgPSB2YWx1ZVxyXG4gIH0pXHJcblxyXG4gIHJvb3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgY29uc3QgaXNDdXN0b21DdXN0b21TZWxlY3QgPSBlLnRhcmdldC5jbG9zZXN0KCcjY3ctc2VsZWN0LWN1c3RvbScpXHJcblxyXG4gICAgLy8gcmV0dXJuIGlmIHRhcmdldCBpcyBub3QgY3VzdG9tIHNlbGVjdCBlbGVtZW50XHJcbiAgICBpZiAoIWlzQ3VzdG9tQ3VzdG9tU2VsZWN0KSB7XHJcbiAgICAgIGhhbmRsZVNlbGVjdENsb3NlKClcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBoYW5kbGVTZWxlY3RPcGVuKClcclxuICAgIGNvbnN0IG9wdGlvbiA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5zZWxlY3QtY3VzdG9tX19vcHRpb24nKVxyXG5cclxuICAgIC8vIHJldHVybiBpZiB0YXJnZXQgaXNuJ3Qgc2VsZWN0IG9wdGlvblxyXG4gICAgaWYgKCFvcHRpb24pIHJldHVyblxyXG5cclxuICAgIGNvbnN0IHZhbHVlID0gb3B0aW9uLmdldEF0dHJpYnV0ZSgndmFsdWUnKVxyXG4gICAgY3VzdG9tU2VsZWN0LnZhbHVlID0gdmFsdWVcclxuICAgIGN1c3RvbVNlbGVjdC5xdWVyeVNlbGVjdG9yKCdkaXYnKS5pbm5lclRleHQgPSB2YWx1ZVxyXG4gICAgbmF0aXZlU2VsZWN0LnZhbHVlID0gdmFsdWVcclxuICAgIG5hdGl2ZVNlbGVjdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJywgeyB2aWV3OiB3aW5kb3csIGJ1YmJsZXM6IHRydWUgfSkpXHJcbiAgICBjdXN0b21TZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnaXNBY3RpdmUnKVxyXG4gIH0pXHJcblxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC50YWdOYW1lICE9PSAnQ09MT1ItV0hFRUwnKSB7XHJcbiAgICAgIGN1c3RvbVNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdpc0FjdGl2ZScpXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNvcmUgZnJvbSAnLi4vLi4vc3JjL2luZGV4LmpzJ1xyXG5pbXBvcnQgY3VzdG9tU2VsZWN0IGZyb20gJy4vY3VzdG9tU2VsZWN0LmpzJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLmNzcydcclxuaW1wb3J0IEhUTUxUZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlLmh0bWwnXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKFxyXG4gICAgJ2NvbG9yLXdoZWVsJyxcclxuICAgIGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpXHJcblxyXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKVxyXG4gICAgICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IEhUTUxUZW1wbGF0ZVxyXG5cclxuICAgICAgICBsZXQgdGVtcGxhdGVDb250ZW50ID0gdGVtcGxhdGUuY29udGVudFxyXG4gICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pXHJcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHRlbXBsYXRlQ29udGVudClcclxuICAgICAgICBjb25zdCBzdHlsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxyXG4gICAgICAgIHN0eWxlRWwudGV4dENvbnRlbnQgPSBzdHlsZXNcclxuICAgICAgICB0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQoc3R5bGVFbClcclxuICAgICAgfVxyXG4gICAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgICBjdXN0b21TZWxlY3QodGhpcy5zaGFkb3dSb290KVxyXG4gICAgICAgIGNvcmUodGhpcy5zaGFkb3dSb290KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
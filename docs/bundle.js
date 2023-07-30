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

/***/ "./themes/default/custom-select-styles.css":
/*!*************************************************!*\
  !*** ./themes/default/custom-select-styles.css ***!
  \*************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.select::after {
  content: '';
  position: absolute;
  bottom: 0.6rem;
  left: 0;
  width: 100%;
  height: 2px;
  background: #000;
  z-index: 100;
}

.select-custom,
.select-native {
  width: 100%;
  height: 100%;
  position: relative;
  /* border: 1px solid black; */
  font-family: inherit;
  /* padding-left: 0.6rem; */
  font-size: inherit;
  border: none;
}

.select-custom {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  z-index: 100;
  background: #fff;
}

.select-custom__display {
  height: 100%;
  text-transform: capitalize;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-left: 0.3rem;
}

.select-custom__display-icon {
  display: inline-block;
  height: 1.5rem;
  display: flex;
  align-items: center;
}
.select-custom__display-text {
}

.select-custom__display-icon > img {
  height: 100%;
}

.select-custom__options {
  position: absolute;
  border: 1px solid black;
  background: #fff;
  top: 2.5rem;
  width: 12rem;
  display: none;
  cursor: pointer;
  border-radius: 0.2em;
}
.select-custom__option {
  height: 2.5rem;
  display: flex;
  align-items: center;
}

.select-custom__option::before {
  content: '';
  width: 0.3rem;
  left: 0;
}

.select-custom__option:hover,
.select-custom__option:focus {
  background: #eee;
}

.isActive .select-custom__options {
  display: block;
}
`, "",{"version":3,"sources":["webpack://./themes/default/custom-select-styles.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,kBAAkB;EAClB,cAAc;EACd,OAAO;EACP,WAAW;EACX,WAAW;EACX,gBAAgB;EAChB,YAAY;AACd;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,6BAA6B;EAC7B,oBAAoB;EACpB,0BAA0B;EAC1B,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,0BAA0B;EAC1B,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,qBAAqB;EACrB,cAAc;EACd,aAAa;EACb,mBAAmB;AACrB;AACA;AACA;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,eAAe;EACf,oBAAoB;AACtB;AACA;EACE,cAAc;EACd,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,OAAO;AACT;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,cAAc;AAChB","sourcesContent":[".select::after {\r\n  content: '';\r\n  position: absolute;\r\n  bottom: 0.6rem;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 2px;\r\n  background: #000;\r\n  z-index: 100;\r\n}\r\n\r\n.select-custom,\r\n.select-native {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n  /* border: 1px solid black; */\r\n  font-family: inherit;\r\n  /* padding-left: 0.6rem; */\r\n  font-size: inherit;\r\n  border: none;\r\n}\r\n\r\n.select-custom {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  z-index: 100;\r\n  background: #fff;\r\n}\r\n\r\n.select-custom__display {\r\n  height: 100%;\r\n  text-transform: capitalize;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  padding-left: 0.3rem;\r\n}\r\n\r\n.select-custom__display-icon {\r\n  display: inline-block;\r\n  height: 1.5rem;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.select-custom__display-text {\r\n}\r\n\r\n.select-custom__display-icon > img {\r\n  height: 100%;\r\n}\r\n\r\n.select-custom__options {\r\n  position: absolute;\r\n  border: 1px solid black;\r\n  background: #fff;\r\n  top: 2.5rem;\r\n  width: 12rem;\r\n  display: none;\r\n  cursor: pointer;\r\n  border-radius: 0.2em;\r\n}\r\n.select-custom__option {\r\n  height: 2.5rem;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.select-custom__option::before {\r\n  content: '';\r\n  width: 0.3rem;\r\n  left: 0;\r\n}\r\n\r\n.select-custom__option:hover,\r\n.select-custom__option:focus {\r\n  background: #eee;\r\n}\r\n\r\n.isActive .select-custom__options {\r\n  display: block;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

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
  font-family: Sans serif;
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
  margin-top: 3rem;
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
  font-family: inherit;
}

.select {
  position: absolute;
  top: 0.5rem;
  width: 9rem;
  height: 2.5rem;
  font-family: Sans-serif;
  font-size: 1rem;
}
`, "",{"version":3,"sources":["webpack://./themes/default/styles.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,sBAAsB;EACtB,cAAc;EACd,qBAAqB;EACrB,mCAAmC;EACnC,uBAAuB;EACvB,qBAAqB;EACrB,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kCAAkC;EAClC,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;AACA;EACE,cAAc;EACd,kCAAkC;EAClC,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,8BAA8B;EAC9B,kBAAkB;AACpB;AACA;AACA;;AAEA;EACE,2BAA2B;EAC3B,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,WAAW;AACb;;AAEA;EACE,WAAW;EACX,4CAA4C;EAC5C,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,6BAA6B;EAC7B,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,cAAc;EACd,uBAAuB;EACvB,eAAe;AACjB","sourcesContent":[".cw__container {\r\n  --height: 30.3125em;\r\n  /* --fw: 500; */\r\n  display: flex;\r\n  flex-direction: column;\r\n  box-sizing: border-box;\r\n  width: 18.75em;\r\n  height: var(--height);\r\n  padding: 0 calc(var(--height) / 20);\r\n  border: 2px solid black;\r\n  border-radius: 0.45em;\r\n  position: relative;\r\n  font-family: Sans serif;\r\n}\r\n\r\n.cw__container * {\r\n  box-sizing: inherit;\r\n}\r\n\r\n.m1 {\r\n  margin-top: 1rem;\r\n}\r\n\r\n.top-thirds {\r\n  height: calc(var(--height) * 0.66);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n.bottom-third {\r\n  flex-shrink: 0;\r\n  height: calc(var(--height) * 0.33);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.cw__wheel {\r\n  margin-top: 3rem;\r\n  width: calc(var(--height) / 2);\r\n  align-self: center;\r\n}\r\n.cw__field {\r\n}\r\n\r\n.cw__label {\r\n  font-weight: var(--fw, 700);\r\n  /* color: green; */\r\n}\r\n\r\n.cw__color-input {\r\n  height: 2.5rem;\r\n  width: 100%;\r\n}\r\n\r\n.cw__palette {\r\n  width: 100%;\r\n  height: calc(calc(var(--height) / 8) - 1rem);\r\n  border: 1px solid black;\r\n}\r\n\r\n.cw__color-codes {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: space-around;\r\n  height: 1em;\r\n  /* font-size: 0.8em; */\r\n}\r\n\r\n.cw__color-codes > div {\r\n  font-size: 0.875em;\r\n  text-align: center;\r\n  font-family: inherit;\r\n}\r\n\r\n.select {\r\n  position: absolute;\r\n  top: 0.5rem;\r\n  width: 9rem;\r\n  height: 2.5rem;\r\n  font-family: Sans-serif;\r\n  font-size: 1rem;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/arrow-down-short.svg */ "./themes/default/assets/arrow-down-short.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<div class=\"cw__container\">\r\n  <div class=\"top-thirds\">\r\n    <div class=\"select\">\r\n      <select name=\"\" class=\"select-native\" id=\"cw-select-harmony\">\r\n        <option value=\"\" disabled=\"true\">Select Harmony</option>\r\n        <option value=\"complementary\">Complementary</option>\r\n        <option value=\"tetradic\">Tetradic</option>\r\n        <option value=\"analogous\">Analogous</option>\r\n        <option value=\"triadic\">Triadic</option>\r\n      </select>\r\n      <div class=\"select-custom\" id=\"cw-select-custom\" aria-hidden=\"true\">\r\n        <div class=\"select-custom__display\">\r\n          <div class=\"select-custom__display-text\">Select&nbsp;harmony</div>\r\n          <span class=\"select-custom__display-icon\"\r\n            ><img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"\r\n          /></span>\r\n        </div>\r\n        <div class=\"select-custom__options\">\r\n          <div value=\"complementary\" class=\"select-custom__option\">Complementary</div>\r\n          <div value=\"tetradic\" class=\"select-custom__option\">Tetradic</div>\r\n          <div value=\"analogous\" class=\"select-custom__option\">Analogous</div>\r\n          <div value=\"triadic\" class=\"select-custom__option\">Triadic</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <canvas class=\"cw__wheel\" id=\"cw-color-wheel\"></canvas>\r\n  </div>\r\n  <div class=\"bottom-third\">\r\n    <!-- <div class=\"cw__field\">\r\n      <label for=\"cw-color-input\" class=\"cw__label\">Pick a colour</label>\r\n      <input class=\"cw__color-input\" id=\"cw-color-input\" type=\"text\" />\r\n    </div> -->\r\n    <div class=\"m1 cw__palette\" id=\"cw-palette\"></div>\r\n    <div class=\"cw__color-codes\" id=\"cw-color-codes\"></div>\r\n  </div>\r\n</div>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./themes/default/assets/arrow-down-short.svg":
/*!****************************************************!*\
  !*** ./themes/default/assets/arrow-down-short.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc140f5429580bcf8128.svg";

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

  const handleSelectClose = () => {
    customSelect.classList.remove('isActive')
    customSelect.setAttribute('aria-hidden', true)
  }

  const handleValueChange = (newVal) => {
    nativeSelect.value = newVal
    nativeSelect.dispatchEvent(new Event('change', { view: window, bubbles: true }))
  }

  nativeSelect.addEventListener('change', (e) => {
    const newVal = e.target.value
    customSelect.value = newVal
    customSelect.querySelector('.select-custom__display-text').innerText = newVal
  })

  root.addEventListener('click', (e) => {
    const isTargetCustomSelect = e.target.closest('#cw-select-custom')
    // If click isn't on custom select, don't do anything
    if (!isTargetCustomSelect) {
      handleSelectClose()
      return
    }

    const isActive = customSelect.classList.contains('isActive')
    if (!isActive) {
      handleSelectOpen()
    } else {
      handleSelectClose()
    }
    // If target is target options get value of option and pass it onto handler function
    const isTargetOptions = e.target.closest('.select-custom__options')
    if (isTargetOptions) {
      const value = e.target.closest('.select-custom__option').getAttribute('value').toLowerCase()
      handleValueChange(value)
    }
  })

  document.addEventListener('click', (e) => {
    if (e.target.tagName !== 'COLOR-WHEEL') {
      handleSelectClose()
    }
  })
});

// root.addEventListener('click', (e) => {
//   const isCustomCustomSelect = e.target.closest('#cw-select-custom')

//   // return if target is not custom select element
//   if (!isCustomCustomSelect) {
//     handleSelectClose()
//     return
//   }
//   handleSelectOpen()
//   const option = e.target.closest('.select-custom__option')

//   // return if target isn't select option
//   if (!option) return

//   const value = option.getAttribute('value')
//   customSelect.value = value
//   customSelect.querySelector('div').innerText = value
//   nativeSelect.value = value
//   nativeSelect.dispatchEvent(new Event('change', { view: window, bubbles: true }))
//   customSelect.classList.remove('isActive')
// })


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _custom_select_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-select-styles.css */ "./themes/default/custom-select-styles.css");
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template.html */ "./themes/default/template.html");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  customElements.define(
    'color-wheel',
    class extends HTMLElement {
      constructor() {
        super()

        const template = document.createElement('template')
        template.innerHTML = _template_html__WEBPACK_IMPORTED_MODULE_4__["default"]

        let templateContent = template.content
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(templateContent)
        const styleEl = document.createElement('style')
        styleEl.textContent = _styles_css__WEBPACK_IMPORTED_MODULE_2__["default"] + _custom_select_styles_css__WEBPACK_IMPORTED_MODULE_3__["default"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQnFDO0FBQ087QUFDWDtBQUMwQjtBQUNqQjtBQUMxQztBQUNBLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsc0RBQVk7QUFDekM7QUFDQTtBQUNBLDRCQUE0QixjQUFjO0FBQzFDO0FBQ0E7QUFDQSw4QkFBOEIsbURBQU0sR0FBRyxpRUFBa0I7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0REFBWTtBQUNwQixRQUFRLDBEQUFJO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbG9yV2hlZWwvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2NvbG9yV2hlZWwvLi90aGVtZXMvZGVmYXVsdC9jdXN0b20tc2VsZWN0LXN0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vY29sb3JXaGVlbC8uL3RoZW1lcy9kZWZhdWx0L3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vY29sb3JXaGVlbC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vY29sb3JXaGVlbC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NvbG9yV2hlZWwvLi90aGVtZXMvZGVmYXVsdC90ZW1wbGF0ZS5odG1sIiwid2VicGFjazovL2NvbG9yV2hlZWwvLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9jb2xvcldoZWVsLy4vc3JjL2NvbnRyb2xsZXJzL3VwZGF0ZUhhcm1vbnkuanMiLCJ3ZWJwYWNrOi8vY29sb3JXaGVlbC8uL3NyYy9jb250cm9sbGVycy91cGRhdGVNb3VzZVBvc2l0aW9uLmpzIiwid2VicGFjazovL2NvbG9yV2hlZWwvLi9zcmMvY29udHJvbGxlcnMvdXBkYXRlVGFyZ2V0cy5qcyIsIndlYnBhY2s6Ly9jb2xvcldoZWVsLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2NvbG9yV2hlZWwvLi9zcmMvbW9kZWxzL2NvbG91clBpY2tlci5qcyIsIndlYnBhY2s6Ly9jb2xvcldoZWVsLy4vc3JjL21vZGVscy9jcmVhdGVFdmVudHMuanMiLCJ3ZWJwYWNrOi8vY29sb3JXaGVlbC8uL3NyYy9tb2RlbHMvY3JlYXRlU21hbGxDaXJjbGUuanMiLCJ3ZWJwYWNrOi8vY29sb3JXaGVlbC8uL3NyYy9tb2RlbHMvZHJhd1RhcmdldHMuanMiLCJ3ZWJwYWNrOi8vY29sb3JXaGVlbC8uL3NyYy9tb2RlbHMvZ2VuZXJhdGVQYWxldHRlLmpzIiwid2VicGFjazovL2NvbG9yV2hlZWwvLi9zcmMvbW9kZWxzL2dlbmVyYXRlV2hlZWxJbWFnZS5qcyIsIndlYnBhY2s6Ly9jb2xvcldoZWVsLy4vc3JjL21vZGVscy9tYXBDb29yZHMuanMiLCJ3ZWJwYWNrOi8vY29sb3JXaGVlbC8uL3NyYy9tb2RlbHMvcmVzZXRXaGVlbC5qcyIsIndlYnBhY2s6Ly9jb2xvcldoZWVsLy4vc3JjL3N0YXRlLmpzIiwid2VicGFjazovL2NvbG9yV2hlZWwvLi9zcmMvdXRpbC9jb252ZXJ0SFNWMlJHQi5qcyIsIndlYnBhY2s6Ly9jb2xvcldoZWVsLy4vc3JjL3V0aWwvZm9ybWF0dGluZy5qcyIsIndlYnBhY2s6Ly9jb2xvcldoZWVsLy4vc3JjL3V0aWwvbWF0aFV0aWwuanMiLCJ3ZWJwYWNrOi8vY29sb3JXaGVlbC8uL3NyYy92aWV3cy9jYWxsQnV0dG9uRXZlbnRGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vY29sb3JXaGVlbC8uL3NyYy92aWV3cy9jYWxsQ2FudmFzRXZlbnRGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vY29sb3JXaGVlbC8uL3NyYy92aWV3cy9jYWxsU2VsZWN0RXZlbnRGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vY29sb3JXaGVlbC8uL3NyYy92aWV3cy9wb3B1bGF0ZUNvbG9yQ29kZS5qcyIsIndlYnBhY2s6Ly9jb2xvcldoZWVsLy4vc3JjL3ZpZXdzL3JlZ2lzdGVyQWxsRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vY29sb3JXaGVlbC8uL3RoZW1lcy9kZWZhdWx0L2N1c3RvbVNlbGVjdC5qcyIsIndlYnBhY2s6Ly9jb2xvcldoZWVsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvbG9yV2hlZWwvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY29sb3JXaGVlbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY29sb3JXaGVlbC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2NvbG9yV2hlZWwvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jb2xvcldoZWVsL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY29sb3JXaGVlbC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9jb2xvcldoZWVsL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2NvbG9yV2hlZWwvLi90aGVtZXMvZGVmYXVsdC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJjb2xvcldoZWVsXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImNvbG9yV2hlZWxcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCAoKSA9PiB7XG5yZXR1cm4gIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zZWxlY3Q6OmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwLjZyZW07XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuLnNlbGVjdC1jdXN0b20sXHJcbi5zZWxlY3QtbmF0aXZlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIC8qIHBhZGRpbmctbGVmdDogMC42cmVtOyAqL1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5zZWxlY3QtY3VzdG9tIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG4uc2VsZWN0LWN1c3RvbV9fZGlzcGxheSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1sZWZ0OiAwLjNyZW07XHJcbn1cclxuXHJcbi5zZWxlY3QtY3VzdG9tX19kaXNwbGF5LWljb24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6IDEuNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnNlbGVjdC1jdXN0b21fX2Rpc3BsYXktdGV4dCB7XHJcbn1cclxuXHJcbi5zZWxlY3QtY3VzdG9tX19kaXNwbGF5LWljb24gPiBpbWcge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnNlbGVjdC1jdXN0b21fX29wdGlvbnMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHRvcDogMi41cmVtO1xyXG4gIHdpZHRoOiAxMnJlbTtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAwLjJlbTtcclxufVxyXG4uc2VsZWN0LWN1c3RvbV9fb3B0aW9uIHtcclxuICBoZWlnaHQ6IDIuNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZWxlY3QtY3VzdG9tX19vcHRpb246OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgd2lkdGg6IDAuM3JlbTtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4uc2VsZWN0LWN1c3RvbV9fb3B0aW9uOmhvdmVyLFxyXG4uc2VsZWN0LWN1c3RvbV9fb3B0aW9uOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG59XHJcblxyXG4uaXNBY3RpdmUgLnNlbGVjdC1jdXN0b21fX29wdGlvbnMge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vdGhlbWVzL2RlZmF1bHQvY3VzdG9tLXNlbGVjdC1zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsT0FBTztFQUNQLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0Isb0JBQW9CO0VBQ3BCLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTtBQUNBOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLE9BQU87QUFDVDs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zZWxlY3Q6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAwLjZyZW07XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDJweDtcXHJcXG4gIGJhY2tncm91bmQ6ICMwMDA7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3QtY3VzdG9tLFxcclxcbi5zZWxlY3QtbmF0aXZlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXFxyXFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gIC8qIHBhZGRpbmctbGVmdDogMC42cmVtOyAqL1xcclxcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0LWN1c3RvbSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0LWN1c3RvbV9fZGlzcGxheSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAwLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3QtY3VzdG9tX19kaXNwbGF5LWljb24ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgaGVpZ2h0OiAxLjVyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnNlbGVjdC1jdXN0b21fX2Rpc3BsYXktdGV4dCB7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3QtY3VzdG9tX19kaXNwbGF5LWljb24gPiBpbWcge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0LWN1c3RvbV9fb3B0aW9ucyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICB0b3A6IDIuNXJlbTtcXHJcXG4gIHdpZHRoOiAxMnJlbTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjJlbTtcXHJcXG59XFxyXFxuLnNlbGVjdC1jdXN0b21fX29wdGlvbiB7XFxyXFxuICBoZWlnaHQ6IDIuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0LWN1c3RvbV9fb3B0aW9uOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICB3aWR0aDogMC4zcmVtO1xcclxcbiAgbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdC1jdXN0b21fX29wdGlvbjpob3ZlcixcXHJcXG4uc2VsZWN0LWN1c3RvbV9fb3B0aW9uOmZvY3VzIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxufVxcclxcblxcclxcbi5pc0FjdGl2ZSAuc2VsZWN0LWN1c3RvbV9fb3B0aW9ucyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuY3dfX2NvbnRhaW5lciB7XHJcbiAgLS1oZWlnaHQ6IDMwLjMxMjVlbTtcclxuICAvKiAtLWZ3OiA1MDA7ICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgd2lkdGg6IDE4Ljc1ZW07XHJcbiAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpO1xyXG4gIHBhZGRpbmc6IDAgY2FsYyh2YXIoLS1oZWlnaHQpIC8gMjApO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNDVlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1mYW1pbHk6IFNhbnMgc2VyaWY7XHJcbn1cclxuXHJcbi5jd19fY29udGFpbmVyICoge1xyXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5tMSB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuLnRvcC10aGlyZHMge1xyXG4gIGhlaWdodDogY2FsYyh2YXIoLS1oZWlnaHQpICogMC42Nik7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5ib3R0b20tdGhpcmQge1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIGhlaWdodDogY2FsYyh2YXIoLS1oZWlnaHQpICogMC4zMyk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jd19fd2hlZWwge1xyXG4gIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgd2lkdGg6IGNhbGModmFyKC0taGVpZ2h0KSAvIDIpO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG4uY3dfX2ZpZWxkIHtcclxufVxyXG5cclxuLmN3X19sYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LCA3MDApO1xyXG4gIC8qIGNvbG9yOiBncmVlbjsgKi9cclxufVxyXG5cclxuLmN3X19jb2xvci1pbnB1dCB7XHJcbiAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jd19fcGFsZXR0ZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBjYWxjKGNhbGModmFyKC0taGVpZ2h0KSAvIDgpIC0gMXJlbSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5jd19fY29sb3ItY29kZXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgaGVpZ2h0OiAxZW07XHJcbiAgLyogZm9udC1zaXplOiAwLjhlbTsgKi9cclxufVxyXG5cclxuLmN3X19jb2xvci1jb2RlcyA+IGRpdiB7XHJcbiAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxufVxyXG5cclxuLnNlbGVjdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMC41cmVtO1xyXG4gIHdpZHRoOiA5cmVtO1xyXG4gIGhlaWdodDogMi41cmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBTYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3RoZW1lcy9kZWZhdWx0L3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsbUNBQW1DO0VBQ25DLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsY0FBYztFQUNkLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLGtCQUFrQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCw0Q0FBNEM7RUFDNUMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jd19fY29udGFpbmVyIHtcXHJcXG4gIC0taGVpZ2h0OiAzMC4zMTI1ZW07XFxyXFxuICAvKiAtLWZ3OiA1MDA7ICovXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB3aWR0aDogMTguNzVlbTtcXHJcXG4gIGhlaWdodDogdmFyKC0taGVpZ2h0KTtcXHJcXG4gIHBhZGRpbmc6IDAgY2FsYyh2YXIoLS1oZWlnaHQpIC8gMjApO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjQ1ZW07XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBmb250LWZhbWlseTogU2FucyBzZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmN3X19jb250YWluZXIgKiB7XFxyXFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4ubTEge1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvcC10aGlyZHMge1xcclxcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWhlaWdodCkgKiAwLjY2KTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5ib3R0b20tdGhpcmQge1xcclxcbiAgZmxleC1zaHJpbms6IDA7XFxyXFxuICBoZWlnaHQ6IGNhbGModmFyKC0taGVpZ2h0KSAqIDAuMzMpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jd19fd2hlZWwge1xcclxcbiAgbWFyZ2luLXRvcDogM3JlbTtcXHJcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWhlaWdodCkgLyAyKTtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmN3X19maWVsZCB7XFxyXFxufVxcclxcblxcclxcbi5jd19fbGFiZWwge1xcclxcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LCA3MDApO1xcclxcbiAgLyogY29sb3I6IGdyZWVuOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uY3dfX2NvbG9yLWlucHV0IHtcXHJcXG4gIGhlaWdodDogMi41cmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jd19fcGFsZXR0ZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogY2FsYyhjYWxjKHZhcigtLWhlaWdodCkgLyA4KSAtIDFyZW0pO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5jd19fY29sb3ItY29kZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBoZWlnaHQ6IDFlbTtcXHJcXG4gIC8qIGZvbnQtc2l6ZTogMC44ZW07ICovXFxyXFxufVxcclxcblxcclxcbi5jd19fY29sb3ItY29kZXMgPiBkaXYge1xcclxcbiAgZm9udC1zaXplOiAwLjg3NWVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3Qge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwLjVyZW07XFxyXFxuICB3aWR0aDogOXJlbTtcXHJcXG4gIGhlaWdodDogMi41cmVtO1xcclxcbiAgZm9udC1mYW1pbHk6IFNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvYXJyb3ctZG93bi1zaG9ydC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fKTtcbnZhciBjb2RlID0gXCI8ZGl2IGNsYXNzPVxcXCJjd19fY29udGFpbmVyXFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcInRvcC10aGlyZHNcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzZWxlY3RcXFwiPlxcclxcbiAgICAgIDxzZWxlY3QgbmFtZT1cXFwiXFxcIiBjbGFzcz1cXFwic2VsZWN0LW5hdGl2ZVxcXCIgaWQ9XFxcImN3LXNlbGVjdC1oYXJtb255XFxcIj5cXHJcXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIlxcXCIgZGlzYWJsZWQ9XFxcInRydWVcXFwiPlNlbGVjdCBIYXJtb255PC9vcHRpb24+XFxyXFxuICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJjb21wbGVtZW50YXJ5XFxcIj5Db21wbGVtZW50YXJ5PC9vcHRpb24+XFxyXFxuICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJ0ZXRyYWRpY1xcXCI+VGV0cmFkaWM8L29wdGlvbj5cXHJcXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImFuYWxvZ291c1xcXCI+QW5hbG9nb3VzPC9vcHRpb24+XFxyXFxuICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJ0cmlhZGljXFxcIj5UcmlhZGljPC9vcHRpb24+XFxyXFxuICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwic2VsZWN0LWN1c3RvbVxcXCIgaWQ9XFxcImN3LXNlbGVjdC1jdXN0b21cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInNlbGVjdC1jdXN0b21fX2Rpc3BsYXlcXFwiPlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZWxlY3QtY3VzdG9tX19kaXNwbGF5LXRleHRcXFwiPlNlbGVjdCZuYnNwO2hhcm1vbnk8L2Rpdj5cXHJcXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInNlbGVjdC1jdXN0b21fX2Rpc3BsYXktaWNvblxcXCJcXHJcXG4gICAgICAgICAgICA+PGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBhbHQ9XFxcIlxcXCJcXHJcXG4gICAgICAgICAgLz48L3NwYW4+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInNlbGVjdC1jdXN0b21fX29wdGlvbnNcXFwiPlxcclxcbiAgICAgICAgICA8ZGl2IHZhbHVlPVxcXCJjb21wbGVtZW50YXJ5XFxcIiBjbGFzcz1cXFwic2VsZWN0LWN1c3RvbV9fb3B0aW9uXFxcIj5Db21wbGVtZW50YXJ5PC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXYgdmFsdWU9XFxcInRldHJhZGljXFxcIiBjbGFzcz1cXFwic2VsZWN0LWN1c3RvbV9fb3B0aW9uXFxcIj5UZXRyYWRpYzwvZGl2PlxcclxcbiAgICAgICAgICA8ZGl2IHZhbHVlPVxcXCJhbmFsb2dvdXNcXFwiIGNsYXNzPVxcXCJzZWxlY3QtY3VzdG9tX19vcHRpb25cXFwiPkFuYWxvZ291czwvZGl2PlxcclxcbiAgICAgICAgICA8ZGl2IHZhbHVlPVxcXCJ0cmlhZGljXFxcIiBjbGFzcz1cXFwic2VsZWN0LWN1c3RvbV9fb3B0aW9uXFxcIj5UcmlhZGljPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxjYW52YXMgY2xhc3M9XFxcImN3X193aGVlbFxcXCIgaWQ9XFxcImN3LWNvbG9yLXdoZWVsXFxcIj48L2NhbnZhcz5cXHJcXG4gIDwvZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiYm90dG9tLXRoaXJkXFxcIj5cXHJcXG4gICAgPCEtLSA8ZGl2IGNsYXNzPVxcXCJjd19fZmllbGRcXFwiPlxcclxcbiAgICAgIDxsYWJlbCBmb3I9XFxcImN3LWNvbG9yLWlucHV0XFxcIiBjbGFzcz1cXFwiY3dfX2xhYmVsXFxcIj5QaWNrIGEgY29sb3VyPC9sYWJlbD5cXHJcXG4gICAgICA8aW5wdXQgY2xhc3M9XFxcImN3X19jb2xvci1pbnB1dFxcXCIgaWQ9XFxcImN3LWNvbG9yLWlucHV0XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiAvPlxcclxcbiAgICA8L2Rpdj4gLS0+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm0xIGN3X19wYWxldHRlXFxcIiBpZD1cXFwiY3ctcGFsZXR0ZVxcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImN3X19jb2xvci1jb2Rlc1xcXCIgaWQ9XFxcImN3LWNvbG9yLWNvZGVzXFxcIj48L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICBpZiAob3B0aW9ucy5tYXliZU5lZWRRdW90ZXMgJiYgL1tcXHRcXG5cXGZcXHIgXCInPTw+YF0vLnRlc3QodXJsKSkge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJpbXBvcnQgc3RhdGUgZnJvbSAnLi4vc3RhdGUuanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoaGFybW9ueSkgPT4ge1xyXG4gIGlmIChoYXJtb255ID09PSAnY29tcGxlbWVudGFyeScpIHtcclxuICAgIHN0YXRlLndyaXRlKCdoYXJtb255JywgJ2NvbXBsZW1lbnRhcnknKVxyXG4gIH1cclxuICBpZiAoaGFybW9ueSA9PT0gJ3RyaWFkaWMnKSB7XHJcbiAgICBzdGF0ZS53cml0ZSgnaGFybW9ueScsICd0cmlhZGljJylcclxuICB9XHJcbiAgaWYgKGhhcm1vbnkgPT09ICdhbmFsb2dvdXMnKSB7XHJcbiAgICBzdGF0ZS53cml0ZSgnaGFybW9ueScsICdhbmFsb2dvdXMnKVxyXG4gIH1cclxuICBpZiAoaGFybW9ueSA9PT0gJ3RldHJhZGljJykge1xyXG4gICAgc3RhdGUud3JpdGUoJ2hhcm1vbnknLCAndGV0cmFkaWMnKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgc3RhdGUgZnJvbSAnLi4vc3RhdGUuanMnXHJcbmltcG9ydCB7IGNhbGNDaXJjbGVCb3VuZHMgfSBmcm9tICcuLi91dGlsL21hdGhVdGlsLmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHsgb2Zmc2V0WCwgb2Zmc2V0WSB9KSA9PiB7XHJcbiAgY29uc3QgcmFkaXVzID0gc3RhdGUucmVhZCgncmFkaXVzJylcclxuICBpZiAoIWNhbGNDaXJjbGVCb3VuZHMob2Zmc2V0WCAtIHJhZGl1cywgb2Zmc2V0WSAtIHJhZGl1cywgcmFkaXVzKSkge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIGlmICghc3RhdGUucmVhZCgnaXNNb3VzZURvd24nKSkge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICBzdGF0ZS53cml0ZSgnbW91c2VYJywgb2Zmc2V0WClcclxuICBzdGF0ZS53cml0ZSgnbW91c2VZJywgb2Zmc2V0WSlcclxufVxyXG4iLCJpbXBvcnQgeyBjYWxjQ2lyY2xlQm91bmRzIH0gZnJvbSAnLi4vdXRpbC9tYXRoVXRpbC5qcydcclxuaW1wb3J0IHsgY2FydGVzaWFuMlBvbGFyIH0gZnJvbSAnLi4vdXRpbC9tYXRoVXRpbC5qcydcclxuaW1wb3J0IG1hcENvb3JkcyBmcm9tICcuLi9tb2RlbHMvbWFwQ29vcmRzLmpzJ1xyXG5pbXBvcnQgZHJhd1RhcmdldHMgZnJvbSAnLi4vbW9kZWxzL2RyYXdUYXJnZXRzLmpzJ1xyXG5pbXBvcnQgc3RhdGUgZnJvbSAnLi4vc3RhdGUuanMnXHJcbmltcG9ydCByZXNldFdoZWVsIGZyb20gJy4uL21vZGVscy9yZXNldFdoZWVsLmpzJ1xyXG5pbXBvcnQgY29sb3VyUGlja2VyIGZyb20gJy4uL21vZGVscy9jb2xvdXJQaWNrZXIuanMnXHJcbmltcG9ydCBnZW5lcmF0ZVBhbGV0dGUgZnJvbSAnLi4vbW9kZWxzL2dlbmVyYXRlUGFsZXR0ZS5qcydcclxuaW1wb3J0IHBvcHVsYXRlQ29sb3JDb2RlcyBmcm9tICcuLi92aWV3cy9wb3B1bGF0ZUNvbG9yQ29kZS5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChmb3JjZSA9IGZhbHNlKSA9PiB7XHJcbiAgLy8gV2hlcmUgb24gdGhlIGNhbnZhcyB1c2VyIGNsaWNrZWRcclxuICAvLyBJcyBjbGljayB3aXRoaW4gYm91bmRzIG9mIHdoZWVsP1xyXG4gIC8vIFVwZGF0ZSBTdGF0ZVxyXG4gIC8vIGdldCBwb3NpdGlvbiBvZiBtYWluIHRhcmdldFxyXG4gIC8vIGdldCBwb3NpdGlvbiBvZiBzZWNvbmRhcnkgdGFyZ2V0L3NcclxuICAvLyBjYWxsIHVwZGF0ZSBjYW52YXMgd2l0aCBuZXcgZGF0YVxyXG5cclxuICBjb25zdCBidWZmZXIgPSAxXHJcbiAgY29uc3QgeCA9IHN0YXRlLnJlYWQoJ21vdXNlWCcpXHJcbiAgY29uc3QgeSA9IHN0YXRlLnJlYWQoJ21vdXNlWScpXHJcblxyXG4gIGNvbnN0IHJhZGl1cyA9IHN0YXRlLnJlYWQoJ3JhZGl1cycpXHJcbiAgaWYgKCFjYWxjQ2lyY2xlQm91bmRzKHggLSByYWRpdXMsIHkgLSByYWRpdXMsIHJhZGl1cyAtIGJ1ZmZlcikpIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBpZiAoIXN0YXRlLnJlYWQoJ2lzTW91c2VEb3duJykgJiYgIWZvcmNlKSB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIC8vIERlbGV0ZXMgY3VycmVudCBwYWludGVkIHRhcmdldHNcclxuICBjb25zdCBjdHggPSBzdGF0ZS5yZWFkKCdjdHgnKVxyXG4gIGNvbnN0IHdoZWVsSW1hZ2UgPSBzdGF0ZS5yZWFkKCd3aGVlbEltYWdlJylcclxuXHJcbiAgcmVzZXRXaGVlbChjdHgsIHdoZWVsSW1hZ2UpXHJcblxyXG4gIHN0YXRlLndyaXRlKCdtb3VzZVgnLCB4KVxyXG4gIHN0YXRlLndyaXRlKCdtb3VzZVknLCB5KVxyXG5cclxuICAvLyAgIHIgYW5kIHRoZXRhIGFyZSBwb2xhciBjb29yZGluYXRlcyB1c2VkIGluIHVuaXQgY2lyY2xlIGNhbGN1bGF0aW9uc1xyXG4gIGNvbnN0IHsgciwgdGhldGEgfSA9IGNhcnRlc2lhbjJQb2xhcih4LCB5KVxyXG5cclxuICAvLyBTdG9yZSBuZXcgcGF0aHMgYXJyYXkgaW4gc3RhdGVcclxuICBjb25zdCBuZXdUYXJnZXRzID0gbWFwQ29vcmRzKHIsIHRoZXRhLCBzdGF0ZS5yZWFkKCdyYWRpdXMnKSwgc3RhdGUucmVhZCgnaGFybW9ueScpKVxyXG4gIHN0YXRlLndyaXRlKCd0YXJnZXRzJywgbmV3VGFyZ2V0cylcclxuXHJcbiAgY29uc3QgY29sb3JzID0gY29sb3VyUGlja2VyKGN0eCwgbmV3VGFyZ2V0cylcclxuXHJcbiAgc3RhdGUud3JpdGUoJ2NvbG9ycycsIGNvbG9ycylcclxuXHJcbiAgLy8gICBQYWludHMgbmV3IHRhcmdldHMgb24gY2FudmFzXHJcbiAgZHJhd1RhcmdldHMoc3RhdGUucmVhZCgnY3R4JyksIHN0YXRlLnJlYWQoJ3RhcmdldHMnKSlcclxuXHJcbiAgLy8gUG9wdWxhdGUgY29sb3IgY29kZXNcclxuICBwb3B1bGF0ZUNvbG9yQ29kZXMoKVxyXG5cclxuICAvLyBQYWludHMgY29sb3JzIG9uIHBhbGV0dGVcclxuICBjb25zdCBwYWxldHRlID0gc3RhdGUucmVhZCgncm9vdCcpLmdldEVsZW1lbnRCeUlkKCdjdy1wYWxldHRlJylcclxuICBjb25zdCBwYWxsZXR0ZUNvbG9ycyA9IGdlbmVyYXRlUGFsZXR0ZShjb2xvcnMpXHJcbiAgcGFsZXR0ZS5zdHlsZS5iYWNrZ3JvdW5kID0gcGFsbGV0dGVDb2xvcnNcclxuICBwYWxldHRlLnNldEF0dHJpYnV0ZSgnY29sb3JzJywgY29sb3JzKVxyXG59XHJcbiIsImltcG9ydCB1cGRhdGVUYXJnZXRzIGZyb20gJy4vY29udHJvbGxlcnMvdXBkYXRlVGFyZ2V0cy5qcydcclxuaW1wb3J0IGdlbmVyYXRlV2hlZWxJbWFnZSBmcm9tICcuL21vZGVscy9nZW5lcmF0ZVdoZWVsSW1hZ2UuanMnXHJcbmltcG9ydCBzdGF0ZSBmcm9tICcuL3N0YXRlLmpzJ1xyXG5pbXBvcnQgeyBjcmVhdGVDb29yZENvbnZlcnNpb25NYXBzIH0gZnJvbSAnLi91dGlsL21hdGhVdGlsLmpzJ1xyXG5pbXBvcnQgcmVnaXN0ZXJBbGxFbGVtZW50cyBmcm9tICcuL3ZpZXdzL3JlZ2lzdGVyQWxsRWxlbWVudHMuanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCAocm9vdCkgPT4ge1xyXG4gIC8vIFNldHMgdGhlIGFwcHMgcm9vdCBpZiBnaXZlbi4gVXNlZnVsIGZvciBlbmNhcHN1bGF0aW5nIGNvbXBvbmVudCB0byBzaGFkb3dEb21cclxuICBpZiAocm9vdCkge1xyXG4gICAgc3RhdGUud3JpdGUoJ3Jvb3QnLCByb290KVxyXG4gIH0gZWxzZSB7XHJcbiAgICBzdGF0ZS53cml0ZSgncm9vdCcsIGRvY3VtZW50KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2FudmFzID0gc3RhdGUucmVhZCgncm9vdCcpLmdldEVsZW1lbnRCeUlkKCdjdy1jb2xvci13aGVlbCcpXHJcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcclxuICBzdGF0ZS53cml0ZSgnY2FudmFzJywgY2FudmFzKVxyXG4gIHN0YXRlLndyaXRlKCdjdHgnLCBjdHgpXHJcblxyXG4gIGNvbnN0IHNpemUgPSBNYXRoLm1heChjYW52YXMub2Zmc2V0V2lkdGgsIGNhbnZhcy5vZmZzZXRIZWlnaHQpXHJcbiAgaWYgKGNhbnZhcy53aWR0aCAhPT0gY2FudmFzLmhlaWdodCkge1xyXG4gICAgY2FudmFzLndpZHRoID0gc2l6ZVxyXG4gICAgY2FudmFzLmhlaWdodCA9IHNpemVcclxuICAgIGNvbnNvbGUubG9nKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcclxuICB9XHJcbiAgY29uc3QgcmFkaXVzID0gc2l6ZSAvIDJcclxuICBzdGF0ZS53cml0ZSgncmFkaXVzJywgcmFkaXVzKVxyXG5cclxuICAvLyBTZXQgZGVmYXVsdCB4IGFuZCB5IHBvc2l0aW9uc1xyXG4gIHN0YXRlLndyaXRlKCdtb3VzZVgnLCByYWRpdXMpXHJcbiAgc3RhdGUud3JpdGUoJ21vdXNlWScsIHJhZGl1cyAtIGNhbnZhcy53aWR0aCAvIDUpXHJcblxyXG4gIC8vIEluaXQgY29udmVyc2lvbiBtYXAgaW5zaWRlIG1hdGhVdGlsLmpzXHJcbiAgY3JlYXRlQ29vcmRDb252ZXJzaW9uTWFwcyhjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQsIHNpemUgLyAyKVxyXG5cclxuICBjb25zdCB3aGVlbEltYWdlID0gZ2VuZXJhdGVXaGVlbEltYWdlKGNhbnZhcywgY3R4KVxyXG4gIHN0YXRlLndyaXRlKCd3aGVlbEltYWdlJywgd2hlZWxJbWFnZSlcclxuICBjdHgucHV0SW1hZ2VEYXRhKHdoZWVsSW1hZ2UsIDAsIDApXHJcblxyXG4gIHJlZ2lzdGVyQWxsRWxlbWVudHMoKVxyXG5cclxuICB1cGRhdGVUYXJnZXRzKHRydWUpXHJcblxyXG4gIHJldHVybiBzdGF0ZVxyXG59XHJcbiIsIi8vIElOQ09NUExFVEUgTU9EVUxFIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuY29uc3QgY29sb3VyUGlja2VyID0gKGN0eCwgdGFyZ2V0cykgPT4ge1xyXG4gIGNvbnN0IGNvbG91cnMgPSBbXVxyXG4gIHRhcmdldHMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgY29uc3QgcGl4ZWxEYXRhID0gY3R4LmdldEltYWdlRGF0YShlLngsIGUueSwgMSwgMSkuZGF0YVxyXG4gICAgY29sb3Vycy5wdXNoKGByZ2JhKCR7cGl4ZWxEYXRhWzBdfSwgJHtwaXhlbERhdGFbMV19LCAke3BpeGVsRGF0YVsyXX0sICR7cGl4ZWxEYXRhWzNdIC8gMjU1fSlgKVxyXG4gIH0pXHJcbiAgcmV0dXJuIGNvbG91cnNcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29sb3VyUGlja2VyXHJcbiIsImltcG9ydCBjYWxsQ2FudmFzRXZlbnRGdW5jdGlvbnMgZnJvbSAnLi4vdmlld3MvY2FsbENhbnZhc0V2ZW50RnVuY3Rpb25zLmpzJ1xyXG5pbXBvcnQgY2FsbEJ1dHRvbkV2ZW50RnVuY3Rpb25zIGZyb20gJy4uL3ZpZXdzL2NhbGxCdXR0b25FdmVudEZ1bmN0aW9ucy5qcydcclxuaW1wb3J0IGNhbGxTZWxlY3RFdmVudEZ1bmN0aW9ucyBmcm9tICcuLi92aWV3cy9jYWxsU2VsZWN0RXZlbnRGdW5jdGlvbnMuanMnXHJcblxyXG5jb25zdCBjcmVhdGVFdmVudCA9ICh0aGVFdmVudCwgY2IsIGVsZW1lbnQpID0+IHtcclxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhlRXZlbnQsIGNiKVxyXG4gIC8vIEFzc2lnbnMgdGhlIGNiIHdpdGhvdXQgcmVtb3ZpbmcgYW55IGV4aXN0aW5nIG1ldGhvZHNcclxuICByZXR1cm4geyB0aGVFdmVudCwgY2IgfVxyXG59XHJcblxyXG4vLyBSZXR1cm5zIGNiIGZ1bmN0aW9uIHVzZWQgaW4gZXZlbnQgbGlzdGVuZXJzXHJcbi8vIHdoaWxlIGtlZXBpbmcgaWQgaW4gbWVtb3J5IHdpdGggY2xvc3VyZVxyXG5jb25zdCBjcmVhdGVDQmZ1bmN0aW9uID0gKGVsZW1lbnQpID0+IHtcclxuICBjb25zdCB0YWcgPSBlbGVtZW50LnRhZ05hbWVcclxuXHJcbiAgcmV0dXJuIChlKSA9PiB7XHJcbiAgICBpZiAodGFnID09PSAnQ0FOVkFTJykge1xyXG4gICAgICBjYWxsQ2FudmFzRXZlbnRGdW5jdGlvbnMoZSlcclxuICAgIH1cclxuICAgIGlmICh0YWcgPT09ICdCVVRUT04nKSB7XHJcbiAgICAgIGNhbGxCdXR0b25FdmVudEZ1bmN0aW9ucyhlKVxyXG4gICAgfVxyXG4gICAgaWYgKHRhZyA9PT0gJ1NFTEVDVCcpIHtcclxuICAgICAgY2FsbFNlbGVjdEV2ZW50RnVuY3Rpb25zKGUpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVFdmVudHMgPSAoZWxlbWVudCwgbmV3RXZlbnQpID0+IHtcclxuICBjb25zdCBjYiA9IGNyZWF0ZUNCZnVuY3Rpb24oZWxlbWVudClcclxuICByZXR1cm4gY3JlYXRlRXZlbnQobmV3RXZlbnQsIGNiLCBlbGVtZW50KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFdmVudHNcclxuIiwiY29uc3QgY3JlYXRlU21hbGxDaXJjbGUgPSAoeyB4LCB5IH0sIHJhZGl1cykgPT4ge1xyXG4gIGNvbnN0IHBhdGggPSBuZXcgUGF0aDJEKClcclxuICBwYXRoLmFyYyh4LCB5LCByYWRpdXMsIDAsIDIgKiBNYXRoLlBJKVxyXG4gIHJldHVybiBwYXRoXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNtYWxsQ2lyY2xlXHJcbiIsImltcG9ydCBjcmVhdGVTbWFsbENpcmNsZSBmcm9tICcuL2NyZWF0ZVNtYWxsQ2lyY2xlLmpzJ1xyXG5cclxuY29uc3QgZHJhd1RhcmdldHMgPSAoY3R4LCBjb29yZHMpID0+IHtcclxuICBjb29yZHMuZm9yRWFjaCgoZSwgaSkgPT4ge1xyXG4gICAgbGV0IHBhdGhcclxuICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgIHBhdGggPSBjcmVhdGVTbWFsbENpcmNsZShlLCAxNSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBhdGggPSBjcmVhdGVTbWFsbENpcmNsZShlLCAxMClcclxuICAgIH1cclxuICAgIGN0eC5zdHJva2UocGF0aClcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkcmF3VGFyZ2V0c1xyXG4iLCJjb25zdCBnZW5lcmF0ZVBhbGV0dGUgPSAoY29sb3VycykgPT4ge1xyXG4gIGNvbnN0IG51bUNvbG9ycyA9IGNvbG91cnMubGVuZ3RoXHJcbiAgY29uc3QgcGF0Y2hTaXplID0gMTAwIC8gbnVtQ29sb3JzXHJcbiAgbGV0IGxpbmVhckdyYWRpZW50ID0gYGxpbmVhci1ncmFkaWVudCg5MGRlZyxgXHJcbiAgY29sb3Vycy5mb3JFYWNoKChjb2wsIGkpID0+IHtcclxuICAgIGxpbmVhckdyYWRpZW50ICs9IGAke2NvbH0gJHtNYXRoLmZsb29yKHBhdGNoU2l6ZSAqIGkpfSUsICR7Y29sfSAke01hdGguZmxvb3IoXHJcbiAgICAgIHBhdGNoU2l6ZSAqIChpICsgMSlcclxuICAgICl9JWBcclxuICAgIGlmIChpIDwgbnVtQ29sb3JzIC0gMSkge1xyXG4gICAgICBsaW5lYXJHcmFkaWVudCArPSBgLGBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxpbmVhckdyYWRpZW50ICs9IGApYFxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiBsaW5lYXJHcmFkaWVudFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZVBhbGV0dGVcclxuIiwiaW1wb3J0IGNvbnZlcnRIU1YyUkdCIGZyb20gJy4uL3V0aWwvY29udmVydEhTVjJSR0IuanMnXHJcbmltcG9ydCB7IGNhbGNBbmdsZURlZ3JlZXMsIGNhbGNDaXJjbGVCb3VuZHMsIGNhbGNIeXBvdGVudXNlIH0gZnJvbSAnLi4vdXRpbC9tYXRoVXRpbC5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChjYW52YXMsIGN0eCkgPT4ge1xyXG4gIGlmIChjYW52YXMud2lkdGggIT09IGNhbnZhcy5oZWlnaHQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignQ2FudmFzIHdpZHRoIGlzIG5vdCBlcXVhbCB0byBjYW52YXMgaGVpZ2h0JylcclxuICB9XHJcblxyXG4gIGNvbnN0IHJhZGl1cyA9IGNhbnZhcy53aWR0aCAvIDJcclxuICBjb25zdCBpbWFnZSA9IGN0eC5jcmVhdGVJbWFnZURhdGEoMiAqIHJhZGl1cywgMiAqIHJhZGl1cylcclxuXHJcbiAgLy8gVHJhdmVyc2VzIGVhY2ggcGl4ZWwgb25lIGxpbmUgYXQgYSB0aW1lIGxlZnQgdG8gcmlnaHRcclxuICBmb3IgKGxldCB4ID0gLXJhZGl1czsgeCA8IHJhZGl1czsgeCArPSAxKSB7XHJcbiAgICBmb3IgKGxldCB5ID0gLXJhZGl1czsgeSA8IHJhZGl1czsgeSArPSAxKSB7XHJcbiAgICAgIGlmICghY2FsY0NpcmNsZUJvdW5kcyh4LCB5LCByYWRpdXMpKSB7XHJcbiAgICAgICAgY29udGludWVcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gR2V0J3MgdGhlIGN1cnJlbnQgbGluZSBhbmQgcG9zaXRpb24gb24gaXRcclxuICAgICAgLy8gTXVsdGlwbGllcyBieSA0IGJlY2F1c2UgZXZlcnkgcGl4ZWwgaXMgcmVwcmVzZW50ZWQgYnkgNCBjb2xvdXIgY2hhbm5lbHNcclxuICAgICAgY29uc3QgaW5kZXggPSAocmFkaXVzICogMiAqICh4ICsgcmFkaXVzKSArICh5ICsgcmFkaXVzKSkgKiA0XHJcbiAgICAgIC8vIEh1ZSBpcyBkZWdyZWVzIGFyb3VuZCBjaXJjbGVcclxuICAgICAgY29uc3QgaHVlID0gTWF0aC5mbG9vcihjYWxjQW5nbGVEZWdyZWVzKHgsIHkpKVxyXG4gICAgICBjb25zdCByID0gY2FsY0h5cG90ZW51c2UoeCwgeSlcclxuICAgICAgLy8gU2F0dXJhdGlvbiBpcyBoaWdoZXN0IHdoZW4gciBpcyBjbG9zZXN0IHRvIHJhZGl1c1xyXG4gICAgICBjb25zdCBzYXR1cmF0aW9uID0gciAvIHJhZGl1c1xyXG5cclxuICAgICAgbGV0IFtyZWQsIGdyZWVuLCBibHVlXSA9IGNvbnZlcnRIU1YyUkdCKGh1ZSwgc2F0dXJhdGlvbiwgMSlcclxuICAgICAgbGV0IGFscGhhID0gMjU1XHJcbiAgICAgIGltYWdlLmRhdGFbaW5kZXggKyAwXSA9IHJlZFxyXG4gICAgICBpbWFnZS5kYXRhW2luZGV4ICsgMV0gPSBncmVlblxyXG4gICAgICBpbWFnZS5kYXRhW2luZGV4ICsgMl0gPSBibHVlXHJcbiAgICAgIGltYWdlLmRhdGFbaW5kZXggKyAzXSA9IGFscGhhXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBpbWFnZVxyXG59XHJcbiIsImltcG9ydCB7IHBvbGFyMkNhcnRlc2lhbiwgdW5jZW50ZXJDYXJ0ZXNpYW5Db29yZHMgfSBmcm9tICcuLi91dGlsL21hdGhVdGlsLmpzJ1xyXG5cclxuY29uc3QgZ2V0VHJpYWRDb29yZHMgPSAociwgdGhldGEsIHJhZGl1cykgPT4ge1xyXG4gIGNvbnN0IHRyaWFkMVBvbGFyVGhldGEgPSAodGhldGEgKyBNYXRoLlBJICogMC42NjYpICUgKDIgKiBNYXRoLlBJKVxyXG4gIGNvbnN0IHRyaWFkMlBvbGFyVGhldGEgPSAodGhldGEgKyBNYXRoLlBJICogMS4zMzMpICUgKDIgKiBNYXRoLlBJKVxyXG4gIGNvbnN0IHRyaWFkMUNvb3JkcyA9IHVuY2VudGVyQ2FydGVzaWFuQ29vcmRzKHBvbGFyMkNhcnRlc2lhbihyLCB0cmlhZDFQb2xhclRoZXRhKSwgcmFkaXVzKVxyXG4gIGNvbnN0IHRyaWFkMkNvb3JkcyA9IHVuY2VudGVyQ2FydGVzaWFuQ29vcmRzKHBvbGFyMkNhcnRlc2lhbihyLCB0cmlhZDJQb2xhclRoZXRhKSwgcmFkaXVzKVxyXG4gIHJldHVybiBbdHJpYWQxQ29vcmRzLCB0cmlhZDJDb29yZHNdXHJcbn1cclxuXHJcbmNvbnN0IGdldENvbXBsZW1lbnRhcnlDb29yZHMgPSAociwgdGhldGEsIHJhZGl1cykgPT4ge1xyXG4gIGNvbnN0IGNvbXBsZW1lbnRhcnlQb2xhclRoZXRhID0gKHRoZXRhICsgTWF0aC5QSSkgJSAoMiAqIE1hdGguUEkpXHJcbiAgY29uc3QgY29tcGxlbWVudGFyeUNvb3JkcyA9IHVuY2VudGVyQ2FydGVzaWFuQ29vcmRzKFxyXG4gICAgcG9sYXIyQ2FydGVzaWFuKHIsIGNvbXBsZW1lbnRhcnlQb2xhclRoZXRhKSxcclxuICAgIHJhZGl1c1xyXG4gIClcclxuXHJcbiAgcmV0dXJuIFtjb21wbGVtZW50YXJ5Q29vcmRzXVxyXG59XHJcbmNvbnN0IGdldEFuYWxvZ291c0Nvb3JkcyA9IChyLCB0aGV0YSwgcmFkaXVzKSA9PiB7XHJcbiAgY29uc3QgYW5hbG9nb3VzMVBvbGFyVGhldGEgPSAodGhldGEgKyBNYXRoLlBJIC8gNikgJSAoMiAqIE1hdGguUEkpXHJcbiAgY29uc3QgYW5hbG9nb3VzMlBvbGFyVGhldGEgPSAodGhldGEgKyBNYXRoLlBJIC8gLTYpICUgKDIgKiBNYXRoLlBJKVxyXG4gIGNvbnN0IGFuYWxvZ291czFDb29yZHMgPSB1bmNlbnRlckNhcnRlc2lhbkNvb3Jkcyhwb2xhcjJDYXJ0ZXNpYW4ociwgYW5hbG9nb3VzMVBvbGFyVGhldGEpLCByYWRpdXMpXHJcbiAgY29uc3QgYW5hbG9nb3VzMkNvb3JkcyA9IHVuY2VudGVyQ2FydGVzaWFuQ29vcmRzKHBvbGFyMkNhcnRlc2lhbihyLCBhbmFsb2dvdXMyUG9sYXJUaGV0YSksIHJhZGl1cylcclxuXHJcbiAgcmV0dXJuIFthbmFsb2dvdXMxQ29vcmRzLCBhbmFsb2dvdXMyQ29vcmRzXVxyXG59XHJcbmNvbnN0IGdldFRldHJhZGljQ29vcmRzID0gKHIsIHRoZXRhLCByYWRpdXMpID0+IHtcclxuICBjb25zdCB0ZXRyYWRpYzFQb2xhclRoZXRhID0gKHRoZXRhICsgTWF0aC5QSSAvIDIpICUgKDIgKiBNYXRoLlBJKVxyXG4gIGNvbnN0IHRldHJhZGljMlBvbGFyVGhldGEgPSAodGhldGEgKyBNYXRoLlBJKSAlICgyICogTWF0aC5QSSlcclxuICBjb25zdCB0ZXRyYWRpYzNQb2xhclRoZXRhID0gKHRoZXRhIC0gTWF0aC5QSSAvIDIpICUgKDIgKiBNYXRoLlBJKVxyXG4gIGNvbnN0IHRldHJhZGljMUNvb3JkcyA9IHVuY2VudGVyQ2FydGVzaWFuQ29vcmRzKHBvbGFyMkNhcnRlc2lhbihyLCB0ZXRyYWRpYzFQb2xhclRoZXRhKSwgcmFkaXVzKVxyXG4gIGNvbnN0IHRldHJhZGljMkNvb3JkcyA9IHVuY2VudGVyQ2FydGVzaWFuQ29vcmRzKHBvbGFyMkNhcnRlc2lhbihyLCB0ZXRyYWRpYzJQb2xhclRoZXRhKSwgcmFkaXVzKVxyXG4gIGNvbnN0IHRldHJhZGljM0Nvb3JkcyA9IHVuY2VudGVyQ2FydGVzaWFuQ29vcmRzKHBvbGFyMkNhcnRlc2lhbihyLCB0ZXRyYWRpYzNQb2xhclRoZXRhKSwgcmFkaXVzKVxyXG5cclxuICByZXR1cm4gW3RldHJhZGljMUNvb3JkcywgdGV0cmFkaWMyQ29vcmRzLCB0ZXRyYWRpYzNDb29yZHNdXHJcbn1cclxuXHJcbmNvbnN0IG1hcENvb3JkcyA9IChyLCB0aGV0YSwgcmFkaXVzLCB0eXBlID0gJ2NvbXBsZW1lbnRhcnknKSA9PiB7XHJcbiAgLy8gSW5kZXggMCBpcyBtYWluIHRhcmdldFxyXG4gIGNvbnN0IGNvb3JkcyA9IFtdXHJcbiAgY29uc3QgbWFpblRhcmdldCA9IHVuY2VudGVyQ2FydGVzaWFuQ29vcmRzKHBvbGFyMkNhcnRlc2lhbihyLCB0aGV0YSksIHJhZGl1cylcclxuICBjb29yZHMucHVzaChtYWluVGFyZ2V0KVxyXG4gIGlmICh0eXBlID09PSAndHJpYWRpYycpIGNvb3Jkcy5wdXNoKC4uLmdldFRyaWFkQ29vcmRzKHIsIHRoZXRhLCByYWRpdXMpKVxyXG4gIGlmICh0eXBlID09PSAnY29tcGxlbWVudGFyeScpIGNvb3Jkcy5wdXNoKC4uLmdldENvbXBsZW1lbnRhcnlDb29yZHMociwgdGhldGEsIHJhZGl1cykpXHJcbiAgaWYgKHR5cGUgPT09ICdhbmFsb2dvdXMnKSBjb29yZHMucHVzaCguLi5nZXRBbmFsb2dvdXNDb29yZHMociwgdGhldGEsIHJhZGl1cykpXHJcbiAgaWYgKHR5cGUgPT09ICd0ZXRyYWRpYycpIGNvb3Jkcy5wdXNoKC4uLmdldFRldHJhZGljQ29vcmRzKHIsIHRoZXRhLCByYWRpdXMpKVxyXG5cclxuICByZXR1cm4gY29vcmRzXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1hcENvb3Jkc1xyXG4iLCJjb25zdCByZXNldFdoZWVsID0gKGN0eCwgd2hlZWxJbWFnZSkgPT4ge1xyXG4gIGN0eC5wdXRJbWFnZURhdGEod2hlZWxJbWFnZSwgMCwgMClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVzZXRXaGVlbFxyXG4iLCJjb25zdCBzdGF0ZSA9IHtcclxuICByb290OiBudWxsLFxyXG4gIGNhbnZhczogbnVsbCxcclxuICBjdHg6IG51bGwsXHJcbiAgY29sb3JzOiBbXSxcclxuICBldmVudExpc3RlbmVyczoge30sXHJcbiAgd2hlZWxJbWFnZTogbnVsbCxcclxuICB0YXJnZXRzOiBbXSxcclxuICBtb3VzZVg6IG51bGwsXHJcbiAgbW91c2VZOiBudWxsLFxyXG4gIHJhZGl1czogbnVsbCxcclxuICBpc01vdXNlRG93bjogbnVsbCxcclxuICBoYXJtb255OiAndHJpYWRpYycsXHJcbiAgZWxlbWVudHM6IFtcclxuICAgIHtcclxuICAgICAgaWQ6ICdjdy1jb2xvci13aGVlbCcsXHJcbiAgICAgIGV2ZW50czogWydtb3VzZW1vdmUnLCAnbW91c2Vkb3duJywgJ21vdXNldXAnLCAnbW91c2VsZWF2ZSddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ2N3LWJ0bi1jb21wbGVtZW50YXJ5JyxcclxuICAgICAgZXZlbnRzOiBbJ2NsaWNrJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnY3ctYnRuLXRyaWFkaWMnLFxyXG4gICAgICBldmVudHM6IFsnY2xpY2snXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICdjdy1idG4tdGV0cmFkaWMnLFxyXG4gICAgICBldmVudHM6IFsnY2xpY2snXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICdjdy1idG4tYW5hbG9nb3VzJyxcclxuICAgICAgZXZlbnRzOiBbJ2NsaWNrJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnY3ctcGFsZXR0ZScsXHJcbiAgICAgIGV2ZW50czogWydjbGljayddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ2N3LXNlbGVjdC1oYXJtb255JyxcclxuICAgICAgZXZlbnRzOiBbJ2NoYW5nZSddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ2N3LWNvbG9yLWNvZGVzJyxcclxuICAgICAgZXZlbnRzOiBbJ2NsaWNrJ11cclxuICAgIH1cclxuICBdXHJcbn1cclxuXHJcbmNvbnN0IHJlYWQgPSAoa2V5KSA9PiB7XHJcbiAgaWYgKGtleSBpbiBzdGF0ZSkge1xyXG4gICAgcmV0dXJuIHN0YXRlW2tleV1cclxuICB9IGVsc2Uge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBUcmllZCB0byByZWFkIHByb3BlcnR5ICR7a2V5fS4gSXQgZG9lc24ndCBleGlzdGApXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCB3cml0ZSA9IChrZXksIHZhbHVlKSA9PiB7XHJcbiAgaWYgKGtleSBpbiBzdGF0ZSkge1xyXG4gICAgc3RhdGVba2V5XSA9IHZhbHVlXHJcbiAgfSBlbHNlIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgVHJpZWQgdG8gd3JpdGUgcHJvcGVydHkgJHtrZXl9LiBJdCBkb2Vzbid0IGV4aXN0YClcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHdyaXRlRXZlbnQgPSAoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gIGlmIChrZXkgaW4gc3RhdGUuZXZlbnRzKSB7XHJcbiAgICBzdGF0ZS5ldmVudHNba2V5XSA9IHZhbHVlXHJcbiAgfSBlbHNlIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgVHJpZWQgdG8gd3JpdGUgcHJvcGVydHkgJHtrZXl9IGluICR7c3RhdGUuZXZlbnRzfS4gSXQgZG9lc24ndCBleGlzdGApXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCByZWFkRXZlbnQgPSAoa2V5KSA9PiB7XHJcbiAgaWYgKGtleSBpbiBzdGF0ZS5ldmVudHMpIHtcclxuICAgIC8vIFJldHVybnMgc2hhbGxvdyBjb3B5LiBPcHRpbmcgb3V0IG9mIGRlZXAgY29weSBmb3IgcGVyZm9ybWFuY2VcclxuICAgIHJldHVybiB7IC4uLnN0YXRlLmV2ZW50c1trZXldIH1cclxuICB9IGVsc2Uge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBUcmllZCB0byByZWFkIHByb3BlcnR5ICR7a2V5fSBpbiAke3N0YXRlLmV2ZW50c30uIEl0IGRvZXNuJ3QgZXhpc3RgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgeyB3cml0ZSwgcmVhZCwgd3JpdGVFdmVudCwgcmVhZEV2ZW50IH1cclxuIiwiY29uc3QgY29udmVydEhTVjJSR0IgPSAoaHVlLCBzYXR1cmF0aW9uLCB2YWx1ZSkgPT4ge1xyXG4gICAgbGV0IGNocm9tYSA9IHZhbHVlICogc2F0dXJhdGlvbjtcclxuICAgIGxldCBodWUxID0gaHVlIC8gNjA7XHJcbiAgICBsZXQgeCA9IGNocm9tYSAqICgxLSBNYXRoLmFicygoaHVlMSAlIDIpIC0gMSkpO1xyXG4gICAgbGV0IHIxLCBnMSwgYjE7XHJcbiAgICBpZiAoaHVlMSA+PSAwICYmIGh1ZTEgPD0gMSkge1xyXG4gICAgICAoW3IxLCBnMSwgYjFdID0gW2Nocm9tYSwgeCwgMF0pO1xyXG4gICAgfSBlbHNlIGlmIChodWUxID49IDEgJiYgaHVlMSA8PSAyKSB7XHJcbiAgICAgIChbcjEsIGcxLCBiMV0gPSBbeCwgY2hyb21hLCAwXSk7XHJcbiAgICB9IGVsc2UgaWYgKGh1ZTEgPj0gMiAmJiBodWUxIDw9IDMpIHtcclxuICAgICAgKFtyMSwgZzEsIGIxXSA9IFswLCBjaHJvbWEsIHhdKTtcclxuICAgIH0gZWxzZSBpZiAoaHVlMSA+PSAzICYmIGh1ZTEgPD0gNCkge1xyXG4gICAgICAoW3IxLCBnMSwgYjFdID0gWzAsIHgsIGNocm9tYV0pO1xyXG4gICAgfSBlbHNlIGlmIChodWUxID49IDQgJiYgaHVlMSA8PSA1KSB7XHJcbiAgICAgIChbcjEsIGcxLCBiMV0gPSBbeCwgMCwgY2hyb21hXSk7XHJcbiAgICB9IGVsc2UgaWYgKGh1ZTEgPj0gNSAmJiBodWUxIDw9IDYpIHtcclxuICAgICAgKFtyMSwgZzEsIGIxXSA9IFtjaHJvbWEsIDAsIHhdKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IG0gPSB2YWx1ZSAtIGNocm9tYTtcclxuICAgIGxldCBbcixnLGJdID0gW3IxK20sIGcxK20sIGIxK21dO1xyXG4gICAgXHJcbiBcclxuICAgIHJldHVybiBbMjU1KnIsMjU1KmcsMjU1KmJdO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY29udmVydEhTVjJSR0IiLCJjb25zdCBmb3JtYXRSQkdBU3RyaW5nID0gKHN0cmluZykgPT4ge1xyXG4gIGxldCBudW1iZXJzID0gc3RyaW5nLnNsaWNlKDQsIDE3KVxyXG4gIG51bWJlcnMgKz0gJyknXHJcbiAgbnVtYmVycyA9IG51bWJlcnMuc3BsaXQoJyAnKS5qb2luKCcnKVxyXG4gIHJldHVybiBudW1iZXJzXHJcbn1cclxuXHJcbmV4cG9ydCB7IGZvcm1hdFJCR0FTdHJpbmcgfVxyXG4iLCIvLyBTVEFURVxyXG5jb25zdCBjYXJ0ZXNpYW4yUG9sYXJNYXAgPSB7fVxyXG5cclxuY29uc3QgY2FsY0h5cG90ZW51c2UgPSAoeCwgeSkgPT4ge1xyXG4gIC8vIFB5dGhhZ29yZWFuIFRoZW9yZW0gYV4yICsgYl4yID0gY14yXHJcbiAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5KVxyXG59XHJcblxyXG5jb25zdCBjYWxjQW5nbGVSYWRpYW5zID0gKHgsIHkpID0+IHtcclxuICByZXR1cm4gTWF0aC5hdGFuMih5LCB4KVxyXG59XHJcblxyXG5jb25zdCBjYWxjQW5nbGVEZWdyZWVzID0gKHgsIHkpID0+IHtcclxuICBjb25zdCByYWRpYW5zID0gLWNhbGNBbmdsZVJhZGlhbnMoeCwgeSlcclxuICAvLyBDb252ZXJ0IHJhZGlhbnMgdG8gZGVncmVlc1xyXG4gIHJldHVybiAoMTgwIC8gTWF0aC5QSSkgKiAocmFkaWFucyArIE1hdGguUEkpXHJcbn1cclxuXHJcbmNvbnN0IGNhbGNDaXJjbGVCb3VuZHMgPSAoeCwgeSwgcmFkaXVzKSA9PiB7XHJcbiAgY29uc3QgciA9IGNhbGNIeXBvdGVudXNlKHgsIHkpXHJcbiAgcmV0dXJuIHIgPCByYWRpdXNcclxufVxyXG5cclxuLy8gcG9sYXIyQ2FydGVzaWFuIGNvbnZlcnRzIHRvIGNhcnRlc2lhbiBjb29yZHMgd2l0aCAwIGF0IGNlbnRyZS5cclxuLy8gVGhpcyBicmluZ3MgMCBiYWNrIHRvIHRvcCBsZWZ0XHJcbmNvbnN0IHVuY2VudGVyQ2FydGVzaWFuQ29vcmRzID0gKHsgeCwgeSB9LCByYWRpdXMpID0+IHtcclxuICB5ID0geSArIHJhZGl1c1xyXG4gIHggPSB4ICsgcmFkaXVzXHJcbiAgcmV0dXJuIHsgeCwgeSB9XHJcbn1cclxuXHJcbmNvbnN0IHBvbGFyMkNhcnRlc2lhbiA9IChyLCB0aGV0YSkgPT4ge1xyXG4gIGNvbnN0IHggPSByICogTWF0aC5jb3ModGhldGEpXHJcbiAgY29uc3QgeSA9IHIgKiBNYXRoLnNpbih0aGV0YSlcclxuICByZXR1cm4geyB4LCB5IH1cclxufVxyXG5cclxuY29uc3QgY2FydGVzaWFuMlBvbGFyID0gKHgsIHkpID0+IHtcclxuICByZXR1cm4gY2FydGVzaWFuMlBvbGFyTWFwW2NvbWJpbmVWYWx1ZXMoeCwgeSldXHJcbn1cclxuXHJcbmNvbnN0IGNvbWJpbmVWYWx1ZXMgPSAoeCwgeSkgPT4ge1xyXG4gIHJldHVybiAoeCA8PCAxNikgfCB5XHJcbn1cclxuXHJcbi8vIE1hcHMgZWFjaCBjYXJ0ZXNpYW4gY29vcmQgdG8gYSBwb2xhciBjb29yZC4gVGhlIGtleSBpcyBhIG1hcHBpbmcgb2YgdGhlIHggYW5kIHkgdmFsdWVzXHJcbi8vIGFuZCB0byByZXRyaWV2ZSBwb2xhciBjb29yZHMgeW91IG11c3QgdXNlIHRoZSBjb21iaW5lVmFsdWVzIGZ1bmN0aW9uIGluIG1hdGhVdGlscy5qc1xyXG5jb25zdCBjcmVhdGVDb29yZENvbnZlcnNpb25NYXBzID0gKHdpZHRoLCBoZWlnaHQsIHJhZGl1cykgPT4ge1xyXG4gIGZvciAobGV0IHggPSAwOyB4IDwgd2lkdGg7IHgrKykge1xyXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKykge1xyXG4gICAgICBjb25zdCByID0gY2FsY0h5cG90ZW51c2UoeCAtIHJhZGl1cywgeSAtIHJhZGl1cylcclxuICAgICAgY29uc3QgdGhldGEgPSBjYWxjQW5nbGVSYWRpYW5zKHggLSByYWRpdXMsIHkgLSByYWRpdXMpXHJcbiAgICAgIGNhcnRlc2lhbjJQb2xhck1hcFtjb21iaW5lVmFsdWVzKHgsIHkpXSA9IHsgciwgdGhldGEgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBjYWxjSHlwb3RlbnVzZSxcclxuICBjYWxjQW5nbGVEZWdyZWVzLFxyXG4gIGNhbGNDaXJjbGVCb3VuZHMsXHJcbiAgY3JlYXRlQ29vcmRDb252ZXJzaW9uTWFwcyxcclxuICBjb21iaW5lVmFsdWVzLFxyXG4gIHBvbGFyMkNhcnRlc2lhbixcclxuICBjYXJ0ZXNpYW4yUG9sYXIsXHJcbiAgdW5jZW50ZXJDYXJ0ZXNpYW5Db29yZHNcclxufVxyXG4iLCJpbXBvcnQgdXBkYXRlSGFybW9ueSBmcm9tICcuLi9jb250cm9sbGVycy91cGRhdGVIYXJtb255LmpzJ1xyXG5pbXBvcnQgdXBkYXRlVGFyZ2V0cyBmcm9tICcuLi9jb250cm9sbGVycy91cGRhdGVUYXJnZXRzLmpzJ1xyXG5cclxuY29uc3QgY2xpY2sgPSAoZSkgPT4ge1xyXG4gIGNvbnN0IGlkID0gZS50YXJnZXQuaWRcclxuICBjb25zdCBoYXJtb255ID0gaWQubWF0Y2goLyhjb21wbGVtZW50YXJ5fHRyaWFkaWN8YW5hbG9nb3VzfHRldHJhZGljKS9nKVswXVxyXG4gIHVwZGF0ZUhhcm1vbnkoaGFybW9ueSlcclxuICB1cGRhdGVUYXJnZXRzKHRydWUpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChlKSA9PiB7XHJcbiAgY29uc3QgdHlwZSA9IGUudHlwZVxyXG5cclxuICBpZiAodHlwZSA9PT0gJ2NsaWNrJykgY2xpY2soZSlcclxufVxyXG4iLCJpbXBvcnQgdXBkYXRlTW91c2VQb3NpdGlvbiBmcm9tICcuLi9jb250cm9sbGVycy91cGRhdGVNb3VzZVBvc2l0aW9uLmpzJ1xyXG5pbXBvcnQgdXBkYXRlVGFyZ2V0cyBmcm9tICcuLi9jb250cm9sbGVycy91cGRhdGVUYXJnZXRzLmpzJ1xyXG4vLyBPbmx5IHVzZSBzdGF0ZSBmb3IgdmlldyBzcGVjaWZpYyBjaGFuZ2VzLiBpLmUuIHVwZGF0aW5nIG1vdXNlWCBvciBtb3VzZWRvd25cclxuaW1wb3J0IHN0YXRlIGZyb20gJy4uL3N0YXRlLmpzJ1xyXG5cclxuY29uc3QgbW91c2VNb3ZlID0gKGUpID0+IHtcclxuICB1cGRhdGVNb3VzZVBvc2l0aW9uKGUpXHJcbiAgdXBkYXRlVGFyZ2V0cygpXHJcbn1cclxuXHJcbmNvbnN0IG1vdXNlRG93biA9ICgpID0+IHtcclxuICBzdGF0ZS53cml0ZSgnaXNNb3VzZURvd24nLCB0cnVlKVxyXG4gIHVwZGF0ZVRhcmdldHMoKVxyXG59XHJcblxyXG5jb25zdCBtb3VzZVVwID0gKCkgPT4ge1xyXG4gIHN0YXRlLndyaXRlKCdpc01vdXNlRG93bicsIGZhbHNlKVxyXG59XHJcblxyXG5jb25zdCBtb3VzZUxlYXZlID0gKCkgPT4ge1xyXG4gIHN0YXRlLndyaXRlKCdpc01vdXNlRG93bicsIGZhbHNlKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoZSkgPT4ge1xyXG4gIGNvbnN0IHR5cGUgPSBlLnR5cGVcclxuICBpZiAodHlwZSA9PT0gJ21vdXNlbW92ZScpIG1vdXNlTW92ZShlKVxyXG4gIGlmICh0eXBlID09PSAnbW91c2Vkb3duJykgbW91c2VEb3duKGUpXHJcbiAgaWYgKHR5cGUgPT09ICdtb3VzZXVwJykgbW91c2VVcChlKVxyXG4gIGlmICh0eXBlID09PSAnbW91c2VsZWF2ZScpIG1vdXNlTGVhdmUoZSlcclxufVxyXG4iLCJpbXBvcnQgdXBkYXRlSGFybW9ueSBmcm9tICcuLi9jb250cm9sbGVycy91cGRhdGVIYXJtb255LmpzJ1xyXG5pbXBvcnQgdXBkYXRlVGFyZ2V0cyBmcm9tICcuLi9jb250cm9sbGVycy91cGRhdGVUYXJnZXRzLmpzJ1xyXG5cclxuY29uc3QgY2hhbmdlID0gKGUpID0+IHtcclxuICBjb25zdCBoYXJtb255ID0gZS50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKVxyXG4gIHVwZGF0ZUhhcm1vbnkoaGFybW9ueSlcclxuICB1cGRhdGVUYXJnZXRzKHRydWUpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChlKSA9PiB7XHJcbiAgY29uc3QgdHlwZSA9IGUudHlwZVxyXG5cclxuICBpZiAodHlwZSA9PT0gJ2NoYW5nZScpIGNoYW5nZShlKVxyXG59XHJcbiIsImltcG9ydCBzdGF0ZSBmcm9tICcuLi9zdGF0ZS5qcydcclxuaW1wb3J0IHsgZm9ybWF0UkJHQVN0cmluZyB9IGZyb20gJy4uL3V0aWwvZm9ybWF0dGluZy5qcydcclxuY29uc3QgcG9wdWxhdGVDb2xvckNvZGVzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvZGVDb250YWluZXIgPSBzdGF0ZS5yZWFkKCdyb290JykuZ2V0RWxlbWVudEJ5SWQoJ2N3LWNvbG9yLWNvZGVzJylcclxuICBjb2RlQ29udGFpbmVyLmlubmVyVGV4dCA9ICcnXHJcbiAgY29uc3QgY29sb3JzID0gc3RhdGUucmVhZCgnY29sb3JzJylcclxuICBjb25zb2xlLmxvZyhjb2xvcnMpXHJcbiAgY29sb3JzLmZvckVhY2goKGNvbCkgPT4ge1xyXG4gICAgY29uc3QgbmV3U3RyaW5nID0gZm9ybWF0UkJHQVN0cmluZyhjb2wpXHJcblxyXG4gICAgY29kZUNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBgPGRpdj4ke25ld1N0cmluZ308L2Rpdj5gKVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBvcHVsYXRlQ29sb3JDb2Rlc1xyXG4iLCJpbXBvcnQgY3JlYXRlRXZlbnRzIGZyb20gJy4uL21vZGVscy9jcmVhdGVFdmVudHMuanMnXHJcbmltcG9ydCBjcmVhdGVDYW52YXNFdmVudEZ1bmN0aW9ucyBmcm9tICcuL2NhbGxDYW52YXNFdmVudEZ1bmN0aW9ucy5qcydcclxuaW1wb3J0IHN0YXRlIGZyb20gJy4uL3N0YXRlLmpzJ1xyXG5cclxuY29uc3QgcmVnaXN0ZXJBbGxFbGVtZW50cyA9ICgpID0+IHtcclxuICBjb25zdCBlbGVtZW50cyA9IHN0YXRlLnJlYWQoJ2VsZW1lbnRzJylcclxuICBlbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IHN0YXRlLnJlYWQoJ3Jvb3QnKS5nZXRFbGVtZW50QnlJZChlbC5pZClcclxuICAgIC8vIENoZWNrcyBpZiBlbGVtZW50IGlzIHByZXNlbnQuIElmIG5vdCBub3RoaW5nIGlzIGdlbmVyYXRlZCBmb3IgaXRcclxuICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWwuZXZlbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgZXZlbnRzID0gY3JlYXRlRXZlbnRzKGVsZW1lbnQsIGVsLmV2ZW50c1tpXSlcclxuICAgICAgICAvLyBUT0RPIC0+IFByZXZlbnQgcHJldmlvdXMgZGF0YSBiZWluZyBsb3N0IG9uIHJld3JpdGVcclxuICAgICAgICAvLyBJbXBvcnRhbnQgZm9yIGRlc3Ryb3lpbmcgZXZlbnQgbGlzdGVuZXJzXHJcbiAgICAgICAgc3RhdGUud3JpdGUoJ2V2ZW50TGlzdGVuZXJzJywgZXZlbnRzKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJBbGxFbGVtZW50c1xyXG4iLCJleHBvcnQgZGVmYXVsdCAocm9vdCkgPT4ge1xyXG4gIGNvbnN0IGN1c3RvbVNlbGVjdCA9IHJvb3QuZ2V0RWxlbWVudEJ5SWQoJ2N3LXNlbGVjdC1jdXN0b20nKVxyXG4gIGNvbnN0IG5hdGl2ZVNlbGVjdCA9IHJvb3QuZ2V0RWxlbWVudEJ5SWQoJ2N3LXNlbGVjdC1oYXJtb255JylcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VsZWN0T3BlbiA9ICgpID0+IHtcclxuICAgIGN1c3RvbVNlbGVjdC5jbGFzc0xpc3QuYWRkKCdpc0FjdGl2ZScpXHJcbiAgICBjdXN0b21TZWxlY3Quc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU2VsZWN0Q2xvc2UgPSAoKSA9PiB7XHJcbiAgICBjdXN0b21TZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnaXNBY3RpdmUnKVxyXG4gICAgY3VzdG9tU2VsZWN0LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlVmFsdWVDaGFuZ2UgPSAobmV3VmFsKSA9PiB7XHJcbiAgICBuYXRpdmVTZWxlY3QudmFsdWUgPSBuZXdWYWxcclxuICAgIG5hdGl2ZVNlbGVjdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJywgeyB2aWV3OiB3aW5kb3csIGJ1YmJsZXM6IHRydWUgfSkpXHJcbiAgfVxyXG5cclxuICBuYXRpdmVTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcclxuICAgIGNvbnN0IG5ld1ZhbCA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgICBjdXN0b21TZWxlY3QudmFsdWUgPSBuZXdWYWxcclxuICAgIGN1c3RvbVNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0LWN1c3RvbV9fZGlzcGxheS10ZXh0JykuaW5uZXJUZXh0ID0gbmV3VmFsXHJcbiAgfSlcclxuXHJcbiAgcm9vdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBjb25zdCBpc1RhcmdldEN1c3RvbVNlbGVjdCA9IGUudGFyZ2V0LmNsb3Nlc3QoJyNjdy1zZWxlY3QtY3VzdG9tJylcclxuICAgIC8vIElmIGNsaWNrIGlzbid0IG9uIGN1c3RvbSBzZWxlY3QsIGRvbid0IGRvIGFueXRoaW5nXHJcbiAgICBpZiAoIWlzVGFyZ2V0Q3VzdG9tU2VsZWN0KSB7XHJcbiAgICAgIGhhbmRsZVNlbGVjdENsb3NlKClcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaXNBY3RpdmUgPSBjdXN0b21TZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdpc0FjdGl2ZScpXHJcbiAgICBpZiAoIWlzQWN0aXZlKSB7XHJcbiAgICAgIGhhbmRsZVNlbGVjdE9wZW4oKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaGFuZGxlU2VsZWN0Q2xvc2UoKVxyXG4gICAgfVxyXG4gICAgLy8gSWYgdGFyZ2V0IGlzIHRhcmdldCBvcHRpb25zIGdldCB2YWx1ZSBvZiBvcHRpb24gYW5kIHBhc3MgaXQgb250byBoYW5kbGVyIGZ1bmN0aW9uXHJcbiAgICBjb25zdCBpc1RhcmdldE9wdGlvbnMgPSBlLnRhcmdldC5jbG9zZXN0KCcuc2VsZWN0LWN1c3RvbV9fb3B0aW9ucycpXHJcbiAgICBpZiAoaXNUYXJnZXRPcHRpb25zKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQuY2xvc2VzdCgnLnNlbGVjdC1jdXN0b21fX29wdGlvbicpLmdldEF0dHJpYnV0ZSgndmFsdWUnKS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgIGhhbmRsZVZhbHVlQ2hhbmdlKHZhbHVlKVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC50YWdOYW1lICE9PSAnQ09MT1ItV0hFRUwnKSB7XHJcbiAgICAgIGhhbmRsZVNlbGVjdENsb3NlKClcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vLyByb290LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuLy8gICBjb25zdCBpc0N1c3RvbUN1c3RvbVNlbGVjdCA9IGUudGFyZ2V0LmNsb3Nlc3QoJyNjdy1zZWxlY3QtY3VzdG9tJylcclxuXHJcbi8vICAgLy8gcmV0dXJuIGlmIHRhcmdldCBpcyBub3QgY3VzdG9tIHNlbGVjdCBlbGVtZW50XHJcbi8vICAgaWYgKCFpc0N1c3RvbUN1c3RvbVNlbGVjdCkge1xyXG4vLyAgICAgaGFuZGxlU2VsZWN0Q2xvc2UoKVxyXG4vLyAgICAgcmV0dXJuXHJcbi8vICAgfVxyXG4vLyAgIGhhbmRsZVNlbGVjdE9wZW4oKVxyXG4vLyAgIGNvbnN0IG9wdGlvbiA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5zZWxlY3QtY3VzdG9tX19vcHRpb24nKVxyXG5cclxuLy8gICAvLyByZXR1cm4gaWYgdGFyZ2V0IGlzbid0IHNlbGVjdCBvcHRpb25cclxuLy8gICBpZiAoIW9wdGlvbikgcmV0dXJuXHJcblxyXG4vLyAgIGNvbnN0IHZhbHVlID0gb3B0aW9uLmdldEF0dHJpYnV0ZSgndmFsdWUnKVxyXG4vLyAgIGN1c3RvbVNlbGVjdC52YWx1ZSA9IHZhbHVlXHJcbi8vICAgY3VzdG9tU2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJ2RpdicpLmlubmVyVGV4dCA9IHZhbHVlXHJcbi8vICAgbmF0aXZlU2VsZWN0LnZhbHVlID0gdmFsdWVcclxuLy8gICBuYXRpdmVTZWxlY3QuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScsIHsgdmlldzogd2luZG93LCBidWJibGVzOiB0cnVlIH0pKVxyXG4vLyAgIGN1c3RvbVNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdpc0FjdGl2ZScpXHJcbi8vIH0pXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBjb3JlIGZyb20gJy4uLy4uL3NyYy9pbmRleC5qcydcclxuaW1wb3J0IGN1c3RvbVNlbGVjdCBmcm9tICcuL2N1c3RvbVNlbGVjdC5qcydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5jc3MnXHJcbmltcG9ydCBjdXN0b21TZWxlY3RTdHlsZXMgZnJvbSAnLi9jdXN0b20tc2VsZWN0LXN0eWxlcy5jc3MnXHJcbmltcG9ydCBIVE1MVGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZS5odG1sJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIGN1c3RvbUVsZW1lbnRzLmRlZmluZShcclxuICAgICdjb2xvci13aGVlbCcsXHJcbiAgICBjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKVxyXG5cclxuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJylcclxuICAgICAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBIVE1MVGVtcGxhdGVcclxuXHJcbiAgICAgICAgbGV0IHRlbXBsYXRlQ29udGVudCA9IHRlbXBsYXRlLmNvbnRlbnRcclxuICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KVxyXG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZCh0ZW1wbGF0ZUNvbnRlbnQpXHJcbiAgICAgICAgY29uc3Qgc3R5bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcclxuICAgICAgICBzdHlsZUVsLnRleHRDb250ZW50ID0gc3R5bGVzICsgY3VzdG9tU2VsZWN0U3R5bGVzXHJcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHN0eWxlRWwpXHJcbiAgICAgIH1cclxuICAgICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgY3VzdG9tU2VsZWN0KHRoaXMuc2hhZG93Um9vdClcclxuICAgICAgICBjb3JlKHRoaXMuc2hhZG93Um9vdClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
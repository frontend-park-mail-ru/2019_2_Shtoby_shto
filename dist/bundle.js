/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./src/modules/Utils/debug.css":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./src/modules/Utils/debug.css ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/modules/Utils/debug.css?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./src/style.css":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./src/style.css ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./src/views/BoardView/boardView.css":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./src/views/BoardView/boardView.css ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/views/BoardView/boardView.css?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./src/views/IndexView/index.css":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./src/views/IndexView/index.css ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/views/IndexView/index.css?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./src/views/LoginView/login.css":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./src/views/LoginView/login.css ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/views/LoginView/login.css?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./src/views/TrelloHeader/trelloHeader.css":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./src/views/TrelloHeader/trelloHeader.css ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/views/TrelloHeader/trelloHeader.css?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2");

/***/ }),

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar pug_has_own_property = Object.prototype.hasOwnProperty;\n\n/**\n * Merge two attribute objects giving precedence\n * to values in object `b`. Classes are special-cased\n * allowing for arrays and merging/joining appropriately\n * resulting in a string.\n *\n * @param {Object} a\n * @param {Object} b\n * @return {Object} a\n * @api private\n */\n\nexports.merge = pug_merge;\nfunction pug_merge(a, b) {\n  if (arguments.length === 1) {\n    var attrs = a[0];\n    for (var i = 1; i < a.length; i++) {\n      attrs = pug_merge(attrs, a[i]);\n    }\n    return attrs;\n  }\n\n  for (var key in b) {\n    if (key === 'class') {\n      var valA = a[key] || [];\n      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);\n    } else if (key === 'style') {\n      var valA = pug_style(a[key]);\n      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;\n      var valB = pug_style(b[key]);\n      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;\n      a[key] = valA + valB;\n    } else {\n      a[key] = b[key];\n    }\n  }\n\n  return a;\n};\n\n/**\n * Process array, object, or string as a string of classes delimited by a space.\n *\n * If `val` is an array, all members of it and its subarrays are counted as\n * classes. If `escaping` is an array, then whether or not the item in `val` is\n * escaped depends on the corresponding item in `escaping`. If `escaping` is\n * not an array, no escaping is done.\n *\n * If `val` is an object, all the keys whose value is truthy are counted as\n * classes. No escaping is done.\n *\n * If `val` is a string, it is counted as a class. No escaping is done.\n *\n * @param {(Array.<string>|Object.<string, boolean>|string)} val\n * @param {?Array.<string>} escaping\n * @return {String}\n */\nexports.classes = pug_classes;\nfunction pug_classes_array(val, escaping) {\n  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);\n  for (var i = 0; i < val.length; i++) {\n    className = pug_classes(val[i]);\n    if (!className) continue;\n    escapeEnabled && escaping[i] && (className = pug_escape(className));\n    classString = classString + padding + className;\n    padding = ' ';\n  }\n  return classString;\n}\nfunction pug_classes_object(val) {\n  var classString = '', padding = '';\n  for (var key in val) {\n    if (key && val[key] && pug_has_own_property.call(val, key)) {\n      classString = classString + padding + key;\n      padding = ' ';\n    }\n  }\n  return classString;\n}\nfunction pug_classes(val, escaping) {\n  if (Array.isArray(val)) {\n    return pug_classes_array(val, escaping);\n  } else if (val && typeof val === 'object') {\n    return pug_classes_object(val);\n  } else {\n    return val || '';\n  }\n}\n\n/**\n * Convert object or string to a string of CSS styles delimited by a semicolon.\n *\n * @param {(Object.<string, string>|string)} val\n * @return {String}\n */\n\nexports.style = pug_style;\nfunction pug_style(val) {\n  if (!val) return '';\n  if (typeof val === 'object') {\n    var out = '';\n    for (var style in val) {\n      /* istanbul ignore else */\n      if (pug_has_own_property.call(val, style)) {\n        out = out + style + ':' + val[style] + ';';\n      }\n    }\n    return out;\n  } else {\n    return val + '';\n  }\n};\n\n/**\n * Render the given attribute.\n *\n * @param {String} key\n * @param {String} val\n * @param {Boolean} escaped\n * @param {Boolean} terse\n * @return {String}\n */\nexports.attr = pug_attr;\nfunction pug_attr(key, val, escaped, terse) {\n  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {\n    return '';\n  }\n  if (val === true) {\n    return ' ' + (terse ? key : key + '=\"' + key + '\"');\n  }\n  var type = typeof val;\n  if ((type === 'object' || type === 'function') && typeof val.toJSON === 'function') {\n    val = val.toJSON();\n  }\n  if (typeof val !== 'string') {\n    val = JSON.stringify(val);\n    if (!escaped && val.indexOf('\"') !== -1) {\n      return ' ' + key + '=\\'' + val.replace(/'/g, '&#39;') + '\\'';\n    }\n  }\n  if (escaped) val = pug_escape(val);\n  return ' ' + key + '=\"' + val + '\"';\n};\n\n/**\n * Render the given attributes object.\n *\n * @param {Object} obj\n * @param {Object} terse whether to use HTML5 terse boolean attributes\n * @return {String}\n */\nexports.attrs = pug_attrs;\nfunction pug_attrs(obj, terse){\n  var attrs = '';\n\n  for (var key in obj) {\n    if (pug_has_own_property.call(obj, key)) {\n      var val = obj[key];\n\n      if ('class' === key) {\n        val = pug_classes(val);\n        attrs = pug_attr(key, val, false, terse) + attrs;\n        continue;\n      }\n      if ('style' === key) {\n        val = pug_style(val);\n      }\n      attrs += pug_attr(key, val, false, terse);\n    }\n  }\n\n  return attrs;\n};\n\n/**\n * Escape the given string of `html`.\n *\n * @param {String} html\n * @return {String}\n * @api private\n */\n\nvar pug_match_html = /[\"&<>]/;\nexports.escape = pug_escape;\nfunction pug_escape(_html){\n  var html = '' + _html;\n  var regexResult = pug_match_html.exec(html);\n  if (!regexResult) return _html;\n\n  var result = '';\n  var i, lastIndex, escape;\n  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {\n    switch (html.charCodeAt(i)) {\n      case 34: escape = '&quot;'; break;\n      case 38: escape = '&amp;'; break;\n      case 60: escape = '&lt;'; break;\n      case 62: escape = '&gt;'; break;\n      default: continue;\n    }\n    if (lastIndex !== i) result += html.substring(lastIndex, i);\n    lastIndex = i + 1;\n    result += escape;\n  }\n  if (lastIndex !== i) return result + html.substring(lastIndex, i);\n  else return result;\n};\n\n/**\n * Re-throw the given `err` in context to the\n * the pug in `filename` at the given `lineno`.\n *\n * @param {Error} err\n * @param {String} filename\n * @param {String} lineno\n * @param {String} str original source\n * @api private\n */\n\nexports.rethrow = pug_rethrow;\nfunction pug_rethrow(err, filename, lineno, str){\n  if (!(err instanceof Error)) throw err;\n  if ((typeof window != 'undefined' || !filename) && !str) {\n    err.message += ' on line ' + lineno;\n    throw err;\n  }\n  try {\n    str = str || __webpack_require__(/*! fs */ 0).readFileSync(filename, 'utf8')\n  } catch (ex) {\n    pug_rethrow(err, null, lineno)\n  }\n  var context = 3\n    , lines = str.split('\\n')\n    , start = Math.max(lineno - context, 0)\n    , end = Math.min(lines.length, lineno + context);\n\n  // Error context\n  var context = lines.slice(start, end).map(function(line, i){\n    var curr = i + start + 1;\n    return (curr == lineno ? '  > ' : '    ')\n      + curr\n      + '| '\n      + line;\n  }).join('\\n');\n\n  // Alter exception message\n  err.path = filename;\n  err.message = (filename || 'Pug') + ':' + lineno\n    + '\\n' + context + '\\n\\n' + err.message;\n  throw err;\n};\n\n\n//# sourceURL=webpack:///./node_modules/pug-runtime/index.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/TrelloApp.js":
/*!**************************!*\
  !*** ./src/TrelloApp.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TrelloApp; });\n/* harmony import */ var _modules_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/App */ \"./src/modules/App.js\");\n/* harmony import */ var _components_AuthRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/AuthRouter */ \"./src/components/AuthRouter.js\");\n/* harmony import */ var _views_TrelloHeader_TrelloHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/TrelloHeader/TrelloHeader */ \"./src/views/TrelloHeader/TrelloHeader.js\");\n/* harmony import */ var _views_IndexView_IndexView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/IndexView/IndexView */ \"./src/views/IndexView/IndexView.js\");\n/* harmony import */ var _views_LoginView_LoginView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/LoginView/LoginView */ \"./src/views/LoginView/LoginView.js\");\n/* harmony import */ var _views_BoardView_BoardView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/BoardView/BoardView */ \"./src/views/BoardView/BoardView.js\");\n/* harmony import */ var _views_ProfileView_ProfileView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/ProfileView/ProfileView */ \"./src/views/ProfileView/ProfileView.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Button */ \"./src/components/Button.js\");\n/* harmony import */ var _storage_makeGlobalStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./storage/makeGlobalStore */ \"./src/storage/makeGlobalStore.js\");\n/* harmony import */ var _middlewares_logger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./middlewares/logger */ \"./src/middlewares/logger.js\");\n/* harmony import */ var _middlewares_thunkDispatcher__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./middlewares/thunkDispatcher */ \"./src/middlewares/thunkDispatcher.js\");\n/* harmony import */ var _actions_User__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./actions/User */ \"./src/actions/User.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _actions_fakes_fake__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./actions/fakes/fake */ \"./src/actions/fakes/fake.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass TrelloApp extends _modules_App__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  setup() {\n    // this.enableDebug();\n    Object(_actions_fakes_fake__WEBPACK_IMPORTED_MODULE_13__[\"setFake\"])(false);\n\n    const globalStorage = Object(_storage_makeGlobalStore__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_middlewares_logger__WEBPACK_IMPORTED_MODULE_9__[\"default\"], _middlewares_thunkDispatcher__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\n    this.connect(globalStorage);\n    this.synchronize('shtoby');\n\n    const router = new _components_AuthRouter__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\n        .addChild(new _views_TrelloHeader_TrelloHeader__WEBPACK_IMPORTED_MODULE_2__[\"default\"](), 'prepend');\n\n    router.registerView('/', new _views_IndexView_IndexView__WEBPACK_IMPORTED_MODULE_3__[\"default\"]());\n    router.registerViewNoAuth('/login', new _views_LoginView_LoginView__WEBPACK_IMPORTED_MODULE_4__[\"default\"](), '/board');\n    router.registerViewAuth('/board', new _views_BoardView_BoardView__WEBPACK_IMPORTED_MODULE_5__[\"default\"]());\n    router.registerViewAuth('/profile', new _views_ProfileView_ProfileView__WEBPACK_IMPORTED_MODULE_6__[\"default\"]());\n    router.registerViewAuth('/logout', () => {\n      globalStorage.dispatch(_actions_User__WEBPACK_IMPORTED_MODULE_11__[\"logout\"]());\n    });\n\n    router.setAfterLogin('/board');\n    router.setDefaultRoute('/').useHistory();\n\n    this.globRouter = router;\n\n    this.addComponent(router);\n\n    this.addComponent(new _components_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"]({\n      content: 'залогать состояние приложения',\n      onclick: () => {\n        console.log(globalStorage.getState());\n      },\n    }));\n  }\n};\n\n\n//# sourceURL=webpack:///./src/TrelloApp.js?");

/***/ }),

/***/ "./src/actions/Board.js":
/*!******************************!*\
  !*** ./src/actions/Board.js ***!
  \******************************/
/*! exports provided: create, fetchBoards, deleteBoard, updateBoard, insertAfter, insertBefore, shiftFrom, shiftIncluding, clearStore, getBoard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"create\", function() { return create; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchBoards\", function() { return fetchBoards; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteBoard\", function() { return deleteBoard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateBoard\", function() { return updateBoard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertAfter\", function() { return insertAfter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertBefore\", function() { return insertBefore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shiftFrom\", function() { return shiftFrom; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shiftIncluding\", function() { return shiftIncluding; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearStore\", function() { return clearStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBoard\", function() { return getBoard; });\n/* harmony import */ var _apis_BoardApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apis/BoardApi */ \"./src/apis/BoardApi.js\");\n/* harmony import */ var _fakes_fakeBoards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fakes/fakeBoards */ \"./src/actions/fakes/fakeBoards.js\");\n/* harmony import */ var _fakes_fake__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fakes/fake */ \"./src/actions/fakes/fake.js\");\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI */ \"./src/actions/UI.js\");\n\n\n\n\n\n\n\nconst boardApi = new _apis_BoardApi__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\nfunction addBoard(boardModel) {\n  return {\n    type: 'ADD_BOARD',\n    ...boardModel,\n  };\n}\n\nfunction create(name) {\n  return function(dispatch) {\n    if (!_fakes_fake__WEBPACK_IMPORTED_MODULE_2__[\"fake\"]) {\n      boardApi.createBoard(name).then((board) => {\n        dispatch(addBoard({...board, cardGroups: board['card_groups']}));\n      });\n    } else {\n      dispatch(addBoard(Object(_fakes_fakeBoards__WEBPACK_IMPORTED_MODULE_1__[\"makeFakeBoard\"])(name, name, [])));\n    }\n  };\n}\n\nfunction fetchBoards() {\n  return function(dispatch, getState) {\n    if (!_fakes_fake__WEBPACK_IMPORTED_MODULE_2__[\"fake\"]) {\n      boardApi.fetchBoards(getState().user.id).then((boards) => {\n        boards.forEach((board) => {\n          dispatch(addBoard({...board, cardGroups: board['card_groups']}));\n        });\n      });\n    } else {\n      _fakes_fakeBoards__WEBPACK_IMPORTED_MODULE_1__[\"fakeBoards\"].forEach((b) => {\n        dispatch(addBoard(b));\n      });\n    }\n  };\n}\n\nfunction trueDeleteBoard(id) {\n  return function(dispatch) {\n    dispatch(_UI__WEBPACK_IMPORTED_MODULE_3__[\"tryDeselect\"](id));\n    dispatch({\n      type: 'DELETE_BOARD',\n      id: id,\n    });\n  };\n}\n\nfunction deleteBoard(id) {\n  return function(dispatch) {\n    if (!_fakes_fake__WEBPACK_IMPORTED_MODULE_2__[\"fake\"]) {\n      boardApi.deleteBoard(id)\n          .then(() => {\n            dispatch(trueDeleteBoard(id));\n          });\n    } else {}\n  };\n}\n\nfunction trueUpdateBoard(id, name) {\n  return {\n    type: 'UPDATE_BOARD',\n    id: id,\n    name: name,\n  };\n}\n\nfunction updateBoard(id, name) {\n  return function(dispatch) {\n    if (!_fakes_fake__WEBPACK_IMPORTED_MODULE_2__[\"fake\"]) {\n      boardApi.updateBoard(id, name)\n          .then(() => {\n            dispatch(trueUpdateBoard(id, name));\n          });\n    }\n  };\n}\n\nfunction insertAfter(index, indexAfter) {\n  return {\n    type: 'INSERT_AFTER',\n    which: index,\n    after: indexAfter,\n  };\n}\n\nfunction insertBefore(index, indexBefore) {\n  return {\n    type: 'INSERT_BEFORE',\n    which: index,\n    before: indexBefore,\n  };\n}\n\n\nfunction shiftFrom(index) {\n  return {\n    type: 'SHIFT_FROM',\n    index: index,\n  };\n}\n\nfunction shiftIncluding(index) {\n  return {\n    type: 'SHIFT_INCLUDING',\n    index: index,\n  };\n}\n\nfunction clearStore() {\n  return {\n    type: 'CLEAR_BOARDS',\n  };\n}\n\nfunction fillBoard(board) {\n  return {\n    type: 'FILL_BOARD',\n    id: board.id,\n    name: board.name,\n    cardGroups: board['card_groups'],\n  };\n}\n\nfunction getBoard(id) {\n  return function(dispatch) {\n    boardApi.fetchBoard(id)\n        .then((board) => {\n          dispatch(fillBoard(board));\n        });\n  };\n}\n\n\n\n\n//# sourceURL=webpack:///./src/actions/Board.js?");

/***/ }),

/***/ "./src/actions/Card.js":
/*!*****************************!*\
  !*** ./src/actions/Card.js ***!
  \*****************************/
/*! exports provided: createCard, setCaption, deleteCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createCard\", function() { return createCard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setCaption\", function() { return setCaption; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteCard\", function() { return deleteCard; });\n/* harmony import */ var _apis_BoardApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apis/BoardApi */ \"./src/apis/BoardApi.js\");\n\n\nconst boardApi = new _apis_BoardApi__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\nfunction addCard(cardModel) {\n  return {\n    type: 'ADD_CARD',\n    id: cardModel.id,\n    caption: cardModel.caption,\n    priority: cardModel.priority,\n    cardGroupId: cardModel['card_group_id'],\n    tasks: cardModel.tasks,\n  };\n}\n\nfunction createCard(caption, cardGroupId) {\n  return function(dispatch) {\n    boardApi.createCard(caption, cardGroupId)\n        .then((card) => {\n          dispatch(addCard(card));\n        });\n  };\n}\n\nfunction updateCard(cardModel) {\n  console.log(cardModel);\n  return {\n    type: 'UPDATE_CARD',\n    id: cardModel.id,\n    caption: cardModel.caption,\n    priority: 0,\n    boardId: cardModel['board_id'],\n    cardUserId: cardModel['card_user_id'],\n    cardGroupId: cardModel['card_group_id'],\n  };\n}\n\n// {\n// \"caption\": \"В работе\",\n// \"priority\": 0,\n// \"board_id\": \"0eeee470-0cd9-442c-b302-e04ddd69233f\",\n// \"card_user_id\": \"\",\n// \"card_group_id\": \"503510af-c577-46d7-b33d-598f41c0fba4\",\n// \"id\": \"da2303a7-5123-4f6b-98a8-2abaa72cc8b0\"\n// }\n\nfunction setCaption(\n    cardId, newCaption, priority, boardId, cardUserId, cardGroupId) {\n  return function(dispatch) {\n    boardApi.updateCard(cardId, newCaption, priority,\n        boardId, cardUserId, cardGroupId)\n        .then((cardModel) => {\n          dispatch(updateCard(cardModel));\n        });\n  };\n}\n\nfunction deleteCard(id) {\n  return function(dispatch) {\n    boardApi.deleteCard(id)\n        .then(() => {\n          dispatch({\n            type: 'DELETE_CARD',\n            id: id,\n          });\n        });\n  };\n}\n\n\n//# sourceURL=webpack:///./src/actions/Card.js?");

/***/ }),

/***/ "./src/actions/Group.js":
/*!******************************!*\
  !*** ./src/actions/Group.js ***!
  \******************************/
/*! exports provided: createGroup, deleteGroup, rename */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createGroup\", function() { return createGroup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteGroup\", function() { return deleteGroup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rename\", function() { return rename; });\n/* harmony import */ var _apis_BoardApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apis/BoardApi */ \"./src/apis/BoardApi.js\");\n\n\nconst boardApi = new _apis_BoardApi__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\nfunction trueCreateGroup(groupModel) {\n  return {\n    type: 'CREATE_GROUP',\n    boardId: groupModel['board_id'],\n    cards: groupModel.cards,\n    id: groupModel.id,\n    name: groupModel.name,\n  };\n}\n\nfunction createGroup(name) {\n  return function(dispatch, getState) {\n    const selectedBoard = getState()['ui']['selectedIndex'];\n    const boardId = getState()['boards'][selectedBoard].id;\n\n    boardApi.createGroup(name, boardId)\n        .then((group) => {\n          dispatch(trueCreateGroup(group));\n        });\n  };\n}\n\nfunction deleteGroup(id) {\n  return function(dispatch) {\n    boardApi.deleteGroup(id)\n        .then(() => {\n          dispatch({\n            type: 'DELETE_GROUP',\n            id: id,\n          });\n        });\n  };\n}\n\n\nfunction editGroup(boardId, groupId, name) {\n  return {\n    type: 'EDIT_GROUP',\n    id: groupId,\n    name: name,\n    boardId: boardId,\n  };\n}\n\nfunction rename(name, boardId, id) {\n  return function(dispatch) {\n    boardApi.renameGroup(name, boardId, id)\n        .then((groupModel) => {\n          console.log(groupModel),\n          dispatch(editGroup(\n              groupModel['board_id'],\n              groupModel.id,\n              groupModel.name,\n          ));\n        });\n  };\n}\n\n\n//# sourceURL=webpack:///./src/actions/Group.js?");

/***/ }),

/***/ "./src/actions/UI.js":
/*!***************************!*\
  !*** ./src/actions/UI.js ***!
  \***************************/
/*! exports provided: selectBoard, deselectBoard, selectUpper, selectLower, tryDeselect, reset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectBoard\", function() { return selectBoard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deselectBoard\", function() { return deselectBoard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectUpper\", function() { return selectUpper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectLower\", function() { return selectLower; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tryDeselect\", function() { return tryDeselect; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reset\", function() { return reset; });\nfunction selectBoard(index) {\n  return {\n    type: 'SELECT_BOARD',\n    index: index,\n  };\n}\n\nfunction deselectBoard() {\n  return {\n    type: 'DESELECT_BOARD',\n  };\n}\n\nfunction selectUpper() {\n  return {\n    type: 'SELECT_UPPER',\n  };\n}\n\nfunction selectLower() {\n  return {\n    type: 'SELECT_LOWER',\n  };\n}\n\nfunction tryDeselect(id) {\n  return function(dispatch, getState) {\n    const selectedIndex = getState().ui.selectedIndex;\n\n    if (typeof selectedIndex !== 'undefined') {\n      let deletedIndex = undefined;\n\n      getState().boards.forEach((b, index) => {\n        if (b.id == id) {\n          deletedIndex = index;\n        }\n      });\n\n      if (deletedIndex === selectedIndex) {\n        dispatch(deselectBoard());\n      } else if (deletedIndex < selectedIndex) {\n        dispatch(selectLower());\n        // dispatch(selectBoard(selectedIndex - 1));\n      }\n    }\n  };\n}\n\nfunction reset() {\n  return {\n    type: 'RESET',\n  };\n}\n\n\n//# sourceURL=webpack:///./src/actions/UI.js?");

/***/ }),

/***/ "./src/actions/User.js":
/*!*****************************!*\
  !*** ./src/actions/User.js ***!
  \*****************************/
/*! exports provided: getUser, login, register, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUser\", function() { return getUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"register\", function() { return register; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logout\", function() { return logout; });\n/* harmony import */ var _apis_UserApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apis/UserApi */ \"./src/apis/UserApi.js\");\n/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Board */ \"./src/actions/Board.js\");\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI */ \"./src/actions/UI.js\");\n/* harmony import */ var _fakes_fakeUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fakes/fakeUser */ \"./src/actions/fakes/fakeUser.js\");\n/* harmony import */ var _fakes_fake__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fakes/fake */ \"./src/actions/fakes/fake.js\");\n\n\n\n\n\n\n\nconst userApi = new _apis_UserApi__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\nfunction setUser(userModel) {\n  return {\n    type: 'SET_USER',\n    loggedIn: true,\n    ...userModel,\n  };\n}\n\nfunction getUser() {\n  return function(dispatch) {\n    if (!_fakes_fake__WEBPACK_IMPORTED_MODULE_4__[\"fake\"]) {\n      userApi.getUser().then((user) => {\n        dispatch(setUser(user));\n        dispatch(_Board__WEBPACK_IMPORTED_MODULE_1__[\"fetchBoards\"]());\n      });\n    } else {\n      dispatch(setUser(_fakes_fakeUser__WEBPACK_IMPORTED_MODULE_3__[\"fakeUser\"]));\n      dispatch(_Board__WEBPACK_IMPORTED_MODULE_1__[\"fetchBoards\"]());\n    }\n  };\n}\n\nfunction loginFailed() {\n  return {\n    type: 'LOGIN_FAILED',\n  };\n}\n\nfunction login(login, password) {\n  return function(dispatch) {\n    if (!_fakes_fake__WEBPACK_IMPORTED_MODULE_4__[\"fake\"]) {\n      userApi.login(login, password)\n          .then(() => {\n            dispatch(getUser());\n          })\n          .catch(() => {\n            dispatch(loginFailed());\n          });\n    } else {\n      setTimeout(() => {\n        dispatch(getUser());\n      }, 1000);\n    }\n  };\n}\n\nfunction registerFailed() {\n  return {\n    type: 'REGISTRATION_FAILED',\n  };\n}\n\nfunction register(loginVal, password) {\n  return function(dispatch) {\n    if (!_fakes_fake__WEBPACK_IMPORTED_MODULE_4__[\"fake\"]) {\n      userApi.register(loginVal, password)\n          .then(() => {\n            // console.log('registered succesfully, logging in now');\n            // userApi.clearToken();\n            dispatch(login(loginVal, password));\n          })\n          .catch(() => {\n            dispatch(registerFailed());\n          });\n    } else {\n\n    }\n  };\n}\n\nfunction logout() {\n  return function(dispatch) {\n    userApi.logout()\n        .then(() => {\n          dispatch(_UI__WEBPACK_IMPORTED_MODULE_2__[\"reset\"]());\n          dispatch(_Board__WEBPACK_IMPORTED_MODULE_1__[\"clearStore\"]());\n          dispatch({\n            type: 'LOGGED_OUT',\n          });\n        });\n    // userApi.clearToken();\n  };\n}\n\n\n//# sourceURL=webpack:///./src/actions/User.js?");

/***/ }),

/***/ "./src/actions/fakes/fake.js":
/*!***********************************!*\
  !*** ./src/actions/fakes/fake.js ***!
  \***********************************/
/*! exports provided: fake, setFake */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fake\", function() { return fake; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setFake\", function() { return setFake; });\nlet fake = false;\n\nfunction setFake(f = false) {\n  fake = f;\n};\n\n\n//# sourceURL=webpack:///./src/actions/fakes/fake.js?");

/***/ }),

/***/ "./src/actions/fakes/fakeBoards.js":
/*!*****************************************!*\
  !*** ./src/actions/fakes/fakeBoards.js ***!
  \*****************************************/
/*! exports provided: makeFakeBoard, fakeBoards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeFakeBoard\", function() { return makeFakeBoard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fakeBoards\", function() { return fakeBoards; });\nfunction makeFakeBoard(id, name, groups) {\n  return {id: id, name: name, cardGroups: groups};\n}\n\nconst fakeBoards = [1, 2, 3, 4, 5].map((i) => {\n  return makeFakeBoard(i, `board${i}`, []);\n});\n\n// export default fakeBoards;\n\n\n//# sourceURL=webpack:///./src/actions/fakes/fakeBoards.js?");

/***/ }),

/***/ "./src/actions/fakes/fakeUser.js":
/*!***************************************!*\
  !*** ./src/actions/fakes/fakeUser.js ***!
  \***************************************/
/*! exports provided: fakeUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fakeUser\", function() { return fakeUser; });\nconst fakeUser = {login: 'login', id: 1};\n\n\n//# sourceURL=webpack:///./src/actions/fakes/fakeUser.js?");

/***/ }),

/***/ "./src/apis/BoardApi.js":
/*!******************************!*\
  !*** ./src/apis/BoardApi.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BoardApi; });\n/* harmony import */ var _modules_Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/Api */ \"./src/modules/Api.js\");\n\n\nconst localApiAddr = 'http://localhost';\nconst remoteApiAddr = 'https://iamneponyalapi.ru';\n\nconst deployVar = \"remote_deploy\";\n\nconst apiAddr = (deployVar && remoteApiAddr) ||\n    localApiAddr;\n\nclass BoardApi extends _modules_Api__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super(apiAddr);\n  }\n\n  fetchBoards(userId) {\n    return this.get(`/board/user/${userId}`);\n  }\n\n  fetchBoard(id) {\n    return this.get(`/board/${id}`);\n  }\n\n  createBoard(name) {\n    return this.post(`/board`, {name: name});\n  }\n\n  updateBoard(id, name) {\n    return this.put(`/board/${id}`, {name: name});\n  }\n\n  deleteBoard(id) {\n    return this.del(`/board/${id}`);\n  }\n\n  createGroup(name, boardId) {\n    return this.post('/card-group', {name: name, board_id: boardId});\n  }\n\n  renameGroup(name, boardId, id) {\n    return this.put(`/card-group/${id}`, {name: name, board_id: boardId});\n  }\n\n  deleteGroup(id) {\n    return this.del(`/card-group/${id}`);\n  }\n\n  createCard(caption, cardGroupId) {\n    return this.post('/cards', {caption: caption, card_group_id: cardGroupId});\n  }\n\n  deleteCard(id) {\n    return this.del(`/cards/${id}`);\n  }\n\n  updateCard(cardId, newCaption, priority, boardId, cardUserId, cardGroupId) {\n    console.log({\n      caption: newCaption,\n      priority: priority,\n      board_id: boardId,\n      card_user_id: cardUserId,\n      card_group_id: cardGroupId,\n      tasks: [],\n    });\n\n    return this.put(`/cards/${cardId}`, {\n      caption: newCaption,\n      priority: priority,\n      board_id: boardId,\n      card_user_id: cardUserId,\n      card_group_id: cardGroupId,\n      tasks: [],\n    });\n  }\n}\n\n\n//# sourceURL=webpack:///./src/apis/BoardApi.js?");

/***/ }),

/***/ "./src/apis/UserApi.js":
/*!*****************************!*\
  !*** ./src/apis/UserApi.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return UserApi; });\n/* harmony import */ var _modules_Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/Api */ \"./src/modules/Api.js\");\n\n\nconst localApiAddr = 'http://localhost';\nconst remoteApiAddr = 'https://iamneponyalapi.ru';\n\nconst deployVar = \"remote_deploy\";\n\nconst apiAddr = (deployVar && remoteApiAddr) ||\n    localApiAddr;\n\nclass UserApi extends _modules_Api__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super(apiAddr);\n  }\n\n  login(login, password) {\n    return this.post('/login', {\n      login: login,\n      password: password,\n    });\n  }\n\n  register(login, password) {\n    return this.post('/users/registration', {\n      login: login,\n      password: password,\n    });\n  }\n\n  getUser() {\n    return this.get('/users');\n  }\n\n  logout() {\n    return this.get('/logout')\n        .then(() => {\n          this.clearToken();\n        });\n  }\n}\n\n\n//# sourceURL=webpack:///./src/apis/UserApi.js?");

/***/ }),

/***/ "./src/components/AuthRouter.js":
/*!**************************************!*\
  !*** ./src/components/AuthRouter.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AuthRouter; });\n/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Router */ \"./src/components/Router.js\");\n\n\nclass AuthRouter extends _Router__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(defaultRoute) {\n    super(defaultRoute);\n\n    this.auth = undefined;\n    this.authNeeded = [];\n\n    this.accessibility = {};\n    this.fallbacks = {};\n  }\n\n  registerViewAuth(route, view, fallbackRoute) {\n    this.registerViewWithAccess(route, view, true, fallbackRoute);\n  }\n\n  registerViewNoAuth(route, view, fallbackRoute) {\n    this.registerViewWithAccess(route, view, false, fallbackRoute);\n  }\n\n  registerViewWithAccess(route, view, access, fallbackRoute) {\n    super.registerView(route, view);\n\n    if (typeof access !== 'undefined') {\n      this.accessibility[route] = access;\n    }\n\n    if (fallbackRoute) {\n      this.fallbacks[route] = fallbackRoute;\n    }\n  }\n\n  open(route) {\n    const canOpen = this.checkAccessibility(route);\n    if (canOpen) {\n      super.open(route);\n    } else {\n      const fallback = this.fallbacks[route];\n\n      if (fallback) {\n        if (this.history) {\n          window.history.pushState(null, '', fallback);\n        }\n        super.open(fallback);\n      } else {\n        this.openDefault(true);\n      }\n    }\n  }\n\n  setAfterLogin(route) {\n    this.afterLogin = route;\n\n    return this;\n  }\n\n  openAfterLogin() {\n    if (this.afterLogin) {\n      this.open(this.afterLogin);\n    } else {\n      this.openDefault(true);\n    }\n  }\n\n  setAfterLogout(route) {\n    this.afterLogout = route;\n\n    return this;\n  }\n\n  openAfterLogout() {\n    if (this.afterLogout) {\n      this.open(this.afterLogout);\n    } else {\n      this.openDefault(true);\n    }\n  }\n\n  checkAccessibility(route) {\n    if (route in this.accessibility) {\n      return (this.accessibility[route] === this.auth);\n    } else {\n      return true;\n    }\n  }\n\n  init(state) {\n    this.auth = state.user.loggedIn || false;\n    this.subscribe((state) => state.user.loggedIn);\n  }\n\n  stateUpdate(loggedIn) {\n    this.auth = loggedIn || false;\n\n    if (loggedIn) {\n      this.openAfterLogin();\n    } else {\n      this.openAfterLogout();\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/components/AuthRouter.js?");

/***/ }),

/***/ "./src/components/Button.js":
/*!**********************************!*\
  !*** ./src/components/Button.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/Component */ \"./src/modules/Component.js\");\n\n\nconst defaultButtonProps = {\n  content: '',\n  tag: 'button',\n  onClick: undefined,\n};\n\nclass Button extends _modules_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(ownProps) {\n    super({tag: 'button', ...ownProps});\n\n    Object.assign(this.props, defaultButtonProps, ownProps);\n  }\n\n  setOnclick(fun) {\n    this.props.onclick = fun;\n\n    return this;\n  }\n\n  setup(props) {\n    if (props.onclick) {\n      this.element.onclick = () => props.onclick(this);\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\n\n\n\n//# sourceURL=webpack:///./src/components/Button.js?");

/***/ }),

/***/ "./src/components/Form.js":
/*!********************************!*\
  !*** ./src/components/Form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Form; });\n/* harmony import */ var _modules_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/Component */ \"./src/modules/Component.js\");\n\n\nclass Form extends _modules_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(ownProps) {\n    super({tag: 'form', ...ownProps});\n  }\n\n  setup() {\n    [...this.element.getElementsByTagName('button')].forEach((b) => {\n      if (b.type === 'submit') {\n        b.onclick = (e) => {\n          e.preventDefault();\n          this.executeOnSubmit();\n        };\n      }\n    });\n  }\n\n  setOnSubmit(fun) {\n    this.onSubmit = fun;\n  }\n\n  executeOnSubmit() {\n    const submitArgs = {};\n    [...this.element.getElementsByTagName('input')].forEach((input) => {\n      submitArgs[input.name] = input.value;\n    });\n\n    this.onSubmit(submitArgs);\n  }\n\n  onSubmit(formValues) {}\n}\n\n\n//# sourceURL=webpack:///./src/components/Form.js?");

/***/ }),

/***/ "./src/components/Input.js":
/*!*********************************!*\
  !*** ./src/components/Input.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Input; });\n/* harmony import */ var _modules_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/Component */ \"./src/modules/Component.js\");\n\n\nclass Input extends _modules_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(ownProps) {\n    super({tag: 'input', ...ownProps});\n\n    this.element.value = ownProps.content || '';\n    this.element.onblur = (e) => {\n      this.executeOnBlur(e.target.value);\n    };\n    // this.element.addEventListener('onblur', (e) => {\n    //   this.executeOnFocusOut(e.target.value);\n    // });\n    // this.element.onfocusout = (e) => {\n    //   console.log('focus lost');\n\n    //   this.executeOnFocusOut(e.target.value);\n    // };\n\n    // this.element.addEventListener('change', (e) => {\n    //   this.executeOnChange(e.target.value);\n    // });\n  }\n\n  setOnBlur(fun) {\n    this.onBlur = fun;\n\n    return this;\n  }\n\n  // setOnChange(fun) {\n  //   this.onChange = fun;\n\n  //   return this;\n  // }\n\n  executeOnBlur(text) {\n    this.onBlur(text);\n  }\n\n  // executeOnChange(text) {\n  //   this.onChange(text);\n  // }\n\n  clear() {\n    this.element.value = '';\n\n    return this;\n  }\n\n  focus() {\n    this.element.focus();\n\n    return this;\n  }\n\n  onBlur(text) {}\n  // onChange(text) {}\n}\n\n\n//# sourceURL=webpack:///./src/components/Input.js?");

/***/ }),

/***/ "./src/components/Link.js":
/*!********************************!*\
  !*** ./src/components/Link.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Link; });\n/* harmony import */ var _modules_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/Component */ \"./src/modules/Component.js\");\n\n\nclass Link extends _modules_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(ownProps) {\n    super({\n      ...ownProps,\n      content: ownProps.text,\n      tag: 'a',\n      attrs: {\n        ...(ownProps.attrs ? ownProps.attrs : {}),\n        href: ownProps.path,\n      },\n    });\n  }\n}\n\n\n//# sourceURL=webpack:///./src/components/Link.js?");

/***/ }),

/***/ "./src/components/Router.js":
/*!**********************************!*\
  !*** ./src/components/Router.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Router; });\n/* harmony import */ var _modules_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/Component */ \"./src/modules/Component.js\");\n/* harmony import */ var _StateComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StateComponent */ \"./src/components/StateComponent.js\");\n\n\n\nclass Router extends _modules_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(defaultRoute) {\n    super();\n\n    this.history = false;\n\n    this.views = {};\n\n    this.viewer = new _StateComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.addChild(this.viewer, 'view');\n    this.defaultRoute = defaultRoute;\n\n    this.currentRoute = null;\n  }\n\n  startRouting() {\n    this.element.addEventListener('click', (e) => {\n      e.preventDefault();\n\n      if (!(e.target instanceof HTMLAnchorElement)) {\n        return;\n      }\n\n      const route = e.target.pathname;\n      if (this.views[route]) {\n        this.open(route);\n        e.stopPropagation();\n      }\n    });\n\n    this.openDefault();\n\n    return this;\n  }\n\n  openDefault(force) {\n    if (force) {\n      this.open(this.defaultRoute);\n    }\n\n    let toOpen = this.defaultRoute;\n\n    if (this.history) {\n      const currentPath = window.location.pathname;\n      if (this.views[currentPath]) {\n        toOpen = currentPath;\n      }\n    }\n\n    if (this.views[toOpen]) {\n      this.open(toOpen);\n    } else {\n      console.log('couldn\\'t open', toOpen);\n    }\n  }\n\n  useHistory() {\n    this.history = true;\n\n    window.addEventListener('popstate', () => {\n      const currentPath = window.location.pathname;\n      this.open(currentPath);\n    });\n\n    const oldOpener = this.open.bind(this);\n\n    this.open = (route) => {\n      if (window.location.pathname !== route) {\n        if (!(this.views[route] instanceof Function)) {\n          window.history.pushState(null, '', route);\n        }\n      }\n\n      oldOpener(route);\n    };\n\n    return this;\n  }\n\n  registerView(route, view) {\n    this.views[route] = view;\n\n    if (!(view instanceof Function)) {\n      this.viewer.addState(route, view);\n    }\n\n    return this;\n  }\n\n  open(route) {\n    if (this.views[route] instanceof Function) {\n      this.views[route]();\n    } else {\n      this.viewer.setState(route);\n      this.currentRoute = route;\n    }\n\n    this.render();\n\n    return this;\n  }\n\n  setDefaultRoute(route) {\n    this.defaultRoute = route;\n\n    return this;\n  }\n\n  generateContent() {\n    return '<view>';\n  }\n\n  getMounts() {\n    return {view: this.element.getElementsByTagName('view')[0]};\n  }\n}\n\n\n//# sourceURL=webpack:///./src/components/Router.js?");

/***/ }),

/***/ "./src/components/StateComponent.js":
/*!******************************************!*\
  !*** ./src/components/StateComponent.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StateComponent; });\n/* harmony import */ var _modules_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/Component */ \"./src/modules/Component.js\");\n\n\nclass StateComponent extends _modules_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(ownProps) {\n    super(ownProps);\n\n    this.states = {};\n    this.currentState = undefined;\n  }\n\n  render() {}\n\n  addState(name, comp) {\n    this.addChild(comp);\n    this.states[name] = comp;\n\n    return this;\n  }\n\n  addStates(states) {\n    Object.entries(states).forEach(([state, component]) => {\n      this.addChild(component, null);\n      this.states[state] = component;\n    });\n\n    return this;\n  }\n\n  removeState(name) {\n    this.deleteChild(this.states[name]);\n    this.states[name] = undefined;\n\n    return this;\n  }\n\n  setState(name) {\n    if (this.states[name]) {\n      this.currentState = this.states[name];\n      this.applyState();\n    } else {\n      console.log('no such state:', name);\n    }\n\n    return this;\n  }\n\n  applyState() {\n    if (this.currentState.element !== this.element) {\n      this.currentState.replaceElem(this.element);\n      this.element = this.currentState.element;\n    }\n  }\n\n  setup() {\n    if (this.currentState) {\n      this.currentState.render();\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/components/StateComponent.js?");

/***/ }),

/***/ "./src/components/TransformingInput.js":
/*!*********************************************!*\
  !*** ./src/components/TransformingInput.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TransformingInput; });\n/* harmony import */ var _StateComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StateComponent */ \"./src/components/StateComponent.js\");\n/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input */ \"./src/components/Input.js\");\n\n\n\nclass TransformingInput extends _StateComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(otherState, inputProps, afterAction) {\n    super();\n\n    this.addStates({\n      input: new _Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"](inputProps),\n      other: otherState,\n    });\n\n    // this.doClear = doClear || false;\n    this.prevContent = this.states['input'].element.value;\n    this.afterAction = afterAction || 'keep';\n\n    this.isinput = false;\n\n    // this.states['input'].setOnChange((text) => {\n    //   this.executeOnChange(text);\n    //   if (this.isinput) {\n    //     this.toOther();\n    //     this.isnput = false;\n    //   }\n    // });\n\n    this.states['input'].setOnBlur((text) => {\n      this.executeOnBlur(text);\n      if (this.isinput) {\n        this.toOther();\n        this.isinput = false;\n      }\n    });\n\n    this.setState('other');\n  }\n\n  // executeOnChange(text) {\n  //   this.onChange(text);\n  // }\n  useDblclick() {\n    this.states['other'].element.ondblclick = this.toInput.bind(this);\n\n    return this;\n  }\n\n  executeOnBlur(text) {\n    this.onBlur(text);\n  }\n\n  toInput() {\n    this.setState('input');\n    this.isinput = true;\n    this.states['input'].focus();\n  }\n\n  toOther() {\n    if (this.isinput) {\n      switch (this.afterAction) {\n        case 'keep':\n          break;\n        case 'clear':\n          this.states['input'].clear();\n          break;\n        case 'reset':\n          this.states['input'].element.value = this.prevContent;\n          this.prevContent = this.states['input'].element.value;\n          break;\n      }\n      // if (this.doClear) {\n      //   this.states['input'].clear();\n      // }\n\n      this.setState('other');\n      this.isinput = false;\n    }\n  }\n\n  // setOnChange(fun) {\n  //   this.onChange = fun;\n  // }\n\n  setOnBlur(fun) {\n    this.onBlur = fun;\n\n    return this;\n  }\n\n  // onChange(text) {}\n  onBlur(text) {}\n}\n\n\n//# sourceURL=webpack:///./src/components/TransformingInput.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TrelloApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TrelloApp */ \"./src/TrelloApp.js\");\n\n\nconst root = document.getElementById('app');\nconst app = new _TrelloApp__WEBPACK_IMPORTED_MODULE_0__[\"default\"](root);\napp.start();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/middlewares/logger.js":
/*!***********************************!*\
  !*** ./src/middlewares/logger.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return logger; });\nfunction logger(dispatch, action) {\n  console.log(action);\n  dispatch(action);\n}\n\n\n//# sourceURL=webpack:///./src/middlewares/logger.js?");

/***/ }),

/***/ "./src/middlewares/thunkDispatcher.js":
/*!********************************************!*\
  !*** ./src/middlewares/thunkDispatcher.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return thunkDispatcher; });\nfunction thunkDispatcher(dispatch, action, getState) {\n  if (action instanceof Function) {\n    action((action) => {\n      thunkDispatcher(dispatch, action, getState);\n    }, getState);\n  } else {\n    dispatch(action, getState);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/middlewares/thunkDispatcher.js?");

/***/ }),

/***/ "./src/modules/Ajax.js":
/*!*****************************!*\
  !*** ./src/modules/Ajax.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst tokenStorage = {\n  token: undefined,\n};\n\nfunction attachHeaders(method, body) {\n  const headers = new Headers();\n\n  if (tokenStorage.token) {\n    console.log('appending token', tokenStorage.token);\n    headers.set('X-Csrf-Token', tokenStorage.token);\n  }\n\n  const request = {\n    method: method,\n    credentials: 'include',\n  };\n\n  request.headers = headers;\n  if (body) request.body = JSON.stringify(body);\n\n  return request;\n}\n\nfunction clearToken() {\n  if (tokenStorage.token) {\n    console.log('clearing token');\n    tokenStorage.token = undefined;\n  }\n}\n\nclass Ajax {\n  constructor(url) {\n    this.apiAddr = url;\n\n    try {\n      const apiToken = localStorage.getItem('apitoken');\n      if (!(tokenStorage.token) && apiToken) {\n        tokenStorage.token = apiToken;\n      }\n    } catch (e) {\n      console.log(e);\n    }\n  }\n\n  clearToken() {\n    clearToken();\n  }\n\n  request(method, path, body) {\n    return new Promise((resolve, reject) => {\n      fetch(this.apiAddr + path, attachHeaders(method, body))\n          .then((res) => {\n            if (res.status !== 200) {\n              reject(Error('status is not 200'));\n            } else {\n              if (res.headers.has('X-Csrf-Token')) {\n                tokenStorage.token = res.headers.get('X-Csrf-Token');\n                localStorage.setItem('apitoken', tokenStorage.token);\n              }\n\n              resolve(res);\n            }\n          })\n          .catch((err) => reject(err));\n    });\n  }\n\n  jsonRequest(method, path, body) {\n    return this.request(method, path, body)\n        .then((res) => res.json());\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ajax);\n\n\n//# sourceURL=webpack:///./src/modules/Ajax.js?");

/***/ }),

/***/ "./src/modules/Api.js":
/*!****************************!*\
  !*** ./src/modules/Api.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Api; });\n/* harmony import */ var _Ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ajax */ \"./src/modules/Ajax.js\");\n\n\nclass Api {\n  constructor(domain) {\n    this.ajax = new _Ajax__WEBPACK_IMPORTED_MODULE_0__[\"default\"](domain);\n  }\n\n  get(path) {\n    return this.ajax.jsonRequest('GET', path);\n  }\n\n  post(path, body) {\n    return this.ajax.jsonRequest('POST', path, body);\n  }\n\n  put(path, body) {\n    return this.ajax.jsonRequest('PUT', path, body);\n  }\n\n  del(path) {\n    return this.ajax.request('DELETE', path);\n  }\n\n  clearToken() {\n    this.ajax.clearToken();\n  }\n}\n\n\n//# sourceURL=webpack:///./src/modules/Api.js?");

/***/ }),

/***/ "./src/modules/App.js":
/*!****************************!*\
  !*** ./src/modules/App.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var _StoreSaver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StoreSaver */ \"./src/modules/StoreSaver.js\");\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Component */ \"./src/modules/Component.js\");\n/* harmony import */ var _Utils_debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utils/debug */ \"./src/modules/Utils/debug.js\");\n\n\n\nconst defaultAppElement = 'app';\n\n\n\nclass App {\n  constructor(el, elName = defaultAppElement) {\n    this.root = new _Component__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({tag: elName});\n    this.root.replaceElem(el);\n  }\n\n  addComponent(component) {\n    this.root.addChild(component);\n  }\n\n  start() {\n    this.setup();\n\n    if (this.synchronizer) {\n      this.synchronizer.startSynchronizing();\n    };\n\n    this.root.forAllComponents((comp) => {\n      comp.store = this.root.store;\n      comp.init(this.root.store.getState());\n    });\n\n    if (this.globRouter) {\n      this.globRouter.startRouting();\n    }\n\n    this.root.render();\n  }\n\n  enableDebug() {\n    Object(_Utils_debug__WEBPACK_IMPORTED_MODULE_2__[\"setDebugAdder\"])(this.root);\n  }\n\n  connect(store) {\n    this.store = store;\n    this.root.connect(store);\n  }\n\n  synchronize(key = 'state') {\n    this.synchronizer = new _StoreSaver__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.store, key);\n  }\n\n  setup() {}\n}\n\n\n//# sourceURL=webpack:///./src/modules/App.js?");

/***/ }),

/***/ "./src/modules/Component.js":
/*!**********************************!*\
  !*** ./src/modules/Component.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Component; });\n/* harmony import */ var _Utils_makeElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils/makeElement */ \"./src/modules/Utils/makeElement.js\");\n\n\nconst defaultProps = {\n  tag: 'div',\n  classes: [],\n  style: {},\n  id: null,\n  attrs: {},\n  content: '',\n};\n\nclass Component {\n  constructor(ownProps) {\n    const elementProps = {};\n    Object.assign(elementProps, defaultProps, ownProps);\n\n    this.element = Object(_Utils_makeElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n        elementProps.tag,\n        elementProps.classes,\n        elementProps.style,\n        elementProps.id,\n        elementProps.attrs,\n    );\n\n    this.element.component = this;\n\n    this.props = {content: elementProps.content, ...ownProps};\n    this.parent = null;\n    this.children = [];\n\n    this.store = undefined;\n\n    this.render();\n  }\n\n  connect(store) {\n    this.store = store;\n\n    return this;\n  }\n\n  dispatch(action) {\n    this.store.dispatch(action);\n  }\n\n  subscribe(selector) {\n    this.store.subscribe(this.stateUpdate.bind(this), selector);\n  }\n\n  // компонент меняется местами с другим элементом\n  replaceElem(elem) {\n    elem.replaceWith(this.element);\n  }\n\n  forEachChildSmart(fun) {\n    this.children.forEach(fun);\n\n    return this;\n  }\n\n  forEachChild(fun) {\n    this.forEachChildSmart(\n        (child) => fun(child.component, child.index)\n    );\n\n    return this;\n  }\n\n  // обходит вообще все компоненты\n  forAllComponents(fun) {\n    fun(this);\n    this.forEachChild((child) => {\n      child.forAllComponents(fun);\n    });\n\n    return this;\n  }\n\n  // эта функция нужна для полной перерисовки внутренностей компонента\n  render() {\n    this.element.innerHTML = this.generateContent(this.props);\n    this.setup(this.props);\n\n    this.attachChildren();\n    this.renderChildren();\n  }\n\n  attachChildren() {\n    this.forEachChildSmart((child) => {\n      if (child.mounted) {\n        child.component.replaceElem(this.getMounts()[child.mount]);\n      } else {\n        if (child.prepended) {\n          this.element.prepend(child.component.element);\n        } else {\n          this.element.appendChild(child.component.element);\n        }\n      }\n    });\n  }\n\n  renderChildren() {\n    this.forEachChildSmart((child) => child.component.render());\n  }\n\n  addChild(component, mount, deferRender) {\n    component.parent = this;\n\n    const child = {\n      component: component,\n      mounted: false,\n      index: this.children.length,\n    };\n\n    if (mount) {\n      switch (mount) {\n        case 'prepend':\n          child.prepended = true;\n          break;\n        case 'append':\n          break;\n        default:\n          child.mounted = true;\n          child.mount = mount;\n      }\n\n      let foundChild = false;\n\n      this.forEachChildSmart((ownChild) => {\n        if (child.mount && child.mount === ownChild.mount) {\n          ownChild.component = child.component;\n          foundChild = true;\n        }\n      });\n\n      if (!foundChild) {\n        this.children.push(child);\n      }\n    } else {\n      this.children.push(child);\n    }\n\n    child.component.onAdd();\n\n    // if (this.store) {\n    //   child.component.connect(this.store);\n    // }\n\n    if (!deferRender) {\n      this.render();\n    }\n\n\n    return this;\n  }\n\n  addChildren(...children) {\n    children.forEach((child) => {\n      if (child instanceof Component) {\n        this.addChild(child, 'append', true);\n      } else {\n        Object.entries(child).forEach(([mount, component]) => {\n          this.addChild(component, mount, true);\n        });\n      }\n    });\n\n    this.render();\n\n    return this;\n  }\n\n  getChild(mount) {\n    let child = undefined;\n\n    switch (typeof mount) {\n      case 'string':\n        this.forEachChildSmart((c) => {\n          if (c.mounted && c.mount === mount) child = c.component;\n        });\n        break;\n      case 'number':\n        child = this.children[mount].component;\n        break;\n    }\n\n    return child;\n  }\n\n  deleteChild(component) {\n    this.forEachChild((child, index) => {\n      if (component === child) {\n        component.parent = null;\n        this.children.splice(index, 1);\n      }\n    });\n\n    this.render();\n\n    return this;\n  }\n\n  swapChild(childComp, comp) {\n    this.forEachChildSmart((child) => {\n      if (child.component === childComp) {\n        child.component.parent = null;\n        child.component = comp;\n        comp.parent = this;\n      }\n    });\n\n    this.render();\n\n    return this;\n  }\n\n  detach() {\n    this.parent.deleteChild(this);\n\n    return this;\n  }\n\n  addStyle(style) {\n    this.element.classList.add(style);\n\n    return this;\n  }\n\n  removeStyle(style) {\n    this.element.classList.remove(style);\n\n    return this;\n  }\n\n  toggleStyle(style) {\n    this.element.classList.toggle(style);\n\n    return this;\n  }\n\n  apply(fun) {\n    fun(this);\n\n    return this;\n  }\n\n  stylize(style) {\n    this.element.style = style;\n\n    return this;\n  }\n\n  update(updateEvent) {\n    this.handleUpdate(this, updateEvent);\n    this.render();\n\n    return this;\n  }\n\n  setUpdateHandler(fun) {\n    this.handleUpdate = fun;\n\n    return this;\n  }\n\n\n  // вызывается один раз перед стартом всего приложения\n  // тут самое место подписке на обновления в сторе\n  init() {}\n\n  // вызывается при обновлении state в подписанном store\n  stateUpdate(newState) {}\n\n  // вызывается при добавлении компонента в другой компонент\n  onAdd() {}\n\n  // нужно перегружать\n  generateContent(props) {\n    return typeof props.content === typeof (() => {}) ?\n      props.content(props) :\n      props.content;\n  }\n\n  // нужно перегружать\n  handleUpdate(comp, updateEvent) {\n    comp.props = {...comp.props, ...updateEvent};\n  }\n\n  // нужно перегружать\n  getMounts() {}\n\n  // нужно перегружать\n  setup(props) {}\n}\n\n\n//# sourceURL=webpack:///./src/modules/Component.js?");

/***/ }),

/***/ "./src/modules/ComponentDragManager.js":
/*!*********************************************!*\
  !*** ./src/modules/ComponentDragManager.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Utils_getCoords__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils/getCoords */ \"./src/modules/Utils/getCoords.js\");\n\n\nclass ComponentDragManager {\n  constructor() {\n    this.wrapper = null;\n    this.old = null;\n    this.dragging = false;\n\n    this.downX = null;\n    this.downY = null;\n\n    document.onmousemove = this.onMouseMove.bind(this);\n    document.onmouseup = this.onMouseUp.bind(this);\n  }\n\n  grab(wrapper, x, y) {\n    this.wrapper = wrapper;\n    this.down = {x: x, y: y};\n  }\n\n  release() {\n    this.wrapper.kickAvatar();\n\n    this.dragging = false;\n    this.wrapper = null;\n    this.down = {};\n    this.shift = {};\n  }\n\n  onMouseMove(e) {\n    if (!this.wrapper) return;\n\n    if (!this.dragging) {\n      const moveX = e.pageX - this.wrapper.get().element.downX;\n      const moveY = e.pageY - this.wrapper.get().element.downY;\n\n      if (Math.abs(moveX) < 3 && Math.abs(moveY) < 3) {\n        return;\n      };\n\n      const coords = Object(_Utils_getCoords__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.wrapper.get().element);\n\n      this.shift = {\n        x: this.down.x - coords.left,\n        y: this.down.y - coords.top,\n      };\n\n      this.startDrag();\n    }\n\n    // e.stopPropagation();\n\n    this.wrapper.move(\n        e.pageX - this.shift.x,\n        e.pageY - this.shift.y\n    );\n  }\n\n  startDrag() {\n    this.dragging = true;\n    this.wrapper.executeOnDrag();\n    this.wrapper.conjureAvatar();\n  }\n\n  onMouseUp(e) {\n    if (this.wrapper) {\n      if (this.dragging) {\n        e.stopPropagation();\n        this.wrapper.move(9999, 9999);\n\n        const foundDroppable = this.findDroppable(e.clientX, e.clientY);\n\n        if (foundDroppable) {\n          this.wrapper.executeOnDrop(foundDroppable);\n          foundDroppable.dndwrapper.executeOnPlace(\n              this.wrapper.get(), foundDroppable,\n          );\n        } else {\n          this.wrapper.executeOnCancel(this.wrapper.get());\n        }\n      }\n\n      this.release();\n    }\n  }\n\n  findDroppable(x, y) {\n    let foundComponent = null;\n    const foundEl = document.elementFromPoint(x, y);\n\n    if (foundEl) {\n      const closestEl = foundEl.closest('.dropzone');\n      if (closestEl && closestEl.component) {\n        foundComponent = closestEl.component;\n      }\n    }\n\n    return foundComponent;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new ComponentDragManager());\n\n\n//# sourceURL=webpack:///./src/modules/ComponentDragManager.js?");

/***/ }),

/***/ "./src/modules/DNDComponent.js":
/*!*************************************!*\
  !*** ./src/modules/DNDComponent.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DNDComponent; });\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ \"./src/modules/Component.js\");\n/* harmony import */ var _dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dnd */ \"./src/modules/dnd.js\");\n\n\n\nconst defaultProps = {\n  onDrag: undefined,\n  onDrop: undefined,\n  onPlace: undefined,\n};\n\nclass DNDComponent extends _Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(ownProps) {\n    super(ownProps);\n\n    const dndProps = Object.assign({}, defaultProps, ownProps);\n    Object(_dnd__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, dndProps.onDrag, dndProps.onDrop, dndProps.onPlace);\n  }\n\n  makeDraggable(dragFun, dropFun) {\n    this.dndwrapper.makeDraggable(dragFun, dropFun);\n\n    return this;\n  }\n\n  makeDroppable(placeFun) {\n    this.dndwrapper.makeDroppable(placeFun);\n\n    return this;\n  }\n\n  setOnDrag(fun) {\n    this.makeDraggable(fun);\n\n    return this;\n  }\n\n  setOnDrop(fun) {\n    this.makeDraggable(null, fun);\n\n    return this;\n  }\n\n  setOnPlace(fun) {\n    this.makeDroppable(fun);\n\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/modules/DNDComponent.js?");

/***/ }),

/***/ "./src/modules/DNDWrapper.js":
/*!***********************************!*\
  !*** ./src/modules/DNDWrapper.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DNDWrapper; });\n/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Wrapper */ \"./src/modules/Wrapper.js\");\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Component */ \"./src/modules/Component.js\");\n/* harmony import */ var _ComponentDragManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComponentDragManager */ \"./src/modules/ComponentDragManager.js\");\n\n\n\n\n\nclass DNDWrapper extends _Wrapper__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(component) {\n    super(\n        component,\n        'makeDraggable', 'makeDroppable',\n        'onDrag', 'onDrop', 'onPlace',\n    );\n    this.wrapped.dndwrapper = this;\n\n    this.old = null;\n    this.placeholder = new _Component__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.swapped = false;\n  }\n\n  makeDraggable(funDrag, funDrop, funCancel) {\n    this.onDrag = funDrag || this.onDrag;\n    this.onDrop = funDrop || this.onDrop;\n    this.onCancel = funCancel || this.onCancel;\n\n    this.wrapped.element.onmousedown = (e) => {\n      e.stopPropagation();\n\n      _ComponentDragManager__WEBPACK_IMPORTED_MODULE_2__[\"default\"].grab(this, e.pageX, e.pageY);\n    };\n\n    return this;\n  }\n\n  makeDroppable(fun) {\n    this.onPlace = fun || this.onPlace;\n    this.wrapped.addStyle('dropzone');\n\n    return this;\n  }\n\n  swapToPlaceholder() {\n    if (!this.swapped) {\n      this.wrapped.parent.swapChild(this.wrapped, this.placeholder);\n      this.swapped = true;\n    }\n  }\n\n  putOriginalBack() {\n    if (this.swapped) {\n      this.placeholder.parent.swapChild(this.placeholder, this.wrapped);\n      this.swapped = false;\n    }\n  }\n\n  move(x, y) {\n    this.wrapped.element.style.left = `${x}px`;\n    this.wrapped.element.style.top = `${y}px`;\n  }\n\n  conjureAvatar() {\n    this.swapToPlaceholder();\n    const el = this.wrapped.element;\n\n    this.old = {\n      position: el.position || '',\n      left: el.left || '',\n      top: el.top || '',\n      zIndex: el.zIndex || '',\n    };\n\n    document.body.appendChild(el);\n    el.style.zIndex = 9999;\n    el.style.position = 'absolute';\n  }\n\n  kickAvatar() {\n    Object.assign(this.wrapped.element.style, this.old);\n    this.old = null;\n\n    this.putOriginalBack();\n  }\n\n  executeOnDrag() {\n    this.onDrag(this.wrapped);\n  }\n\n  executeOnDrop(dropped) {\n    this.onDrop(this.wrapped, dropped);\n  }\n\n  executeOnPlace(placed) {\n    this.onPlace(this.wrapped, placed);\n  }\n\n  executeOnCancel() {\n    this.onCancel(this.wrapped);\n  }\n\n  get() {\n    return this.wrapped;\n  }\n\n  // вызывается когда элемент начинает перемещение\n  onDrag(dragged) {}\n\n  // вызывается если элемент не был помещён на дроп-зону\n  onCancel(dragged) {}\n\n  // вызывается когда перемещающийся компонент был помещён на компонент\n  onDrop(dropped, dropzone) {}\n\n  // вызывается когда на компонент перемещён компонент\n  onPlace(dropzone, dropped) {}\n}\n\n\n//# sourceURL=webpack:///./src/modules/DNDWrapper.js?");

/***/ }),

/***/ "./src/modules/Store.js":
/*!******************************!*\
  !*** ./src/modules/Store.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Store; });\nclass Store {\n  constructor(initialState, reducer) {\n    this.state = initialState;\n\n    this.reducer = reducer || this.reducer;\n    this.listeners = [];\n  }\n\n  dispatch(action) {\n    const newState = this.reducer(this.state, action);\n    if (newState != this.state) {\n      this.mutated(newState);\n      this.state = newState;\n    }\n  }\n\n  mutated(mutatedState) {\n    this.listeners.forEach((l) => {\n      l(mutatedState);\n    });\n  }\n\n  subscribe(fun, selector) {\n    if (selector) {\n      const filter = this.makeFilter(selector);\n\n      this.listeners.push((mutation) => {\n        const filtered = filter(mutation);\n\n        if (filtered.mutated) {\n          fun(filtered.mutation);\n        }\n      });\n    } else {\n      this.listeners.push(fun);\n    }\n  }\n\n  makeFilter(selector) {\n    return (mutation) => {\n      const filteredMut = {\n        mutated: false,\n      };\n\n      let selectedOldProps = undefined;\n      let selectedNewProps = undefined;\n\n      let gotOld = false;\n      let gotNew = false;\n\n      try {\n        selectedOldProps = selector(this.state);\n\n        if (selectedOldProps) {\n          gotOld = true;\n        }\n      } catch (e) {}\n\n      try {\n        selectedNewProps = selector(mutation);\n\n        if (selectedNewProps) {\n          gotNew = true;\n        }\n      } catch (e) {}\n\n      switch (gotOld) {\n        case false:\n          switch (gotNew) {\n            case false:\n              break;\n            case true:\n              filteredMut.mutation = selectedNewProps;\n              filteredMut.mutated = true;\n              break;\n          }\n          break;\n        case true:\n          switch (gotNew) {\n            case false:\n              filteredMut.mutation = selectedNewProps;\n              filteredMut.mutated = true;\n              break;\n            case true:\n\n              const didMutate = this.checkForMutation(\n                  selectedOldProps, selectedNewProps\n              );\n\n              if (didMutate) {\n                filteredMut.mutated = true;\n                filteredMut.mutation = selectedNewProps;\n              }\n              break;\n          }\n          break;\n      }\n      return filteredMut;\n    };\n  }\n\n  checkForMutation(oldState, newState) {\n    if (oldState instanceof Object) {\n      let mutated = false;\n\n      if (oldState instanceof Array) {\n        if (oldState.length != newState.length) {\n          mutated = true;\n        } else {\n          oldState.forEach((val, index) => {\n            if (oldState[index] != newState[index]) {\n              mutated = true;\n            }\n          });\n        }\n      } else {\n        Object.entries(oldState).forEach(([key, value]) => {\n          if (oldState[key] !== newState[key]) {\n            mutated = true;\n          }\n        });\n      }\n\n      return mutated;\n    } else {\n      return oldState !== newState;\n    }\n  }\n\n  getState() {\n    return this.state;\n  }\n\n  setState(state) {\n    this.state = state;\n  }\n\n  reducer(state, action) {}\n}\n\n\n//# sourceURL=webpack:///./src/modules/Store.js?");

/***/ }),

/***/ "./src/modules/StoreCombiner.js":
/*!**************************************!*\
  !*** ./src/modules/StoreCombiner.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StoreCombiner; });\n/* harmony import */ var _modules_Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/Store */ \"./src/modules/Store.js\");\n\n\nclass StoreCombiner extends _modules_Store__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(storesWithNames) {\n    super({});\n\n    this.stores = {...storesWithNames};\n\n    Object.entries(this.stores).forEach(([name, store]) => {\n      this.state[name] = store.getState();\n    });\n  }\n\n  reducer(state, action) {\n    const nextState = {};\n\n    let mutated = false;\n\n    Object.entries(this.stores).forEach(([name, store]) => {\n      nextState[name] = store.reducer(state[name], action);\n\n      if (!mutated) {\n        mutated = this.state[name] != nextState[name];\n      }\n    });\n\n    return mutated ? nextState : this.state;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/modules/StoreCombiner.js?");

/***/ }),

/***/ "./src/modules/StoreSaver.js":
/*!***********************************!*\
  !*** ./src/modules/StoreSaver.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StoreSaver; });\nclass StoreSaver {\n  constructor(store, key='state') {\n    this.store = store;\n    this.key = key;\n  }\n\n  save(state) {\n    const stateStringified = JSON.stringify(state);\n\n    try {\n      localStorage.setItem(this.key, stateStringified);\n    } catch (e) {\n      console.log(e);\n    }\n  }\n\n  startSynchronizing() {\n    let prevState = this.store.getState();\n\n    try {\n      prevState = localStorage.getItem(this.key);\n\n      if (!prevState) {\n        this.save(this.store.getState());\n      } else {\n        const jsonedState = JSON.parse(prevState);\n        this.store.setState(jsonedState);\n      }\n    } catch (e) {\n      console.log(e);\n    }\n\n    this.store.subscribe(this.save.bind(this));\n  }\n}\n\n\n//# sourceURL=webpack:///./src/modules/StoreSaver.js?");

/***/ }),

/***/ "./src/modules/StoreWrapper.js":
/*!*************************************!*\
  !*** ./src/modules/StoreWrapper.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StoreWrapper; });\nclass StoreWrapper {\n  constructor(store, middleware) {\n    this.store = store;\n    this.middleware = middleware;\n  }\n\n  dispatch(action) {\n    this.middleware(\n        this.store.dispatch.bind(this.store), action,\n        this.store.getState.bind(this.store),\n    );\n  }\n\n  getState() {\n    return this.store.getState();\n  }\n\n  setState(state) {\n    return this.store.setState(state);\n  }\n\n  mutated(...args) {\n    return this.store.mutated(...args);\n  }\n\n  pumpMutation(mutation) {\n    return this.store.pumpMutation(mutation);\n  }\n\n  subscribe(...args) {\n    this.store.subscribe(...args);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/modules/StoreWrapper.js?");

/***/ }),

/***/ "./src/modules/Utils/debug.css":
/*!*************************************!*\
  !*** ./src/modules/Utils/debug.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--5-2!./debug.css */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./src/modules/Utils/debug.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/modules/Utils/debug.css?");

/***/ }),

/***/ "./src/modules/Utils/debug.js":
/*!************************************!*\
  !*** ./src/modules/Utils/debug.js ***!
  \************************************/
/*! exports provided: setDebugAdder, logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setDebugAdder\", function() { return setDebugAdder; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logger\", function() { return logger; });\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ \"./src/modules/Component.js\");\n/* harmony import */ var _debug_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debug.css */ \"./src/modules/Utils/debug.css\");\n/* harmony import */ var _debug_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_debug_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst debugComponentClass = 'debug__component';\n\nfunction setDebugAdder(component, cls = debugComponentClass) {\n  component.forAllComponents((comp) => {\n    comp.addStyle(cls);\n    comp.addChild = (c, mount) => {\n      setDebugAdder(c, cls);\n      _Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype.addChild.bind(comp)(c, mount);\n    };\n  });\n}\n\nfunction logger(component) {\n  component.forAllComponent((comp) => {\n    console.log(comp);\n  });\n}\n\n\n\n\n\n//# sourceURL=webpack:///./src/modules/Utils/debug.js?");

/***/ }),

/***/ "./src/modules/Utils/forEachProp.js":
/*!******************************************!*\
  !*** ./src/modules/Utils/forEachProp.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return forEachProp; });\nfunction forEachProp(obj, callback, valFirst) {\n  for (const prop in obj) {\n    if (Object.hasOwnProperty.call(obj, prop)) {\n      if (valFirst) {\n        callback(obj[prop], prop);\n      } else {\n        callback(prop, obj[prop]);\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/modules/Utils/forEachProp.js?");

/***/ }),

/***/ "./src/modules/Utils/getCoords.js":
/*!****************************************!*\
  !*** ./src/modules/Utils/getCoords.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getCoords; });\nfunction getCoords(elem) { // кроме IE8-\n  const box = elem.getBoundingClientRect();\n\n  return {\n    top: box.top + pageYOffset,\n    left: box.left + pageXOffset,\n  };\n}\n\n\n//# sourceURL=webpack:///./src/modules/Utils/getCoords.js?");

/***/ }),

/***/ "./src/modules/Utils/makeElement.js":
/*!******************************************!*\
  !*** ./src/modules/Utils/makeElement.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _forEachProp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forEachProp */ \"./src/modules/Utils/forEachProp.js\");\n\n\nfunction makeElement(tag, classes, style, id, attributes) {\n  const element = document.createElement(tag);\n\n  classes.forEach((style) => element.classList.add(style));\n\n  Object.assign(element.style, style);\n\n  if (id) {\n    element.id = id;\n  }\n\n  Object(_forEachProp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(attributes, (...args) => element.setAttribute(...args));\n  return element;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (makeElement);\n\n\n//# sourceURL=webpack:///./src/modules/Utils/makeElement.js?");

/***/ }),

/***/ "./src/modules/Wrapper.js":
/*!********************************!*\
  !*** ./src/modules/Wrapper.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Wrapper; });\nclass Wrapper {\n  // какие методы обёртки прокидывать в обёртываемый объект\n  constructor(wrapped, ...methods) {\n    this.wrapped = wrapped;\n\n    methods.forEach((method) => {\n      this.wrapped[method] = (...args) => {\n        const retVal = this[method](...args);\n\n        if (retVal === this) {\n          return this.wrapped;\n        }\n\n        // return this.wrapped;\n      };\n    });\n  }\n}\n\n\n//# sourceURL=webpack:///./src/modules/Wrapper.js?");

/***/ }),

/***/ "./src/modules/applyMiddleware.js":
/*!****************************************!*\
  !*** ./src/modules/applyMiddleware.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return applyMiddleware; });\n/* harmony import */ var _StoreWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StoreWrapper */ \"./src/modules/StoreWrapper.js\");\n\n\nfunction applyMiddleware(store, ...middleware) {\n  return middleware.reduce(\n      (storeWithM, m) => new _StoreWrapper__WEBPACK_IMPORTED_MODULE_0__[\"default\"](storeWithM, m),\n      store,\n  );\n}\n\n\n//# sourceURL=webpack:///./src/modules/applyMiddleware.js?");

/***/ }),

/***/ "./src/modules/dnd.js":
/*!****************************!*\
  !*** ./src/modules/dnd.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return dnd; });\n/* harmony import */ var _DNDWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DNDWrapper */ \"./src/modules/DNDWrapper.js\");\n\n\nfunction dnd(component, dragFun, dropFun, placeFun) {\n  const newWrapper = new _DNDWrapper__WEBPACK_IMPORTED_MODULE_0__[\"default\"](component);\n\n  if (dragFun) newWrapper.makeDraggable(dragFun);\n  if (dropFun) newWrapper.makeDraggable(null, dropFun);\n  if (placeFun) newWrapper.makeDroppable(placeFun);\n\n  return newWrapper.get();\n}\n\n\n//# sourceURL=webpack:///./src/modules/dnd.js?");

/***/ }),

/***/ "./src/storage/makeGlobalStore.js":
/*!****************************************!*\
  !*** ./src/storage/makeGlobalStore.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return makeGlobalStorage; });\n/* harmony import */ var _modules_Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/Store */ \"./src/modules/Store.js\");\n/* harmony import */ var _modules_StoreCombiner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/StoreCombiner */ \"./src/modules/StoreCombiner.js\");\n/* harmony import */ var _modules_applyMiddleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/applyMiddleware */ \"./src/modules/applyMiddleware.js\");\n/* harmony import */ var _reducers_user_userReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/user/userReducer */ \"./src/storage/reducers/user/userReducer.js\");\n/* harmony import */ var _reducers_board_boardReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers/board/boardReducer */ \"./src/storage/reducers/board/boardReducer.js\");\n/* harmony import */ var _reducers_ui_uiReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers/ui/uiReducer */ \"./src/storage/reducers/ui/uiReducer.js\");\n\n\n\n\n\n\n\n\n\n\nfunction makeGlobalStorage(...middlewares) {\n  return Object(_modules_applyMiddleware__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(new _modules_StoreCombiner__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    user: new _modules_Store__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({}, _reducers_user_userReducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n    boards: new _modules_Store__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([], _reducers_board_boardReducer__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n    ui: new _modules_Store__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({}, _reducers_ui_uiReducer__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n  }), ...middlewares);\n}\n\n\n//# sourceURL=webpack:///./src/storage/makeGlobalStore.js?");

/***/ }),

/***/ "./src/storage/reducers/board/boardReducer.js":
/*!****************************************************!*\
  !*** ./src/storage/reducers/board/boardReducer.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return boardReducer; });\nfunction boardReducer(state, action) {\n  switch (action.type) {\n    case 'ADD_BOARD':\n      return [\n        ...state,\n        {\n          id: action.id,\n          name: action.name,\n          cardGroups: action.cardGroups || [],\n        },\n      ];\n\n    case 'DELETE_BOARD':\n      return state.filter((b) => {\n        return b.id !== action.id;\n      });\n\n    case 'UPDATE_BOARD':\n      return state.map((b) => {\n        return b.id === action.id ?\n          {...b, name: action.name} :\n          b;\n      });\n\n    case 'CREATE_GROUP':\n      return [...state.map((b) => {\n        if (b.id === action.boardId) {\n          const cardGroups = {\n            id: action.id,\n            boardId: action.boardId,\n            name: action.name,\n            cards: action.cards || [],\n          };\n\n          return {...b, cardGroups: [...(b.cardGroups), cardGroups]};\n        }\n        return {...b};\n      })];\n\n    case 'EDIT_GROUP':\n      return [\n        ...state.map((b) => {\n          return b.id === action.boardId ?\n          {...b, cardGroups: [\n            ...b.cardGroups.map((gr) => {\n              return gr.id === action.id ?\n              {...gr, name: action.name} :\n              {...gr};\n            }),\n          ]} :\n          {...b};\n        }),\n      ];\n\n    case 'DELETE_GROUP':\n      return [\n        ...state.map((b) => {\n          return {...b, cardGroups: b.cardGroups.filter((gr) => {\n            return gr.id !== action.id;\n          })};\n        }),\n      ];\n\n    case 'DELETE_CARD':\n      return [\n        ...state.map((b) => {\n          return {...b, cardGroups: b.cardGroups.map((gr) => {\n            return {...gr, cards: gr.cards.filter((c) => c.id !== action.id)};\n          })};\n        }),\n      ];\n\n    case 'ADD_CARD':\n      return [\n        ...state.map((b) => {\n          return {\n            ...b, cardGroups: [\n              ...b.cardGroups.map((gr) => {\n                return gr.id === action.cardGroupId ?\n                {...gr, cards: [...gr.cards, {\n                  id: action.id,\n                  caption: action.caption,\n                  priority: action.priority,\n                  cardGroupId: action.cardGroupId,\n                  tasks: action.tasks,\n                }]} :\n                {...gr};\n              }),\n            ],\n          };\n        }),\n      ];\n\n    case 'UPDATE_CARD':\n      return [\n        ...state.map((b) => {\n          return {\n            ...b, cardGroups: [\n              ...b.cardGroups.map((gr) => {\n                return {\n                  ...gr, cards: [\n                    ...gr.cards.map((c) => {\n                      return c.id === action.id ?\n                      {...c, caption: action.caption} :\n                      {...c};\n                    }),\n                  ],\n                };\n              }),\n            ],\n          };\n        }),\n      ];\n    case 'FILL_BOARD':\n      return [\n        ...state.map((b) => {\n          return b.id === action.id ?\n            {...b,\n              name: action.name,\n              cardGroups: action.cardGroups.map((gr) => {\n                return {...gr, boardId: gr['board_id']};\n              }),\n              got: true,\n            } : {...b, got: b.got || false};\n        }),\n      ];\n\n    case 'INSERT_AFTER':\n      if (action.after - action.which === 1) {\n        return state;\n      }\n\n      const newState = [];\n      const whatToInsert = state[action.which];\n\n      state.forEach((b, i) => {\n        if (!(i === action.which)) {\n          if (i === action.after) {\n            newState.push(whatToInsert);\n          }\n          newState.push(b);\n        }\n      });\n\n      return newState;\n\n    case 'INSERT_BEFORE':\n      if (action.which - action.before === 1) {\n        return state;\n      }\n\n      const newerState = [];\n      const which = state[action.which];\n\n      state.forEach((b, i) => {\n        if (!(i === action.which)) {\n          newerState.push(b);\n          if (i === action.before) {\n            newerState.push(which);\n          }\n        }\n      });\n\n      return newerState;\n\n    case 'CLEAR_BOARDS':\n      return [];\n    default:\n      return state;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/storage/reducers/board/boardReducer.js?");

/***/ }),

/***/ "./src/storage/reducers/ui/uiReducer.js":
/*!**********************************************!*\
  !*** ./src/storage/reducers/ui/uiReducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return uiReducer; });\nfunction uiReducer(state, action) {\n  switch (action.type) {\n    case 'SELECT_BOARD':\n      return {\n        ...state,\n        selectedIndex: action.index,\n      };\n    case 'DESELECT_BOARD':\n      return {\n        ...state,\n        selectedIndex: undefined,\n      };\n    case 'SELECT_UPPER':\n      return {\n        ...state,\n        selectedIndex: state.selectedIndex ?\n        state.selectedIndex + 1 : undefined,\n      };\n    case 'SELECT_LOWER':\n      return {\n        ...state,\n        selectedIndex: state.selectedIndex ?\n        state.selectedIndex - 1 : undefined,\n      };\n    case 'RESET':\n      return {};\n    default:\n      return state;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/storage/reducers/ui/uiReducer.js?");

/***/ }),

/***/ "./src/storage/reducers/user/userReducer.js":
/*!**************************************************!*\
  !*** ./src/storage/reducers/user/userReducer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return userReducer; });\nfunction userReducer(state, action) {\n  switch (action.type) {\n    case 'SET_USER':\n      return {\n        loggedIn: true,\n        login: action.login,\n        id: action.id,\n      };\n    case 'REDACT_USER':\n      const oldStateCopy = {...state};\n      let changed = false;\n\n      Object.entries(action).forEach(([name, val]) => {\n        if (name === 'type') return;\n\n        if (oldStateCopy[name]) {\n          if (oldStateCopy[name] !== val) {\n            oldStateCopy[name] = val;\n            changed = true;\n          }\n        } else {\n          oldStateCopy[name] = val;\n          changed = true;\n        }\n      });\n\n      return changed ? oldStateCopy : state;\n    case 'LOGGED_OUT':\n      return {};\n    case 'LOGIN_FAILED':\n      return {\n        loginFailed: true,\n      };\n    case 'REGISTRATION_FAILED':\n      return {\n        signupFailed: true,\n      };\n    default:\n      return state;\n  }\n};\n\n\n//# sourceURL=webpack:///./src/storage/reducers/user/userReducer.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js??ref--5-2!./style.css */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./src/style.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./src/views/BoardView/BoardView.js":
/*!******************************************!*\
  !*** ./src/views/BoardView/BoardView.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BoardView; });\n/* harmony import */ var _modules_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/Component */ \"./src/modules/Component.js\");\n/* harmony import */ var _boardComponents_BoardTabsController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boardComponents/BoardTabsController */ \"./src/views/BoardView/boardComponents/BoardTabsController.js\");\n/* harmony import */ var _boardComponents_SingleBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boardComponents/SingleBoard */ \"./src/views/BoardView/boardComponents/SingleBoard.js\");\n/* harmony import */ var _boardView_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boardView.css */ \"./src/views/BoardView/boardView.css\");\n/* harmony import */ var _boardView_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_boardView_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\nclass BoardView extends _modules_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super({classes: ['board__view']});\n\n    this.addChildren({\n      boardTabs: new _boardComponents_BoardTabsController__WEBPACK_IMPORTED_MODULE_1__[\"default\"](),\n      board: new _boardComponents_SingleBoard__WEBPACK_IMPORTED_MODULE_2__[\"default\"](),\n    });\n  }\n\n  generateContent() {\n    return '<boardtabs></boardtabs><singleboard></singleboard>';\n  }\n\n  getMounts() {\n    return {\n      boardTabs: this.element.getElementsByTagName('boardtabs')[0],\n      board: this.element.getElementsByTagName('singleboard')[0],\n    };\n  }\n}\n\n\n//# sourceURL=webpack:///./src/views/BoardView/BoardView.js?");

/***/ }),

/***/ "./src/views/BoardView/boardComponents/BoardPlus.js":
/*!**********************************************************!*\
  !*** ./src/views/BoardView/boardComponents/BoardPlus.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BoardPlus; });\n/* harmony import */ var _modules_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/Component */ \"./src/modules/Component.js\");\n/* harmony import */ var _components_TransformingInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/TransformingInput */ \"./src/components/TransformingInput.js\");\n\n\n\n\nclass BoardPlus extends _components_TransformingInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor() {\n    super(\n        new _modules_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n          content: '+', classes: ['board__tab', 'board__plus'],\n        }),\n        {classes: ['board__tab', 'plus__input']},\n        'clear',\n    );\n\n    this.states['other'].element.onclick = this.toInput.bind(this);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/views/BoardView/boardComponents/BoardPlus.js?");

/***/ }),

/***/ "./src/views/BoardView/boardComponents/BoardTab.js":
/*!*********************************************************!*\
  !*** ./src/views/BoardView/boardComponents/BoardTab.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BoardTab; });\n/* harmony import */ var _modules_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/Component */ \"./src/modules/Component.js\");\n/* harmony import */ var _modules_DNDComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../modules/DNDComponent */ \"./src/modules/DNDComponent.js\");\n/* harmony import */ var _components_TransformingInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/TransformingInput */ \"./src/components/TransformingInput.js\");\n/* harmony import */ var _actions_Board__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions/Board */ \"./src/actions/Board.js\");\n/* harmony import */ var _actions_UI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/UI */ \"./src/actions/UI.js\");\n\n\n\n\n\n\n\nclass BoardTab extends _modules_DNDComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(ownProps) {\n    super({classes: ['board__tab'], ...ownProps});\n\n    this.addChild(new _modules_DNDComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      classes: ['tab__dropzone', 'upper'],\n      content: '&nbsp;',\n      index: ownProps.index,\n    }).makeDroppable((place, placed) => {\n      ownProps.dispatch(_actions_Board__WEBPACK_IMPORTED_MODULE_3__[\"insertBefore\"](\n          placed.props.index, place.props.index\n      ));\n    }));\n\n    this.addChild(new _modules_DNDComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      classes: ['tab__dropzone', 'lower'],\n      content: '&nbsp;',\n      index: ownProps.index,\n    }).makeDroppable((place, placed) => {\n      ownProps.dispatch(_actions_Board__WEBPACK_IMPORTED_MODULE_3__[\"insertAfter\"](\n          placed.props.index, place.props.index\n      ));\n    }));\n\n    this.boardName = new _components_TransformingInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\n        new _modules_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n          tag: 'div',\n          classes: ['tab__name__container'],\n        })\n            .addChild(new _modules_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n              tag: 'span',\n              classes: ['tab__name'],\n              content: `${ownProps.name}`,\n            })),\n        {\n          classes: ['board__tab'],\n          content: `${ownProps.name}`,\n        },\n        'reset'\n    ).setOnBlur((text) => {\n      if (text) {\n        ownProps.dispatch(_actions_Board__WEBPACK_IMPORTED_MODULE_3__[\"updateBoard\"](ownProps.id, text));\n      }\n    });\n\n    this.boardName.states['other']\n        .element.ondblclick = () => {\n          this.boardName.toInput();\n        };\n\n    this.addChild(this.boardName);\n\n    this.element.onclick = () => {\n      ownProps.dispatch(_actions_UI__WEBPACK_IMPORTED_MODULE_4__[\"selectBoard\"](ownProps.index));\n    };\n  }\n\n  select() {\n    this.addStyle('selected');\n  }\n\n  deselect() {\n    this.removeStyle('selected');\n  }\n\n  del() {\n    this.props.dispatch(_actions_Board__WEBPACK_IMPORTED_MODULE_3__[\"deleteBoard\"](this.props.id));\n  }\n\n  enableStuff() {\n  }\n\n  disableStuff() {\n  }\n}\n\n\n//# sourceURL=webpack:///./src/views/BoardView/boardComponents/BoardTab.js?");

/***/ }),

/***/ "./src/views/BoardView/boardComponents/BoardTabsContainer.js":
/*!*******************************************************************!*\
  !*** ./src/views/BoardView/boardComponents/BoardTabsContainer.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BoardTabsContainer; });\n/* harmony import */ var _modules_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/Component */ \"./src/modules/Component.js\");\n/* harmony import */ var _BoardTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoardTab */ \"./src/views/BoardView/boardComponents/BoardTab.js\");\n\n\n\n\nclass BoardTabsContainer extends _modules_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(dispatch, ...boards) {\n    super({classes: ['board__tabs']});\n\n    boards.forEach((b, i) => {\n      this.addChild(new _BoardTab__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n        name: b.name,\n        id: b.id,\n        index: i,\n        dispatch: dispatch,\n      }).makeDraggable(\n          (comp) => {\n            this.enableHighliting(comp.props.index);\n          },\n          (comp) => {\n            this.disableHighliting(comp.props.index);\n          },\n          (comp) => {\n            this.disableHighliting(comp.props.index);\n          }));\n    });\n  }\n\n  selectTab(index) {\n    this.forEachChild((ch) => {\n      ch.deselect();\n    });\n\n    if (typeof index !== 'undefined') {\n      this.getChild(index).select();\n    }\n  }\n\n  enableHighliting(index) {\n    this.forEachChildSmart((child) => {\n      if (!(child.index === index)) {\n        child.component.enableStuff();\n      }\n    });\n  }\n\n  disableHighliting(index) {\n    this.forEachChildSmart((child) => {\n      if (!(child.index === index)) {\n        child.component.disableStuff();\n      }\n    });\n  }\n}\n\n\n//# sourceURL=webpack:///./src/views/BoardView/boardComponents/BoardTabsContainer.js?");

/***/ }),

/***/ "./src/views/BoardView/boardComponents/BoardTabsController.js":
/*!********************************************************************!*\
  !*** ./src/views/BoardView/boardComponents/BoardTabsController.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BoardTabsController; });\n/* harmony import */ var _modules_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/Component */ \"./src/modules/Component.js\");\n/* harmony import */ var _BoardTabsContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoardTabsContainer */ \"./src/views/BoardView/boardComponents/BoardTabsContainer.js\");\n/* harmony import */ var _BoardPlus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BoardPlus */ \"./src/views/BoardView/boardComponents/BoardPlus.js\");\n/* harmony import */ var _actions_Board__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions/Board */ \"./src/actions/Board.js\");\n\n\n\n\n\n\nclass BoardTabsController extends _modules_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super({classes: ['board__tab__controller']});\n\n    this.addChildren({plus: new _BoardPlus__WEBPACK_IMPORTED_MODULE_2__[\"default\"]()});\n\n    this.getChild('plus').setOnBlur((text) => {\n      if (text) this.dispatch(_actions_Board__WEBPACK_IMPORTED_MODULE_3__[\"create\"](text));\n    });\n\n    this.selectedIndex = undefined;\n  }\n\n  generateContent() {\n    return '<tabscontainer></tabscontainer><tabplus></tabplus>';\n  }\n\n  getMounts() {\n    return {\n      tabscontainer: this.element.getElementsByTagName('tabscontainer')[0],\n      plus: this.element.getElementsByTagName('tabplus')[0],\n    };\n  }\n\n  fillBoardTabs(boards) {\n    const boardTabs = new _BoardTabsContainer__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n        this.dispatch.bind(this),\n        ...boards\n    );\n\n    if (typeof this.selectedIndex !== 'undefined') {\n      boardTabs.selectTab(this.selectedIndex);\n    }\n\n    this.addChild(\n        boardTabs,\n        'tabscontainer'\n    );\n  }\n\n  init(state) {\n    this.selectedIndex = state.ui.selectedIndex;\n    this.fillBoardTabs(state.boards);\n\n    this.subscribe((state) => {\n      return {boards: state.boards};\n    });\n    this.subscribe((state) => {\n      return {index: state.ui.selectedIndex};\n    });\n  }\n\n  stateUpdate(stateUpdate) {\n    if ('boards' in stateUpdate) {\n      this.fillBoardTabs(stateUpdate.boards);\n    } else if ('index' in stateUpdate) {\n      this.selectedIndex = stateUpdate.index;\n      this.getChild('tabscontainer').selectTab(this.selectedIndex);\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/views/BoardView/boardComponents/BoardTabsController.js?");

/***/ }),

/***/ "./src/views/BoardView/boardComponents/Card.js":
/*!*****************************************************!*\
  !*** ./src/views/BoardView/boardComponents/Card.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Card; });\n/* harmony import */ var _modules_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/Component */ \"./src/modules/Component.js\");\n/* harmony import */ var _components_TransformingInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/TransformingInput */ \"./src/components/TransformingInput.js\");\n/* harmony import */ var _modules_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../modules/dnd */ \"./src/modules/dnd.js\");\n/* harmony import */ var _actions_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions/Card */ \"./src/actions/Card.js\");\n\n// import DNDComponent from '../../modules/DNDComponent';\n\n\n\n\n\nclass Card extends _components_TransformingInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(card, dispatch) {\n    super(new _modules_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      classes: ['board__card'],\n      content: card.caption,\n    }),\n    {\n      classes: ['board__card'],\n      content: card.caption,\n    });\n\n    this.id = card.id;\n\n    this.useDblclick();\n    Object(_modules_dnd__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this);\n\n    this.makeDraggable();\n    this.dispatch = dispatch;\n  }\n\n  del() {\n    this.dispatch(_actions_Card__WEBPACK_IMPORTED_MODULE_3__[\"deleteCard\"](this.id));\n  }\n}\n\n\n//# sourceURL=webpack:///./src/views/BoardView/boardComponents/Card.js?");

/***/ }),

/***/ "./src/views/BoardView/boardComponents/CardContainer.js":
/*!**************************************************************!*\
  !*** ./src/views/BoardView/boardComponents/CardContainer.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CardContainer; });\n/* harmony import */ var _modules_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/Component */ \"./src/modules/Component.js\");\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ \"./src/views/BoardView/boardComponents/Card.js\");\n/* harmony import */ var _actions_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/Card */ \"./src/actions/Card.js\");\n\n\n\n\n\nclass CardContainer extends _modules_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(boardId, dispatch, ...cards) {\n    super({classes: ['card__container']});\n\n    cards.forEach((c) => {\n      this.addChild(\n          new _modules_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n            classes: ['board__card__container'],\n          })\n              .addChild(new _Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"](c, dispatch).setOnBlur((text) => {\n                dispatch(_actions_Card__WEBPACK_IMPORTED_MODULE_2__[\"setCaption\"](\n                    c.id,\n                    text,\n                    c.priority,\n                    boardId,\n                    c.card_user_id,\n                    c.card_group_id,\n                ));\n              })));\n    });\n  }\n}\n\n\n//# sourceURL=webpack:///./src/views/BoardView/boardComponents/CardContainer.js?");

/***/ }),

/***/ "./src/views/BoardView/boardComponents/CardPlus.js":
/*!*********************************************************!*\
  !*** ./src/views/BoardView/boardComponents/CardPlus.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CardPlus; });\n/* harmony import */ var _modules_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/Component */ \"./src/modules/Component.js\");\n/* harmony import */ var _components_TransformingInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/TransformingInput */ \"./src/components/TransformingInput.js\");\n\n\n\nclass CardPlus extends _components_TransformingInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor() {\n    super(\n        new _modules_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n          content: 'Новая карточка', classes: ['board__card', 'card__plus'],\n        }),\n        {\n          classes: ['board__card', 'card__plus'],\n        }\n    );\n\n    this.states['other'].element.onclick = this.toInput.bind(this);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/views/BoardView/boardComponents/CardPlus.js?");

/***/ }),

/***/ "./src/views/BoardView/boardComponents/GroupController.js":
/*!****************************************************************!*\
  !*** ./src/views/BoardView/boardComponents/GroupController.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GroupController; });\n/* harmony import */ var _modules_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/Component */ \"./src/modules/Component.js\");\n/* harmony import */ var _modules_DNDComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../modules/DNDComponent */ \"./src/modules/DNDComponent.js\");\n/* harmony import */ var _CardContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardContainer */ \"./src/views/BoardView/boardComponents/CardContainer.js\");\n/* harmony import */ var _CardPlus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CardPlus */ \"./src/views/BoardView/boardComponents/CardPlus.js\");\n/* harmony import */ var _components_TransformingInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/TransformingInput */ \"./src/components/TransformingInput.js\");\n/* harmony import */ var _actions_Group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../actions/Group */ \"./src/actions/Group.js\");\n/* harmony import */ var _actions_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../actions/Card */ \"./src/actions/Card.js\");\n\n\n\n\n\n\n\n\n\n\nclass GroupController extends _modules_DNDComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(dispatch, group) {\n    super({classes: ['card__group']});\n\n    this.addChild(new _components_TransformingInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\n        new _modules_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n          content: `${group.name}`,\n          classes: ['group__header', 'group__name'],\n        }),\n        {\n          content: `${group.name}`,\n          classes: ['group__header', 'group__name'],\n        }, 'reset')\n        .setOnBlur((text) => {\n          if (text && group.name !== text) {\n            dispatch(_actions_Group__WEBPACK_IMPORTED_MODULE_5__[\"rename\"](text, group.boardId, group.id));\n          }\n        })\n        .useDblclick()\n    );\n\n    this.addChild(new _CardContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"](group.board_id, dispatch, ...group.cards));\n    this.addChild(new _modules_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      classes: ['board__card__container'],\n    }).addChild(new _CardPlus__WEBPACK_IMPORTED_MODULE_3__[\"default\"]().setOnBlur((text) => {\n      if (text) {\n        dispatch(_actions_Card__WEBPACK_IMPORTED_MODULE_6__[\"createCard\"](text, group.id));\n      }\n    })));\n\n    this.group = group;\n    this.dispatch = dispatch;\n\n    this.makeDraggable();\n  }\n\n  del() {\n    this.dispatch(_actions_Group__WEBPACK_IMPORTED_MODULE_5__[\"deleteGroup\"](this.group.id));\n  }\n}\n\n\n//# sourceURL=webpack:///./src/views/BoardView/boardComponents/GroupController.js?");

/***/ }),

/***/ "./src/views/BoardView/boardComponents/GroupPlus.js":
/*!**********************************************************!*\
  !*** ./src/views/BoardView/boardComponents/GroupPlus.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GroupPlus; });\n/* harmony import */ var _modules_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/Component */ \"./src/modules/Component.js\");\n/* harmony import */ var _components_TransformingInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/TransformingInput */ \"./src/components/TransformingInput.js\");\n\n\n\nclass GroupPlus extends _components_TransformingInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor() {\n    super(\n        new _modules_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n          content: 'Новая группа', classes: ['group__header', 'group__plus'],\n        }),\n        {\n          classes: ['group__header', 'group__input'],\n        }\n    );\n\n    this.states['other'].element.onclick = this.toInput.bind(this);\n    // super({\n    // classes: ['card__group', 'group__plus'],\n    // });\n  }\n}\n\n\n//# sourceURL=webpack:///./src/views/BoardView/boardComponents/GroupPlus.js?");

/***/ }),

/***/ "./src/views/BoardView/boardComponents/GroupsDisplayer.js":
/*!****************************************************************!*\
  !*** ./src/views/BoardView/boardComponents/GroupsDisplayer.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GroupDisplayer; });\n/* harmony import */ var _modules_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/Component */ \"./src/modules/Component.js\");\n/* harmony import */ var _GroupController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupController */ \"./src/views/BoardView/boardComponents/GroupController.js\");\n/* harmony import */ var _GroupPlus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GroupPlus */ \"./src/views/BoardView/boardComponents/GroupPlus.js\");\n/* harmony import */ var _actions_Group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions/Group */ \"./src/actions/Group.js\");\n\n\n\n\n\n\n\nclass GroupDisplayer extends _modules_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(dispatch, ...groups) {\n    super({classes: ['group__displayer']});\n\n    groups.forEach((group) => {\n      this.addChild(new _GroupController__WEBPACK_IMPORTED_MODULE_1__[\"default\"](dispatch, group));\n    });\n\n    this.addChild(new _modules_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({classes: ['card__group']})\n        .addChild(new _GroupPlus__WEBPACK_IMPORTED_MODULE_2__[\"default\"]().setOnBlur((text) => {\n          if (text) dispatch(_actions_Group__WEBPACK_IMPORTED_MODULE_3__[\"createGroup\"](text));\n        })));\n  }\n}\n\n\n//# sourceURL=webpack:///./src/views/BoardView/boardComponents/GroupsDisplayer.js?");

/***/ }),

/***/ "./src/views/BoardView/boardComponents/SingleBoard.js":
/*!************************************************************!*\
  !*** ./src/views/BoardView/boardComponents/SingleBoard.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SingleBoard; });\n/* harmony import */ var _modules_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/Component */ \"./src/modules/Component.js\");\n/* harmony import */ var _GroupsDisplayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupsDisplayer */ \"./src/views/BoardView/boardComponents/GroupsDisplayer.js\");\n/* harmony import */ var _Trashbin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Trashbin */ \"./src/views/BoardView/boardComponents/Trashbin.js\");\n/* harmony import */ var _actions_Board__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions/Board */ \"./src/actions/Board.js\");\n\n\n\n\n\n\n\n\nclass SingleBoard extends _modules_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super({classes: ['single__board']});\n\n    this.addChild(new _Trashbin__WEBPACK_IMPORTED_MODULE_2__[\"default\"]());\n  }\n\n  generateContent() {\n    return '<groups></groups>';\n  }\n\n  getMounts() {\n    return {\n      groups: this.element.getElementsByTagName('groups')[0],\n    };\n  }\n\n  tryShowBoard(board) {\n    if (board.got) {\n      this.showBoard(board);\n    } else {\n      this.dispatch(_actions_Board__WEBPACK_IMPORTED_MODULE_3__[\"getBoard\"](board.id));\n    }\n  }\n\n  showBoard(board) {\n    this.addChild(new _GroupsDisplayer__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.dispatch.bind(this),\n        ...board.cardGroups), 'groups');\n  }\n\n  init(state) {\n    const selectedIndex = state.ui.selectedIndex;\n\n    if (typeof selectedIndex !== 'undefined') {\n      const selectedBoard = state.boards[selectedIndex];\n      this.tryShowBoard(selectedBoard);\n    }\n\n    this.subscribe((state) => state.boards[state.ui.selectedIndex]);\n  }\n\n  stateUpdate(board) {\n    if (board) {\n      this.tryShowBoard(board);\n    } else {\n      this.deleteChild(this.getChild('groups'));\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/views/BoardView/boardComponents/SingleBoard.js?");

/***/ }),

/***/ "./src/views/BoardView/boardComponents/Trashbin.js":
/*!*********************************************************!*\
  !*** ./src/views/BoardView/boardComponents/Trashbin.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Trashbin; });\n/* harmony import */ var _modules_DNDComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/DNDComponent */ \"./src/modules/DNDComponent.js\");\n\n\nconst img = __webpack_require__(/*! ./trash.png */ \"./src/views/BoardView/boardComponents/trash.png\");\n\nclass Trashbin extends _modules_DNDComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super({\n      tag: 'img',\n      attrs: {src: `${img}`},\n      classes: ['trash'],\n    });\n\n    this.makeDroppable((place, placed) => {\n      placed.del();\n    });\n  }\n}\n\n\n//# sourceURL=webpack:///./src/views/BoardView/boardComponents/Trashbin.js?");

/***/ }),

/***/ "./src/views/BoardView/boardComponents/trash.png":
/*!*******************************************************!*\
  !*** ./src/views/BoardView/boardComponents/trash.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/trash.png\";\n\n//# sourceURL=webpack:///./src/views/BoardView/boardComponents/trash.png?");

/***/ }),

/***/ "./src/views/BoardView/boardView.css":
/*!*******************************************!*\
  !*** ./src/views/BoardView/boardView.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--5-2!./boardView.css */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./src/views/BoardView/boardView.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/views/BoardView/boardView.css?");

/***/ }),

/***/ "./src/views/IndexView/IndexView.js":
/*!******************************************!*\
  !*** ./src/views/IndexView/IndexView.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MainView; });\n/* harmony import */ var _modules_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/Component */ \"./src/modules/Component.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ \"./src/views/IndexView/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst template = __webpack_require__(/*! ./index.pug */ \"./src/views/IndexView/index.pug\");\n\n\n\nclass MainView extends _modules_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  generateContent() {\n    return template();\n  }\n}\n\n\n//# sourceURL=webpack:///./src/views/IndexView/IndexView.js?");

/***/ }),

/***/ "./src/views/IndexView/hero-a.svg":
/*!****************************************!*\
  !*** ./src/views/IndexView/hero-a.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/hero-a.svg\";\n\n//# sourceURL=webpack:///./src/views/IndexView/hero-a.svg?");

/***/ }),

/***/ "./src/views/IndexView/index.css":
/*!***************************************!*\
  !*** ./src/views/IndexView/index.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--5-2!./index.css */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./src/views/IndexView/index.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/views/IndexView/index.css?");

/***/ }),

/***/ "./src/views/IndexView/index.pug":
/*!***************************************!*\
  !*** ./src/views/IndexView/index.pug ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv\\u003E\\u003Cdiv class=\\\"row\\\"\\u003E\\u003Cdiv class=\\\"index__column\\\"\\u003E\\u003Cimg\" + (pug.attr(\"src\", `${__webpack_require__(/*! ./hero-a.svg */ \"./src/views/IndexView/hero-a.svg\")}`, true, true)) + \"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"index__column\\\"\\u003E\\u003Cdiv\\u003E\\u003Ch1\\u003EМы создали\\u003C\\u002Fh1\\u003E\\u003Ch1\\u003EЧтобы что\\u003C\\u002Fh1\\u003E\\u003Ch1\\u003E-то было\\u003C\\u002Fh1\\u003E\\u003C\\u002Fdiv\\u003E\\u003Ca href=\\\"\\u002Flogin\\\"\\u003EНачать пользоваться\\u003C\\u002Fa\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./src/views/IndexView/index.pug?");

/***/ }),

/***/ "./src/views/LoginView/LoginForm.js":
/*!******************************************!*\
  !*** ./src/views/LoginView/LoginForm.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LoginForm; });\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Form */ \"./src/components/Form.js\");\n/* harmony import */ var _actions_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/User */ \"./src/actions/User.js\");\n\n\n\n\nconst template = __webpack_require__(/*! ./loginForm.pug */ \"./src/views/LoginView/loginForm.pug\");\n\nclass LoginForm extends _components_Form__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  generateContent() {\n    return template();\n  }\n\n  onSubmit(formValues) {\n    this.dispatch(_actions_User__WEBPACK_IMPORTED_MODULE_1__[\"login\"](\n        formValues.email, formValues.password\n    ));\n  }\n\n  setup() {\n    super.setup();\n    this.errorArea = this.element.querySelector('.login__error');\n  }\n\n  init() {\n    this.subscribe((state) => state.user.loginFailed);\n  }\n\n  stateUpdate(loginFailed) {\n    if (loginFailed) {\n      this.errorArea.innerText = 'Не удалось залогиниться!';\n    } else {\n      this.errorArea.innerText = '';\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/views/LoginView/LoginForm.js?");

/***/ }),

/***/ "./src/views/LoginView/LoginView.js":
/*!******************************************!*\
  !*** ./src/views/LoginView/LoginView.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LoginView; });\n/* harmony import */ var _modules_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/Component */ \"./src/modules/Component.js\");\n/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginForm */ \"./src/views/LoginView/LoginForm.js\");\n/* harmony import */ var _SignupForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignupForm */ \"./src/views/LoginView/SignupForm.js\");\n/* harmony import */ var _login_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.css */ \"./src/views/LoginView/login.css\");\n/* harmony import */ var _login_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_login_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst template = __webpack_require__(/*! ./loginView.pug */ \"./src/views/LoginView/loginView.pug\");\n\n// import './vidymgtu002.jpg';\n\nclass LoginView extends _modules_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n\n    this.addChildren({\n      login: new _LoginForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"](),\n      signup: new _SignupForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"](),\n    });\n  }\n\n  generateContent() {\n    return template();\n  }\n\n  setup() {\n    this.element.querySelector('.img__btn')\n        .addEventListener('click', () => {\n          this.element.querySelector('.cont').classList.toggle('s--signup');\n        });\n  }\n\n  getMounts() {\n    return {\n      login: this.element.querySelector('loginform'),\n      signup: this.element.querySelector('signupform'),\n    };\n  }\n}\n\n\n//# sourceURL=webpack:///./src/views/LoginView/LoginView.js?");

/***/ }),

/***/ "./src/views/LoginView/SignupForm.js":
/*!*******************************************!*\
  !*** ./src/views/LoginView/SignupForm.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SignupForm; });\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Form */ \"./src/components/Form.js\");\n/* harmony import */ var _actions_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/User */ \"./src/actions/User.js\");\n\n\n\n\nconst template = __webpack_require__(/*! ./signupForm.pug */ \"./src/views/LoginView/signupForm.pug\");\n\nclass SignupForm extends _components_Form__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  generateContent() {\n    return template();\n  }\n\n  onSubmit(formValues) {\n    this.dispatch(_actions_User__WEBPACK_IMPORTED_MODULE_1__[\"register\"](\n        formValues.email, formValues.password\n    ));\n  }\n\n  setup() {\n    super.setup();\n    this.errorArea = this.element.querySelector('.signup__error');\n  }\n\n  init() {\n    this.subscribe((state) => state.user.signupFailed);\n  }\n\n  stateUpdate(loginFailed) {\n    if (loginFailed) {\n      this.errorArea.innerText = 'Не удалось зарегистрироваться!';\n    } else {\n      this.errorArea.innerText = '';\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/views/LoginView/SignupForm.js?");

/***/ }),

/***/ "./src/views/LoginView/login.css":
/*!***************************************!*\
  !*** ./src/views/LoginView/login.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--5-2!./login.css */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./src/views/LoginView/login.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/views/LoginView/login.css?");

/***/ }),

/***/ "./src/views/LoginView/loginForm.pug":
/*!*******************************************!*\
  !*** ./src/views/LoginView/loginForm.pug ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Clabel\\u003E\\u003Cspan\\u003EEmail\\u003C\\u002Fspan\\u003E\\u003Cinput name=\\\"email\\\" type=\\\"email\\\"\\u003E\\u003C\\u002Flabel\\u003E\\u003Clabel\\u003E\\u003Cspan\\u003EPassword\\u003C\\u002Fspan\\u003E\\u003Cinput name=\\\"password\\\" type=\\\"password\\\"\\u003E\\u003C\\u002Flabel\\u003E\\u003Clabel\\u003E\\u003Cp class=\\\"forgot-pass\\\"\\u003EЗабыли пароль? Ничем не можем вам помочь\\u003C\\u002Fp\\u003E\\u003Cdiv class=\\\"login__error\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Flabel\\u003E\\u003Cbutton class=\\\"login__submit\\\" type=\\\"submit\\\"\\u003EВойти\\u003C\\u002Fbutton\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./src/views/LoginView/loginForm.pug?");

/***/ }),

/***/ "./src/views/LoginView/loginView.pug":
/*!*******************************************!*\
  !*** ./src/views/LoginView/loginView.pug ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"cont\\\"\\u003E\\u003Cdiv class=\\\"form sign-in\\\"\\u003E\\u003Ch2\\u003EС возвращением\\u003C\\u002Fh2\\u003E\\u003Cloginform\\u003E\\u003C\\u002Floginform\\u003E\\u003Cbutton class=\\\"vk-btn\\\"\\u003EВойти через\\n\\u003Cspan\\u003EВКонтакте\\u003C\\u002Fspan\\u003E\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"sub-cont\\\"\\u003E\\u003Cdiv class=\\\"bmstu\\\"\\u003E\\u003Cdiv class=\\\"img__text m--up\\\"\\u003E\\u003Ch2\\u003EПервый раз?\\u003C\\u002Fh2\\u003E\\u003Cp\\u003EЗарегистрируйтесь и откройте для себя\\nмножество новых возможностей!\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"img__text m--in\\\"\\u003E\\u003Ch2\\u003EОдин из нас?\\u003C\\u002Fh2\\u003E\\u003Cp\\u003EЕсли у вас уже есть аккаунт,\\nпросто войдите в систему.\\nМы скучали по вам!\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"img__btn\\\"\\u003E\\u003Cspan class=\\\"m--up\\\"\\u003EРегистрация\\u003C\\u002Fspan\\u003E\\u003Cspan class=\\\"m--in\\\"\\u003EВход\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"form sign-up\\\"\\u003E\\u003Ch2\\u003EВремя почувствовать себя как дома,\\u003C\\u002Fh2\\u003E\\u003Csignupform\\u003E\\u003C\\u002Fsignupform\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cbutton class=\\\"vk-btn\\\"\\u003Eсвязать с аккаунтом\\n\\u003Cspan\\u003EВКонтакте\\u003C\\u002Fspan\\u003E\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./src/views/LoginView/loginView.pug?");

/***/ }),

/***/ "./src/views/LoginView/signupForm.pug":
/*!********************************************!*\
  !*** ./src/views/LoginView/signupForm.pug ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Clabel\\u003E\\u003Cspan\\u003EВаше имя\\u003C\\u002Fspan\\u003E\\u003Cinput name=\\\"name\\\" type=\\\"text\\\"\\u003E\\u003C\\u002Flabel\\u003E\\u003Clabel\\u003E\\u003Cspan\\u003EEmail\\u003C\\u002Fspan\\u003E\\u003Cinput name=\\\"email\\\" type=\\\"email\\\"\\u003E\\u003C\\u002Flabel\\u003E\\u003Clabel\\u003E\\u003Cspan\\u003EPassword\\u003C\\u002Fspan\\u003E\\u003Cinput name=\\\"password\\\" type=\\\"password\\\"\\u003E\\u003C\\u002Flabel\\u003E\\u003Clabel\\u003E\\u003Cdiv class=\\\"signup__error\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Flabel\\u003E\\u003Cbutton type=\\\"submit\\\" form=\\\"up\\\"\\u003EЗарегистрироваться\\u003C\\u002Fbutton\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./src/views/LoginView/signupForm.pug?");

/***/ }),

/***/ "./src/views/ProfileView/ProfileView.js":
/*!**********************************************!*\
  !*** ./src/views/ProfileView/ProfileView.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProfileView; });\n/* harmony import */ var _modules_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/Component */ \"./src/modules/Component.js\");\n\n\nclass ProfileView extends _modules_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  generateContent() {\n    return 'тут профиль';\n  }\n}\n\n\n//# sourceURL=webpack:///./src/views/ProfileView/ProfileView.js?");

/***/ }),

/***/ "./src/views/TrelloHeader/TrelloHeader.js":
/*!************************************************!*\
  !*** ./src/views/TrelloHeader/TrelloHeader.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TrelloHeader; });\n/* harmony import */ var _modules_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/Component */ \"./src/modules/Component.js\");\n/* harmony import */ var _components_StateComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/StateComponent */ \"./src/components/StateComponent.js\");\n/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Link */ \"./src/components/Link.js\");\n/* harmony import */ var _trelloHeader_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trelloHeader.css */ \"./src/views/TrelloHeader/trelloHeader.css\");\n/* harmony import */ var _trelloHeader_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_trelloHeader_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst template = __webpack_require__(/*! ./trelloHeader.pug */ \"./src/views/TrelloHeader/trelloHeader.pug\");\n\n\nclass RightHeaderHalf extends _components_StateComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(ownProps) {\n    super(ownProps);\n\n    this.addStates({\n      'no_auth': new _modules_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ownProps)\n          .addChild(\n              new _components_Link__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n                text: 'вход',\n                path: '/login',\n                classes: ['header__elem'],\n              })),\n      'auth': new _modules_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ownProps)\n          .addChildren(\n              new _components_Link__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n                text: 'профиль',\n                path: '/profile',\n                classes: ['header__elem'],\n              }),\n              new _components_Link__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n                text: 'доски',\n                path: '/board',\n                classes: ['header__elem'],\n              }),\n              new _components_Link__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n                text: 'выйти',\n                path: '/logout',\n                classes: ['header__elem'],\n              })\n          ),\n    });\n\n    this.setState('no_auth');\n  }\n}\n\nclass TrelloHeader extends _modules_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super({tag: 'header', classes: ['header']});\n\n    this.addChildren({\n      left: new _modules_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({classes: ['header__left']}),\n      right: new RightHeaderHalf({classes: ['header__right']}),\n    });\n\n    this.addLeft(new _components_Link__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({text: 'домой', path: '/'}));\n  }\n\n  addLeft(component, mount) {\n    this.getChild('left')\n        .addChild(component.addStyle('header__elem'), mount);\n\n    return this;\n  }\n\n  addRight(component, mount) {\n    this.getChild('right').addChild(\n        component,\n        mount\n    );\n\n    return this;\n  }\n\n  generateContent() {\n    return template();\n  }\n\n  getMounts() {\n    return {\n      left: this.element.getElementsByClassName('header__left')[0],\n      right: this.element.getElementsByClassName('header__right')[0],\n    };\n  }\n\n  switchAuth(loggedIn) {\n    if (loggedIn) {\n      this.getChild('right').setState('auth');\n    } else {\n      this.getChild('right').setState('no_auth');\n    }\n  }\n\n  init(state) {\n    this.switchAuth(state.user.loggedIn);\n    this.subscribe((state) => state.user.loggedIn);\n  }\n\n  stateUpdate(loggedIn) {\n    this.switchAuth(loggedIn);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/views/TrelloHeader/TrelloHeader.js?");

/***/ }),

/***/ "./src/views/TrelloHeader/trelloHeader.css":
/*!*************************************************!*\
  !*** ./src/views/TrelloHeader/trelloHeader.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--5-2!./trelloHeader.css */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./src/views/TrelloHeader/trelloHeader.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/views/TrelloHeader/trelloHeader.css?");

/***/ }),

/***/ "./src/views/TrelloHeader/trelloHeader.pug":
/*!*************************************************!*\
  !*** ./src/views/TrelloHeader/trelloHeader.pug ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"header__left\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"header__center\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"header__right\\\"\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./src/views/TrelloHeader/trelloHeader.pug?");

/***/ }),

/***/ 0:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///fs_(ignored)?");

/***/ })

/******/ });
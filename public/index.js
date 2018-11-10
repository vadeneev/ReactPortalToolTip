/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Component/PortalTipContainer.jsx":
/*!**********************************************!*\
  !*** ./src/Component/PortalTipContainer.jsx ***!
  \**********************************************/
/*! exports provided: PortalTipContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PortalTipContainer\", function() { return PortalTipContainer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PortalTipContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PortalTipContent */ \"./src/Component/PortalTipContent.jsx\");\n/* harmony import */ var _portal_tip_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portal-tip.scss */ \"./src/Component/portal-tip.scss\");\n/* harmony import */ var _portal_tip_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_portal_tip_scss__WEBPACK_IMPORTED_MODULE_3__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar PortalTipContainer =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(PortalTipContainer, _React$Component);\n\n  function PortalTipContainer(props) {\n    var _this;\n\n    _classCallCheck(this, PortalTipContainer);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(PortalTipContainer).call(this, props));\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"_timeoutID\", 0);\n\n    _this.ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();\n    _this.state = {\n      shouldShowToolTip: false,\n      wasClosedManually: false\n    };\n    _this.showToolTip = _this.showToolTip.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.entersTarget = _this.entersTarget.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.closeToolTip = _this.closeToolTip.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.scheduleClose = _this.scheduleClose.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.clickTarget = _this.clickTarget.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.wipeTimer = _this.wipeTimer.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.leavesTarget = _this.leavesTarget.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.subscribeCloseHandlers = _this.subscribeCloseHandlers.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.unSubscribeCloseHandlers = _this.unSubscribeCloseHandlers.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  }\n\n  _createClass(PortalTipContainer, [{\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      this.unSubscribeCloseHandlers();\n      this.wipeTimer();\n    }\n  }, {\n    key: \"subscribeCloseHandlers\",\n    value: function subscribeCloseHandlers() {\n      window.addEventListener('resize', this.closeToolTip);\n      window.addEventListener('scroll', this.closeToolTip);\n    }\n  }, {\n    key: \"unSubscribeCloseHandlers\",\n    value: function unSubscribeCloseHandlers() {\n      window.removeEventListener('resize', this.closeToolTip);\n      window.removeEventListener('scroll', this.closeToolTip);\n    }\n  }, {\n    key: \"clickTarget\",\n    value: function clickTarget(event) {\n      event.stopPropagation();\n\n      if (this.state.shouldShowToolTip) {\n        this.setState({\n          wasClosedManually: true\n        });\n        this.closeToolTip();\n        return false;\n      }\n\n      this.showToolTip({\n        keepOpen: true\n      });\n      this.subscribeCloseHandlers();\n      this.setState({\n        wasClosedManually: false\n      });\n      return true;\n    }\n  }, {\n    key: \"entersTarget\",\n    value: function entersTarget() {\n      this.setState({\n        shouldShowToolTip: true\n      });\n      this.wipeTimer();\n    }\n  }, {\n    key: \"leavesTarget\",\n    value: function leavesTarget(event) {\n      if (this.isFalsePositive(event)) {\n        return false;\n      }\n\n      if (this.state.wasClosedManually) {\n        this.setState({\n          wasClosedManually: false\n        });\n        return false;\n      }\n\n      this.scheduleClose();\n      return true;\n    }\n  }, {\n    key: \"isFalsePositive\",\n    value: function isFalsePositive(event) {\n      // fast click causes false positive mouseleave event in chrome\n      var element = document.elementFromPoint(event.clientX, event.clientY);\n      return _toConsumableArray(this.ref.current.childNodes).indexOf(element) !== -1;\n    }\n  }, {\n    key: \"showToolTip\",\n    value: function showToolTip() {\n      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n        keepOpen: false\n      },\n          _ref$keepOpen = _ref.keepOpen,\n          keepOpen = _ref$keepOpen === void 0 ? false : _ref$keepOpen;\n\n      this.wipeTimer();\n      this.setState({\n        shouldShowToolTip: true\n      });\n      !keepOpen && this.scheduleClose();\n    }\n  }, {\n    key: \"wipeTimer\",\n    value: function wipeTimer() {\n      clearTimeout(this._timeoutID);\n    }\n  }, {\n    key: \"scheduleClose\",\n    value: function scheduleClose() {\n      this.wipeTimer();\n\n      if (this.props.autoHide) {\n        this._timeoutID = setTimeout(this.closeToolTip, this.props.hideDelay);\n      }\n    }\n  }, {\n    key: \"closeToolTip\",\n    value: function closeToolTip() {\n      this.wipeTimer();\n      this.unSubscribeCloseHandlers();\n      this.props.willCloseCallback && this.props.willCloseCallback();\n      this.setState({\n        shouldShowToolTip: false\n      });\n    }\n  }, {\n    key: \"isToolTipContent\",\n    value: function isToolTipContent(element) {\n      return element.hasOwnProperty('type') && element.type.hasOwnProperty('displayName') && element.type.displayName === _PortalTipContent__WEBPACK_IMPORTED_MODULE_2__[\"PortalTipContent\"].displayName;\n    }\n  }, {\n    key: \"getToolTipItems\",\n    value: function getToolTipItems(children) {\n      var target = [];\n      var content;\n\n      for (var i in children) {\n        if (this.isToolTipContent(children[i])) {\n          content = children[i];\n          continue;\n        }\n\n        target.push(children[i]);\n      }\n\n      return {\n        target: target,\n        content: content\n      };\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$getToolTipItems = this.getToolTipItems(this.props.children),\n          target = _this$getToolTipItems.target,\n          content = _this$getToolTipItems.content;\n\n      var tooltip = this.state.shouldShowToolTip && react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(content, {\n        targetElement: this.ref.current\n      });\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        onMouseEnter: this.entersTarget,\n        onMouseLeave: this.leavesTarget,\n        onMouseDown: this.clickTarget,\n        className: \"portal-tip__target \".concat(this.props.containerClassNames),\n        ref: this.ref\n      }, tooltip, target);\n    }\n  }]);\n\n  return PortalTipContainer;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nvar childrenPropTypeLogic = function childrenPropTypeLogic(props, propName, componentName) {\n  var prop = props[propName];\n  var chArr = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.toArray(prop);\n\n  if (!chArr.find(function (child) {\n    return child.type.displayName === _PortalTipContent__WEBPACK_IMPORTED_MODULE_2__[\"PortalTipContent\"].displayName;\n  })) {\n    return new Error(\"\".concat(componentName, \" requires PortalTipContent with content you want to show.\"));\n  }\n\n  return null;\n};\n\nPortalTipContainer.propTypes = {\n  hideDelay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),\n  autoHide: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,\n  disableHoverShow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,\n  willCloseCallback: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  children: childrenPropTypeLogic,\n  forceShowToolTip: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  containerClassNames: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\nPortalTipContainer.defaultProps = {\n  hideDelay: 0,\n  autoHide: true,\n  disableHoverShow: false,\n  forceShowToolTip: false,\n  containerClassNames: ''\n};\n\n\n//# sourceURL=webpack:///./src/Component/PortalTipContainer.jsx?");

/***/ }),

/***/ "./src/Component/PortalTipContent.jsx":
/*!********************************************!*\
  !*** ./src/Component/PortalTipContent.jsx ***!
  \********************************************/
/*! exports provided: PortalTipContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PortalTipContent\", function() { return PortalTipContent; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\n\n\nvar PortalTipContent =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(PortalTipContent, _React$Component);\n\n  function PortalTipContent(props) {\n    var _this;\n\n    _classCallCheck(this, PortalTipContent);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(PortalTipContent).call(this, props));\n    _this.bodyRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();\n    _this.arrowRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();\n    _this.state = {\n      body: {\n        left: 0,\n        top: 0\n      },\n      arrow: {\n        left: 0,\n        top: 0\n      }\n    };\n    _this.setPositions = _this.setPositions.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.getDimensions = _this.getDimensions.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  }\n\n  _createClass(PortalTipContent, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var targetBounds = this.props.targetElement.getBoundingClientRect();\n\n      var _this$getOffset = this.getOffset(targetBounds),\n          left = _this$getOffset.left,\n          top = _this$getOffset.top;\n\n      var visibleWidth = targetBounds.right - targetBounds.left;\n      var visibleHeight = targetBounds.bottom - targetBounds.top;\n      this.setPositions({\n        left: left,\n        top: top,\n        visibleWidth: visibleWidth,\n        visibleHeight: visibleHeight\n      });\n    }\n  }, {\n    key: \"setPositions\",\n    value: function setPositions(_ref) {\n      var left = _ref.left,\n          top = _ref.top,\n          visibleWidth = _ref.visibleWidth,\n          visibleHeight = _ref.visibleHeight;\n      var body = {};\n      var arrow = {};\n\n      switch (this.props.position) {\n        case 'bottom':\n          var _this$calculateBottom = this.calculateBottomPosition({\n            left: left,\n            top: top,\n            visibleHeight: visibleHeight,\n            visibleWidth: visibleWidth\n          });\n\n          body = _this$calculateBottom.body;\n          arrow = _this$calculateBottom.arrow;\n          break;\n\n        case 'left':\n          var _this$calculateLeftPo = this.calculateLeftPosition({\n            left: left,\n            top: top,\n            visibleHeight: visibleHeight,\n            visibleWidth: visibleWidth\n          });\n\n          body = _this$calculateLeftPo.body;\n          arrow = _this$calculateLeftPo.arrow;\n          break;\n\n        case 'right':\n          var _this$calculateRightP = this.calculateRightPosition({\n            left: left,\n            top: top,\n            visibleHeight: visibleHeight,\n            visibleWidth: visibleWidth\n          });\n\n          body = _this$calculateRightP.body;\n          arrow = _this$calculateRightP.arrow;\n          break;\n\n        default:\n          var _this$calculateTopPos = this.calculateTopPosition({\n            left: left,\n            top: top,\n            visibleWidth: visibleWidth\n          });\n\n          body = _this$calculateTopPos.body;\n          arrow = _this$calculateTopPos.arrow;\n          break;\n      }\n\n      this.setState({\n        body: body,\n        arrow: arrow\n      });\n    }\n  }, {\n    key: \"getDimensions\",\n    value: function getDimensions() {\n      var tooltipWidth = this.bodyRef.current.scrollWidth;\n      var tooltipHeight = this.bodyRef.current.scrollHeight;\n      var arrowWidth = this.arrowRef.current.offsetWidth;\n      var arrowHeight = this.arrowRef.current.offsetHeight;\n      return {\n        tooltipHeight: tooltipHeight,\n        tooltipWidth: tooltipWidth,\n        arrowHeight: arrowHeight,\n        arrowWidth: arrowWidth\n      };\n    }\n  }, {\n    key: \"calculateTopPosition\",\n    value: function calculateTopPosition(_ref2) {\n      var left = _ref2.left,\n          top = _ref2.top,\n          visibleWidth = _ref2.visibleWidth;\n\n      var _this$getDimensions = this.getDimensions(),\n          tooltipHeight = _this$getDimensions.tooltipHeight,\n          tooltipWidth = _this$getDimensions.tooltipWidth,\n          arrowHeight = _this$getDimensions.arrowHeight,\n          arrowWidth = _this$getDimensions.arrowWidth;\n\n      var nextLeft = left + visibleWidth / 2 - tooltipWidth / 2;\n\n      var body = _objectSpread({}, this.reviewXaxis(nextLeft, tooltipWidth), {\n        top: top - tooltipHeight - arrowHeight\n      });\n\n      var arrow = {\n        top: top - arrowHeight * 1.5,\n        left: left + visibleWidth / 2 - arrowWidth / 2\n      };\n      return {\n        body: body,\n        arrow: arrow\n      };\n    }\n  }, {\n    key: \"calculateBottomPosition\",\n    value: function calculateBottomPosition(_ref3) {\n      var left = _ref3.left,\n          top = _ref3.top,\n          visibleWidth = _ref3.visibleWidth,\n          visibleHeight = _ref3.visibleHeight;\n\n      var _this$getDimensions2 = this.getDimensions(),\n          tooltipHeight = _this$getDimensions2.tooltipHeight,\n          tooltipWidth = _this$getDimensions2.tooltipWidth,\n          arrowHeight = _this$getDimensions2.arrowHeight,\n          arrowWidth = _this$getDimensions2.arrowWidth;\n\n      var nextLeft = left + visibleWidth / 2 - tooltipWidth / 2;\n\n      var body = _objectSpread({}, this.reviewXaxis(nextLeft, tooltipWidth), {\n        top: top + visibleHeight + arrowHeight\n      });\n\n      var arrow = {\n        top: top + visibleHeight + arrowHeight / 2,\n        left: left + visibleWidth / 2 - arrowWidth / 2\n      };\n      return {\n        body: body,\n        arrow: arrow\n      };\n    }\n  }, {\n    key: \"calculateRightPosition\",\n    value: function calculateRightPosition(_ref4) {\n      var left = _ref4.left,\n          top = _ref4.top,\n          visibleHeight = _ref4.visibleHeight,\n          visibleWidth = _ref4.visibleWidth;\n\n      var _this$getDimensions3 = this.getDimensions(),\n          tooltipHeight = _this$getDimensions3.tooltipHeight,\n          tooltipWidth = _this$getDimensions3.tooltipWidth,\n          arrowHeight = _this$getDimensions3.arrowHeight,\n          arrowWidth = _this$getDimensions3.arrowWidth;\n\n      var nextLeft = left + visibleWidth + arrowWidth;\n      var nextTop = top + visibleHeight / 2 - tooltipHeight / 2;\n\n      var body = _objectSpread({}, {\n        left: nextLeft\n      }, this.reviewYaxis(nextTop, tooltipHeight));\n\n      var arrow = {\n        top: top + visibleHeight / 2 - arrowHeight / 2,\n        left: left + visibleWidth + arrowWidth / 2\n      };\n      return {\n        body: body,\n        arrow: arrow\n      };\n    }\n  }, {\n    key: \"calculateLeftPosition\",\n    value: function calculateLeftPosition(_ref5) {\n      var left = _ref5.left,\n          top = _ref5.top,\n          visibleHeight = _ref5.visibleHeight,\n          visibleWidth = _ref5.visibleWidth;\n\n      var _this$getDimensions4 = this.getDimensions(),\n          tooltipHeight = _this$getDimensions4.tooltipHeight,\n          tooltipWidth = _this$getDimensions4.tooltipWidth,\n          arrowHeight = _this$getDimensions4.arrowHeight,\n          arrowWidth = _this$getDimensions4.arrowWidth;\n\n      var nextLeft = left - tooltipWidth - arrowWidth;\n      var nextTop = top + visibleHeight / 2 - tooltipHeight / 2;\n\n      var body = _objectSpread({}, {\n        left: nextLeft\n      }, this.reviewYaxis(nextTop, tooltipHeight));\n\n      var arrow = {\n        top: top + visibleHeight / 2 - arrowHeight / 2,\n        left: left - arrowWidth * 1.5\n      };\n      return {\n        body: body,\n        arrow: arrow\n      };\n    }\n  }, {\n    key: \"reviewXaxis\",\n    value: function reviewXaxis(nextLeft, bodyWidth) {\n      var left = 5;\n      var width = document.body.clientWidth - 10 + 'px';\n\n      if (bodyWidth >= document.body.clientWidth) {\n        return {\n          left: left,\n          width: width\n        };\n      }\n\n      if (nextLeft <= 0) {\n        return {\n          left: left\n        };\n      }\n\n      var rightOffset = document.body.clientWidth - bodyWidth - nextLeft;\n\n      if (rightOffset < 0) {\n        return {\n          left: nextLeft + rightOffset - left\n        };\n      }\n\n      return {\n        left: nextLeft\n      };\n    }\n  }, {\n    key: \"reviewYaxis\",\n    value: function reviewYaxis(nextTop, bodyHeight) {\n      var nextBottom = nextTop + bodyHeight;\n      var curPageBottom = window.innerHeight + (window.scrollY || window.pageYOffset || 0);\n      var top = 5;\n\n      if (nextBottom >= curPageBottom) {\n        var newTop = nextTop - nextBottom + curPageBottom;\n        return {\n          top: newTop\n        };\n      }\n\n      if (nextTop <= 0) return {\n        top: top\n      };\n      return {\n        top: nextTop\n      };\n    }\n  }, {\n    key: \"getOffset\",\n    value: function getOffset(boundRect) {\n      var xOffset = window.scrollX || window.pageXOffset;\n      var yOffset = window.scrollY || window.pageYOffset;\n      var left = boundRect.left + xOffset;\n      var top = boundRect.top + yOffset;\n      return {\n        left: left,\n        top: top\n      };\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          position = _this$props.position,\n          width = _this$props.width,\n          maxWidth = _this$props.maxWidth;\n\n      var bodyStyles = _objectSpread({}, {\n        width: width,\n        maxWidth: maxWidth\n      }, this.state.body);\n\n      return react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        ref: this.bodyRef,\n        className: \"portal-tip__body \".concat(this.props.extraBodyClass),\n        style: _objectSpread({}, bodyStyles)\n      }, this.props.children), this.props.showArrow && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        ref: this.arrowRef,\n        className: \"portal-tip__arrow portal-tip__arrow--\".concat(position),\n        style: _objectSpread({}, this.state.arrow)\n      })), document.body);\n    }\n  }]);\n\n  return PortalTipContent;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nPortalTipContent.propTypes = {\n  showArrow: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,\n  width: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  maxWidth: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  extraBodyClass: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,\n  position: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  targetElement: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object\n};\nPortalTipContent.defaultProps = {\n  width: 'auto',\n  maxWidth: 'auto',\n  position: 'top',\n  showArrow: true,\n  extraBodyClass: ''\n};\nPortalTipContent.displayName = 'PortalTipContent';\n\n\n//# sourceURL=webpack:///./src/Component/PortalTipContent.jsx?");

/***/ }),

/***/ "./src/Component/portal-tip.scss":
/*!***************************************!*\
  !*** ./src/Component/portal-tip.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/Component/portal-tip.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Component_PortalTipContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Component/PortalTipContainer */ \"./src/Component/PortalTipContainer.jsx\");\n/* harmony import */ var _Component_PortalTipContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Component/PortalTipContent */ \"./src/Component/PortalTipContent.jsx\");\n\n\n\n\n\nvar App = function App() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Component_PortalTipContainer__WEBPACK_IMPORTED_MODULE_2__[\"PortalTipContainer\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Component_PortalTipContent__WEBPACK_IMPORTED_MODULE_3__[\"PortalTipContent\"], null, \"Just simple text in tooltip.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"demo-box\"\n  }, \"1\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Component_PortalTipContainer__WEBPACK_IMPORTED_MODULE_2__[\"PortalTipContainer\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Component_PortalTipContent__WEBPACK_IMPORTED_MODULE_3__[\"PortalTipContent\"], null, \"Just simple text in tooltip.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"demo-box\"\n  }, \"1\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Component_PortalTipContainer__WEBPACK_IMPORTED_MODULE_2__[\"PortalTipContainer\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Component_PortalTipContent__WEBPACK_IMPORTED_MODULE_3__[\"PortalTipContent\"], null, \"Just simple text in tooltip.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"demo-box\"\n  }, \"1\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Component_PortalTipContainer__WEBPACK_IMPORTED_MODULE_2__[\"PortalTipContainer\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Component_PortalTipContent__WEBPACK_IMPORTED_MODULE_3__[\"PortalTipContent\"], {\n    position: \"right\"\n  }, \"Just simple text in tooltip.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"demo-box\"\n  }, \"1\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Component_PortalTipContainer__WEBPACK_IMPORTED_MODULE_2__[\"PortalTipContainer\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Component_PortalTipContent__WEBPACK_IMPORTED_MODULE_3__[\"PortalTipContent\"], {\n    position: \"bottom\"\n  }, \"Just simple text in tooltip.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"demo-box\"\n  }, \"1\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Component_PortalTipContainer__WEBPACK_IMPORTED_MODULE_2__[\"PortalTipContainer\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Component_PortalTipContent__WEBPACK_IMPORTED_MODULE_3__[\"PortalTipContent\"], {\n    position: \"left\"\n  }, \"Just simple text in tooltip.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"demo-box\"\n  }, \"1\"))));\n};\n\nObject(react_dom__WEBPACK_IMPORTED_MODULE_1__[\"render\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById('app'));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi @babel/polyfill ./src/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/polyfill */\"./node_modules/@babel/polyfill/lib/index.js\");\nmodule.exports = __webpack_require__(/*! F:\\GIT\\ReactPortalToolTip\\src\\index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_@babel/polyfill_./src/index.js?");

/***/ })

/******/ });
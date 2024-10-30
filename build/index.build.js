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

/***/ "./src/accordion.js":
/*!**************************!*\
  !*** ./src/accordion.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$blockEditor = wp.blockEditor,\n    RichText = _wp$blockEditor.RichText,\n    InspectorControls = _wp$blockEditor.InspectorControls,\n    ColorPalette = _wp$blockEditor.ColorPalette,\n    BlockControls = _wp$blockEditor.BlockControls,\n    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,\n    InnerBlocks = _wp$blockEditor.InnerBlocks;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    PanelRow = _wp$components.PanelRow,\n    TextControl = _wp$components.TextControl,\n    FormToggle = _wp$components.FormToggle;\nvar Fragment = wp.element.Fragment;\nregisterBlockType('hotblocks/accordion', {\n  title: \"Hot Accordion\",\n  icon: 'list-view',\n  category: 'hot-blocks',\n  supports: {\n    align: true\n  },\n  attributes: {\n    headingString: {\n      type: 'string',\n      \"default\": false\n    },\n    fontColor: {\n      type: 'string',\n      \"default\": 'black'\n    },\n    tabOpen: {\n      type: 'boolean',\n      \"default\": false\n    },\n    tabOpenDisplay: {\n      type: 'string',\n      \"default\": 'none'\n    },\n    activeTabClass: {\n      type: 'string',\n      \"default\": 'accordion-heading'\n    }\n  },\n  // props are passed to edit by default\n  // props contains things like setAttributes and attributes\n  edit: function edit(props) {\n    // we are peeling off the things we need\n    var setAttributes = props.setAttributes,\n        attributes = props.attributes,\n        className = props.className,\n        focus = props.focus;\n    var _props$attributes = props.attributes,\n        fontColor = _props$attributes.fontColor,\n        tabOpen = _props$attributes.tabOpen,\n        tabOpenDisplay = _props$attributes.tabOpenDisplay,\n        activeTabClass = _props$attributes.activeTabClass; // This function is called when RichText changes\n    // By default the new string is passed to the function\n    // not an event object like react normally would do\n\n    function onHeadingChange(changes) {\n      setAttributes({\n        headingString: changes\n      });\n    } //create a handler that will set the color when you click on the ColorPalette\n\n\n    function onTextColorChange(changes) {\n      setAttributes({\n        fontColor: changes\n      });\n    }\n\n    function onTabOpenChange(changes) {\n      setAttributes({\n        tabOpen: !tabOpen\n      });\n\n      if (tabOpen === true) {\n        setAttributes({\n          tabOpenDisplay: \"none\",\n          activeTabClass: \"accordion-heading\"\n        });\n      } else {\n        setAttributes({\n          tabOpenDisplay: \"block\",\n          activeTabClass: \"accordion-heading active_tab\"\n        });\n      }\n    }\n\n    return [/*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, {\n      title: __('Properties'),\n      initialOpen: true\n    }, /*#__PURE__*/React.createElement(PanelRow, null, /*#__PURE__*/React.createElement(\"p\", null, __('Accordion block contains heading and placeholder for other blocks. Click on the heading reveals the content below it.'))), /*#__PURE__*/React.createElement(PanelRow, null, /*#__PURE__*/React.createElement(\"h4\", null, __('Heading Color'))), /*#__PURE__*/React.createElement(PanelRow, null, /*#__PURE__*/React.createElement(ColorPalette, {\n      value: fontColor,\n      onChange: onTextColorChange\n    })), /*#__PURE__*/React.createElement(PanelRow, null, /*#__PURE__*/React.createElement(\"h4\", null, __('Tab Open By Default'))), /*#__PURE__*/React.createElement(PanelRow, null, /*#__PURE__*/React.createElement(FormToggle, {\n      checked: tabOpen,\n      onChange: onTabOpenChange\n    })))), /*#__PURE__*/React.createElement(\"div\", {\n      className: className\n    }, /*#__PURE__*/React.createElement(RichText, {\n      tagName: \"h4\",\n      className: activeTabClass // adding a class we can target\n      ,\n      value: attributes.headingString,\n      onChange: onHeadingChange,\n      placeholder: __('Enter your heading here!'),\n      style: {\n        color: fontColor\n      }\n    }), /*#__PURE__*/React.createElement(\"div\", {\n      className: \"accordion-content\",\n      style: {\n        display: tabOpenDisplay\n      }\n    }, /*#__PURE__*/React.createElement(InnerBlocks, null)))];\n  },\n  // again, props are automatically passed to save and edit\n  save: function save(props) {\n    var attributes = props.attributes,\n        className = props.className;\n    var _props$attributes2 = props.attributes,\n        fontColor = _props$attributes2.fontColor,\n        tabOpen = _props$attributes2.tabOpen,\n        tabOpenDisplay = _props$attributes2.tabOpenDisplay,\n        activeTabClass = _props$attributes2.activeTabClass;\n    return /*#__PURE__*/React.createElement(\"div\", {\n      className: className\n    }, /*#__PURE__*/React.createElement(\"h4\", {\n      className: activeTabClass,\n      style: {\n        color: fontColor\n      }\n    }, attributes.headingString), /*#__PURE__*/React.createElement(\"div\", {\n      className: \"accordion-content\",\n      style: {\n        display: tabOpenDisplay\n      }\n    }, /*#__PURE__*/React.createElement(InnerBlocks.Content, null)));\n  }\n});\n\n//# sourceURL=webpack:///./src/accordion.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _accordion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion.js */ \"./src/accordion.js\");\n/* harmony import */ var _accordion_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_accordion_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
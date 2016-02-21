/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.default = {
	    install: function install(Vue, options) {
	        /**
	         * Spread Properties for Component
	         *
	         * Usage:
	         *  <component v-for="comp in components"
	         *             :is="comp.type"
	         *             v-props="comp.data"/><component>
	         */
	        Vue.directive('props', {
	            bind: function bind() {
	
	                // set the last component child as the current
	                var comp = this.vm.$children[this.vm.$children.length - 1];
	                var values = this._scope.$eval(this.expression);
	                if ((typeof values === 'undefined' ? 'undefined' : _typeof(values)) !== 'object' || values instanceof Array) {
	                    values = { data: values };
	                }
	
	                // apply properties to component data
	                for (var key in values) {
	                    if (values.hasOwnProperty(key)) {
	                        var hkey = this.hyphenate(key);
	                        var val = values[key];
	                        if (typeof val === 'string') {
	                            comp.$options.el.setAttribute(hkey, values[key]);
	                        } else {
	                            comp.$options.el.setAttribute(':' + hkey, values[key]);
	                        }
	                    }
	                }
	                comp._initState();
	            },
	
	
	            /*
	             * Hyphenate a camelCase string.
	             */
	            hyphenate: function hyphenate(str) {
	                var hyphenateRE = /([a-z\d])([A-Z])/g;
	                return str.replace(hyphenateRE, '$1-$2').toLowerCase();
	            }
	        });
	    }
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	  entry: './index.js',
	  output: {
	    path: './build',
	    filename: 'vue-props.js'
	  },
	  module: {
	    loaders: [{
	      test: /\.js$/,
	      exclude: /node_modules/,
	      loader: 'babel',
	      query: { presets: ['es2015'] }
	    }]
	  },
	  devtool: '#source-map'
	};

/***/ }
/******/ ]);
//# sourceMappingURL=vue-props.js.map
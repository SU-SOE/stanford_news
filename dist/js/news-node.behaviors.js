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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/js/news-node.behaviors.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/js/news-node.behaviors.js":
/*!***************************************!*\
  !*** ./lib/js/news-node.behaviors.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _news_page_behavior_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news.page.behavior.js */ "./lib/js/news.page.behavior.js");
/* harmony import */ var _news_page_behavior_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_news_page_behavior_js__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./lib/js/news.page.behavior.js":
/*!**************************************!*\
  !*** ./lib/js/news.page.behavior.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Behavior Example that works with Webpack.
 *
 * @see: https://www.npmjs.com/package/drupal-behaviors-loader
 *
 * Webpack wraps everything in enclosures and hides the global variables from
 * scripts so special handling is needed.
 */
window.Drupal.behaviors.news = {
  // Attach Drupal Behavior.
  attach: function attach(context, settings) {
    (function ($) {
      var soeSocialPathToImages = '/sites/default/files';
      var pathArray = window.location.pathname.split('/');
      var soeEnv = '';
      var path = pathArray[1];
      $('.news-social-media').prepend('<div class="widget-wrapper-linkedin"><a href="" class="share-linkedin"><img src="' + location.protocol + '//' + location.host + soeEnv + soeSocialPathToImages + '/soe_linkedin_icon_blue.svg" alt="linkedin share"></a></div>');
      $('.news-social-media').prepend('<div class="widget-wrapper-twitter"><a href="" class="share-twitter"><img src="' + location.protocol + '//' + location.host + soeEnv + soeSocialPathToImages + '/soe_twitter_icon_blue.svg" alt="twitter share"></a></div>');
      $('.news-social-media').prepend('<div class="widget-wrapper-fb"><a href="" class="share-fb"><img src="' + location.protocol + '//' + location.host + soeEnv + soeSocialPathToImages + '/soe_facebook_icon_blue.svg" alt="facebook share"></a></div>'); // Get the current URL

      var pathname = window.location,
          // Data
      shareTitle = $('div[property="dc:title"] h1').text(),
          shareSubtitle = $('.share-sub').text(),
          // URL's
      twurl = 'https://twitter.com/intent/tweet?url=' + encodeURI(pathname) + '&text=' + shareTitle + ' ' + shareSubtitle,
          fburl = 'http://www.facebook.com/sharer.php?u=' + pathname + '&display=popup',
          liurl = 'https://www.linkedin.com/shareArticle?mini=true&url=' + pathname + '&title=' + shareTitle + '&summary=' + shareSubtitle; // add the URL's to anchors

      $('.share-fb').attr({
        'href': fburl
      });
      $('.share-twitter').attr({
        'href': twurl
      });
      $('.share-linkedin').attr({
        'href': liurl
      });
    })(jQuery);
  }
};
  if (false) {}

/***/ })

/******/ });
//# sourceMappingURL=news-node.behaviors.js.map
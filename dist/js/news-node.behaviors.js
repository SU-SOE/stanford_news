!function(t){var i={};function a(e){if(i[e])return i[e].exports;var r=i[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=i,a.d=function(e,r,t){a.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(r,e){if(1&e&&(r=a(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var i in r)a.d(t,i,function(e){return r[e]}.bind(null,i));return t},a.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(r,"a",r),r},a.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},a.p="",a(a.s=1)}([,function(e,r,t){"use strict";t.r(r);t(2)},function(e,r,t){window.Drupal.behaviors.stanford_news={attach:function(){!function(e){var r="../modules/custom/stanford_news/dist/assets/svg";e(".news-social-media").prepend('<div class="widget-wrapper-print"><a href="" class="share-print" onclick=""><img src="'+r+'/soe_print_icon_gray.svg" alt="print article"></a></div>'),e(".news-social-media").prepend('<div class="widget-wrapper-forward"><a href="" class="share-forward"><img src="'+r+'/soe_forward_icon_gray.svg" alt="email article"></a></div>'),e(".news-social-media").prepend('<div class="widget-wrapper-linkedin"><a href="" class="share-linkedin"><img src="'+r+'/soe_linkedin_icon_blue.svg" alt="linkedin share"></a></div>'),e(".news-social-media").prepend('<div class="widget-wrapper-twitter"><a href="" class="share-twitter"><img src="'+r+'/soe_twitter_icon_blue.svg" alt="twitter share"></a></div>'),e(".news-social-media").prepend('<div class="widget-wrapper-fb"><a href="" class="share-fb"><img src="'+r+'/soe_facebook_icon_blue.svg" alt="facebook share"></a></div>');var t=window.location,i=e('div[property="dc:title"] h1').text(),a=e(".share-sub").text(),n="https://twitter.com/intent/tweet?url="+encodeURI(t)+"&text="+i+" "+a,o="http://www.facebook.com/sharer.php?u="+t+"&display=popup",s="https://www.linkedin.com/shareArticle?mini=true&url="+t+"&title="+i+"&summary="+a;forurl="mailto:?subject="+document.title+"&body="+encodeURI(document.location),prurl="window.print();return false;",e(".share-fb").attr({href:o}),e(".share-twitter").attr({href:n}),e(".share-linkedin").attr({href:s}),e(".share-forward").attr({href:forurl}),e(".share-print").attr({onclick:prurl})}(jQuery)}}}]);
//# sourceMappingURL=news-node.behaviors.js.map
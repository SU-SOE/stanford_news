/**
 * Behavior Example that works with Webpack.
 *
 * @see: https://www.npmjs.com/package/drupal-behaviors-loader
 *
 * Webpack wraps everything in enclosures and hides the global variables from
 * scripts so special handling is needed.
 */

export default {

  // Attach Drupal Behavior.
  attach(context, settings) {
    (function ($) {

      var soeSocialPathToImages = '/sites/default/files';
      var pathArray = window.location.pathname.split('/');
      var soeEnv = '';
      var path = pathArray[1];


      $('.news-social-media').prepend('<div class="widget-wrapper-linkedin"><a href="" class="share-linkedin"><img src="' + location.protocol + '//' + location.host + soeEnv + soeSocialPathToImages + '/soe_linkedin_icon_blue.svg" alt="linkedin share"></a></div>');
      $('.news-social-media').prepend('<div class="widget-wrapper-twitter"><a href="" class="share-twitter"><img src="' + location.protocol + '//' + location.host + soeEnv + soeSocialPathToImages + '/soe_twitter_icon_blue.svg" alt="twitter share"></a></div>');
      $('.news-social-media').prepend('<div class="widget-wrapper-fb"><a href="" class="share-fb"><img src="' + location.protocol + '//' + location.host + soeEnv + soeSocialPathToImages + '/soe_facebook_icon_blue.svg" alt="facebook share"></a></div>');
      // Get the current URL
      var pathname = window.location,
        // Data
        shareTitle = $('div[property="dc:title"] h1').text(),
        shareSubtitle = $('.share-sub').text(),

        // URL's
        twurl = 'https://twitter.com/intent/tweet?url=' + encodeURI(pathname) + '&text=' + shareTitle + ' ' + shareSubtitle,
        fburl = 'http://www.facebook.com/sharer.php?u=' + pathname + '&display=popup',
        liurl = 'https://www.linkedin.com/shareArticle?mini=true&url=' + pathname + '&title=' + shareTitle + '&summary=' + shareSubtitle;

      // add the URL's to anchors
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
  },

  // Detach Example.
  detach() {
    // console.log("Detached.");
  }
};

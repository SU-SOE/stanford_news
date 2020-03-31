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

      var socialImagePath = '../modules/custom/stanford_news/dist/assets/svg';

      $('.news-social-media').prepend('<div class="widget-wrapper-print"><a href="" class="share-print" onclick=""><img src="' + socialImagePath + '/soe_print_icon_gray.svg" alt="print article"></a></div>');
      $('.news-social-media').prepend('<div class="widget-wrapper-forward"><a href="" class="share-forward"><img src="' + socialImagePath + '/soe_forward_icon_gray.svg" alt="email article"></a></div>');
      $('.news-social-media').prepend('<div class="widget-wrapper-linkedin"><a href="" class="share-linkedin"><img src="' + socialImagePath + '/soe_linkedin_icon_blue.svg" alt="linkedin share"></a></div>');
      $('.news-social-media').prepend('<div class="widget-wrapper-twitter"><a href="" class="share-twitter"><img src="' + socialImagePath + '/soe_twitter_icon_blue.svg" alt="twitter share"></a></div>');
      $('.news-social-media').prepend('<div class="widget-wrapper-fb"><a href="" class="share-fb"><img src="' + socialImagePath + '/soe_facebook_icon_blue.svg" alt="facebook share"></a></div>');

      // Get the current URL
      var pathname = window.location,
        // Data
        shareTitle = $('div[property="dc:title"] h1').text(),
        shareSubtitle = $('.share-sub').text(),

        // URL's
        twurl = 'https://twitter.com/intent/tweet?url=' + encodeURI(pathname) + '&text=' + shareTitle + ' ' + shareSubtitle,
        fburl = 'http://www.facebook.com/sharer.php?u=' + pathname + '&display=popup',
        liurl = 'https://www.linkedin.com/shareArticle?mini=true&url=' + pathname + '&title=' + shareTitle + '&summary=' + shareSubtitle;
        // Goint native rather than using forward module
        // forurl = 'https://www.linkedin.com/shareArticle?mini=true&url=' + pathname + '&title=' + shareTitle + '&summary=' + shareSubtitle;
        forurl = "mailto:?subject=" + document.title + "&body=" + encodeURI(document.location);
        // Going native rather than using print_pdf module.
        //prurl = 'https://www.linkedin.com/shareArticle?mini=true&url=' + pathname + '&title=' + shareTitle + '&summary=' + shareSubtitle;
        prurl = 'window.print();return false;';

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
      $('.share-forward').attr({
        'href': forurl
      });
      $('.share-print').attr({
        'onclick': prurl
      });
    })(jQuery);
  }

};

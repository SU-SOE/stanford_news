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


      $('.news-social-media', context).prepend('<div class="widget-wrapper-print"><a href="" class="share-print soe-news-header__social-print"><i class="fas fa-printer"  aria-hidden="true"></i><span>Print Article</span></a></div>');
      $('.news-social-media', context).prepend('<div class="widget-wrapper-forward"><a href="" class="share-forward soe-news-header__social-forward"><i class="fas fa-envelope" aria-hidden="true"></i><span>Forward Email</span></a></div>');
      $('.news-social-media', context).prepend('<div class="widget-wrapper-linkedin"><a href="" class="share-linkedin soe-news-header__social-linkedin"><i aria-hidden="true"></i><span>Stanford LinkedIn</span></a></div>');
      $('.news-social-media', context).prepend('<div class="widget-wrapper-twitter"><a href="" class="share-twitter soe-news-header__social-twitter"><i aria-hidden="true"></i><span>Stanford Twitter</span></a></div>');
      $('.news-social-media', context).prepend('<div class="widget-wrapper-fb"><a href="" class="share-fb soe-news-header__social-facebook"><i aria-hidden="true"></i><span>Stanford Facebook</span></a></div>');

      // Get the current URL.
      var pathname = window.location,

        // Data.
        shareTitle = $('div[property="dc:title"] h1', context).text(),
        shareSubtitle = $('.share-sub', context).text(),

        // URL's
        twurl = 'https://twitter.com/intent/tweet?url=' + encodeURI(pathname) + '&text=' + shareTitle + ' ' + shareSubtitle,
        fburl = 'http://www.facebook.com/sharer.php?u=' + pathname + '&display=popup',
        liurl = 'https://www.linkedin.com/shareArticle?mini=true&url=' + pathname + '&title=' + shareTitle + '&summary=' + shareSubtitle;
        // Going native rather than using forward module.
        forurl = "mailto:?subject=" + document.title + "&body=" + encodeURI(document.location);
        // Going native rather than using print_pdf module.
        prurl = 'window.print();return false;';

      // Add the URL's to anchors.
      $('.share-fb', context).attr({
        'href': fburl
      });
      $('.share-twitter', context).attr({
        'href': twurl
      });
      $('.share-linkedin', context).attr({
        'href': liurl
      });
      $('.share-forward', context).attr({
        'href': forurl
      });
      $('.share-print', context).attr({
        'onclick': prurl
      });
    })(jQuery);
  }

};

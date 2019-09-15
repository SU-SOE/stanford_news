<?php

namespace Drupal\stanford_news\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'Newsletter Signup' Block.
 *
 * @Block(
 *   id = "signup_block",
 *   admin_label = @Translation("Newsletter signup block"),
 *   category = @Translation("Newsletter Signup"),
 * )
 */
class SignupBlock extends BlockBase {

  private $newsletter = <<<'EOT'
<div class="mailchimp-magazine-block">
<div id="mc_embed_signup">
<form action="//stanford.us14.list-manage.com/subscribe/post?u=84e3c1df5a210f020250ee1d6&amp;id=74d8f03797" class="validate" id="mc-embedded-subscribe-form" method="post" name="mc-embedded-subscribe-form" novalidate="" target="_blank">
<div id="mc_embed_signup_scroll">
<h2>Get the latest Research and Ideas</h2>
<p>Subscribe to our biweekly email</p>
<div class="mc_signup_submission_wrapper">
<div class="mc-field-group"><input class="required email" id="mce-EMAIL" name="EMAIL" placeholder="email address" type="email" aria-label="Email Address"/></div>
<div class="clear" id="mce-responses">
<div class="response" id="mce-error-response" style="display:none">&nbsp;</div>
<div class="response" id="mce-success-response" style="display:none">&nbsp;</div>
</div>
<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
<div aria-hidden="true" style="position: absolute; left: -5000px;"><input name="b_84e3c1df5a210f020250ee1d6_74d8f03797" tabindex="-1" type="text" value="" aria-label="no bots"/></div>
<div class="clear"><input class="button" id="mc-embedded-subscribe" name="" type="submit" value="Sign up" aria-label="Sign up"/></div>
</div>
</div>
</form>
</div>
</div>
EOT;

  /**
   * {@inheritdoc}
   */
  public function build() {

    return [
      '#type' => 'inline_template',
      '#template' => $this->newsletter,
    ];
  }

}

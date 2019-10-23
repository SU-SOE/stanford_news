<?php

namespace Drupal\stanford_news\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'Newsletter Signup' Block.
 *
 * @Block(
 *   id = "signup_block",
 *   admin_label = @Translation("Newsletter Signup"),
 *   category = @Translation("Newsletter Signup"),
 * )
 */
class SignupBlock extends BlockBase {


  /**
   * {@inheritdoc}
   */
  public function build() {

    return [
      '#id' => 'signup_block',
      '#theme' => 'signup_block'
    ];
  }

}

<?php

namespace Drupal\stanford_news\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Block\BlockPluginInterface;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides a 'Newsletter Signup' Block.
 *
 * @Block(
 *   id = "signup_block",
 *   admin_label = @Translation("Newsletter Signup"),
 *   category = @Translation("Newsletter Signup"),
 * )
 */
class SignupBlock extends BlockBase implements BlockPluginInterface {

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {
    $form = parent::blockForm($form, $form_state);

    $config = $this->getConfiguration();

    $form['form_action'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Stanford Mailing List Subscribe URL'),
      '#description' => $this->t('Example: https://stanford.us14.list-manage.com/subscribe/post?u=84e3c1df5a210f020250ee1d6&amp;id=74d8f03797'),
      '#default_value' => isset($config['form_action']) ? $config['form_action'] : 'https://stanford.us14.list-manage.com/subscribe/post?u=84e3c1df5a210f020250ee1d6&amp;id=74d8f03797',
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    parent::blockSubmit($form, $form_state);
    $values = $form_state->getValues();
    $this->configuration['form_action'] = $values['form_action'];
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    $config = $this->getConfiguration();
    return [
      '#theme' => 'signup_block',
      '#configuration' => $config,
    ];
  }

}

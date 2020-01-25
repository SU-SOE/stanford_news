<?php

namespace Drupal\stanford_news\Plugin\Block;

use Drupal\Core\Block\BlockBase;

use Drupal\Core\Block\BlockPluginInterface;

use Drupal\Core\Form\FormStateInterface;

use Drupal\views\Views;

/**
 * Provides a 'Vertical Teaser Term' Block.
 *
 * @Block(
 *   id = "vertical_teaser_term_block",
 *   admin_label = @Translation("Vertical Teaser Term"),
 *   category = @Translation("Vertical Teaser Term"),
 * )
 */
class VerticalTeaserTermBlock extends BlockBase implements BlockPluginInterface {

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {
    $vid = 'stanford_topics';
    $topics =\Drupal::entityTypeManager()->getStorage('taxonomy_term')->loadTree($vid);
    $terms = ['all' => 'All'];
    foreach ($topics as $topic) {
      $terms[$topic->tid] = $topic->name;
    }

    $form = parent::blockForm($form, $form_state);

    $config = $this->getConfiguration();

    $form['vertical_teaser_term'] = [
      '#type' => 'select',
      '#title' => $this
        ->t('Select element'),
      '#options' => $terms,
      '#default_value' => isset($config['vertical_teaser_term']) ? $config['vertical_teaser_term'] : '',
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    parent::blockSubmit($form, $form_state);
    $values = $form_state->getValues();
    $this->configuration['vertical_teaser_term'] = $values['vertical_teaser_term'];
  }

  /**
   * {@inheritdoc}
   */
  public function build() {

    $config = $this->getConfiguration();

    $term = isset($config['vertical_teaser_term']) ? $config['vertical_teaser_term'] : '';

    // The machine name of your view.
    $viewname = 'stanford_news';

    // Get the view.
    $view = Views::getView($viewname);
    //$view->use_pager = TRUE;
    //$view->setOffset(0);
    //$view->pager->setItemsPerPage(0);

    //kint($view);

    return  [
      '#title' => '',
      'view' => [
        '#type' => 'view',
        '#name' => 'stanford_news',
        '#view' => $view,
        '#display_id' => 'block_1',
        '#arguments' => [$term],
        '#embed' => TRUE,
        '#items_per_page' => 0,
      ],
    ];
  }

}

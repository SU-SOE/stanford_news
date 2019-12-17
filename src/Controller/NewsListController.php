<?php
/**
 * @file
 * Contains \Drupal\hello\Controller\NewsListController.
 */
namespace Drupal\stanford_news\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\views\Views;
use Drupal\block\Entity\Block;

class NewsListController extends ControllerBase {

  public function content() {


    //$query = \Drupal::entityQuery('block');
    //$ids  = $query->execute();
    //kint($ids);
    //kint($blocks);
    //$block = Block::load('333');
    //$block = \Drupal::entityTypeManager()->getStorage('block')->load('news-topics');
    //kint($block);
    //$block_content = \Drupal::entityTypeManager()
    //  ->getViewBuilder('block')
    //  ->view($block);
    $topics_menu_block = \Drupal::moduleHandler()->invoke('menu_block', 'block', ['news-topics']);
    kint($topics_menu_block);

    $view = Views::getView('stanford_news');
    $view->setDisplay('block_2');
    // contextual relationship filter
    //$view->setArguments([$id]);
    $render_view = $view->render();
    return [
      'topics_menu_block' => [
        //$block_content
      ],
      'news_list_view' => [
        $render_view
      ]

    ];
  }
}

<?php

namespace Drupal\Tests\stanford_news\Unit\Plugin\Block;

use Drupal\stanford_news\Plugin\Block\SignupBlock;
use Drupal\Tests\UnitTestCase;

/**
 * Class SignupBlockTest.
 *
 * @group stanford_news
 * @coversDefaultClass \Drupal\stanford_news\Plugin\Block\SignupBlock
 */
class SignupBlockTest extends UnitTestCase {

  /**
   * @var \Drupal\stanford_news\Plugin\Block\SignupBlock
   */
  protected $blockObject;

  /**
   * {@inheritDoc}
   */
  protected function setUp() {
    parent::setUp();
    $this->blockObject = new SignupBlock([], '', ['provider' => 'stanford_news']);
  }

  public function testBlockForm() {
    $form = [];
    $form_state = new FormState();
    $form = $this->blockObject->blockForm($form, $form_state);
  }

  public function testBlockSubmit() {
    $form = [];
    $form_state = new FormState();
    $this->blockObject->blockSubmit($form, $form_state);
    $config = $this->blockObject->getConfiguration();
    $config['form_action'] = 'my-form-action';
    $this->assertEquals(['#configuration' => 'my-form-action'], $config['form_action']);
  }

  public function testBlockMethod() {
    $build = $this->blockObject->build();
    $config = $this->blockObject->getConfiguration();
    $config['form_action'] = 'my-form-action';
    $this->assertArrayEquals(['#theme' => 'signup_block', '#configuration' => $config['form_action']], $build);
  }

}

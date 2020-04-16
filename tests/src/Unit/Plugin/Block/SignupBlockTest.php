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
    $form = $this->blockObject->blockForm();
    $input = 'https://stanford.us14.list-manage.com/subscribe/post?u=84e3c1df5a210f020250ee1d6&amp;id=74d8f03797';
  }

  public function testBlockMethod() {
    $build = $this->blockObject->build();
    $this->assertArrayEquals(['#theme' => 'signup_block'], $build);
  }

}

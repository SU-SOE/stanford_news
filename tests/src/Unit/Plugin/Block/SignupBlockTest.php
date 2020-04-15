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

  public function testBlockMethod() {
    $build = $this->blockObject->build();
    $this->assertArrayEquals(['#theme' => 'signup_block'], $build);
  }

}

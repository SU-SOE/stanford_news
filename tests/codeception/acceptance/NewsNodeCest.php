<?php

class NewsNodeCest {

  public function testNewsNode(\AcceptanceTester $I){

    $I->createEntity(['type' => 'stanford_news', 'title' => 'Hot Damn']);

  }

}

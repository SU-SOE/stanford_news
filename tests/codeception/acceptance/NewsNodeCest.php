<?php

class NewsNodeCest {

  public function testNewsNode(\AcceptanceTester $I){

    $I->createEntity([
      'type' => 'stanford_news',
      'title' => 'News Story',
      'topics' => ['Term 1', 'Term 2', 'Term 3', 'Term 4'],
      'headline' => 'This is a headline',
      'dek' => 'This is a dek',
      'byline' => 'This is a byline',
      'source' => ['uri' => 'https://test.com', 'title' => 'link text'],
      //'featured_media' => This needs figured out,
      'featured_media_caption' => 'Featured media caption',
      //'components' Not sure how to add paragraph type with codeception,
      'publishing_date' => '06/01/2020 12:00:00A'
    ]);

  }

}

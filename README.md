# [Stanford News](https://github.com/SU-SOE/stanford_news)
##### Version: 8.x-1.x

Maintainers: [boznik](https://github.com/boznik)

Changelog: [Changelog.md](CHANGELOG.md)

Description
---

Stanford News feature provides an out of the box solution for displaying news content on your website. This module is a great replacement for the default Article content type.
Specifically, This module provides:
* A news content type with fields such as topics, headline, dek, byline, etc., and text area paragraphs. 
* A **Topics** taxonomy that works with news items
* A **Topics menu**  to use with the Topics taxonomy
* Taxonomy term layout builder layouts for **News List Item**, **News Banner**, and **News Vertical Teaser**


Accessibility
---
[![WCAG Conformance 2.0 AA Badge](https://www.w3.org/WAI/wcag2AA-blue.png)](https://www.w3.org/TR/WCAG20/)
Evaluation Date: N/A
This module conforms to level AA WCAG 2.0 standards as required by the university's accessibility policy. For more information on the policy please visit: [https://ucomm.stanford.edu/policies/accessibility-policy.html](https://ucomm.stanford.edu/policies/accessibility-policy.html).

Installation
---

Install this module like any other module. [See Drupal Documentation](https://drupal.org/documentation/install/modules-themes/modules-8)

Configuration
---
Example use of this module:
* If not enabled, enable module and clear cache
* Add your news taxonomy terms to the Topics taxonomy:  
  * Navigate to  Structure > Taxonomy > Topics (/admin/structure/menu/manage/news-topics)
  * Click on +Add term
  * Add the new term
  * In the URL alias field add the path /news/term-name
  * Save.

* Add your terms to the Topics Menu 
  * Navigate to Structure > Menus > Topics (/admin/structure/taxonomy/manage/stanford_topics/overview) 
* Create layout for the term list pages 
  * Navigate to Structure > Taxonomy > Topics > Manage Display (admin/structure/taxonomy/manage/stanford_topics/overview/display)
  * Click on Manage layout - What layout? 
  * add your menu.
  * add the News Terms block.
  * add the Newsletter Sign up block.
  
* Add a news item and tag it with the appropriate topics: 
  * Content > Add content > Stanford News (/node/add/stanford_news)


Troubleshooting
---

If you are experiencing issues with this module try reverting the feature first. If you are still experiencing issues try posting an issue on the GitHub issues page.

Developer
---

If you wish to develop on this module you will most likely need to compile some new css. Please use the sass structure provided and compile with the sass compiler packaged in this module. To install:

```
npm install
grunt watch
 or
grunt devmode
```

Contribution / Collaboration
---

You are welcome to contribute functionality, bug fixes, or documentation to this module. If you would like to suggest a fix or new functionality you may add a new issue to the GitHub issue queue or you may fork this repository and submit a pull request. For more help please see [GitHub's article on fork, branch, and pull requests](https://help.github.com/articles/using-pull-requests)

---
layout: default
title: mediaQuery
nav_order: 1300
grand_parent: Ad Publishers
parent: Configuration options
permalink: /advertising/publishers/config/media-query
---

Configuration options
{: .fs-6 }

| Key            | Accepted Values | Default   | Type   | Required |
| :------------- | :-------------- | :-------- | :----- | :------- |
| **mediaQuery** | css media query | undefined | string | No       |

Specifies an optional [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Syntax) that must be matched for an ad placement to display.

### Code example

```html
<div id="placement-1"></div>

<script type="text/javascript">
  window["nitroAds"].createAd("placement-1", {
    mediaQuery: "(min-width: 1025px)"
  });
</script>
```

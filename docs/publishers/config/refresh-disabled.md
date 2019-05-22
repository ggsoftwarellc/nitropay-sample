---
layout: default
title: refreshDisabled
nav_order: 7
grand_parent: Ad Publishers
parent: Configuration options
permalink: /advertising/publishers/config/refresh-disabled
---

Configuration options
{: .fs-6 }

| Key                 | Accepted Values                                                | Default     | Type     | Required |
| :------------------ | :------------------------------------------------------------- | :---------- | :------- | :------- |
| **refreshDisabled** | Array of [bidder keys](/advertising/publishers/config/bidders) | ["adsense"] | []string | No       |

When a bidder wins an auction and their [key](/advertising/publishers/config/bidders) exists in this array, ad refreshing for the placement will stop early.

### Code example

```html
<div id="placement-1"></div>

<script type="text/javascript">
  window["nitroAds"].createAd("placement-1", {
    refreshTime: 60,
    refreshLimit: 10,
    refreshDisabled: ["adsense"]
  });
</script>
```

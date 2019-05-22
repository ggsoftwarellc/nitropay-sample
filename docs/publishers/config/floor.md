---
layout: default
title: floor
nav_order: 2
grand_parent: Ad Publishers
parent: Configuration options
permalink: /advertising/publishers/config/floor
---

Configuration options
{: .fs-6 }

| Key       | Accepted Values               | Default               | Type  | Required |
| :-------- | :---------------------------- | :-------------------- | :---- | :------- |
| **floor** | Decimal values 0.00 or higher | _Dynamic price floor_ | float | No       |

The floor is an optional way for you to explicitly set the minimum CPM you are willing to accept for an auction. If there are no bids at or above your price floor, the placement will fallback to a code snippet of your choice (typically an in-house ad, empty space or a high fill exchange like Google AdX). Contact your NitroPay account manager for more information on fallback setup and advice on what's best for your site & goals.

### Code example

```html
<div id="placement-1"></div>

<script type="text/javascript">
  window["nitroAds"].createAd("placement-1", {
    floor: 0.125
  });
</script>
```

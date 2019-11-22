---
layout: default
title: visibleMargin
nav_order: 2200
grand_parent: Ad Publishers
parent: Configuration options
permalink: /advertising/publishers/config/visible-margin
---

Configuration options
{: .fs-6 }

| Key               | Accepted Values | Default | Type    | Required |
| :---------------- | :-------------- | :------ | :------ | :------- |
| **visibleMargin** | 0+              | _200_   | integer | No       |

When used with `renderVisibleOnly` or `refreshVisibleOnly`, this is the off-screen margin used to determine when an ad should begin loading.

By default, this is set to 200 pixels, to allow some time for an ad to load as the user scrolls down the page.

### Code example

```html
<div id="placement-1"></div>

<script type="text/javascript">
  window["nitroAds"].createAd("placement-1", {
    visibleMargin: 250
  });
</script>
```

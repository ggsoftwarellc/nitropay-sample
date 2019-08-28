---
layout: default
title: sizes
nav_order: 11
grand_parent: Ad Publishers
parent: Configuration options
permalink: /advertising/publishers/config/sizes
---

Configuration options
{: .fs-6 }

| Key       | Accepted Values | Default     | Type  | Required |
| :-------- | :-------------- | :---------- | :---- | :------- |
| **sizes** | Array of sizes  | _undefined_ | array | No       |

When you specify an array of pixel dimensions such as `[[728, 90], [970, 90]]` (each array is width in the first index and height in the second) then only ads of those specific sizes will bid.

The most common and supported sizes are:

- 728x90
- 300x250
- 320x50
- 160x600
- 300x600
- 970x90
- 970x250

```html
<div id="placement-1"></div>

<script type="text/javascript">
  window["nitroAds"].createAd("placement-1", {
    sizes: [
      [300, 250],
      [300, 600],
      [120, 600],
      [160, 600],
      [300, 50],
      [320, 50]
    ]
  });
</script>
```

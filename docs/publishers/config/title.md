---
layout: default
title: title
nav_order: 2000
grand_parent: Ad Publishers
parent: Configuration options
permalink: /advertising/publishers/config/title
---

Configuration options
{: .fs-6 }

| Key       | Accepted Values | Default         | Type   | Required |
| :-------- | :-------------- | :-------------- | :----- | :------- |
| **title** | any string      | "advertisement" | string | No       |

Optional parameter that may be used to change the title attribute of iframes created to show ads.

### Code example

```html
<div id="placement-1"></div>

<script type="text/javascript">
  window["nitroAds"].createAd("placement-1", {
    title: "Banner Ad"
  });
</script>
```

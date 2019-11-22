---
layout: default
title: refreshLimit
nav_order: 1801
grand_parent: Ad Publishers
parent: Configuration options
permalink: /advertising/publishers/config/refresh-limit
---

Configuration options
{: .fs-6 }

| Key              | Accepted Values | Default | Type    | Required |
| :--------------- | :-------------- | :------ | :------ | :------- |
| **refreshLimit** | 0-10            | _10_    | integer | No       |

Sets the amount of times an ad unit will run a new auction in the placement to render a new ad for a user that has spent more than the [refreshTime](/advertising/publishers/config/refresh-time) on the page. For policy reasons, we don't allow values greater than 10.

### Code example

```html
<div id="placement-1"></div>

<script type="text/javascript">
  window["nitroAds"].createAd("placement-1", {
    refreshTime: 60,
    refreshLimit: 10
  });
</script>
```

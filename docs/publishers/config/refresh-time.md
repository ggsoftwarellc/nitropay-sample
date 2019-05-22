---
layout: default
title: refreshTime
nav_order: 6
grand_parent: Ad Publishers
parent: Configuration options
permalink: /advertising/publishers/config/refresh-time
---

Configuration options
{: .fs-6 }

| Key             | Accepted Values    | Default | Type    | Required |
| :-------------- | :----------------- | :------ | :------ | :------- |
| **refreshTime** | Any number over 60 | _60_    | integer | No       |

Sets the amount of time in seconds that must pass before another auction is run and the placement renders a new ad. For policy reasons, we don't allow values less than 60 seconds. See the related [refreshLimit](/advertising/publishers/config/refresh-limit) option.

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

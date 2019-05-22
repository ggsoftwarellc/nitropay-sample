---
layout: default
title: demo
nav_order: 1
grand_parent: Ad Publishers
parent: Configuration options
permalink: /advertising/publishers/config/demo
---

Configuration options
{: .fs-6 }

| Key      | Accepted Values | Default | Type    | Required |
| :------- | :-------------- | :------ | :------ | :------- |
| **demo** | true, false     | _false_ | boolean | No       |

If enabled, demo mode will load a static image instead of a live ad. Earnings and tracking for the placement are disabled when in demo mode. This option is used while your site is in local development since we strongly discourage attempting to run an ad auction in a non-production environment.

### 320x50 demo unit

![Demo Unit](https://s.nitropay.com/demo-assets/320x50.jpg)

### Code example

```html
<div id="placement-1"></div>

<script type="text/javascript">
  window["nitroAds"].createAd("placement-1", {
    demo: true
  });
</script>
```

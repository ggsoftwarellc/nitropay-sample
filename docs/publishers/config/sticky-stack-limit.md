---
layout: default
title: stickyStackLimit
nav_order: 1902
grand_parent: Ad Publishers
parent: Configuration options
permalink: /advertising/publishers/config/sticky-stack-limit
---

Configuration options
{: .fs-6 }

| Key                  | Accepted Values | Default | Type    | Required |
| :------------------- | :-------------- | :------ | :------ | :------- |
| **stickyStackLimit** | <= 15           | _15_    | integer | No       |

_Only applicable with the [Sticky Stack](/advertising/publishers/sticky-stack) format._

This option defines the maximum amount of ads that will be rendered in the column. If the maximum is reached, the final ad will scroll with the user until the end of page without creating any additional units.

### Code example

```html
<script type="text/javascript">
  window["nitroAds"].createAd("placement-1", {
    format: "sticky-stack",
    stickyStackLimit: 5
  });
</script>
```

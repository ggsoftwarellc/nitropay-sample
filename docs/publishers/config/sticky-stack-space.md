---
layout: default
title: stickyStackSpace
nav_order: 1903
grand_parent: Ad Publishers
parent: Configuration options
permalink: /advertising/publishers/config/sticky-stack-space
---

Configuration options
{: .fs-6 }

| Key                  | Accepted Values | Default | Type  | Required |
| :------------------- | :-------------- | :------ | :---- | :------- |
| **stickyStackSpace** | 1.25+           | _1.75_  | float | No       |

_Only applicable with the [Sticky Stack](/advertising/publishers/sticky-stack) format._

This option defines (as a multiplier) the amount of screen heights that will be scrolled before the next ad comes into view. For example, if the viewport is 900px tall and you set this option to `2.5`, the ad must stick and then scroll 2,250px before the next ad pushes it off the screen.

### Code example

```html
<script type="text/javascript">
  window["nitroAds"].createAd("placement-1", {
    format: "sticky-stack",
    stickyStackSpace: 2.5
  });
</script>
```

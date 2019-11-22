---
layout: default
title: anchor
nav_order: 100
grand_parent: Ad Publishers
parent: Configuration options
permalink: /advertising/publishers/config/anchor
---

Configuration options
{: .fs-6 }

| Key        | Accepted Values   | Default  | Type   | Required |
| :--------- | :---------------- | :------- | :----- | :------- |
| **anchor** | `top` or `bottom` | `bottom` | string | No       |

Used with `format: "anchor"` to specify if anchor should be at the top or bottom of screen. Defaults to bottom.

### Code example

```html
<script type="text/javascript">
  window["nitroAds"].createAd("top-anchor", {
    format: "anchor",
    anchor: "top"
  });
</script>
```

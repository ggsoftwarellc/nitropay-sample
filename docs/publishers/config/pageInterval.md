---
layout: default
title: pageInterval
nav_order: 17
grand_parent: Ad Publishers
parent: Configuration options
permalink: /advertising/publishers/config/page-interval
---

Configuration options
{: .fs-6 }

| Key              | Accepted Values  | Default | Type    | Required |
| :--------------- | :--------------- | :------ | :------ | :------- |
| **pageInterval** | whole number, 1+ | 1       | integer | No       |

Optional parameter used with `article` format to specify how many pages of content should appear between ad placements.  Defaults to 1.

### Code example

```html
<div id="placement-1"></div>

<script type="text/javascript">
  window["nitroAds"].createAd("placement-1", {
    format: "article",
    pageInterval: 2
  });
</script>
```

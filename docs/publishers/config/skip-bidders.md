---
layout: default
title: skipBidders
nav_order: 1901
grand_parent: Ad Publishers
parent: Configuration options
permalink: /advertising/publishers/config/skip-bidders
---

Configuration options
{: .fs-6 }

| Key             | Accepted Values                                                | Default | Type     | Required |
| :-------------- | :------------------------------------------------------------- | :------ | :------- | :------- |
| **skipBidders** | Array of [bidder keys](/advertising/publishers/config/bidders) | _[]_    | []string | No       |

Bidders can be (at your request, or our determination) disabled at the site level for all placements regardless of what is configured here. This option allows you to expressly disable one or more bidders on individual placements by providing their bidder key in the array of strings.

### Code example

```html
<div id="placement-1"></div>

<script type="text/javascript">
  window["nitroAds"].createAd("placement-1", {
    skipBidders: [
      "aol",
      "appnexusAst",
      "brealtime",
      "conversant",
      "districtm",
      "ix",
      "openx"
    ]
  });
</script>
```

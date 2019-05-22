---
layout: default
title: report
nav_order: 10
grand_parent: Ad Publishers
parent: Configuration options
permalink: /advertising/publishers/config/report
---

Configuration options
{: .fs-6 }

| Key        | Accepted Values              | Default     | Type   | Required |
| :--------- | :--------------------------- | :---------- | :----- | :------- |
| **report** | Report configuration (below) | _undefined_ | object | No       |

### Report configuration

| Key          | Accepted Values                                                           | Default        | Type    | Required |
| :----------- | :------------------------------------------------------------------------ | :------------- | :------ | :------- |
| **enabled**  | true, false                                                               | _false_        | boolean | **Yes**  |
| **wording**  | _any string_                                                              | _Report Ad_    | string  | No       |
| **position** | top-left, top-center, top-right, bottom-left, bottom-center, bottom-right | _bottom-right_ | string  | No       |

When reporting is enabled, a link will appear with the wording and in the position of your choice. When a user clicks the report link, the ad is removed from their DOM and replaced with a form where they can submit basic information on why they are reporting it.

Reports are a great metric for the overall satisfaction in your content/ad ratio. It's also an invaluable tool our quality team uses to identify and disable problematic ad campaigns.

### Code example

```html
<div id="placement-1"></div>

<script type="text/javascript">
  window["nitroAds"].createAd("placement-1", {
    report: {
      enabled: true,
      wording: "Report Ad",
      position: "bottom-right"
    }
  });
</script>
```

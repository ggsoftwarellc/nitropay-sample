---
layout: default
title: renderVisibleOnly
nav_order: 1804
grand_parent: Ad Publishers
parent: Configuration options
permalink: /advertising/publishers/config/render-visible-only
---

Configuration options
{: .fs-6 }

| Key                   | Accepted Values | Default | Type    | Required |
| :-------------------- | :-------------- | :------ | :------ | :------- |
| **renderVisibleOnly** | true, false     | _false_ | boolean | No       |

When enabled, the placement will only run an auction and render an ad unit when the DOM element for your ad is visible on the user's screen. Exchanges track the overall viewability of ads on your page, and some advertisers look at sites with higher viewability scores more favorably when allocating their spend.

Whether or not you should use this option depends on the layout of your site. Your NitroPay account representative can review your layout and provide feedback for optimal usage.

### Code example

```html
<div id="placement-1"></div>

<script type="text/javascript">
  window["nitroAds"].createAd("placement-1", {
    renderVisibleOnly: true
  });
</script>
```

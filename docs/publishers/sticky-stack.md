---
layout: default
title: "Format: Sticky Stack"
nav_order: 5
parent: Ad Publishers
permalink: /advertising/publishers/sticky-stack
---

Format: Sticky Stack
{: .fs-6 }

This format will fill a column/sidebar on your page with sticky ad units. After a configurable scrolling distance, a new ad will appear and push the previous one off the page. The sticky stack format is ideal for sites with very long content pages that are variable in length.

### Visualization

![Sticky Stack Animation](https://s.nitropay.com/assets/stickystack-comp.gif)

### Implementation

Create space on your page for an empty column that will be the container of the sticky stack. The column should be ideally at least (or exactly) 300px wide, and must be at minimum 160px. The column must fill 100% of the available height in the area you want the ads to appear.

Next, initialize the ad with the following code, where `placement-1` (or whatever you want) is the element `id` of the sidebar/column you created and styled.

```html
<script type="text/javascript">
  window["nitroAds"].createAd("placement-1", {
    format: "sticky-stack",
    stickyStackLimit: 15,
    stickyStackSpace: 2.5,
    report: {
      enabled: true,
      wording: "Report Ad",
      position: "fixed-bottom-right"
    }
  });
</script>
```

_See: the config documentation for [stickyStackLimit](/advertising/publishers/config/sticky-stack-limit) and [stickyStackSpace](/advertising/publishers/config/sticky-stack-space)_

Most NitroPay configuration options will be passed to every ad that is spawned. The exceptions are `renderVisibleOnly` and `refreshVisibleOnly` as the ads in this format are required to lazy load for compliance with our partners.

### Common Issue: Only 1 ad is showing, and it's not sticky

It's crucial that the column fills 100% of the available height in the area you want the ads to appear. A container with no height set / auto height will only spawn 1 ad, and there will be no sticky behavior since the ad will only scroll within the height, which will be 0px.

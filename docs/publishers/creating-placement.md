---
layout: default
title: Creating an ad placement
nav_order: 3
parent: Ad Publishers
permalink: /advertising/publishers/placement
---

Creating an ad placement
{: .fs-6 }

For your convenience, there is a placement creation tool located [on your site entry in the panel](https://panel.nitropay.com/sites).

Our recommended implementation for an ad placement is the following HTML snippet.

```html
<div id="placement-1"></div>

<script type="text/javascript">
  window["nitroAds"].createAd("placement-1", {
    refreshLimit: 10,
    refreshTime: 90,
    report: {
      enabled: true,
      wording: "Report Ad",
      position: "fixed-bottom-right"
    }
  });
</script>
```

The first parameter of the `createAd` api must match a DOM element id on the page. Use a unique element id for every ad placement on your page to avoid common implementation issues. We suggest using a human readable static id for each unique placement for your report building and tracking purposes in the panel.

The second parameter is an object with the ad's configuration, you may reference the [documentation on the available config options](/advertising/publishers/config).

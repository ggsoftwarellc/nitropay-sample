---
layout: default
title: format
nav_order: 3
grand_parent: Ad Publishers
parent: Configuration options
permalink: /advertising/publishers/config/format
---

Configuration options
{: .fs-6 }

| Key        | Accepted Values                                       | Default   | Type   | Required |
| :--------- | :---------------------------------------------------- | :-------- | :----- | :------- |
| **format** | display, anchor, video-ds, video-slider, video-inread | _display_ | string | No       |

### Definitions of format values

Note that video formats are not available for your sites by default. Please discuss this with your NitroPay account representative if you would like to serve video ads.

| Value            | Definition                                                                                                        |
| :--------------- | :---------------------------------------------------------------------------------------------------------------- |
| **display**      | Traditional static/animated ad format                                                                             |
| **anchor**       | Dismissable ad unit that is anchored in place.  Default's to mobile-only 320x50 at bottom of screen.              |
| **video-slider** | Video unit that slides in from the bottom right of the page and scrolls with the user until finished or dismissed |
| **video-inread** | Video unit that is embedded in the page                                                                           |
| **video-ds**     | DistroScale video unit                                                                                            |

### Code example

```html
<div id="placement-1"></div>

<script type="text/javascript">
  window["nitroAds"].createAd("placement-1", {
    format: "anchor"
  });
</script>
```

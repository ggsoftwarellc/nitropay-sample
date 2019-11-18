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

| Key        | Accepted Values                                                          | Default   | Type   | Required |
| :--------- | :----------------------------------------------------------------------- | :-------- | :----- | :------- |
| **format** | display, anchor, article, video-ac, video-ds, video-inread, video-slider | _display_ | string | No       |

### Definitions of format values

Note that video formats are not available for your sites by default. Please discuss this with your NitroPay account representative if you would like to serve video ads.

| Value            | Definition                                                                                                        |
| :--------------- | :---------------------------------------------------------------------------------------------------------------- |
| **display**      | Traditional static/animated ad format                                                                             |
| **anchor**       | Dismissable ad unit that is anchored in place.  Default's to mobile-only 320x50 at bottom of screen.              |
| **article**      | Create multiple ad units interspersed within long-form content                                                    |
| **video-ac**     | AnyClip video unit                                                                                                |
| **video-ds**     | DistroScale video unit                                                                                            |
| **video-inread** | Video unit that is embedded in the page                                                                           |
| **video-slider** | Video unit that slides in from the bottom right of the page and scrolls with the user until finished or dismissed |

### Code example

```html
<div id="placement-1"></div>

<script type="text/javascript">
  window["nitroAds"].createAd("placement-1", {
    format: "anchor"
  });
</script>
```

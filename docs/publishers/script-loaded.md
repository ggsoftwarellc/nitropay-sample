---
layout: default
title: Detect when the ad script is loaded
nav_order: 9
parent: Ad Publishers
permalink: /advertising/publishers/loaded
---

Detecting when the ad script has loaded
{: .fs-6 }

When the ad script finishes loading, `window.nitroAds.loaded` will be set to true. If the script is loaded asynchronous, this variable may not be available immediately.

A custom event, `nitroAds.loaded`, is also fired on the document when loading is completed.

```js
if (window.nitroAds && window.nitroAds.loaded) {
  // nitroAds was already loaded
} else {
  // wait for loaded event
  document.addEventListener("nitroAds.loaded", event => {
    // nitroAds just loaded
  });
}
```

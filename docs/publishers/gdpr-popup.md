---
layout: default
title: Creating a link to modify GDPR preferences
nav_order: 8
parent: Ad Publishers
permalink: /advertising/publishers/gdpr
---

Creating a link to open GDPR preferences
{: .fs-6 }

You should create a link somewhere on your site that users in Europe can use to update their advertising preferences for GDPR. In javascript, you can check for `window.__cmp` to see if the user is in a location where the GDPR applies. If so, create a button or link that calls `window.__cmp('showModal')` to open the consent manager.

The following example creates a div `consent-box` that starts out hidden, and is only made visibile to users in GDPR zones.

```html
<div id="consent-box" style="display:none">
  <button onclick="window.__cmp('showModal');">
    Update cookie preferences
  </button>
</div>
<script>
  if (window["nitroAds"] && window["nitroAds"].loaded) {
    document.getElementById("consent-box").style.display = window["__cmp"]
      ? ""
      : "none";
  } else {
    document.addEventListener(
      "nitroAds.loaded",
      () =>
        (document.getElementById("consent-box").style.display = window["__cmp"]
          ? ""
          : "none")
    );
  }
</script>
```

To test GDPR features from other regions, you can append `?gdpr_debug=1` to your URL. E.g. `https://example.com/?gdpr_debug=1`.

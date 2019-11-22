---
layout: default
title: frequencyCap
nav_order: 401
grand_parent: Ad Publishers
parent: Configuration options
permalink: /advertising/publishers/config/frequency-cap
---

Configuration options
{: .fs-6 }

| Key              | Accepted Values | Default | Type    | Required |
| :--------------- | :-------------- | :------ | :------ | :------- |
| **frequencyCap** | Any number      | _0_     | integer | No       |

The amount of time (in seconds) that must pass before a user can be shown another ad in this placement. If not configured or set to 0 the frequency cap will be ignored.

### Code example

```html
<div id="placement-1"></div>

<script type="text/javascript">
  window["nitroAds"].createAd("placement-1", {
    frequencyCap: 3600 // 1 hour
  });
</script>
```

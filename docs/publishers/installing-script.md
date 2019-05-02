---
layout: default
title: Installing the ad script on your page
nav_order: 1
parent: Advertising Publishers
permalink: /advertising/publishers/install
---

Installing the ad script on your page
{: .fs-6 }

Every site on the NitroPay platform gets a custom built version of our advertising script. This allows us to only bundle what's needed to maximize your specific site's revenue, keeping the script as lean as possible. Please include the script in the `<head>` section of your site. None of your placements will generate ads unless this script is fully loaded on your page. Replace the `####` with the ID of your site, you can see the correct IDs for each of your properties [in the panel](https://panel.nitropay.com/sites).

```html
<script src="https://s.nitropay.com/ads-####.js"></script>
```

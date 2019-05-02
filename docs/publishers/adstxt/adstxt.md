---
layout: default
title: Setting up your ads.txt
nav_order: 2
parent: Advertising Publishers
has_children: true
permalink: /advertising/publishers/adstxt
---

Setting up your ads.txt file
{: .fs-6 }

All of the exchanges we run through NitroPay require a valid ads.txt file on your site. If you don't set this up, you're missing most if not all of the high-paying revenue opportunities that are available to you.

Per the one-hop rule in the [IAB specification](https://iabtechlab.com/ads-txt/), our recommended approach is to set up a 301 redirect from yourdomain.com/ads.txt to the hosted ads.txt file maintained by NitroPay which includes all of the required entries. The URL to your custom ads.txt is below, where `####` is the ID of your site which can be found [in the panel](https://panel.nitropay.com/sites).

```
https://api.nitropay.com/v1/ads-####.txt
```

Alternatively you can copy the contents of our hosted ads.txt and host it locally on your site's ads.txt file, but this discouraged as we add new partners regularly and it will be your responsibility to update the file.

If you require custom entries in your ads.txt file for any reason, please contact your account manager and they'll be able to help you.

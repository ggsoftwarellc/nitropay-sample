---
layout: default
title: Redirecting ads.txt on Node.js/Express
nav_order: 3
grand_parent: Advertising Publishers
parent: Setting up your ads.txt
permalink: /advertising/publishers/ads-txt/node
---

Redirecting ads.txt on Node.js/Express
{: .fs-6 }

This section expands our [ads.txt setup article](/advertising/publishers/adstxt) to cover steps on setting up a 301 redirect for Node.js / Express web servers.
{: .fs-5 }

- Open the node.js file where your routing is commonly done.
- Add configuration similar to the follow in the file, replace `####` with the ID of your property, found in your site list in the [NitroPay panel](https://panel.nitropay.com/sites).

```js
app.get("/ads.txt", function(req, res) {
  res.redirect(301, "https://api.nitropay.com/v1/ads-####.txt");
});
```

- Save the file and deploy your website.
- Test that the redirect works by going to _yourdomain.com/ads.txt_ and noting that the URL and contents changed to the hosted ads.txt.

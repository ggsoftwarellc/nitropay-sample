---
layout: default
title: Redirecting ads.txt on Apache
nav_order: 1
grand_parent: Ad Publishers
parent: Setting up your ads.txt
permalink: /advertising/publishers/ads-txt/apache
---

Redirecting ads.txt on Apache
{: .fs-6 }

This section expands our [ads.txt setup article](/advertising/publishers/adstxt) to cover steps on setting up a 301 redirect for Apache web servers.
{: .fs-5 }

- Look for the **.htaccess** file in the root directory of your site. If it doesn't exist, create one.
- Add the following lines if they are not already present in the file

```bash
Options +FollowSymLinks
RewriteEngine on
```

- Add the following line in the file, replace `####` with the ID of your property, found in your site list in the [NitroPay panel](https://panel.nitropay.com/sites).

```bash
Redirect 301 /ads.txt https://api.nitropay.com/v1/ads-####.txt
```

- Save the file (and deploy your website if necessary).
- Test that the redirect works by going to _yourdomain.com/ads.txt_ and noting that the URL and contents changed to the hosted ads.txt.

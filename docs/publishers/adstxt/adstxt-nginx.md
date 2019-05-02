---
layout: default
title: Redirecting ads.txt on Nginx
nav_order: 2
grand_parent: Advertising Publishers
parent: Setting up your ads.txt
permalink: /advertising/publishers/ads-txt/nginx
---

Redirecting ads.txt on Nginx
{: .fs-6 }

This section expands our [ads.txt setup article](/advertising/publishers/adstxt) to cover steps on setting up a 301 redirect for Nginx web servers.
{: .fs-5 }

- Locate your Nginx site configuration.
  - On Unix this is commonly in /etc/nginx/conf/sites-enabled
  - On Windows look for the conf directory in the directory nginx was installed
- Open the configuration file for your website.
- Add the following line in the file, replace `####` with the ID of your property, found in your site list in the [NitroPay panel](https://panel.nitropay.com/sites).

```bash
rewrite ^/ads.txt$ https://api.nitropay.com/v1/ads-####.txt permanent;
```

- For example, this might look like:

```bash
server {
    . . .
    server_name yourdomain.com www.yourdomain.com;

    rewrite ^/ads.txt$ https://api.nitropay.com/v1/ads-####.txt permanent;
    . . .
}
```

- Save the file and restart nginx.
- Test that the redirect works by going to _yourdomain.com/ads.txt_ and noting that the URL and contents changed to the hosted ads.txt.

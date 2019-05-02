---
layout: default
title: Redirecting ads.txt on Windows Server
nav_order: 4
grand_parent: Advertising Publishers
parent: Setting up your ads.txt
permalink: /advertising/publishers/ads-txt/windows
---

Redirecting ads.txt on Windows Server
{: .fs-6 }

This section expands our [ads.txt setup article](/advertising/publishers/adstxt) to cover steps on setting up a 301 redirect for Windows (IIS) web servers.
{: .fs-5 }

- Ensure the rewrite module is installed ([see here](https://docs.microsoft.com/en-us/iis/extensions/url-rewrite-module/using-the-url-rewrite-module) for Microsoft's documentation)
- Open **web.config** in the root of your site
- Add the following configuration in the file, replace `####` with the ID of your property, found in your site list in the [NitroPay panel](https://panel.nitropay.com/sites).

```xml
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="NitroPay">
          <match url="ads\.txt" />
          <action type="Redirect" redirectType="Permanent" url="https://api.nitropay.com/v1/ads-####.txt" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
```

- Save the file, build and deploy your website.
- Test that the redirect works by going to _yourdomain.com/ads.txt_ and noting that the URL and contents changed to the hosted ads.txt.

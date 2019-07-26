---
layout: default
title: Creating a link to modify GDPR preferences
nav_order: 5
parent: Ad Publishers
permalink: /advertising/publishers/gdpr
---

Creating a link to open GDPR preferences
{: .fs-6 }

You should create a link somewhere on your site that users in Europe can use to update their advertising preferences for GDPR.  In javascript, you can check for `window.__cmp` to see if the user is in a location where the GDPR applies.  If so, create a button or link that calls `window.__cmp('showConsentTool')` to open the consent manager.

```html
<button onclick="window.__cmp('showConsentTool');">Manage Consent</button>
```

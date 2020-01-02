---
layout: default
title: CCPA Compliance Guide
nav_order: 7
parent: Ad Publishers
permalink: /advertising/publishers/ccpa
---

CCPA Compliance Guide
{: .fs-6 }

On January 1st 2020, the California Consumer Privacy Act (CCPA) goes into effect, and the deadline for compliance is the end of January 2020. All existing publishers are expected to take the steps outlined if they service users from California, even if the website is operated outside of the state.

### 1. Add the "Do Not Sell My Personal Information" links

Your homepage and privacy policy must include clear and conspicuous "Do Not Sell My Personal Information" links that allow California residents to exercise their right to opt-out (Cal. Civ. Code § 1798.102). We have bundled support for these links into the NitroPay ad script.

Include the following tag on your homepage and privacy policy and the link will be inserted **only if the user is a resident of California**.

```html
<span data-ccpa-link="1"></span>
```

To test the CCPA links from other regions, you can append `?usp_debug=1` to your URL. E.g. `https://example.com/?usp_debug=1`.

### 2. Update your privacy policy

You are responsible for updating your own privacy policy to include all of the required CCPA disclosures. Your NitroPay representative can help you navigate the changes you'll have to make.

### 3. Update your site config

Access your [site list](https://panel.nitropay.com/sites) from the NitroPay panel and select the site you've made these changes to. When your CCPA links and privacy policy updates are live, check the applicable box and save your site configuration.

If you have read and signed the **Limited Service Provider Agreement (LSPA)**, please check that box as well.

## Customization

### Custom "Do Not Sell My Personal Information" link

If you choose not to use our bundled CCPA optout box, your implemention must set a cookie named `CCPAOPTOUT` (with any value) when the user instructs not to sell their personal information. The NitroPay ad script looks for that cookie in order to instruct all of the third party ad exchanges about the user's exercised right. You should delete or expire the cookie if the user opts back in.

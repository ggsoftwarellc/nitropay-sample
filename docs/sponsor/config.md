---
layout: default
title: Config object
nav_order: 3
parent: Sponsor
has_children: false
permalink: /sponsor/config
---

Configuration options
{: .fs-6 }

The [setup guide](/sponsor/setup) describes how the following configuration options are used.

| Key            | Accepted Values                                                                                         | Default | Type   | Required |
| :------------- | :------------------------------------------------------------------------------------------------------ | :------ | :----- | :------- |
| **token**      | JWT for your user, created by the SDK or as defined [here](/sponsor/token).                             | _none_  | string | Yes      |
| **brand**      | Valid brand ID from the [NitroPay panel](https://panel.nitropay.com/sponsor/brands)                     | _none_  | int    | Yes      |
| **successUrl** | Absolute URL a user should redirect to after completing a payment                                       | _none_  | string | Yes      |
| **cancelUrl**  | Absolute URL a user should redirect to if they want to return to your site without completing a payment | _none_  | string | No       |

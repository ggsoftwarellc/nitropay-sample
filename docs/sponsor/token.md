---
layout: default
title: User token (JWT)
nav_order: 4
parent: Sponsor
has_children: false
permalink: /sponsor/token
---

User Token (JWT)
{: .fs-6 }

NitroPay is able to authenticate your users without knowing anything about your user system by using JSON Web Tokens (JWT). We recommend using our SDK if your backend is coded in one of the languages we support (see the menu to the left).

### Creating a token

Encode with the HMAC-SHA512 (HS512) algorithm, and include the following payload claims:

| Payload | Accepted Values                                                                        | Example  | Required |
| :------ | :------------------------------------------------------------------------------------- | :------- | :------- |
| **iss** | NitroPay ID of your site, found in your [panel](https://panel.nitropay.com/sites)      | _104_    | Yes      |
| **sub** | A unique identifier for the user, this should be their internal ID in your user system | _494182_ | Yes      |

Tokens must be encrypted using the secret found in your [panel](https://panel.nitropay.com/sponsor/brands).

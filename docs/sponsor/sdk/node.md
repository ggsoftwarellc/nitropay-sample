---
layout: default
title: Node.js
nav_order: 2
grand_parent: Sponsor
parent: SDKs
permalink: /sponsor/sdk/node
---

Node.js SDK
{: .fs-6 }

### Repository

[github.com/ggsoftwarellc/nitropay-sponsor-node](https://github.com/ggsoftwarellc/nitropay-sponsor-node)

### Requirements

- Node
- NPM/Yarn

### Download/Install

`npm install nitropay-sponsor-node --save`

### Usage

Create a signed [token](/sponsor/token) for passing a user's identity to the client library using the secret found in your [panel](https://panel.nitropay.com/sponsor/brands) and the following code example as reference.

```php
var sponsor = require("nitropay-sponsor-node");

var signer = new sponsor.Signer('YOUR_SECRET'); // set the secret here
var token = signer.sign({
    userId: '123456789', // set the authenticated user's id here
    siteId: '99' // set your NitroPay site id here
});
```

---
layout: default
title: Quick start
nav_order: 1
parent: Sponsor
permalink: /sponsor/setup
---

Quick start with NitroPay Sponsor
{: .fs-6 }

This product allows you to quickly accept subscription payments from your users in exchange for benefits that you define. Our integrated benefit lets you offer ad-free browsing to your subscribed users.

### Disclaimer

_This is not an out-of-box user system and we don't currently offer adapters for common systems. Setup will require an intermediate level of backend and frontend development._

### 1. Create a product

The first step is to [create a product](https://panel.nitropay.com/sponsor/products) in the NitroPay panel. Within your product, you'll define one or more tiers that offer various benefits and payment terms to your users.

### 2. Implement the backend SDK

We support official SDKs for [Go](/sponsor/sdk/go), [Node.js](/sponsor/sdk/node) and [PHP](/sponsor/sdk/php). Setup instructions are language-specific, follow the links to read more.

### 3. Add the client library

The following code does not require any site-specific updates, but it must be present in the html `<head>` of your website.

```html
<script type="text/javascript">
  window.nitroSponsor = window.nitroSponsor || {
    init: function() {
      window.nitroSponsor.queue.push(["init", arguments]);
    },
    status: "init",
    queue: []
  };
</script>
<script async src="https://s.nitropay.com/sponsor.js"></script>
```

### 4. Initiate the client script

After you have verified that your user is authenticated, you'll need to create a secure token using the backend SDK. Once the token is available in the client, you can initialize the client library like so:

```js
window["nitroSponsor"].init(
  {
    token: "USER_TOKEN",
    successUrl: "https://example.com/success",
    cancelUrl: "https://example.com/cancel",
    product: 12345
  },
  function(res) {
    // success callback
  }
);
```

The first parameter is a [configuration object](/sponsor/config) and the second is an optional callback that includes the [user response](/sponsor/api/user).

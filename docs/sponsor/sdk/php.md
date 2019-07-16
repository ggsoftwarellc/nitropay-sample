---
layout: default
title: PHP
nav_order: 3
grand_parent: Sponsor
parent: SDKs
permalink: /sponsor/sdk/php
---

PHP SDK
{: .fs-6 }

### Repository

[github.com/ggsoftwarellc/nitropay-sponsor-php](https://github.com/ggsoftwarellc/nitropay-sponsor-php)

### Requirements

- PHP >= 7.1

### Download/Install

`composer require ggsoftwarellc/nitropay-sponsor-php`

### Usage

Create a signed [token](/sponsor/token) for passing a user's identity to the client library using the secret found in your [panel](https://panel.nitropay.com/sponsor/products) and the following code example as reference.

```php
require __DIR__ . '/vendor/autoload.php';

$sponsor = new NitroPay\Sponsor('YOUR_SECRET');
$token = $sponsor->sign(99, 123456789); // siteId = 99, userId = 123456789
```

---
layout: default
title: SponsorSubscription
nav_order: 99
grand_parent: Sponsor
parent: API Reference
permalink: /sponsor/api/model/subscription
---

SponsorSubscription
{: .fs-6 }

| Key                 | Type                               | Possible Values  |
| :------------------ | :--------------------------------- | :--------------- |
| **status**          | string                             | active, inactive |
| **cancelledAt**     | datetime                           |                  |
| **subscribedUntil** | datetime                           |                  |
| **provider**        | string                             | stripe, paypal   |
| **tier**            | [SponsorTier](/sponsor/model/tier) |                  |

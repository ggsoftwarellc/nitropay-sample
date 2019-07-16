---
layout: default
title: SponsorTier
nav_order: 99
grand_parent: Sponsor
parent: API Reference
permalink: /sponsor/api/model/tier
---

SponsorTier
{: .fs-6 }

| Key             | Type                                           | Possible Values        |
| :-------------- | :--------------------------------------------- | :--------------------- |
| **id**          | int                                            |                        |
| **name**        | string                                         |                        |
| **description** | string                                         |                        |
| **currency**    | string                                         |                        |
| **price**       | int                                            |                        |
| **period**      | string                                         | day, week, month, year |
| **periodCount** | int                                            |                        |
| **benefits**    | [SponsorBenefit[]](/sponsor/api/model/benefit) |                        |

---
layout: default
title: v1/users
nav_order: 1
grand_parent: Sponsor
parent: API Reference
permalink: /sponsor/api/user
---

GET v1/users
{: .fs-6 }

### Request

| Query Parameter | Accepted Value(s)           | Required |
| :-------------- | :-------------------------- | :------- |
| **token**       | [Valid JWT](/sponsor/token) | Yes      |

### Response

| Key              | Type                                                   |
| :--------------- | :----------------------------------------------------- |
| **user**         | [SponsorUser](/sponsor/api/model/user)                 |
| **subscription** | [SponsorSubscription](/sponsor/api/model/subscription) |

### Example Request

```bash
curl https://sponsor-api.nitropay.com/v1/users?token=eyJpYXQiOjE1NjMxODY3O...
```

### Example Response

```js
{
    "user": {
        "id": "123456789",
        "siteId": "99"
    },
    "subscription": {
        "status": "inactive",
        "cancelledAt": "2019-07-04T20:51:10Z",
        "subscribedUntil": "2019-07-09T17:51:18Z",
        "provider": "stripe",
        "tier": {
            "id": 8,
            "name": "Bronze",
            "description": "Support our site",
            "currency": "USD",
            "price": 125,
            "period": "month",
            "periodCount": 1,
            "benefits": [{
                "id": 1,
                "name": "Remove Ads",
                "description": "Remove ads"
            }]
        }
    }
}
```

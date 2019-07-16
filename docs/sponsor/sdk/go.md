---
layout: default
title: Go
nav_order: 1
grand_parent: Sponsor
parent: SDKs
permalink: /sponsor/sdk/go
---

Go SDK
{: .fs-6 }

### Repository

[github.com/ggsoftwarellc/nitropay-sponsor-go](https://github.com/ggsoftwarellc/nitropay-sponsor-go)

### Requirements

- Go >= 1.11

### Download/Install

`go get -u github.com/ggsoftwarellc/nitropay-sponsor-go/v3`

### Usage

Create a signed [token](/sponsor/token) for passing a user's identity to the client library using the secret found in your [panel](https://panel.nitropay.com/sponsor/products) and the following code example as reference.

```go
import sponsor "github.com/ggsoftware/nitropay-sponsor-go/v3"

s := sponsor.NewSigner("YOUR_SECRET") // set the secret here
userInfo := sponsor.UserInfo{
    SiteID: "99", // set your NitroPay site id here
    UserID: "123456789", // set the authenticated user's id here
}
token, _ := s.Sign(userInfo)
```

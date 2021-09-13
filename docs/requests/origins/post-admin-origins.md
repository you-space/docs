---
sidebarDepth: 1
---

# POST /admin/origins

Create a new origin

> **important**: Require admin permissions

## Query

### page

-   type: `number`
-   details: page of request

### limit

-   type: `number`
-   details: items per request, max: 40

## Body

### name

-   type: `string`
-   required: `true`
-   details: a unique name for the origin

### providerName

-   type: `string`
-   required: `true`
-   details: name of a valid provider

### Example:

```json
{
    "name": "youtube-channel",
    "providerName": "youtube-videos"
}
```

## Response

The response will include the data of origin and provider properties

```json
{
    "id": 1,
    "name": "Teste",
    "providerName": "youtube-videos",
    "valid": true, // tell if is a valid provider
    "active": true,
    "fields": [], // provider fields
    "config": {},
    "schedule": {}, // schedule of imports
    "createdAt": "2021-09-09T18:10:59.815-03:00",
    "updatedAt": "2021-09-09T18:11:02.336-03:00"
}
```

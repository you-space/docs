---
sidebarDepth: 0
---

# GET /admin/origins

Return the array of origins

## Query

### page

-   type: `number`
-   details: page of request

### limit

-   type: `number`
-   details: items per request, max: 40

## Response

```json
{
    // pagination information
    "meta": {},
    // array of origins
    "data": [
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
    ]
}
```

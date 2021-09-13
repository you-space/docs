---
sidebarDepth: 0
---

# GET /items

Get items

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
    // array of type fields
    "data": [
        {
            "id": 25,
            "typeId": 7,
            "typeName": "youtube-videos",
            "visibilityId": 1,
            "visibilityName": "public",
            "value": {}, // raw data
            "createdAt": "2021-09-13T09:56:39.623-03:00"
        }
    ]
}
```

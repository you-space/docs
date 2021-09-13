---
sidebarDepth: 0
---

# GET /types/:type_id/items

Get related items of a type

## Params

### type_id

-   type: `number | string`
-   required: `true`
-   details: id or name of type

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
            "createdAt": "2021-09-13T09:56:39.623-03:00"
            // other properties from serialization by type
        }
    ]
}
```

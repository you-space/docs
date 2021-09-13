---
sidebarDepth: 1
---

# GET /types/:type_id/items/:id

Get a type-item by id

## Params

### type_id

-   type: `number | string`
-   required: `true`
-   details: id or name of type

### id

-   type: `number`
-   required: `true`
-   details: id of item

## Response

```json
{
    "id": 25,
    "typeId": 7,
    "typeName": "youtube-videos",
    "visibilityId": 1,
    "visibilityName": "public",
    "createdAt": "2021-09-13T09:56:39.623-03:00"
    // other properties from serialization by type
}
```

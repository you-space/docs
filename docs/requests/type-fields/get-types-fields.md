---
sidebarDepth: 1
---

# GET /types/:type_id/fields

Get related fields of a type

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
            "name": "description",
            "type": "mapped",
            "type_id": 7,
            "options": {},
            "created_at": "2021-09-13T09:56:39.623-03:00",
            "updated_at": "2021-09-13T09:56:39.623-03:00"
        }
    ]
}
```

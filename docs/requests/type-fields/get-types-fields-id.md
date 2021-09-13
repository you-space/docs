---
sidebarDepth: 0
---

# GET /types/:type_id/fields/:id

Get related fields of a type by id

## Params

### type_id

-   type: `number | string`
-   required: `true`
-   details: id or name of type

### id

-   type: `number`
-   required: `true`
-   details: id of type-field

## Response

```json
{
    "id": 25,
    "name": "description",
    "type": "mapped",
    "type_id": 7,
    "options": {},
    "created_at": "2021-09-13T09:56:39.623-03:00",
    "updated_at": "2021-09-13T09:56:39.623-03:00"
}
```

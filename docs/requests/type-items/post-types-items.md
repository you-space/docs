---
sidebarDepth: 0
---

# POST /types/:type_id/items

Create a new type-item

## Params

### type_id

-   type: `number | string`
-   required: `true`
-   details: id or name of type

## Body

> important: The request body will require the editable type-fields to exist in payload

### visibilityId

-   type: `number`
-   required: `true`

### Example

```json
{
    "visibilityId": 1,
    "my-custom-field": "some value"
}
```

## Response

```json
{
    "id": 25,
    "typeId": 7,
    "typeName": "my-custom-type",
    "visibilityId": 1,
    "visibilityName": "public",
    "my-custom-field": "some value",
    "createdAt": "2021-09-13T09:56:39.623-03:00"
    // other properties from serialization by type
}
```

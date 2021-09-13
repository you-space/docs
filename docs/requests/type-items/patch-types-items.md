---
sidebarDepth: 1
---

# PATCH /types/:type_id/items/:id

Update a type-item

## Params

### type_id

-   type: `number | string`
-   required: `true`
-   details: id or name of type

### id

-   type: `number`
-   required: `true`
-   details: id of item

## Body

The request body can have the editable type-fields

### visibilityId

-   type: `number`

### Example

```json
{
    "visibilityId": 2,
    "my-custom-field": "update value"
}
```

## Response

```json
{
    "message": "type-item updated"
}
```

---
sidebarDepth: 1
---

# DELETE /types/:type_id/fields/:id

Delete a type-field by id

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
    "message": "type-field deleted"
}
```

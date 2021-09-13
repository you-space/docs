---
sidebarDepth: 1
---

# PATCH /types/:type_id/fields/:id

Update a type-field

## Params

### type_id

-   type: `number | string`
-   details: id or name of type

### id

-   type: `number`
-   required: `true`
-   details: id of type-field

## Body

### name

-   type: `string`
-   required: `true`
-   details: name of field, can not contain special characters

### type

-   type: `string`
-   options:
    -   editable
    -   mapped
    -   file

### options

-   type: `object`

### Example

```json
{
    "name": "update-field"
}
```

## Response

```json
{
    "message": "type-field updated"
}
```

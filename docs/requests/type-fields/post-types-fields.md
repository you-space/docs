---
sidebarDepth: 1
---

# POST /types/:type_id/fields

Create a new type-field

## Params

### type_id

-   type: `number | string`
-   required: `true`
-   details: id or name of type

## Body

### name

-   type: `string`
-   required: `true`
-   details: name of field, can not contain special characters

### type

-   type: `string`
-   required: `true`
-   options:
    -   editable
    -   mapped
    -   file

### options

-   type: `object`
-   required: `true`

### Example

```json
{
    "name": "new-field",
    "type": "editable",
    "options": {}
}
```

## Response

```json
{
    "id": 25,
    "type_id": 7,
    "name": "new-field",
    "type": "editable",
    "options": {},
    "created_at": "2021-09-13T09:56:39.623-03:00",
    "updated_at": "2021-09-13T09:56:39.623-03:00"
}
```

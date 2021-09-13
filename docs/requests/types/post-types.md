---
sidebarDepth: 0
---

# POST /types

Create a new type

> **important**: Require admin permissions

## Body

### name

-   type: `string`
-   required: `true`
-   details: a unique name for the type

### options

-   type: `boolean`
-   details: options of type

### Example

```json
{
    "name": "my-new-type"
}
```

## Response

```json
{
    "id": 1,
    "name": "my-new-type",
    "options": {},
    "createdAt": "2021-09-09T18:10:59.815-03:00",
    "updatedAt": "2021-09-09T18:11:02.336-03:00"
}
```

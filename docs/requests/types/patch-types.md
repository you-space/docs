---
sidebarDepth: 1
---

# PATCH /types/:id

Update a type

> **important**: Require admin permissions

## Params

### id

-   type: `number`
-   required: `true`
-   details: id of type

## Body

### name

-   type: `string`
-   details: a unique name for the type

### options

-   type: `boolean`
-   details: options of type

### Example

```json
{
    "name": "update-my-new-type"
}
```

## Response

```json
{
    "message": "type updated"
}
```

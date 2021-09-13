---
sidebarDepth: 1
---

# GET /types

Return the array of types

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
    "data": [
        {
            "id": 1,
            "name": "my-new-type",
            "options": {},
            "createdAt": "2021-09-09T18:10:59.815-03:00",
            "updatedAt": "2021-09-09T18:11:02.336-03:00"
        }
    ]
}
```

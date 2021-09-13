---
sidebarDepth: 0
---

# POST /items

Create a new item

## Body

### typeId

-   type: `number`
-   required: `true`

### visibilityId

-   type: `number`
-   required: `true`

### value

-   type: `object`
-   required: `true`

### sourceId

-   type: `string`

### Example

```json
{
    "typeId": 1,
    "visibilityId": 1,
    "sourceId": "7e690d9ec04912130daafc55bba7",
    "value": {
        "id": "7e690d9ec04912130daafc55bba7",
        "title": "some title"
    }
}
```

## Response

```json
{
    "id": 25,
    "typeId": 7,
    "typeName": "youtube-videos",
    "visibilityId": 1,
    "visibilityName": "public",
    "sourceId": "7e690d9ec04912130daafc55bba7",
    "value": {
        "id": "7e690d9ec04912130daafc55bba7",
        "title": "some title"
    },
    "createdAt": "2021-09-13T09:56:39.623-03:00"
}
```

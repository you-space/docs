---
sidebarDepth: 1
---

# POST /auth

Request to get a authenticated token

## Body

### emailOrUsername

-   type: `string`
-   required: `true`
-   details: the email or username of user

### password

-   type: `string`
-   required: `true`
-   details: password of user

### Example:

```json
{
    "emailOrUsername": "admin",
    "password": "123"
}
```

## Response

```json
{
    "token": "7e690d9ec04912130daafc55bba7"
}
```

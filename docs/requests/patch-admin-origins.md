---
sidebarDepth: 1
---

# PATCH /admin/origins/:id

Update a origin

> **important**: Require admin permissions

## Params

### id

-   type: `number`
-   required: `true`
-   details: id of origin

## Body

### name

-   type: `string`

### active

-   type: `string`

### config

-   type: `object`
-   details: Config to pass to the provider

### schedule

-   type: `object`
-   details: Define the frequency of imports
-   example:

```json
{
    "repeatEach": "day" // minute, day, week, month
}
```

### Payload Example:

```json
{
    "name": "youtube-channel",
    "active": true,
    "config": {
        "apiKey": "1234565...",
        "channelId": "UC-azehnt..."
    }
}
```

## Response

The response will include the data of origin and provider properties

```json
{
    "message": "origin updated"
}
```

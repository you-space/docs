# Items

Items are the content itself of you-space, each item will belongs to a type that will define its's behavior in the application, things like display format of fields and how to edit the fields.

An item can be a local content like a video hosted in the server, or an external content like
a youtube-video.

## Items with local content

Items with local content are simple data saved in database, they can have any type of data like text, number, date, file, etc...

## External content

Items with external content will have the raw data of the external content.

So for example if the external content is a youtube-video, the item will contain the raw data that came from youtube-api.

If you already have some items with external content you can check they in items-list-page to view the raw data.

> **Tip:** To have external content you will need a origin, that will handle the imports for you, check [origins-page](/basics/origins.md) to know more about.

## Items serialization

Well you-space do not use directly the items.

All they have to pass to a process called **serialization by type**, that will convert the data of items to a more readable way using the configuration defined in `Type options`.

If is an external content this process will convert the raw data to a internal format, and if is a local content it will simple return item with his fields values.

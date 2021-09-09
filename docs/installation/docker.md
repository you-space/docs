---
sidebarDepth: 0
---

# Docker

## Prerequisites

-   [Docker](https://www.docker.com/get-started)
-   [Redis DB](https://redis.io/)
-   [Postgres DB](https://www.postgresql.org/)

## Installation

-   **Step 1**: start a container using you-space image from [docker-hub](https://hub.docker.com/r/zzhenryquezz/you-space)

```
docker run -d --name you-space -p 3333:3333 zzhenryquezz/you-space
```

-   **Step 2**: Go to [localhost:3333/setup](localhost:3333/setup) and configure the postgres connection, redis connection and define a admin user to access the dashboard

-   **Step 6**: Now you already can check the dashboard in [http://localhost:3333/ys-admin](http://localhost:3333/ys-admin)

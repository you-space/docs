# Getting started
For now we just have a development setup for the project, but soon we have a more friendly user setup.

## Prerequisites

- [Nodejs v14](https://nodejs.org/en/)
- [Redis DB](https://redis.io/)
- [Postgres DB](https://www.postgresql.org/)

## Installation

- **Step 1**: clone the repository in github
```
git clone https://github.com/you-space/you-space.git
```

- **Step 2**: install the dependence's of main project

```
npm install
```

- **Step 3**: install the dependence's and build the dashboard of project

```
cd dashboard
yarn
yarn build
```

- **Step 4**: set the environments variables of the project with a **.env**
```
NODE_ENV=
LOG_LEVEL=

# Postgres connection
DB_CONNECTION=pg
POSTGRES_URL=postgresql://user:password@localhost:5432/db-name

# Redis connection
REDIS_CONNECTION=local

# To get a app key run `node ace generate:key` in project root
APP_KEY=

# Others
DOMAIN_URL=http://localhost:3333

## (optional) variables for integration tests
TEST_POSTGRES_URL=postgresql://user:password@localhost:5432/db-test-name

TEST_YOUTUBE_API_KEY=
TEST_YOUTUBE_CHANNEL_ID=
```

- **Step 5**: run migrations
```
node ace migration:run
```

- **Step 6**: run seeds
```
node ace db:seed
```
- **Step 7**: run the app
```
npm run dev
```

- **Step 8**: And finally you can check the dashboard in http://localhost:3333/ys-admin and log in with the information below
```
username: admin
password: ys-123456
```


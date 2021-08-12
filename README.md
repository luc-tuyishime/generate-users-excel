## User Management from Excel file.

### Heroku API

[Base URL](https://rssb-test.herokuapp.com/)

## Tools Used

[Javascript](https://javascript.info/) : Language used.

[NodeJS](https://nodejs.org/en/) : server environment.

[Express](http://expressjs.com/) : used for building fast APIs.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites

TO setup the project on your local machine do the following
Install Node

```
npm install node
```

Install Postgres

```
[Postgres](http://www.postgresqltutorial.com/install-postgresql/)
```

Clone the repo by running

```
git clone https://github.com/luc-tuyishime/generate-users-excel.git
cd generate-users-excel
```

Then install all the necessary dependencies

```
npm install
```

## Database setup

```

## Create a .env and add

- POSTGRES_DB_PORT=5432
- POSTGRES_DB_HOST=
- POSTGRES_DB_PASSWORD=
- POSTGRES_DB_DATABASE=
- POSTGRES_DB_NAME=
- SECRET_KEY=
- NODE_ENV=


## Run the application

```

npm run dev

```

npm test

```

## API ENDPOINTS

| Ressource URL       | Methods | Description                        |
| ------------------- | ------- | ---------------------------------- |
| /                   | GET     | The index (welcome message)        |
| /api/v1/auth/signup | POST    | Register a new User                |
| /api/v1/auth/login  | POST    | Login registered User              |
| /api/v1/upload      | POST    | Upload Excel file and save to DB   |
| /api/v1/users       | GET     | display the uploaded list with its |
|                     |         | validation failure for each record |
| /api/v1/users/:id   | GET     | Display a single user with its     |
|                     |         | validation failure for each record |

## Contributor

-   Jean luc Tuyishime <luctunechi45@gmail.com>

---

## License & copyright

Copyright (c) Jean luc Tuyishime, Software developer

```

```

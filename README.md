## User Management from Excel file.

### Heroku API

[Base URL](https://rssb-test.herokuapp.com/)

## Prerequisites

TO setup the project on your local machine do the following
Install Node

```
npm install Node
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

-   [Base URL](https://rssb-test.herokuapp.com)

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

### Authentication:

`Register /api/v1/signup (POST)`

```source-json
{
  "user":{
    "firstName": "jake@jake.jake",
    "lastName": "jakejake",
    "username: "lucas",
    "email": "luctunechi45@gmail.com",
    "phone": "+250784421255",
    "password": "Test123!",
  }
}
```

```Response
{
    "status": 201,
    "message": "User created successfully",
    "user": {
        "role": "normal",
        "isActive": "true",
        "id": 4,
        "firstName": "JeanLuc",
        "lastName": "Tuyishime",
        "username": "lucasaf",
        "email": "luctunechi453@gmail.com",
        "phone": "+25078442135",
        "updatedAt": "2021-08-12T22:55:46.207Z",
        "createdAt": "2021-08-12T22:55:46.207Z"
    }
}
```

`Login /api/v1/signin (POST)`

```source-json
{
  "user":{
    "email": "luctunechi45@gmail.com",
    "password": "Test123!",
  }
}
```

```Response
{
    "status": 200,
    "message": "Signed in successfully",
    "user": {
        "id": 1,
        "firstName": "JeanLuc",
        "lastName": "Tuyishime",
        "username": "lucas",
        "email": "luctunechi45@gmail.com",
        "phone": "+25078442155",
        "role": "normal",
        "isActive": true,
        "createdAt": "2021-08-12T22:27:49.169Z",
        "updatedAt": "2021-08-12T22:27:49.169Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6Im5vcm1hbCIsInVzZXJuYW1lIjoibHVjYXMiLCJpYXQiOjE2Mjg4MDgyNTcsImV4cCI6MTYyODg5NDY1N30.4wwfPQInTMLydEx3UWAHuLQtkD_H8CY_XZn15xEKqXU"
}
```

### File Upload

`Upload Excel file /api/v1/upload (POST)`

```source-json
{
    "email": "luctunechi45@gmail.com",
    "password": "Test123!"
}
```

```Response
{
    "status": 201,
    "message": "Upload Successfully",
    "users": [
        {
            "id": 12,
            "names": "Ij",
            "nid": "bc6",
            "phone": "+250784421255",
            "gender": "Male",
            "email": "ozo@acelewu.fm",
            "errors":"
            {
              \"names\":\"\\\"Names\\\" length must be at least 3 characters long\",
              \"nid\":\"\\\"National ID\\\" length must be 36 characters long\"
             }",
            "createdAt": "2021-08-12T22:44:31.696Z",
            "updatedAt": "2021-08-12T22:44:31.696Z"
        },
        {
            "id": 13,
            "names": "Eleanor Moss",
            "nid": "52370e51-44bc-5ae8-8ee6-4d1999378cf8",
            "phone": "(484) 791-9513",
            "gender": "Ok",
            "email": "nivupegi@vocicub.ac",
            "errors":
              "{
                  \"phone\":\"Must be a valid phone number Ex: (+250788888888)\",
                   \"gender\":\"\\\"gender\\\" must be one of [Male, Female]\"
              }",
            "createdAt": "2021-08-12T22:44:31.696Z",
            "updatedAt": "2021-08-12T22:44:31.696Z"
        },
    ]
}
```

`Display list of User with validation failure on each record api/v1/users (GET)`

```Response
{
    "status": 200,
    "message": "Users retrieved Successfully",
    "users": [
        {
            "id": 12,
            "names": "Ij",
            "nid": "bc6",
            "phone": "+250784421255",
            "gender": "Male",
            "email": "ozo@acelewu.fm",
            "errors":"
            {
              \"names\":\"\\\"Names\\\" length must be at least 3 characters long\",
              \"nid\":\"\\\"National ID\\\" length must be 36 characters long\"
             }",
            "createdAt": "2021-08-12T22:44:31.696Z",
            "updatedAt": "2021-08-12T22:44:31.696Z"
        },
        {
            "id": 13,
            "names": "Eleanor Moss",
            "nid": "52370e51-44bc-5ae8-8ee6-4d1999378cf8",
            "phone": "(484) 791-9513",
            "gender": "Ok",
            "email": "nivupegi@vocicub.ac",
            "errors":
              "{
                  \"phone\":\"Must be a valid phone number Ex: (+250788888888)\",
                   \"gender\":\"\\\"gender\\\" must be one of [Male, Female]\"
              }",
            "createdAt": "2021-08-12T22:44:31.696Z",
            "updatedAt": "2021-08-12T22:44:31.696Z"
        },
    ]
}
```

`Display single User with validation failure on each record api/v1/users/:id (GET)`

```Response
{
    "status": 200,
    "message": "User retrieved successfully",
    "users": [
        {
            "id": 12,
            "names": "Ij",
            "nid": "bc6",
            "phone": "+250784421255",
            "gender": "Male",
            "email": "ozo@acelewu.fm",
            "errors":"
            {
              \"names\":\"\\\"Names\\\" length must be at least 3 characters long\",
              \"nid\":\"\\\"National ID\\\" length must be 36 characters long\"
             }",
            "createdAt": "2021-08-12T22:44:31.696Z",
            "updatedAt": "2021-08-12T22:44:31.696Z"
        },
    ]
}
```

## Contributor

-   Jean luc Tuyishime <luctunechi45@gmail.com>

---

## License & copyright

Copyright (c) Jean luc Tuyishime, Software developer

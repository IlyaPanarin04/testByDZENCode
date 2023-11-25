# TestByDZENCode

When you download this project, to move in folder app and make the command 
## Installation

```bash
$ npm install
```
Move to folder docker and make the command
```bash
docker build -f Dockerfile.app -t app .
```
Come back in folder app and make the command
```bash
docker-compose.yml up
```
Before you start the project, we need add migrations in the db.
Open menager db and add file from folder migration in db.


## End-poins

```bash
# Auth
POST /auth/register
request: JSON {
    "username": "string",
    "password": "string",
    "email": "string"
}

POST /auth/login
request: JSON {
    "username": "string",
    "password": "string",
}
#Comment
POST /comments/comment
request: JSON {
    token: string,
    text: string,
    reply_id: string | null,
    image_url: string | null,
    file_url: string | null,
}

GET /comments/list-comment
request: JSON {}
```
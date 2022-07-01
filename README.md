# Tasselled Wobbegong scratch project.

## How to create new tables on ElephantSQL

You'll need to use your own database to test any work done on this project. To do this, head to ElephantSQL, create a new instance, head to the browser section, and add the following code.

### Create a user table

```
CREATE TABLE userInfo (

_id SERIAL PRIMARY KEY,

username VARCHAR(50),

password VARCHAR(50)

);
```

### Create an application table

```
CREATE TABLE appInfo (

_id SERIAL PRIMARY KEY,

role_title VARCHAR(50),

company VARCHAR(50),

location VARCHAR(50),

interview_number VARCHAR(50),

application_submitted VARCHAR(50),

follow_up_deadline VARCHAR(50),

job_type VARCHAR(50),

salary VARCHAR(50),

application_status VARCHAR(50),

user_account_id int

);
```

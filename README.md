<<<<<<< HEAD
# Contact Management System



A RESTful Contact Management System built using Node.js, Express.js, MySQL, and Sequelize ORM.



## Features

\- Create, retrieve, update, and delete contacts.

\- Search by name, email, and phone number.

\- Sorting and pagination.

\- Duplicate email and phone prevention.

\- Input validation and error handling.

\- MySQL database integration.



## Technologies

\- Node.js

\- Express.js

\- MySQL

\- Sequelize ORM

\- JavaScript

\- Postman



## Installation



Install dependencies:



```bash

npm install

```



## Environment Configuration



Create a `.env` file in the project root:



```env

PORT=5000

DB\_HOST=localhost

DB\_USER=root

DB\_PASSWORD=YOUR\_MYSQL\_PASSWORD

DB\_NAME=codsoft\_contact\_db

DB\_DIALECT=mysql

```



## Run the Project



```bash

npm run dev

```



Server URL: `http://localhost:5000`



## API Endpoints



| Method | Endpoint | Description |

|---|---|---|

| POST | `/api/contacts` | Create contact |

| GET | `/api/contacts` | Get all contacts |

| GET | `/api/contacts/:id` | Get contact by ID |

| PUT | `/api/contacts/:id` | Update contact |

| DELETE | `/api/contacts/:id` | Delete contact |



## Search, Sorting and Pagination



Search:

`/api/contacts?search=Amit`



Sorting:

`/api/contacts?sortBy=name\&order=ASC`



Pagination:

`/api/contacts?page=1\&limit=2`



## API Testing



APIs tested using Postman, including CRUD operations, searching, sorting, pagination, duplicate prevention, and input validation.



## Author



\*\*Md Shalik\*\*



GitHub: https://github.com/shalik06


=======
# CODSOFT_TASK2

# Contact Management System

A RESTful Contact Management System built using **Node.js, Express.js, MySQL, and Sequelize ORM**.

## Features

- Create, retrieve, update, and delete contacts.
- Search contacts by name, email, or phone number.
- Sort contacts by selected fields.
- Pagination support.
- Email and phone number duplicate prevention.
- Input validation and error handling.
- MySQL database integration using Sequelize.

## Technologies Used

- Node.js
- Express.js
- MySQL
- Sequelize ORM
- JavaScript
- Postman

## Project Structure

```text
CODSOFT_TASK2/
│
├── config/
│   └── database.js
├── controllers/
│   └── contactController.js
├── models/
│   └── Contact.js
├── routes/
│   └── contactRoutes.js
├── middleware/
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
```

## Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the project root:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=YOUR_MYSQL_PASSWORD
DB_NAME=codsoft_contact_db
DB_DIALECT=mysql
```

## Run the Project

Development mode:

```bash
npm run dev
```

Server runs at:

```text
http://localhost:5000
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/contacts` | Create contact |
| GET | `/api/contacts` | Get all contacts |
| GET | `/api/contacts/:id` | Get contact by ID |
| PUT | `/api/contacts/:id` | Update contact |
| DELETE | `/api/contacts/:id` | Delete contact |

## Search, Sorting and Pagination

Search:

```text
GET /api/contacts?search=Amit
```

Sorting:

```text
GET /api/contacts?sortBy=name&order=ASC
```

Pagination:

```text
GET /api/contacts?page=1&limit=2
```

## API Testing

All APIs were tested using Postman, including CRUD operations, search, sorting, pagination, duplicate prevention, and input validation.

## Author

**Md Shalik**

GitHub: https://github.com/shalik06
>>>>>>> 23a575e0e03c09a501b98636809075102125e2d4

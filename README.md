# CRUD-NODE

CRUD Operations with Node.js and MySQL

This project demonstrates how to build a CRUD (Create, Read, Update, Delete) application using Node.js and MySQL. Environment variables are used to manage database configurations.

Prerequisites

1. Node.js installed on your machine

2. MySQL database setup

3. npm (Node Package Manager)

clone the repository:

git clone https://github.com/your-repo/crud-nodejs-mysql.git

cd crud-nodejs-mysql

install dependencies:

npm install


Setup environment variables:

Create a .env file in the root directory and add the following configurations:


DB_HOST=your_database_host

DB_USER=your_database_user

DB_PASSWORD=your_database_password

DB_NAME=your_database_name

PORT=your_server_port

Endpoint description

getAll - get all task - /getAllTasks

getAllTask - /getAllAssignedTasks

createTasks - /createTask

updateTasks - /updateTask

getTaskById - /task/:task_id

deleteTask - /deleteTask/:task_id

updateTaskStatusComplete - /task/:task_id/complete

updateTaskStatusClose - /task/:task_id/close


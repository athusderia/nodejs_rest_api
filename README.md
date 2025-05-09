Node.js REST API with MVC Architecture
Project Description
A cleanly structured REST API built with Node.js, Express, and MySQL following MVC (Model-View-Controller) architecture pattern. Provides full CRUD operations for employee resources.

Features
MVC Pattern (Models, Routes, Controllers separation)

RESTful endpoints

MySQL database integration

Environment configuration

Proper HTTP verbs usage (GET, POST, PATCH, DELETE)

API Endpoints
Employee Resources
Method	Endpoint	Description	HTTP Verb Usage
GET	/employees	Get all employees	Proper (Read)
GET	/employees/:id	Get single employee	Proper (Read)
POST	/employees	Create new employee	Proper (Create)
PATCH	/employees/:id	Partially update employee	Proper (Update)
DELETE	/employees/:id	Delete employee	Proper (Delete)

Database Configuration
Prerequisites
To establish database connectivity, you must:

Install the dotenv package:

npm install dotenv

Create and configure your .env file with the following variables:

DB_HOST=your_database_host
DB_USER=your_database_username
DB_PASS=your_database_password
DB_PORT=your_database_port
DB_NAME=your_database_name

In your db.js file, import and configure the environment variables:

import 'dotenv/config';


Required Dependencies

To run this Node.js REST API, you must install the following dependencies:

dotenv (v16.5.0+) – Loads environment variables from a .env file.

express (v5.1.0+) – Web framework for handling HTTP requests and routing.

mysql2 (v3.14.1+) – MySQL database driver for Node.js (supports promises).

nodemon (v3.1.10+) – Development tool that auto-restarts the server on file changes.

Running the Application
For development (with auto-restart):

bash
npm run dev
For production:

bash
npm start
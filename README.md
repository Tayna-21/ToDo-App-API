# ToDo-App-API

This is a simple Todo App API built with Express and MongoDB, providing basic CRUD operations for managing todo items.

### Setup

1. Clone the repository:

```
git clone <repository-url>
```

2. Install dependencies:

```
npm install
```

3. Set up MongoDB:

  * Make sure MongoDB is installed on your machine.
  * Update the MongoDB connection string in the __'mongoose.connect'__ method in __'app.js'__ with your MongoDB server details.

4. Run the application:

```
npm start
```

The server will start running on http://localhost:3000.

### API Endpoints

#### 1. Get all todo items

* __Endpoint: 'GET /api/todos'__
* __Description:__ Fetches all todo items from the database.
* __Response:__
  * __'200 OK'__ with an array of todo items.
  * __'500'__ Internal Server Error if there's an issue with the server.

#### 2. Get a specific todo item

* __Endpoint: 'GET /api/todos/:id'__
* __Description:__ Fetches a specific todo item by its ID.
* __Parameters:__
  * __'id':__ ID of the todo item.
* __Response:__
  * __'200 OK'__ with the todo item.
  * __'404 Not Found'__ if the todo item with the specified ID is not found.
  * __'500 Internal Server Error'__ if there's an issue with the server.

#### 3. Create a new todo item

* __Endpoint: 'POST /api/todos'__
* __Description:__ Creates a new todo item.
* __Request Body:__
  * JSON object representing the todo item.
* __Response:__
  * __'200 OK'__ with the created todo item.
  * __'500 Internal Server Error'__ if there's an issue with the server.

#### 4. Update a todo item

* __Endpoint: 'PATCH /api/todos/:id'__
* __Description:__ Updates a specific todo item by its ID.
* __Parameters:__
  * __'id':__ ID of the todo item.
* __Request Body:__
  * JSON object with the fields to be updated.
* __Response:__
  * __'200 OK'__ with the updated todo item.
  * __'404 Not Found'__ if the todo item with the specified ID is not found.
  * __'500 Internal Server Error'__ if there's an issue with the server.

#### 5. Delete a todo item

* __Endpoint: 'DELETE /api/todos/:id'__
* __Description:__ Deletes a specific todo item by its ID.
* __Parameters:__
  * __'id':__ ID of the todo item.
* __Response:__
  * __'200 OK'__ with the deleted todo item.
  * __'404 Not Found'__ if the todo item with the specified ID is not found.
  * __'500 Internal Server Error'__ if there's an issue with the server.

### Notes

* Make sure to set up the MongoDB connection before running the application.

* Update the MongoDB connection string in __'app.js'__ with your specific MongoDB server details.

* The server runs on http://localhost:3000 by default.

Feel free to customize and enhance the API according to your project requirements.

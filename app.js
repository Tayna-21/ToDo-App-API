const express = require('express');
const fs = require('fs');
const app = express();
const mongoose = require('mongoose');
const TodoItem = require('./model/todo_item_schema');
const PORT = 3000;

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/todo_app')
  .then(() => console.log('Connected!'))
  .catch((error) => console.log(error));

app.get('/api/todos', async(req, res) => {
    try {
        const items = await TodoItem.find({});

        res.send(items);
    } catch (error) {
        res.json(error.message)
    };
});

app.get('/api/todos/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const targetedItem = await TodoItem.findById(id);

        res.send(targetedItem);
    } catch (error) {
        res.json(error.message)
    };
});

app.post('/api/todos', async(req, res) => {
    try {
        const todoItem = await TodoItem.create(req.body);

        res.send(req.body);
    } catch (error) {
        res.json(error.message);
    };
});

app.patch('/api/todos/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const itemToUpdate = await TodoItem.findByIdAndUpdate(id, req.body);
        const text = req.body.text;
        const date = req.body.date;

        if (!!text) {
          itemToUpdate.text = text;
        };

        if (!!date) {
          itemToUpdate.date = date;
        };

        res.send(itemToUpdate);
    }  catch (error) {
        res.json(error.message);
    };
});

app.delete('/api/todos/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const itemToDelete = await TodoItem.findByIdAndDelete(id);

        res.send(itemToDelete);
    } catch (error) {
        res.json(error.message);
    };
});

app.listen(PORT, (error) => {
	if(!error) {
		console.log("Server is successfully running")
	} else {
		console.log("Error occurred, server can't start", error);
	};
});

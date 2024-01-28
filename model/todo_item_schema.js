const mongoose = require('mongoose');

const todoItemSchema = mongoose.Schema({
    item_id: {
      type: Number,
      required: true,
      unique: true,
    },
    text: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    }
});

const TodoItem = mongoose.model('TodoItem', todoItemSchema);

module.exports = TodoItem;

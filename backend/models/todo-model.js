const mongoose = require('mongoose');


const todo_schema = mongoose.Schema({
    todo: {
        type: String,
        minLength: 3,
        maxLength: 50
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Todo = mongoose.model('todos', todo_schema);
module.exports = Todo;
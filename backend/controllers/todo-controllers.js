const mongoose = require('mongoose');
const _ = require('lodash');
const Todo = require('../models/todo-model');
const asyncHandler = require('../middleware/asyncHandler');



exports.getTodo = asyncHandler(async() => {

    const todo =await Todo.find().sort(createdAt).select("todo");

    if(todo) {
        res.status(200).json({
            success: true,
            count: todo.length,
            data: todo
        });
    }else {
        res.status(400).json({
            success: false,
            message: 'no todo yet'
        });
    }
});


exports.newTodo = asyncHandler(async()=> {
    const todo = await Todo.create(_.pick(req.body, req.body.todo));

    if(todo) {
        res.status(201).json({
            success: true,
            data: todo
        })
    }else {
        res.status(204).json({
            success: false,
            message: `todo wasn't created`
        });
    }
});

exports.updateTodo = asyncHandler(async()=> {
    const todo = await Todo.findByIdAndUpdate(req.params.id ,_.pick(req.body, req.body.todo),{
        new: true,
        runValidators: true
    });

    if(todo) {
        res.status(201).json({
            success: true,
            data: todo
        })
    }else {
        res.status(204).json({
            success: false,
            message: `todo wasn't updated`
        });
    }
});


exports.deleteTodo = asyncHandler(async()=> {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    if(todo) {
        res.status(200).json({
            success: true,
            message: 'todo deleted'
        })
    }else {
        res.status(401).json({
            success: false,
            message: `todo with id ${req.params.id} wasn't found`
        });
    }
});
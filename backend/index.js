const colors = require('colors');
const express = require('express');
const dotenv = require('dotenv').config({path: './config/.env'});


const db_connection = require('./config/db');
const todo_router = require('./routes/todo-routes');


const app = express();
db_connection();
app.use('/todo', todo_router);






app.listen(process.env.PORT, ()=>{
    console.log(`server is running on ${process.env.PORT}`.magenta);
})
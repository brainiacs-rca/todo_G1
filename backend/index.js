const colors = require('colors');
const express = require('express');
const dotenv = require('dotenv').config({path: './config/.env'});


const app = express();






app.listen(process.env.PORT, ()=>{
    console.log(`server is running on ${process.env.PORT}`);
})
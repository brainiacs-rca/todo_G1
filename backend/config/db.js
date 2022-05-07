const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv').config({path: './.env'});


const db_connection = async () => {
    const conn = await mongoose.connect(`${process.env.DB_URL}`, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    if(conn) {
        console.log(`db is at ${process.env.DB_URL}`.magenta);
    }else {
        console.log(`no connection`.red.bgBlack);
        await mongoose.disconnect();
    }
}

module.exports = db_connection
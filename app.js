//CORE DEPENDENCY MODULES

const express = require('express')

const mongoose = require('mongoose')

const env = require('dotenv').config()

const cors = require('cors')

 

const connect_db = require('./database/dbConnect')
const Router = require('./routes/Router')

 

//CREATING AN INSTANCE OF EXPRESS & PORT

const app = express();

const PORT =  process.env.PORT;

 

//CORE MIDDLEWARES

app.use(cors())

app.use(express.json());

app.use(express.static('public'))

app.use(Router)

 

//CREATING AN INSTANCE OF OUR SERVER

app.listen(PORT, () => {

    connect_db();

    console.log('SERVER CONNECTED')

})
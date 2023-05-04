const mongoose = require('mongoose');

 

const connect_db = () => {

    mongoose.connect(process.env.DB_URI, {useNewUrlParser:true, useUnifiedTopology:true});

    mongoose.connection.once('open', ()=>console.log('DATABASE CONNECTED!'));

    mongoose.connection.on('error', ()=>console.log('DATABASE FAILURE!'));

}    

module.exports = connect_db
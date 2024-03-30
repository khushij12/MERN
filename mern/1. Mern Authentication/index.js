//Imports
const express = require('express')
const users = require('./routes/users')
//express object
app = express()

//MIDDLEWARES

//Listen
Port = process.env.PORT || 8000;

app.listen(Port,function(){
    console.log('Server started at port '+Port)
});



//DB CONNECTIONS
//URL MAPPING (routes)
app.use('/u',users);

module.exports = app;
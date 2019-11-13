require('./config/config.js');
require('./models/db');


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const rtsIndex = require('./routes/index.router')


//In order to work with express package we have to define this app varibale by calling the following function.[express]

var app = express();

// configure application middleware:
app.use(bodyParser.json());//pass json data into this node js application.

//this nodejs application will be running in a port number and the client side application Angular 6 will be running in a different port no.
//in order to communicate between them we have to unable cors.

app.use(cors());
app.use('/api', rtsIndex);
//error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});

//start server [Express]:
//call the callback function:

app.listen(process.env.PORT, () => console.log(`Server starting at port:  ${process.env.PORT}`));













const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());

app.use('/apis', require('./routes/api'));

app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});


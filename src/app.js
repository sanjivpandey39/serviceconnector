const express = require('express');
const app     = express();
const path = require('path');
const bodyParser = require('body-parser');
// const expressHandleBars = require('express-handlebars');
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const connection = require('./model');

app.use('/',require('./routes/api'));
app.use('/course',require('./routes/course')); 
app.use(express.static('./public'));


const  port = process.env.PORT;
app.listen(port,()=>{
    console.log(`server created listen at: ${port}`);
});
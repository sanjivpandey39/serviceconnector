const express = require('express');
const app     = express();
const bodyParser = require('body-parser');
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',require('./routes/api'));
app.use(express.static('./public'));



const  port = process.env.PORT;
app.listen(port,()=>{
    console.log(`server created listen at: ${port}`);
});
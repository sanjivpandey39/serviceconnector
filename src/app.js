const {ApolloServer}  =  require('apollo-server-express');
const express = require('express');
const app     = express();
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const connection = require('./model');
const resolvers = require('./schema/resolvers');
const typeDefs = require('./schema/typeDefs');


app.use('/',require('./routes/api'));
app.use('/course',require('./routes/course')); 
app.use(express.static('./public'));

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({app});


const  port = process.env.PORT;
app.listen(port,()=>{
    console.log(`server created listen at: ${port}`);
});
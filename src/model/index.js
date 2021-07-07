const mongoose  =  require('mongoose');

const uri = "mongodb+srv://root:Admin@123@cluster0.vy3js.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true },(error)=>{
    if(!error)
        console.log("Connected successfully.");
    else
       console.log("Error connecting to database.",error);
});

const Course  = require('./course.model');
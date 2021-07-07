const mongoose  =  require('mongoose');
const CourseModel  = mongoose.model("Course");

const add = (req,res)=>{
    console.log(req.body);
}

module.exports = {add};
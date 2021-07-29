const mongoose   =  require('mongoose');

var CourseSchema =  new mongoose.Schema({
    courseName:{
        type:String,
        required: true
    },
    courseId:{type:String},
    courseDuration:{type:String},
    courseFee:{type:String},
    courseSubjects:[{
        subjectName:{type:String},
        subjectSem:{type:String},
        subjectStatus:{type:Boolean}
    }]
});

mongoose.model("Course",CourseSchema);
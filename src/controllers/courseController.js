const mongoose  =  require('mongoose');
const CourseModel  = mongoose.model("Course");

const add = (req,res)=>{
    var courseObj  =  new CourseModel();
    // console.log(courseObj);
    courseObj.courseName      = req.body.courseName;
    courseObj.courseId        = Math.ceil(Math.random()*1000000000);
    courseObj.courseDuration  = req.body.courseDuration;
    courseObj.courseFee       = req.body.courseFee;
    courseObj.save((err, doc)=>{
        if(!err){
            res.status(200).json({
                status: true,
                message: "Courses added successfully",
                data: courseObj});
        }else{
            res.status(500).json({
                status: false,
                message: err.message
            });
        }
    });
    

}

const list = (req,res) =>{
    CourseModel.find(
        {
            // $and:[
            //     {$or:[{courseFee:{$gte:25000}},{courseName:{$eq:"sanjiv"}}]},
            // ],
        }
        ,(err,docs)=>{
        if(!err){
            res.status(200).json({
                status: true,
                message: "Courses list fetch successfully",
                data: docs,
            });
        }else{
            res.status(500).json({
                status: false,
                message: err.message
            });
        }
    }).sort({courseName:1});
}
const findAndUpdate  = async (req, res)=>{
    try{
       var data = {};
       var courseUpdateDoc = await CourseModel.findOne({_id:req.params.id});
       courseUpdateDoc.courseName=req.body.courseName;
       courseUpdateDoc.courseDuration=req.body.courseDuration;
       courseUpdateDoc.courseFee=req.body.courseFee;
       await courseUpdateDoc.save(); 

       res.status(200).json({
        status: true,
        message: "Courses updated successfully",
        data: courseUpdateDoc,
        });
    }catch(err){
        res.status(500).json({
            status: false,
            message: err.message
        });
    }
}

module.exports = {add,list,findAndUpdate};

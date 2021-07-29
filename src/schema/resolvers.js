const { UserInputError } = require('apollo-server-express');
const mongoose  =  require('mongoose');
const Course  = mongoose.model("Course");

const resolvers = {
    Query: {
      async  getAllCourses(){
          console.log("inside resolver");
        //   console.log(await Course.find({}));
            return await Course.find({});
        }
    },
    Mutation: {
       async createCourse(parent,args){
            console.log(args);

            const courseId = Math.ceil(Math.random()*1000000000);

            const course = new Course({ ...args.courseInput, courseId });

            return course.save();

            // CourseModel =  new Course();
            // CourseModel.courseName = args.courseName;
            // CourseModel.courseId = Math.ceil(Math.random()*1000000000);
            // CourseModel.courseDuration = args.courseDuration;
            // CourseModel.courseFee = args.courseFee;
            // return await CourseModel.save();
        },
        async  createSubjectForCourse(parent,args){
            const courseData = await Course.findOne({'_id':args.courseId});
            if(!courseData)
                throw new UserInputError("invalid course id.");
                
            var subjectData  = args.courseSubjectInput;
            // if(!courseData.courseSubjects){
            //     courseData.courseSubjects = [];
            // }
            
            // courseData.courseSubjects.push(subjectData[0], subjectData[1]);
            courseData.courseSubjects.push(...subjectData);
            return  await courseData.save();
            

        }

    },
};

module.exports = resolvers;
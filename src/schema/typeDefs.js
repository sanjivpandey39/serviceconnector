const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type Course{
        id: String!,
        courseName: String!,
        courseId: String!,
        courseDuration: String!,
        courseFee: String!,
        courseSubjects:[CourseSubject]!
        
    }
    type CourseSubject{
        id:String!
        subjectName:String!,
        subjectSem:String!,
        subjectStatus:Boolean!
        
    }

    #Queries
    type Query {
        getAllCourses: [Course!]!
    }
    #mutation 
    type Mutation{
        createCourse(courseInput: CourseInput!): Course!
        # createCourse(courseName:String!,courseDuration:String!,courseFee:String!): Course!
        createSubjectForCourse(courseId:ID!,courseSubjectInput:[CourseSubjectInput!]!) : Course! 
    }

    input CourseInput {
        courseName: String!,
        courseDuration: String!,
        courseFee: String!,
        courseSubjects:[CourseSubjectInput!]!
    }
    input CourseSubjectInput {
        subjectName:String!,
        subjectSem:String!,
        subjectStatus:Boolean!
    }
`;

module.exports = typeDefs;
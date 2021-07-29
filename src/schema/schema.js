const graphql  = require('graphql');
const { result } = require('lodash');
const _ = require('lodash');
const mongoose  =  require('mongoose');
const Course  = mongoose.model("Course");



const { GraphQLObjectType, GraphQLString, GraphQLID,GraphQLInt,GraphQLList, GraphQLSchema } = graphql;

const Coursetype  =  new GraphQLObjectType({
    name:'Course',
    fields:()=>({
        id: {type:GraphQLID},
        courseName: {type:GraphQLString},
        courseId: {type:GraphQLString},
        courseDuration: {type:GraphQLString},
        courseFee: {type:GraphQLString},
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        status: {
            type: GraphQLString,
            resolve(parent, args){
                return "Welcome to GraphQL sanjiv"
            }
        },
        courses: {
            type : new GraphQLList(Coursetype),
            async resolve(parent,args){
                // console.log(Course.find({}).exec());
                var result = await Course.find({});
                return result;
                // console.log("result",result);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
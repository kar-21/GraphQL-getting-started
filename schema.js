const graphql = require('graphql');
const employeeSchema = require('./employee');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt, GraphQLSchema, GraphQLNonNull } = graphql;

const EmployeeList = new GraphQLObjectType({
    name: 'Employee',
    fields: () => ({
        _id: {type: GraphQLID },
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        department: { type: GraphQLString },
        salary: { type: GraphQLInt }
    })
});

const EmployeeQuery = new GraphQLObjectType({
    name: 'EmployeeRoot',
    fields: {
        employee: {
            type: EmployeeList,
            args: {_id : {type: GraphQLID}},
            resolve(parent, args){
                return employeeSchema.findById(args._id);
            }
        }
    }
});

const EmployeeMutation = new GraphQLObjectType({
    name: "EmployeeMutation",
    fields: {
        employeeAdd: {
            type: EmployeeList,
            args: {  
                id: {type: new GraphQLNonNull(GraphQLID)},
                name: {type: new GraphQLNonNull(GraphQLString)},
                department: {type: new GraphQLNonNull(GraphQLString)},
                salary: {type: new GraphQLNonNull(GraphQLInt)},
             },
            resolve(parent, args){
                let employee = new employeeSchema({
                    id: args.id,
                    name: args.name,
                    department: args.department,
                    salary: args.salary
                })
                return employee.save();
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: EmployeeQuery,
    mutation: EmployeeMutation
})

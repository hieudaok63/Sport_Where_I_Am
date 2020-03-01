import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

const Department = new GraphQLObjectType({
  name: 'Department',
  fields: {
    id: { type: GraphQLInt },
    departmentName: { type: GraphQLString },
  },
});

export default Department;

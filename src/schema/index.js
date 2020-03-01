import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { userById, allUsers, departmentById, allDepartments } from './queries/index';

const api = new GraphQLObjectType({
  name: 'api',
  fields: {
    userById,
    allUsers,
    departmentById,
    allDepartments,
  },
});

module.exports = new GraphQLSchema({
  query: api,
});

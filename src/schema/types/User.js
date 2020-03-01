import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLBoolean,
} from 'graphql';
import Department from './Department';
import { getDepartmentById } from '../../services/department-service';

const User = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLID },
    departmentName: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLID },
    dateUpdated: { type: GraphQLString },
    email: { type: GraphQLString },
    photo: { type: GraphQLString },
    isActive: { type: GraphQLBoolean },
    phone: { type: GraphQLString },
    facebookUrl: { type: GraphQLString },
    twitterUrl: { type: GraphQLString },
    jobPosition: { type: GraphQLString },
    departmentId: { type: GraphQLInt },
    department: {
      type: Department,
      resolve: (rawUserData, req, res) => {
        const { departmentId } = rawUserData;
        return getDepartmentById(departmentId, req.token);
      },
    },
  },
});

export default User;

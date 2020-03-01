import { GraphQLID, GraphQLList } from 'graphql';
import Department from '../types/Department';
import { getDepartmentById, getAllDepartments } from '../../services/department-service';

export const departmentById = {
  type: Department,
  args: {
    id: { type: GraphQLID },
  },
  resolve: (rawUserData, args, req) => {
    const { id } = args;
    if (id) {
      return getDepartmentById(id, req.token);
    }
    return null;
  },
};

export const allDepartments = {
  type: GraphQLList(Department),
  resolve: (rawUserData, args, req) => getAllDepartments(req.token),
};

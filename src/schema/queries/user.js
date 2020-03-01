import { GraphQLID, GraphQLList } from 'graphql';
import User from '../types/User';
import { getUserById, getAllUsers } from '../../services/user-service';

export const userById = {
  type: User,
  args: {
    id: { type: GraphQLID },
  },
  resolve: (rawUserData, args, req) => {
    const { id } = args;
    if (id) {
      return getUserById(id, req.token);
    }
    return null;
  },
};

export const allUsers = {
  type: GraphQLList(User),
  resolve: (rawUserData, args, req) => {
    return getAllUsers(req.token);
  },
};

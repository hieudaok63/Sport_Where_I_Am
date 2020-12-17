import { GraphQLString } from 'graphql';
import User from '../types/User';
import { loginByUserName } from '../../services/login-service';

const loginWithUserName = {
  type: User,
  args: {
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  resolve: (rawUserData, args, req) => {
    const { username, password } = args;
    if (username && password) {
      return loginByUserName(username, password);
    }
    return null;
  },
};

export { loginWithUserName };

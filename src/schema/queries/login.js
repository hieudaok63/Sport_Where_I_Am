import { GraphQLString } from 'graphql';
import User from '../types/User';
import { getLoginWithEmail } from '../../services/login-service';

const loginWithEmail = {
  type: User,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  resolve: (rawUserData, args, req) => {
    const { email, password } = args;
    if (email && password) {
      return getLoginWithEmail(email, password);
    }
    return null;
  },
};

export { loginWithEmail };

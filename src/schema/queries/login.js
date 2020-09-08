import { GraphQLString } from 'graphql';
import User from '../types/User';
import {
  getLoginWithEmail,
  getLoginWithFacebook,
} from '../../services/login-service';

const loginWithEmail = {
  type: User,
  args: {
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  resolve: (rawUserData, args, req) => {
    const { username, password } = args;
    if (username && password) {
      return getLoginWithEmail(username, password);
    }
    return null;
  },
};

const loginWithFacebook = {
  type: User,
  args: {
    email: { type: GraphQLString },
    accessToken: { type: GraphQLString },
  },
  resolve: (rawUserData, args) => {
    return getLoginWithFacebook(args);
  },
};

export { loginWithEmail, loginWithFacebook };

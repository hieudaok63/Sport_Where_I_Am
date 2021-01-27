import { GraphQLString } from 'graphql';
import User from '../types/User';
import {
  loginByUserName,
  getLoginWithEmail,
  getLoginWithFacebook,
  getLoginWithGoogle,
} from '../../services/login-service';

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

const loginWithGoogle = {
  type: User,
  args: {
    email: { type: GraphQLString },
    idToken: { type: GraphQLString },
  },
  resolve: (rawUserData, args) => {
    return getLoginWithGoogle(args);
  },
};

export {
  loginWithUserName,
  loginWithEmail,
  loginWithFacebook,
  loginWithGoogle,
};

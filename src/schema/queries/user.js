import User from '../types/User';
import { GraphQLString, GraphQLBoolean } from 'graphql';
import {
  getMe,
  register as registerService,
  getUserCards,
} from '../../services/user-service';
import Cart from '../types/shop/Cart';

const me = {
  type: User,
  resolve: (rawUserData, args, req) => {
    if (req.token) {
      return getMe(req.token);
    }
    console.warn('Token is required');
    return null;
  },
};

const userCards = {
  type: Cart,
  args: {},
  resolve: (rawUserData, args, req) => {
    return getUserCards(req.token);
  },
};

const register = {
  type: User,
  args: {
    email: { type: GraphQLString },
    firstName: { type: GraphQLString },
    password: { type: GraphQLString },
    surnameName: { type: GraphQLString },
    tsandcs: { type: GraphQLBoolean },
    username: { type: GraphQLString },
  },
  resolve: (rawUserData, args) => {
    return registerService(args);
  },
};

export { me, register, userCards };

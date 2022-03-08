import User from '../types/User';
import { GraphQLString, GraphQLList, GraphQLBoolean } from 'graphql';
import {
  getMe,
  register as registerService,
  getUpComingEvents,
} from '../../services/user-service';
import Cart from '../types/shop/Cart';

const me = {
  type: User,
  resolve: (rawUserData, args, req) => {
    if (req.headers.authorization) {
      return getMe(req.headers.authorization);
    }

    return null;
  },
};

const upComingEvents = {
  type: GraphQLList(Cart),
  args: {
    token: { type: GraphQLString },
  },
  resolve: (rawUserData, args, req) => {
    return getUpComingEvents(req.headers.authorization);
  },
};

const register = {
  type: User,
  args: {
    email: { type: GraphQLString },
    firstName: { type: GraphQLString },
    password: { type: GraphQLString },
    surname: { type: GraphQLString },
    tsandcs: { type: GraphQLBoolean },
  },
  resolve: (rawUserData, args) => {
    return registerService(args);
  },
};

export { me, register, upComingEvents };

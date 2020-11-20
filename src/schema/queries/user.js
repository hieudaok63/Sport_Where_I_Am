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
    if (req.token) {
      return getMe(req.token);
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
    return getUpComingEvents(args.token);
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

export { me, register, upComingEvents };

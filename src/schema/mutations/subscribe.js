import { GraphQLString } from 'graphql';

import Subscribe from '../types/Subscribe';
import { createSubscribe } from '../../services/subscribe-service';

const addSubscribe = {
  type: Subscribe,
  args: {
    email: { type: GraphQLString },
    fullName: { type: GraphQLString },
  },
  resolve: (parent, args, req) => createSubscribe(args, req.token),
};

export { addSubscribe };

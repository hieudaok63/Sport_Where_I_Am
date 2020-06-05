import { GraphQLList, GraphQLString } from 'graphql';
import Product from '../types/Product';
import Cart from '../types/Cart';
import { getProductIdByEventId, getCartId } from '../../services/shop-service';

const productIdByEventId = {
  type: GraphQLList(Product),
  args: {
    eventId: { type: GraphQLString },
  },
  resolve: (rawUserData, args, req) => {
    const { eventId } = args;
    if (eventId) {
      return getProductIdByEventId(eventId, req.token);
    }
    return null;
  },
};

const createCartId = {
  type: GraphQLList(Cart),
  args: {},
  resolve: (rawUserData, args, req) => {
    if (req.token) {
      return getCartId(req.token);
    }
    return null;
  },
};

export { productIdByEventId, createCartId };

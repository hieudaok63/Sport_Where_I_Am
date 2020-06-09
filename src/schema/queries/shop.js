import { GraphQLList, GraphQLString } from 'graphql';
import Product from '../types/Product';
import Cart from '../types/Cart';
import {
  getProductIdByEventId,
  getCartId,
  getCart,
} from '../../services/shop-service';

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
  type: Cart,
  args: {},
  resolve: (rawUserData, args, req) => {
    if (req.token) {
      return getCartId(req.token);
    }
    return null;
  },
};

const cartById = {
  type: Cart,
  args: {
    cartId: { type: GraphQLString },
    currency: { type: GraphQLString },
  },
  resolve: (rawUserData, args, req) => {
    const { cartId, currency } = args;
    if (cartId && currency) {
      return getCart(cartId, currency, req.token);
    }
    return null;
  },
};

export { productIdByEventId, createCartId, cartById };

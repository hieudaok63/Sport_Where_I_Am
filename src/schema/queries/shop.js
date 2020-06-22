import { GraphQLList, GraphQLString, GraphQLBoolean } from 'graphql';
import Product from '../types/Product';
import Cart from '../types/shop/Cart';
import { PaymentInput } from '../types/shop/Payment';
import { CreditCardInput } from '../types/shop/CreditCard';
import PaymentPublicKey from '../types/PaymentPublicKey';
import {
  getProductIdByEventId,
  getCartId,
  getCart,
  getPaymentPublicKey,
  deleteItemFromCartById,
  setPayment,
} from '../../services/shop-service';

const payNow = {
  type: Cart, // TODO: verify what the api returns when the payment is concluded
  args: {
    cartId: { type: GraphQLString },
    paymentData: { type: PaymentInput },
    creditCardData: { type: CreditCardInput },
    shouldSaveCreditCard: { type: GraphQLBoolean },
  },
  resolve: (rawUserData, args, req) => {
    const { cartId, paymentData, creditCardData, shouldSaveCreditCard } = args;
    if (cartId && paymentData && creditCardData && shouldSaveCreditCard) {
      const data = {
        cartId,
        paymentData,
        creditCardData,
        shouldSaveCreditCard,
      };
      return setPayment(cartId, data, req.token);
    }
    return null;
  },
};

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

const removeItemFromCartById = {
  type: Cart,
  args: {
    cartId: { type: GraphQLString },
    lineItemId: { type: GraphQLString },
  },
  resolve: (rawUserData, args, req) => {
    const { cartId, lineItemId } = args;
    if (cartId && lineItemId) {
      return deleteItemFromCartById(cartId, lineItemId, req.token);
    }
    return null;
  },
};

const paymentPublicKey = {
  type: PaymentPublicKey,
  args: {
    currency: { type: GraphQLString },
  },
  resolve: (rawUserData, args, req) => {
    const { currency } = args;
    if (currency) {
      return getPaymentPublicKey(currency);
    }
    return null;
  },
};

export {
  productIdByEventId,
  createCartId,
  cartById,
  paymentPublicKey,
  removeItemFromCartById,
  payNow,
};

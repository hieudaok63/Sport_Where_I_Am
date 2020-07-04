import { GraphQLList, GraphQLString, GraphQLFloat, GraphQLInt } from 'graphql';
import Product from '../types/Product';
import Cart from '../types/shop/Cart';
import CustomerInfo from '../types/shop/CustomerInfo';
import PaymentPublicKey from '../types/PaymentPublicKey';
import {
  getProductIdByEventId,
  getCartId,
  getCart,
  addProduct,
  getPaymentPublicKey,
  deleteItemFromCartById,
  setPayment,
  setCustomerInfo,
} from '../../services/shop-service';

const payNow = {
  type: Cart, // TODO: verify what the api returns when the payment is concluded
  args: {
    cartId: { type: GraphQLString },
    currency: { type: GraphQLString },
    amount: { type: GraphQLFloat },
    transactionToken: { type: GraphQLString },
  },
  resolve: (rawUserData, args, req) => {
    const { cartId, currency, amount, transactionToken } = args;
    if (cartId && currency && amount && transactionToken) {
      return setPayment(cartId, currency, amount, transactionToken);
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
    return getCartId();
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
      return getCart(cartId, currency);
    }
    return null;
  },
};

const customerInfo = {
  type: CustomerInfo,
  args: {
    cartId: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    ticketingEmail: { type: GraphQLString },
    phone: { type: GraphQLString },
  },
  resolve: (rawUserData, args, req) => {
    const { cartId, firstName, lastName, ticketingEmail, phone } = args;
    if (cartId && firstName && lastName && ticketingEmail && phone) {
      return setCustomerInfo(
        cartId,
        firstName,
        lastName,
        ticketingEmail,
        phone
      );
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

const addProductOnCart = {
  type: Cart,
  args: {
    cartId: { type: GraphQLString },
    productId: { type: GraphQLString },
    variantId: { type: GraphQLString },
    quantity: { type: GraphQLInt },
    currency: { type: GraphQLString },
  },
  resolve: (rawUserData, args, req) => addProduct(args),
};

export {
  productIdByEventId,
  createCartId,
  cartById,
  paymentPublicKey,
  removeItemFromCartById,
  payNow,
  customerInfo,
  addProductOnCart,
};

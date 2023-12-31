import {
  GraphQLList,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt,
  GraphQLObjectType,
  graphqlSync,
} from 'graphql';
import Product, { EventProduct } from '../types/Product';
import Merchandise from '../types/Merchandise';
import Cart from '../types/shop/Cart';
import CustomerInfo from '../types/shop/CustomerInfo';
import PaymentPublicKey from '../types/PaymentPublicKey';
import {
  getHotelProductById,
  getProductIdByEventId,
  getCartId,
  getCart,
  addProduct,
  getPaymentPublicKey,
  deleteItemFromCartById,
  setPayment,
  setCustomerInfo,
  getProductDataByEventId,
  removeProduct,
  getMerchandiseByEventId,
  setHotelLineItemCustomerInfo,
  updatePromoCodes,
} from '../../services/shop-service';
import { HotelProduct, ProductIdValue } from '../types/Hotel';

const payNow = {
  type: Cart, // TODO: verify what the api returns when the payment is concluded
  args: {
    cartId: { type: GraphQLString },
    currency: { type: GraphQLString },
    amount: { type: GraphQLFloat },
    transactionToken: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    cardholderName: { type: GraphQLString },
    deliveryAdress: { type: GraphQLString },
    lineItems: {
      type: GraphQLString,
    },
    typeTickets: {
      type: GraphQLList(GraphQLString),
    },
  },
  resolve: (rawCartData, args, req) => {
    const {
      cartId,
      currency,
      amount,
      transactionToken,
      firstName,
      lastName,
      email,
      phone,
      lineItems,
      cardholderName,
      typeTickets,
      deliveryAdress,
    } = args;
    if (cartId && currency && amount && transactionToken) {
      return setPayment({
        lineItems: JSON.parse(lineItems),
        cartId,
        currency,
        amount,
        transactionToken,
        firstName,
        lastName,
        email,
        phone,
        cardholderName,
        typeTickets,
        deliveryAdress: JSON.parse(deliveryAdress),
      });
    }
    return null;
  },
};

const hotelProductById = {
  type: GraphQLList(HotelProduct),
  args: {
    startDate: { type: GraphQLString },
    endDate: { type: GraphQLString },
    qualifiers: { type: GraphQLString },
    hotelId: { type: GraphQLString },
  },
  resolve: (rawUserData, args) => {
    const { startDate, endDate, qualifiers, hotelId } = args;
    if (startDate && endDate && qualifiers && hotelId) {
      return getHotelProductById(startDate, endDate, qualifiers, hotelId);
    }
    return null;
  },
};

const productIdByEventId = {
  type: GraphQLList(ProductIdValue),
  args: {
    eventId: { type: GraphQLString },
    cartId: { type: GraphQLString },
  },
  resolve: (rawUserData, args, req) => {
    const { eventId, cartId } = args;
    if (eventId) {
      return getProductIdByEventId(eventId, cartId, req.headers.authorization);
    }
    return null;
  },
};

const productDataByEventId = {
  type: EventProduct,
  args: {
    eventId: { type: GraphQLString },
    cartId: { type: GraphQLString },
  },
  resolve: (rawUserData, args, req) => {
    const { eventId, cartId } = args;
    if (eventId) {
      return getProductDataByEventId(
        eventId,
        cartId,
        req.headers.authorization
      );
    }
    return null;
  },
};

const createCartId = {
  type: Cart,
  args: {},
  resolve: (rawUserData, args, req) => getCartId(),
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
      return deleteItemFromCartById(
        cartId,
        lineItemId,
        req.headers.authorization
      );
    }
    return null;
  },
};

const promoCodes = {
  type: Cart,
  args: {
    cartId: { type: GraphQLString },
    promoCodes: { type: GraphQLList(GraphQLString) },
  },
  resolve: (data, args, req) => {
    const { cartId, promoCodes } = args;
    if (cartId && promoCodes) {
      return updatePromoCodes(cartId, promoCodes, req.headers.authorization);
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

const removeProductFromCart = {
  type: Cart,
  args: {
    cartId: { type: GraphQLString },
    lineItemId: { type: GraphQLString },
  },
  resolve: (rawUserData, args, req) => removeProduct(args),
};

const setHotelCustomerInfo = {
  type: Cart,
  args: {
    cartId: { type: GraphQLString },
    lineItemId: { type: GraphQLString },
    guestDetails: { type: GraphQLString },
  },
  resolve: (rawUserData, args, req) => setHotelLineItemCustomerInfo(args),
};

const merchandiseByEventId = {
  type: GraphQLList(Merchandise),
  args: {
    eventId: { type: GraphQLString },
  },
  resolve: (rawUserData, args, req) => {
    const { eventId } = args;

    if (!eventId) return null;

    return getMerchandiseByEventId(eventId);
  },
};

export {
  hotelProductById,
  productIdByEventId,
  productDataByEventId,
  createCartId,
  removeProductFromCart,
  cartById,
  paymentPublicKey,
  removeItemFromCartById,
  payNow,
  customerInfo,
  addProductOnCart,
  merchandiseByEventId,
  setHotelCustomerInfo,
  promoCodes,
};

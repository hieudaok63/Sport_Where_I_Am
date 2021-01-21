import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} from 'graphql';

import Address from './Address';

const HotelCustomerInfo = new GraphQLObjectType({
  name: 'HotelCustomerInfo',
  fields: {
    name: { type: GraphQLString },
    type: { type: GraphQLString },
  },
});

const CustomerInfo = new GraphQLObjectType({
  name: 'CustomerInfo',
  fields: {
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    addresses: { type: GraphQLList(Address) },
    dob: { type: GraphQLString },
    age: { type: GraphQLInt },
    ticketingEmail: { type: GraphQLString },
    title: { type: GraphQLString },
    firstnames: { type: GraphQLString },
    surname: { type: GraphQLString },
    type: { type: GraphQLString },
    more: { type: GraphQLList(HotelCustomerInfo) },
  },
});

export default CustomerInfo;

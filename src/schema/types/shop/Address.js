import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';

import CountryCart from './CountryCart';

const Address = new GraphQLObjectType({
  name: 'Address',
  fields: {
    attn: { type: GraphQLString },
    premise: { type: GraphQLString },
    address1: { type: GraphQLString },
    address2: { type: GraphQLString },
    city: { type: GraphQLString },
    state: { type: GraphQLString },
    postCode: { type: GraphQLString },
    country: { type: CountryCart },
    phone: { type: GraphQLString },
    purposes: { type: GraphQLList(GraphQLString) },
  },
});

export default Address;

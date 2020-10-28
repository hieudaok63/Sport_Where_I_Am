import { GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';

import GeoData from './shop/GeoData';

const ProductPrice = new GraphQLObjectType({
  name: 'ProductPrice',
  fields: {
    currency: { type: GraphQLString },
    amount: { type: GraphQLString },
    annotation: { type: GraphQLString },
  },
});

const ProductAttributes = new GraphQLObjectType({
  name: 'ProductAttributes',
  fields: {
    inventory: { type: GraphQLString },
    groupType: { type: GraphQLString },
    deliveryOpts: { type: GraphQLString },
    lowHighSeats: { type: GraphQLString },
    row: { type: GraphQLString },
    section: { type: GraphQLString },
    splits: { type: GraphQLString },
    live: { type: GraphQLString },
    notes: { type: GraphQLString },
    rdo: { type: GraphQLString },
  },
});

const ProductVariant = new GraphQLObjectType({
  name: 'ProductVariant',
  fields: {
    id: { type: GraphQLString },
    ticket: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: ProductPrice },
    attributes: { type: ProductAttributes },
  },
});

export const EventProduct = new GraphQLObjectType({
  name: 'EventProduct',
  fields: {
    id: { type: GraphQLString },
    type: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    localDateTime: { type: GraphQLString },
    geo: { type: GeoData },
    price: { type: ProductPrice },
    url: { type: GraphQLString },
    urlType: { type: GraphQLString },
    variants: { type: GraphQLList(ProductVariant) },
    status: { type: GraphQLString },
    message: { type: GraphQLString },
  },
});

import {
  GraphQLFloat,
  GraphQLList,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import DateTimeStatus from './shop/DateTimeStatus';
import Address from './shop/Address';
import Facilities from './shop/Facilities';
import Ticks from './shop/Ticks';

const PriceProduct = new GraphQLObjectType({
  name: 'PriceProduct',
  fields: {
    currency: { type: GraphQLString },
    amount: { type: GraphQLFloat },
    annotation: { type: GraphQLString },
  },
});

const Attributes = new GraphQLObjectType({
  name: 'Attributes',
  fields: {
    fees: { type: GraphQLString },
  },
});

const Variants = new GraphQLObjectType({
  name: 'Variants',
  fields: {
    id: { type: GraphQLString },
    type: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: PriceProduct },
    attributes: { type: Attributes },
  },
});

const ImagesProducts = new GraphQLObjectType({
  name: 'ImagesProducts',
  fields: {
    url: { type: GraphQLString },
    caption: { type: GraphQLString },
  },
});

const VenueDetailsProduct = new GraphQLObjectType({
  name: 'VenueDetailsProduct',
  fields: {
    rating: { type: GraphQLInt },
    address: { type: GraphQLList(Address) },
    images: { type: GraphQLList(ImagesProducts) },
  },
});

const Product = new GraphQLObjectType({
  name: 'Product',
  fields: {
    id: { type: GraphQLString },
    type: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    localDateTime: { type: GraphQLString },
    dateTimeStatus: { type: DateTimeStatus },
    price: { type: PriceProduct },
    url: { type: GraphQLString },
    urlType: { type: GraphQLString },
    variants: { type: GraphQLList(Variants) },
    venueDetails: { type: VenueDetailsProduct },
    facilities: { type: GraphQLList(Facilities) },
    ticks: { type: GraphQLList(Ticks) },
  },
});

const ProductValue = new GraphQLObjectType({
  name: 'ProductValue',
  fields: {
    value: { type: GraphQLString },
  },
});

const ProductCountry = new GraphQLObjectType({
  name: 'ProductCountry',
  fields: {
    code: { type: GraphQLString },
    name: { type: GraphQLString },
  },
});

const ProductGeo = new GraphQLObjectType({
  name: 'ProductGeo',
  fields: {
    city: { type: GraphQLString },
    country: { type: ProductCountry },
  },
});

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
    geo: { type: ProductGeo },
    price: { type: ProductPrice },
    url: { type: GraphQLString },
    urlType: { type: GraphQLString },
    variants: { type: GraphQLList(ProductVariant) },
  },
});

export { Product, ProductValue };
export default Product;

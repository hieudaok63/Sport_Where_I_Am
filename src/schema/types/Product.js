import { GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';

const Product = new GraphQLObjectType({
  name: 'Product',
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

export default Product;

// Example Product Data
// [
//   {
//     "id": "a371492b1bab79b16ce6",
//     "type": "EVENT",
//     "name": "New York Mets vs. Miami Marlins - Home Opener",
//     "description": "Citi Field, Flushing at 03:30 on 8 Apr 2021",
//     "localDateTime": "2021-04-08T03:30:00",
//     "geo": {
//       "city": "Flushing",
//       "country": {
//         "code": "US",
//         "name": "United States of America"
//       }
//     },
//     "price": {
//       "currency": "AUD",
//       "amount": 190.99,
//       "annotation": "from, 172.73 m/u All channels TN vendor AUD currency add 10USD+8%, free shipping"
//     },
//     "url": "https://apidev2.sportswhereiam.com/punchout.html?channel=SWiAM&cartId=XXXXXX&currency=AUD&productId=a371492b1bab79b16ce6",
//     "urlType": "PUNCHOUT",
//     "variants": [
//       {
//         "id": "a37149271eaf71bb6ae71dd0",
//         "type": "TICKET",
//         "name": "Event Ticket",
//         "description": "Row 5,  Section de Reserved ",
//         "price": {
//           "currency": "AUD",
//           "amount": 279.05,
//           "annotation": "254.26 m/u All channels TN vendor AUD currency add 10USD+8%, free shipping"
//         },
//         "attributes": {
//           "inventory": "6",
//           "groupType": "Event Ticket",
//           "deliveryOpts": "ETICKET",
//           "lowHighSeats": "11-16",
//           "row": "5",
//           "section": "de Reserved ",
//           "splits": "1,2,3,4,5,6",
//           "live": "false",
//           "notes": "Tickets will be ready for delivery by Apr 04, 2021.",
//           "rdo": "MD"
//         }
//       },
//     ],
//   }
// ]

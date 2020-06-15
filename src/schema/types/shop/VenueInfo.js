import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} from 'graphql';

import Address from './Address';
import Image from './Image';

const VenueInfo = new GraphQLObjectType({
  name: 'VenueInfo',
  fields: {
    rating: { type: GraphQLInt },
    address: { type: Address },
    images: { type: GraphQLList(Image) },
    facilities: { type: GraphQLList(GraphQLString) },
    ticks: { type: GraphQLList(GraphQLString) },
  },
});

export default VenueInfo;

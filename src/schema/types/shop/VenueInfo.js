import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} from 'graphql';

import Address from './Address';
import Image from './Image';
import Facilities from './Facilities';

const VenueInfo = new GraphQLObjectType({
  name: 'VenueInfo',
  fields: {
    rating: { type: GraphQLInt },
    address: { type: Address },
    images: { type: GraphQLList(Image) },
    facilities: { type: Facilities },
    ticks: { type: GraphQLList(GraphQLString) },
  },
});

export default VenueInfo;

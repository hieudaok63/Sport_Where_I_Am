import { GraphQLObjectType, GraphQLFloat, GraphQLList } from 'graphql';

import Address from './Address';
import Image from './Image';
import Facilities from './Facilities';
import Ticks from './Ticks.js';

const VenueInfo = new GraphQLObjectType({
  name: 'VenueInfo',
  fields: {
    rating: { type: GraphQLFloat },
    address: { type: Address },
    images: { type: GraphQLList(Image) },
    facilities: { type: Facilities },
    ticks: { type: Ticks },
  },
});

export default VenueInfo;

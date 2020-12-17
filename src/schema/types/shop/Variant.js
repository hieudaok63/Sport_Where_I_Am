import { GraphQLObjectType, GraphQLString } from 'graphql';

import PriceCart from './PriceCart';
import Attribute from './Attribute';

const Variant = new GraphQLObjectType({
  name: 'Variant',
  fields: {
    id: { type: GraphQLString },
    type: { type: GraphQLString },
    name: { type: GraphQLString },
    ticket: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: PriceCart },
    url: { type: GraphQLString },
    urlType: { type: GraphQLString },
    attributes: { type: Attribute },
  },
});

export default Variant;

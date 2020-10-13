import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';
import Team from './Team';
import CurrencyValue from './CurrencyValue';

const Merchandise = new GraphQLObjectType({
  name: 'Merchandise',
  fields: {
    merchandiseId: { type: GraphQLInt },
    description: { type: GraphQLString },
    merchandiseImageUrl: { type: GraphQLString },
    price: { type: CurrencyValue },
    purchaseUrl: { type: GraphQLString },
    team: { type: Team },
  },
});

export default Merchandise;

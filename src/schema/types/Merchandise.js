import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';
import Team from './Team';

const MerchandisePrice = new GraphQLObjectType({
  name: 'MerchandisePrice',
  fields: {
    amount: GraphQLInt,
    currencyId: GraphQLString,
  },
});

const Merchandise = new GraphQLObjectType({
  name: 'Merchandise',
  fields: {
    merchandiseId: { type: GraphQLInt },
    description: { type: GraphQLString },
    merchandiseImageUrl: { type: GraphQLString },
    price: { type: MerchandisePrice },
    purchaseUrl: { type: GraphQLString },
    team: { type: Team },
  },
});

export default Merchandise;

import { GraphQLObjectType, GraphQLFloat } from 'graphql';

const Coordinates = new GraphQLObjectType({
  name: 'Coordinates',
  fields: {
    latitude: { type: GraphQLFloat },
    longitude: { type: GraphQLFloat },
  },
});

export default Coordinates;

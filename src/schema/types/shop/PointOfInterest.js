import { GraphQLObjectType, GraphQLString } from 'graphql';

const PointOfInterest = new GraphQLObjectType({
  name: 'PointOfInterest',
  fields: {
    key: { type: GraphQLString },
    units: { type: GraphQLString },
    distance: { type: GraphQLString },
    lat: { type: GraphQLString },
    lng: { type: GraphQLString },
  },
});

export default PointOfInterest;

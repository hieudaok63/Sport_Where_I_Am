import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';

import CountryCart from './CountryCart';
import PointOfInterest from './PointOfInterest';

const GeoData = new GraphQLObjectType({
  name: 'GeoData',
  fields: {
    city: { type: GraphQLString },
    country: { type: CountryCart },
    tz: { type: GraphQLString },
    pois: { type: GraphQLList(PointOfInterest) },
    lng: { type: GraphQLString },
  },
});

export default GeoData;

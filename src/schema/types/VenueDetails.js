import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
} from 'graphql';
import Coordinates from './Coordinates';
import Country from './Country';

const VenueCity = new GraphQLObjectType({
  name: 'VenueCity',
  fields: {
    cityId: { type: GraphQLID },
    cityName: { type: GraphQLString },
    cityOverview: { type: GraphQLString },
    country: { type: Country },
  },
});

const VenueDetails = new GraphQLObjectType({
  name: 'VenueDetails',
  fields: {
    venueId: { type: GraphQLID },
    venueAddress: { type: GraphQLString },
    venueImage: { type: GraphQLString },
    venueName: { type: GraphQLString },
    venueOverview: { type: GraphQLString },
    city: { type: VenueCity },
    coOrdinates: { type: Coordinates },
  },
});

export default VenueDetails;

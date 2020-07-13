import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
} from 'graphql';
import Country from './Country';
import Venue from './Venue';
import VenueDetails from './VenueDetails';

const PriceType = new GraphQLObjectType({
  name: 'Price',
  fields: {
    amount: { type: GraphQLFloat },
    currencyId: { type: GraphQLString },
  },
});

const CityType = new GraphQLObjectType({
  name: 'CityHotel',
  fields: {
    cityID: { type: GraphQLInt },
    cityName: { type: GraphQLString },
    country: { type: Country },
  },
});

const CoOrdinatesType = new GraphQLObjectType({
  name: 'CoOrdinates',
  fields: {
    latitude: { type: GraphQLFloat },
    longitude: { type: GraphQLFloat },
  },
});

const Hotel = new GraphQLObjectType({
  name: 'Hotel',
  fields: {
    hotelID: { type: GraphQLInt },
    hotelImage: { type: GraphQLString },
    hotelName: { type: GraphQLString },
    fromPrice: { type: PriceType },
    nearbyVenue: { type: CityType },
    coOrdinates: { type: CoOrdinatesType },
    venueAddress: { type: GraphQLString },
    venueID: { type: GraphQLInt },
    venueImage: { type: GraphQLString },
    venueName: { type: GraphQLString },
  },
});

export const TopHotel = new GraphQLObjectType({
  name: 'TopHotel',
  fields: {
    hotelID: { type: GraphQLInt },
    hotelImage: { type: GraphQLString },
    hotelName: { type: GraphQLString },
    bestEventDescription: { type: GraphQLString },
    promoBanner: { type: GraphQLString },
    fromPrice: { type: PriceType },
    nearbyVenue: { type: VenueDetails },
  },
});

export default Hotel;

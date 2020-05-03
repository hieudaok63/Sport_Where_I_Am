import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
} from 'graphql';

const PriceType = new GraphQLObjectType({
  name: 'Price',
  fields: {
    amount: { type: GraphQLFloat },
    currencyId: { type: GraphQLString },
  },
});

const CountryType = new GraphQLObjectType({
  name: 'Country',
  fields: {
    countryID: { type: GraphQLString },
    countryName: { type: GraphQLString },
  },
});

const CityType = new GraphQLObjectType({
  name: 'CityHotel',
  fields: {
    cityID: { type: GraphQLInt },
    cityName: { type: GraphQLString },
    country: { type: CountryType },
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

export default Hotel;

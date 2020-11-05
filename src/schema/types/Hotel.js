import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLFloat,
} from 'graphql';
import GraphQLLong from 'graphql-type-long';
import Country from './Country';
import VenueDetails from './VenueDetails';
import DateTimeStatus from './shop/DateTimeStatus';
import Facilities from './shop/Facilities';
import Ticks from './shop/Ticks';
import PriceCart from './shop/PriceCart';
import Variant from './shop/Variant';
import VenueInfo from './shop/VenueInfo';

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
    hotelID: { type: GraphQLLong },
    hotelImage: { type: GraphQLString },
    hotelName: { type: GraphQLString },
    fromPrice: { type: PriceType },
    coOrdinates: { type: CoOrdinatesType },
    venueAddress: { type: GraphQLString },
    venueID: { type: GraphQLInt },
    venueImage: { type: GraphQLString },
    venueName: { type: GraphQLString },
    promoBanner: { type: GraphQLString },
    nearbyVenue: { type: VenueDetails },
  },
});

export const HotelData = new GraphQLObjectType({
  name: 'HotelData',
  fields: {
    hotelID: { type: GraphQLString },
    nearbyVenue: { type: VenueDetails },
    bestEventDescription: { type: GraphQLString },
    bestVenueDescription: { type: GraphQLString },
    hotelName: { type: GraphQLString },
    hotelImage: { type: GraphQLString },
    fromPrice: { type: PriceType },
    promoBanner: { type: GraphQLString },
    rating: { type: GraphQLFloat },
    address: { type: GraphQLString },
    overview: { type: GraphQLString },
    images: { type: GraphQLList(GraphQLString) },
    geoCoordinates: { type: CoOrdinatesType },
    amenities: { type: GraphQLList(GraphQLString) },
    headlineImage: { type: GraphQLString },
  },
});

export const TopHotel = new GraphQLObjectType({
  name: 'TopHotel',
  fields: {
    hotelID: { type: GraphQLLong },
    hotelImage: { type: GraphQLString },
    hotelName: { type: GraphQLString },
    bestEventDescription: { type: GraphQLString },
    promoBanner: { type: GraphQLString },
    fromPrice: { type: PriceType },
    nearbyVenue: { type: VenueDetails },
  },
});

export const ProductIdValue = new GraphQLObjectType({
  name: 'ProductIdValue',
  fields: {
    value: { type: GraphQLString },
  },
});

export const HotelProduct = new GraphQLObjectType({
  name: 'HotelProduct',
  fields: {
    id: { type: GraphQLString },
    type: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    localDateTime: { type: GraphQLString },
    dateTimeStatus: { type: DateTimeStatus },
    price: { type: PriceCart },
    url: { type: GraphQLString },
    urlType: { type: GraphQLString },
    variants: { type: GraphQLList(Variant) },
    venueDetails: { type: VenueInfo },
    facilities: { type: GraphQLList(Facilities) },
    ticks: { type: GraphQLList(Ticks) },
  },
});

export default Hotel;

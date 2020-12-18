import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLID,
  GraphQLList,
} from 'graphql';
import Country from './Country';
import EventDetails from './EventDetails';
import VenueDetails from './VenueDetails';

export const CitySummary = new GraphQLObjectType({
  name: 'CitySummary',
  fields: {
    cityId: { type: GraphQLID },
    cityName: { type: GraphQLString },
    cityOverview: { type: GraphQLString },
    country: { type: Country },
    events: { type: GraphQLList(EventDetails) },
    image: { type: GraphQLString },
    imageURL: { type: GraphQLString },
  },
});

const City = new GraphQLObjectType({
  name: 'City',
  fields: {
    city: { type: CitySummary },
    events: { type: GraphQLList(EventDetails) },
    venues: { type: GraphQLList(VenueDetails) },
    // old
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    date: { type: GraphQLString },
    state: { type: GraphQLString },
    price: { type: GraphQLFloat },
    thisHref: { type: GraphQLString },
    venuesHref: { type: GraphQLString },
    eventsHref: { type: GraphQLString },
    // cityDetails: {
    //   type: CityDetails,
    //   resolve: (rawCityData, args, req) => {
    //     const { id } = rawCityData;
    //     if (id) {
    //       return getCityDetailsByIdFromDate(id, '', req.headers.authorization);
    //     }
    //     return null;
    //   },
    // },
  },
});

export const IdByName = new GraphQLObjectType({
  name: 'IdByName',
  fields: {
    cityId: { type: GraphQLID },
    cityName: { type: GraphQLString },
    cityOverview: { type: GraphQLString },
    country: { type: Country },
    events: { type: GraphQLList(EventDetails) },
    image: { type: GraphQLString },
    imageURL: { type: GraphQLString },
  },
});

export default City;

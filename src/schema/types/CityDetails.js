import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} from 'graphql';
import EventDetails from './EventDetails';

const CityDetails = new GraphQLObjectType({
  name: 'CityDetailsaoeu',
  fields: {
    latestDateTime: { type: GraphQLString },
    latestDateTimeStamp: { type: GraphQLString },
    earliestDateTime: { type: GraphQLString },
    earliestDateTimeStamp: { type: GraphQLString },
    latestSystemDateTime: { type: GraphQLString },
    latestSystemDateTimeStamp: { type: GraphQLString },
    earliestSystemDateTime: { type: GraphQLString },
    earliestSystemDateTimeStamp: { type: GraphQLString },
    thisPage: { type: GraphQLInt },
    nextPage: { type: GraphQLInt },
    zonedDateTime: { type: GraphQLString },
    events: { type: GraphQLList(EventDetails) },
  },
});

export default CityDetails;

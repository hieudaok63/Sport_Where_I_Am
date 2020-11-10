import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLBoolean,
} from 'graphql';
import Sport from './Sport';
import leagueEvents from './LeagueEvents';
import InterestTagging from './InterestTagging';

const League = new GraphQLObjectType({
  name: 'League',
  fields: {
    leagueId: { type: GraphQLInt },
    leagueAbbreviation: { type: GraphQLString },
    leagueDescription: { type: GraphQLString },
    leagueID: { type: GraphQLID },
    leagueName: { type: GraphQLString },
    cardImageURL: { type: GraphQLString },
    photoURL: { type: GraphQLString },
    sport: { type: Sport },
    events: { type: GraphQLList(leagueEvents) },
  },
});

export const LeagueDashboard = new GraphQLObjectType({
  name: 'LeagueDashboard',
  fields: {
    id: { type: GraphQLInt },
    imageAspect: { type: GraphQLString },
    imageURL: { type: GraphQLString },
    interestTagging: { type: InterestTagging },
    objectType: { type: GraphQLString },
    postDate: { type: GraphQLString },
    title: { type: GraphQLString },
  },
});

export const LeagueCarousel = new GraphQLObjectType({
  name: 'LeagueCarousel',
  fields: {
    id: { type: GraphQLInt },
    imageAspect: { type: GraphQLString },
    imageURL: { type: GraphQLString },
    interestTagging: { type: InterestTagging },
    objectType: { type: GraphQLString },
    postDate: { type: GraphQLString },
    title: { type: GraphQLString },
  },
});

export default League;

import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} from 'graphql';
import Sport from './Sport';
import leagueEvents from './LeagueEvents';

const League = new GraphQLObjectType({
  name: 'League',
  fields: {
    leagueId: { type: GraphQLInt },
    leagueAbbreviation: { type: GraphQLString },
    leagueDescription: { type: GraphQLString },
    leagueID: { type: GraphQLID },
    leagueName: { type: GraphQLString },
    sport: { type: Sport },
    events: { type: GraphQLList(leagueEvents) },
  },
});

export default League;

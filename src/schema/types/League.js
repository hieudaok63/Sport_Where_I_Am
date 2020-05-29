import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
} from 'graphql';
import Sport from './Sport';

const League = new GraphQLObjectType({
  name: 'League',
  fields: {
    leagueId: { type: GraphQLInt },
    leagueAbbreviation: { type: GraphQLString },
    leagueID: { type: GraphQLID },
    leagueName: { type: GraphQLString },
    leagueDescription: { type: GraphQLString },
    sport: { type: Sport },
  },
});

export default League;

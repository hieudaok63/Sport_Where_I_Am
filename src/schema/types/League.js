import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql';
import Sport from './Sport';

const League = new GraphQLObjectType({
  name: 'League',
  fields: {
    leagueAbbreviation: { type: GraphQLString },
    leagueID: { type: GraphQLID },
    leagueName: { type: GraphQLString },
    sport: { type: Sport },
  },
});

export default League;

import { GraphQLObjectType, GraphQLString } from 'graphql';

const TeamAbbrev = new GraphQLObjectType({
  name: 'TeamAbbrev',
  fields: {
    teamA: { type: GraphQLString },
    teamB: { type: GraphQLString },
  },
});

export default TeamAbbrev;

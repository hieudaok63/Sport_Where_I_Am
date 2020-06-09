import { GraphQLObjectType, GraphQLInt, GraphQLBoolean } from 'graphql';

const InterestTagging = new GraphQLObjectType({
  name: 'InterestTagging',
  fields: {
    cityId: { type: GraphQLInt },
    homepage: { type: GraphQLBoolean },
    leagueId: { type: GraphQLInt },
    teamId: { type: GraphQLInt },
    venueId: { type: GraphQLInt },
  },
});

export default InterestTagging;

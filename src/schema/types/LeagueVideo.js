import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} from 'graphql';

const LeagueVideo = new GraphQLObjectType({
  name: 'LeagueVideo',
  fields: {
    imageAspect: { type: GraphQLString },
    imageURL: { type: GraphQLString },
    interestTagging: {
      cityId: { type: GraphQLInt },
      homepage: { type: GraphQLBoolean },
      leagueId: { type: GraphQLInt },
      teamId: { type: GraphQLInt },
      venueId: { type: GraphQLInt },
    },
    objectType: { type: GraphQLString },
    title: { type: GraphQLString },
    videoID:{ type: GraphQLInt },
    videoURL: { type: GraphQLString },
  },
});

export default LeagueVideo;

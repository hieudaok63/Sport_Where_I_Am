import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} from 'graphql';

import InterestTagging from './InterestTagging';

const LeagueVideo = new GraphQLObjectType({
  name: 'LeagueVideo',
  fields: {
    imageAspect: { type: GraphQLString },
    imageURL: { type: GraphQLString },
    interestTagging: {
      type: InterestTagging,
    },
    objectType: { type: GraphQLString },
    title: { type: GraphQLString },
    videoID: { type: GraphQLInt },
    videoURL: { type: GraphQLString },
  },
});

export default LeagueVideo;

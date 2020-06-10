import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLBoolean,
} from 'graphql';

const NewsItem = new GraphQLObjectType({
  name: 'NewsItem',
  fields: {
    blogpostID: { type: GraphQLInt },
    blogpostSummary: { type: GraphQLString },
    imageAspect: { type: GraphQLString },
    imageURL: { type: GraphQLString },
    interestTagging: {
      cityId: { type: GraphQLInt },
      homepage: { type: GraphQLBoolean },
      leagueId: { type: GraphQLInt },
      teamId: { type: GraphQLInt },
      venueId: { type: GraphQLInt },
    },
    link: { type: GraphQLString },
    objectType: { type: GraphQLString },
    title: { type: GraphQLString },
  },
});

export default NewsItem;

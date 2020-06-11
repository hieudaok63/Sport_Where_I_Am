import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLBoolean,
} from 'graphql';

import InterestTagging from './InterestTagging';

const NewsItem = new GraphQLObjectType({
  name: 'NewsItem',
  fields: {
    blogpostID: { type: GraphQLInt },
    blogpostSummary: { type: GraphQLString },
    imageAspect: { type: GraphQLString },
    imageURL: { type: GraphQLString },
    interestTagging: { type: InterestTagging },
    link: { type: GraphQLString },
    objectType: { type: GraphQLString },
    title: { type: GraphQLString },
  },
});

export default NewsItem;

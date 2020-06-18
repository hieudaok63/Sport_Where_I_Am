import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} from 'graphql';

import InterestTagging from './InterestTagging';

const NewsItem = new GraphQLObjectType({
  name: 'NewsItem',
  fields: {
    id: { type: GraphQLInt },
    summary: { type: GraphQLString },
    imageAspect: { type: GraphQLString },
    imageURL: { type: GraphQLString },
    interestTagging: { type: InterestTagging },
    link: { type: GraphQLString },
    objectType: { type: GraphQLString },
    title: { type: GraphQLString },
    postDate: { type: GraphQLString },
  },
});

export default NewsItem;

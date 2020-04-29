import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

const Search = new GraphQLObjectType({
  name: 'Search',
  fields: {
    resultID: { type: GraphQLInt },
    resultText: { type: GraphQLString },
    type: { type: GraphQLString },
    subType: { type: GraphQLString },
  },
});

export default Search;

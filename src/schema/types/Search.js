import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

const Search = new GraphQLObjectType({
  name: 'Search',
  fields: {
    resultID: { type: GraphQLString },
    resultText: { type: GraphQLString },
    type: { type: GraphQLString },
    subType: { type: GraphQLString },
    date: { type: GraphQLString },
    venue: { type: GraphQLString },
  },
});

export default Search;

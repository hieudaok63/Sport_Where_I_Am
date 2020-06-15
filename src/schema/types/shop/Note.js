import { GraphQLObjectType, GraphQLString } from 'graphql';

const Note = new GraphQLObjectType({
  name: 'Note',
  fields: {
    title: { type: GraphQLString },
    body: { type: GraphQLString },
  },
});

export default Note;

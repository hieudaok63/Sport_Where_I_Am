import { GraphQLObjectType, GraphQLString } from 'graphql';

const StatusLine = new GraphQLObjectType({
  name: 'StatusLine',
  fields: {
    status: { type: GraphQLString },
    message: { type: GraphQLString },
    details: { type: GraphQLString },
  },
});

export default StatusLine;

import { GraphQLObjectType, GraphQLString } from 'graphql';

const ExtInfo = new GraphQLObjectType({
  name: 'ExtInfo',
  fields: {
    extId: { type: GraphQLString },
    extStatus: { type: GraphQLString },
    extTicketId: { type: GraphQLString },
    zdOrderStatus: { type: GraphQLString },
    zdTicketInfo: { type: GraphQLString },
  },
});

export default ExtInfo;

import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

const IdByNameData = new GraphQLObjectType({
  name: 'IdByNameData',
  fields: {
    id: { type: GraphQLID },
    type: { type: GraphQLString },
  },
});

export const IdByName = new GraphQLObjectType({
  name: 'IdByName',
  fields: {
    status: { type: GraphQLID },
    data: { type: IdByNameData },
    errorCode: { type: GraphQLString },
    errorMessage: { type: GraphQLString },
  },
});

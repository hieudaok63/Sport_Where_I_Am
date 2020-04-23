import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

const Sport = new GraphQLObjectType({
  name: 'Sport',
  fields: {
    sportID: { type: GraphQLInt },
    sportIconURL: { type: GraphQLString },
    sportIconURLV4: { type: GraphQLString },
    sportName: { type: GraphQLString },
  },
});

export default Sport;

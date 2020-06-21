import { GraphQLObjectType, GraphQLString } from 'graphql';

const Attribute = new GraphQLObjectType({
  name: 'Attribute',
  fields: {
    additionalProp1: { type: GraphQLString },
    additionalProp2: { type: GraphQLString },
    additionalProp3: { type: GraphQLString },
    fees: { type: GraphQLString },
  },
});

export default Attribute;

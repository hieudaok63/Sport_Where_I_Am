import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql';

const Country = new GraphQLObjectType({
  name: 'Country',
  fields: {
    countryID: { type: GraphQLID },
    countryName: { type: GraphQLString },
  },
});

export default Country;

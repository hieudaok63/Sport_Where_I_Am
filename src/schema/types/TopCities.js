import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

const CountryCity = new GraphQLObjectType({
  name: 'CountryCity',
  fields: {
    countryId: { type: GraphQLString },
    countryName: { type: GraphQLString },
  },
});

const TopCities = new GraphQLObjectType({
  name: 'TopCities',
  fields: {
    cityId: { type: GraphQLInt },
    cityName: { type: GraphQLString },
    country: { type: CountryCity },
    cityOverview: { type: GraphQLString },
    imageURL: { type: GraphQLString },
  },
});

export default TopCities;

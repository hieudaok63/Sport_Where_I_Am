import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';

const AuthToken = new GraphQLObjectType({
  name: 'AuthToken',
  fields: {
    auth_token: { type: GraphQLString },
  },
});

const Countries = new GraphQLObjectType({
  name: 'Countries',
  fields: {
    country_name: { type: GraphQLString },
    country_short_name: { type: GraphQLString },
    country_phone_code: { type: GraphQLInt },
  },
});

const States = new GraphQLObjectType({
  name: 'States',
  fields: {
    state_name: { type: GraphQLString },
  },
});

const Cities = new GraphQLObjectType({
  name: 'Cities',
  fields: {
    city_name: { type: GraphQLString },
  },
});

export { AuthToken, Countries, States, Cities };

import { GraphQLObjectType, GraphQLString } from 'graphql';

const CreditCard = new GraphQLObjectType({
  name: 'CreditCard',
  fields: {
    userId: { type: GraphQLString },
    userName: { type: GraphQLString },
    stripe_card_token_id: { type: GraphQLString },
    stripe_customer_id: { type: GraphQLString },
    credit_card_exp_year: { type: GraphQLString },
    credit_card_exp_month: { type: GraphQLString },
    credit_card_last_digit: { type: GraphQLString },
    credit_card_holder_name: { type: GraphQLString },
  },
});

export default CreditCard;

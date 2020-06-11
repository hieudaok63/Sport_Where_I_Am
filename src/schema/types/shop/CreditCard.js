import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInputObjectType,
} from 'graphql';

const fields = {
  userId: { type: GraphQLString },
  userName: { type: GraphQLString },
  stripe_card_token_id: { type: GraphQLString },
  stripe_customer_id: { type: GraphQLString },
  credit_card_exp_year: { type: GraphQLString },
  credit_card_exp_month: { type: GraphQLString },
  credit_card_last_digit: { type: GraphQLString },
  credit_card_holder_name: { type: GraphQLString },
};

const CreditCard = new GraphQLObjectType({
  name: 'CreditCard',
  fields,
});

export const CreditCardInput = new GraphQLInputObjectType({
  name: 'CreditCardInput',
  fields,
});

export default CreditCard;

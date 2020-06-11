import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import PriceCart from './PriceCart';
import CountryCart from './CountryCart';
import Info from './Info';

const ShippingOption = new GraphQLObjectType({
  name: 'ShippingOption',
  fields: {
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    type: { type: GraphQLString },
    price: { type: PriceCart },
    country: { type: CountryCart },
    addInfo: { type: GraphQLList(Info) },
    defaultMail: { type: GraphQLBoolean },
  },
});

export default ShippingOption;

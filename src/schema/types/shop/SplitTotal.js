import { GraphQLObjectType } from 'graphql';

import PriceCart from './PriceCart';

const SplitTotal = new GraphQLObjectType({
  name: 'SplitTotal',
  fields: {
    withCommission: { type: PriceCart },
    withoutCommission: { type: PriceCart },
  },
});

export default SplitTotal;

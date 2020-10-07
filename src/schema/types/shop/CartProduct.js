import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';

import DateTimeStatus from './DateTimeStatus';
import GeoData from './GeoData';
import PriceCart from './PriceCart';
import Variant from './Variant';
import Needs from './Needs';
import Note from './Note';
import VenueInfo from './VenueInfo';
import EventWithCityDetails from '../EventWithCityDetails';
import { getEventById } from '../../../services/event-service';

const CartProduct = new GraphQLObjectType({
  name: 'CartProduct',
  fields: {
    id: { type: GraphQLString },
    type: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    localDateTime: { type: GraphQLString },
    dateTimeStatus: { type: DateTimeStatus },
    geo: { type: GeoData },
    price: { type: PriceCart },
    url: { type: GraphQLString },
    urlType: { type: GraphQLString },
    selectedVariant: { type: Variant },
    variants: { type: GraphQLList(Variant) },
    needs: { type: Needs },
    notes: { type: GraphQLList(Note) },
    venueDetails: { type: VenueInfo },
  },
});

export default CartProduct;

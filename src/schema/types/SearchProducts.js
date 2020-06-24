import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLFloat,
} from 'graphql';
import VenueInfo from './shop/VenueInfo';
import Variant from './shop/Variant';
import DateTimeStatus from './shop/DateTimeStatus';

const SearchProductsCountryType = new GraphQLObjectType({
  name: 'SearchProductsCountry',
  fields: {
    code: { type: GraphQLString },
    name: { type: GraphQLString },
  },
});

const PoisType = new GraphQLObjectType({
  name: 'Pois',
  fields: {
    key: { type: GraphQLString },
    units: { type: GraphQLString },
    distance: { type: GraphQLInt },
    lat: { type: GraphQLInt },
    lng: { type: GraphQLInt },
  },
});

const GeoType = new GraphQLObjectType({
  name: 'Geo',
  fields: {
    city: { type: GraphQLString },
    country: { type: SearchProductsCountryType },
    tz: { type: GraphQLString },
    pois: { type: GraphQLList(PoisType) },
  },
});

const SearchProductsPriceType = new GraphQLObjectType({
  name: 'SearchProductsPrice',
  fields: {
    currency: { type: GraphQLString },
    amount: { type: GraphQLFloat },
    annotation: { type: GraphQLString },
    error: { type: GraphQLString },
    runningTotal: { type: GraphQLInt },
  },
});

const DobType = new GraphQLObjectType({
  name: 'Dob',
  fields: {
    dob: { type: GraphQLBoolean },
  },
});

const NotesType = new GraphQLObjectType({
  name: 'Notes',
  fields: {
    title: { type: GraphQLString },
    body: { type: GraphQLString },
  },
});

const SearchProducts = new GraphQLObjectType({
  name: 'searchProducts',
  fields: {
    id: { type: GraphQLString },
    type: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    localDateTime: { type: GraphQLString },
    dateTimeStatus: { type: DateTimeStatus },
    geo: { type: GeoType },
    price: { type: SearchProductsPriceType },
    url: { type: GraphQLString },
    urlType: { type: GraphQLString },
    hotelID: { type: GraphQLString },
    selectedVariant: { type: Variant },
    variants: { type: GraphQLList(Variant) },
    needs: { type: DobType },
    notes: { type: NotesType },
    venueDetails: { type: VenueInfo },
  },
});

export default SearchProducts;

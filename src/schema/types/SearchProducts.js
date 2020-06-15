import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLBoolean,
} from 'graphql';

const DateTimeStatusType = new GraphQLObjectType({
  name: 'DateTimeStatus',
  fields: {
    dateFinal: { type: GraphQLFloat },
    timeFinal: { type: GraphQLFloat },
    notes: { type: GraphQLString },
    startDateTime: { type: GraphQLString },
    endDateTime: { type: GraphQLString },
  },
});

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
    amount: { type: GraphQLInt },
    annotation: { type: GraphQLString },
    error: { type: GraphQLString },
    runningTotal: { type: GraphQLInt },
  },
});

const PriceVariantsType = new GraphQLObjectType({
  name: 'PriceVariants',
  fields: {
    currency: { type: GraphQLString },
    amount: { type: GraphQLInt },
    annotation: { type: GraphQLString },
    error: { type: GraphQLString },
    runningTotal: { type: GraphQLInt },
  },
});

const AttributesType = new GraphQLObjectType({
  name: 'Attributes',
  fields: {
    additionalProp1: { type: GraphQLString },
    additionalProp2: { type: GraphQLString },
    additionalProp3: { type: GraphQLString },
  },
});

const SelectedVariantType = new GraphQLObjectType({
  name: 'SelectedVariant',
  fields: {
    id: { type: GraphQLString },
    type: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: PriceVariantsType },
    url: { type: GraphQLString },
    urlType: { type: GraphQLString },
    attributes: { type: AttributesType },
  },
});

const VariantsType = new GraphQLObjectType({
  name: 'Variants',
  fields: {
    id: { type: GraphQLString },
    type: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: PriceVariantsType },
    url: { type: GraphQLString },
    urlType: { type: GraphQLString },
    attributes: { type: AttributesType },
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

const VenueDetailsAddressType = new GraphQLObjectType({
  name: 'VenueDetailsAddress',
  fields: {
    attn: { type: GraphQLString },
    premise: { type: GraphQLString },
    address1: { type: GraphQLString },
    address2: { type: GraphQLString },
    city: { type: GraphQLString },
    state: { type: GraphQLString },
    postCode: { type: GraphQLString },
    country: { type: SearchProductsCountryType },
    phone: { type: GraphQLString },
    purposes: { type: GraphQLList(GraphQLString) },
  },
});

const VenueDetailsImagesType = new GraphQLObjectType({
  name: 'VenueDetailsImages',
  fields: {
    url: { type: GraphQLString },
    caption: { type: GraphQLString },
  },
});

const SearchProductsVenueDetailsType = new GraphQLObjectType({
  name: 'SearchProductsVenueDetails',
  fields: {
    rating: { type: GraphQLInt },
    address: { type: VenueDetailsAddressType },
    images: { type: GraphQLList(VenueDetailsImagesType) },
    facilities: { type: GraphQLList(GraphQLString) },
    ticks: { type: GraphQLList(GraphQLString) },
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
    dateTimeStatus: { type: DateTimeStatusType },
    geo: { type: GeoType },
    price: { type: SearchProductsPriceType },
    url: { type: GraphQLString },
    urlType: { type: GraphQLString },
    selectedVariant: { type: SelectedVariantType },
    variants: { type: GraphQLList(VariantsType) },
    needs: { type: DobType },
    notes: { type: NotesType },
    venueDetails: { type: SearchProductsVenueDetailsType },
  },
});

export default SearchProducts;

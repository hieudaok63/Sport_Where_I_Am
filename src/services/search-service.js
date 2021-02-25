import HttpClient from '../tools/http-client';
import { getAuthOption } from '../tools/auth-header';

const { SWIAM_OPENAPI } = process.env;

const getSearchByTerm = async (searchTerm, useHotelIDs, token) => {
  const http = HttpClient.getHttpClient();
  return Promise.resolve(useHotelIDs)
    .then(async useHotelIDs => {
      if (useHotelIDs) {
        const url = `${SWIAM_OPENAPI}/cms/v1/lookupCity/?searchTerm=${searchTerm}`;
        const hotelSearchResults = await http.get(
          url,
          token && getAuthOption(token)
        );
        if (hotelSearchResults.data.data.length > 0) {
          return hotelSearchResults.data.data;
        }
      }
    })
    .then(async hotelSearchResults => {
      const url = `${SWIAM_OPENAPI}/cms/v1/search/?searchTerm=${searchTerm}`;
      const searchResults = await http.get(url, token && getAuthOption(token));
      if (hotelSearchResults) {
        searchResults.data.data.forEach(result => {
          // update the result with the resultID from hotel search results with
          // IDENTICAL TYPE & TEXT ATTRIBUTES
          // *** there will be no match for non-cities as the lookupCity endpoint is designed for city results only ***
          if (result.type !== 'CITY') return;
          const matchingHotelResult = hotelSearchResults.find(
            hotelSearchResult =>
              result.type === hotelSearchResult.type &&
              result.resultText === hotelSearchResult.resultText
          );
          if (matchingHotelResult)
            result.hotelSearchCityId = matchingHotelResult.resultID;
        });
      }
      return searchResults.data.data;
    })
    .catch(error => {
      logger.error(
        `Error in Search Service - getSearchByTerm() for search term: ${searchTerm} `,
        error.message
      );
      console.log('ERROR', error);
      return null;
    });
};

export { getSearchByTerm };

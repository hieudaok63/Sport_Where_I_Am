import HttpClient from '../tools/http-client';
import { getAuthOption } from '../tools/auth-header';

const { SWIAM_OPENAPI } = process.env;

const getVenueByIdFromDate = (venueId, fromDate, token) => {
  const url = `${SWIAM_OPENAPI}/cms/v1/venue/${venueId}/info`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res && res.data && res.data.data)
    .catch(error => {
      logger.error(
        `Error in Venue Service - getVenueByIdFromDate() for venue number: ${venueId} `,
        error.message
      );
      return null;
    });
};

export const getVenueImportantInformationById = (venueId, token) => {
  const url = `${SWIAM_OPENAPI}/cms/v1/venue/${venueId}/importantInformation`;
  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res && res.data && res.data.data)
    .catch(error => {
      logger.error(
        `Error in Venue Service - getVenueImportantInformationById() for venue number: ${venueId} `,
        error.message
      );
      return null;
    });
};

export default getVenueByIdFromDate;

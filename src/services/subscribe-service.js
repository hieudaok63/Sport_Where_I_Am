import HttpClient from '../tools/http-client';
import { getAuthOption } from '../tools/auth-header';

const { SWIAM_OPENAPI } = process.env;

const createSubscribe = (data, token) => {
  const url = `${SWIAM_OPENAPI}/cms/v1/subscribe`;

  const http = HttpClient.getHttpClient();

  // console.log('CREATE SUBSCRIBE DATA', data);

  const campaignMonitorConfig = {
    headers: {
      'Content-type': 'application/json; charset=utf-8',
      Authorization: 'Bearer 91c87405631b9e7e31491fdd20d73d31',
    },
  };

  return http
    .post(
      `https://91c87405631b9e7e31491fdd20d73d31:x@api.createsend.com/api/v3.2/subscribers/bd659f4d7a9a2816747c606485479119.json`,
      {
        EmailAddress: data.email,
        Name: data.fullName,
        Resubscribe: true,
        ConsentToTrack: 'No',
      },
      campaignMonitorConfig
    )
    .then(response => http.post(url, data, token && getAuthOption(token)))
    .then(() => data)
    .catch(error => {
      logger.error(
        `Error in Subscribe Service - createSubscribe() - `,
        error.message
      );
      return null;
    });
};

export { createSubscribe };

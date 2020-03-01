import HttpClient from '../tools/http-client';
import getAuthOption from '../tools/auth-header';

const { BASE_API } = process.env;

export const getDepartmentById = (departmentId, token) => {
  const url = `${BASE_API}/department/${departmentId}`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data)
    .catch(error => {
      logger.error(
        `Error in Department Service - getDepartmentById() for department number: ${departmentId} `,
        error.message
      );
      return null;
    });
};

export const getAllDepartments = token => {
  const url = `${BASE_API}/department`;

  const http = HttpClient.getHttpClient(3000);
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data)
    .catch(error => {
      logger.error(
        `Error in User Service - getAllDepartments() - `,
        error.message
      );
      return null;
    });
};

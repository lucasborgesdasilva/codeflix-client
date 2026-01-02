const API_URL = 'http://localhost:3333';

export interface ApiQueryParams {
  [key: string]: string | number | boolean;
}

export interface requestOptions {
  page?: number;
  _limit?: number;
  rating_like?: string;
}

export const defaultOptions: requestOptions = {
  page: 1,
  _limit: 10,
};

export async function apiRequest(
  endpoint: string,
  query: ApiQueryParams = {},
  options: requestOptions = {}
) {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
// @flow

import { NY_TIMES_API_KEY, NY_TIMES_BASE_URL } from '../config/environment';
import { getRequest } from '../utils/requests';

type Options = {
  list?: string,
  sortOrder?: string
};

const DEFAULT_PARAMS = {
  list: 'hardcover-fiction',
  'sort-order': 'DESC'
}

export function getBestSellers(options: Options): Promise<any> {
  const params = {
    DEFAULT_PARAMS,
    ...options,
    'api-key': NY_TIMES_API_KEY
  }

  return fetch(NY_TIMES_BASE_URL, params)
}
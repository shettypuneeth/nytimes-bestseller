// @flow

type RequestOptions = {
  url: string,
  params: Object,
  headers?: Object
};

const queryStringify = (queryParams: Object) => {
  if (!queryParams) return '';

  // Need to handle encoding of query params.
  return Object.keys(queryParams)
    .map(k => `${k}=${queryParams[k]}`)
    .join('&');
}

export const getRequest = (options: RequestOptions): Promise<Object> => {
  const {
    url,
    params,
    headers = {}
  } = options;

  const requestUrl = `${url}?${queryStringify(params)}`
  const requestOptions = {
    method: 'GET',
    headers
  };

  // $FlowFixMe
  return fetch(requestUrl, requestOptions)
    .then(response => response.json());
}
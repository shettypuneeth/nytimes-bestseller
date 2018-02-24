// @flow

import { GOOGLE_BOOKS_API_KEY, GOOGLE_BOOKS_BASE_URL } from '../config/environment';
import { getRequest } from '../utils/requests';

function parseApiResponse(response) {
  if (!response || !response.items) return '';

  let imageLinks = response.items[0].volumeInfo.imageLinks;
  let {
    thumbnail,
    smallThumbnail
  } = imageLinks;

  thumbnail = thumbnail.replace(/^http:\/\//i, 'https://');
  smallThumbnail = smallThumbnail.replace(/^http:\/\//i, 'https://');

  return {
    thumbnail,
    smallThumbnail
  };
}

export function fetchBookCoverUrl(isbn: string) {
  const params = {
    key: GOOGLE_BOOKS_API_KEY,
    q: `isbn:${isbn}`
  }

  const requestOptions = {
    url: GOOGLE_BOOKS_BASE_URL,
    params
  }

  return getRequest(requestOptions)
    .then(parseApiResponse);
}
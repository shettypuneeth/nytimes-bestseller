// @flow

import { NY_TIMES_API_KEY, NY_TIMES_BASE_URL } from '../config/environment';
import { getRequest } from '../utils/requests';

type Options = {
  month: number,
  year: number,
  list?: string,
  sortOrder?: string
};

const DEFAULT_PARAMS = {
  list: 'hardcover-fiction',
  'sort-order': 'ASC'
};

// Parse the API response
// Returns an entities {Map} with key as the isbin and book object as the value
// along with an array of all the isbin ids.
function parseApiResponse(response): Object {
  if (!response || !response.results) return {
    results: [],
    entities: {}
  };

  let results = [];
  let entities = {};

  response.results.map(r => {
    const {
      rank,
      book_details,
      amazon_product_url,
      published_date,
      rank_last_week,
      weeks_on_list
    } = r;

    const details = book_details ? book_details[0] : {};
    const isbn = details.primary_isbn10; // TODO: fallback needed?
    const title = details.title;
    const author = details.author;
    const description = details.description;

    const entity = {
      id: isbn,
      author,
      amazonUrl: amazon_product_url,
      description,
      publishedDate: published_date,
      rank,
      rankLastWeek: rank_last_week,
      title,
      weeksOnList: weeks_on_list
    };

    results.push(isbn);
    entities[isbn] = entity;
  });

  return {
    results,
    entities
  };
}

export function fetchBestSellers(options: Options): Promise<any> {
  const {
    month,
    year
  } = options;
  const date = new Date(year, month, 7);
  // YYYY-MM-DD format expected by NYTIMES API.
  const dateString = date.toISOString().substring(0, 10);

  const params = {
    ...DEFAULT_PARAMS,
    'published-date': dateString,
    'api-key': NY_TIMES_API_KEY
  }

  const requestOptions = {
    url: NY_TIMES_BASE_URL,
    params
  }

  return getRequest(requestOptions)
    .then(parseApiResponse);
}
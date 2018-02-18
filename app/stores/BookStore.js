// @flow

import { types, flow } from 'mobx-state-tree';

import { fetchBestSellers } from '../api/ny-times';
import { fetchBookCoverUrl } from '../api/google-books';

import {
  getCurrentYear,
  getCurrentMonth,
  getCacheKey
} from '../utils/helpers';

const Book = types.model({
  id: types.string,
  imageUrl: types.optional(types.string, ''),
  amazonUrl: types.string,
  description: types.string,
  publishedDate: types.string,
  rank: types.number,
  rankLastWeek: types.number,
  title: types.string,
  author: types.string,
  weeksOnList: types.number
})
.actions(self => ({
  updateImageUrl(url) {
    self.imageUrl = url;
  }
}));

// Simple BookStore
// Date filters are in the same store for simplicity 
//  but can be split into a separate store.
export const BookStore = types
  .model("BookStore", {
    isLoading: false,
    imageCache: types.optional(types.map(types.string), {}),
    error: types.optional(types.string, ''),
    activeMonth: getCurrentMonth(),
    activeYear: getCurrentYear(),
    bookIdMapping: types.optional(types.map(types.array(types.string)), {}),
    books: types.optional(types.map(Book), {})
  })
  .views(self => ({
    get bookList() {
      const key = getCacheKey(self.activeYear, self.activeMonth);
      const idMapping = self.bookIdMapping.get(key);
      const books = self.books;

      if (idMapping) {
        return idMapping.map(id => books.get(id));
      }

      return [];
    },
    get coverImageCache() {
      return self.imageCache;
    }
  }))
  .actions(self => {
    function markLoading(state) {
      self.isLoading = state;
    }

    function isCached(key) {
      return self.bookIdMapping.has(key);
    }

    const fetchBooks = flow(function * fetchBooks() {
      // check if the books are loaded for the current date filter
      const key = getCacheKey(self.activeYear, self.activeMonth);      
      if (isCached(key)) return;

      markLoading(true);

      try {
        const options = {
          month: self.activeMonth,
          year: self.activeYear
        };
        const response = yield fetchBestSellers(options);

        const { results, entities } = response;

        self.bookIdMapping.set(key, results);
        self.books.merge(entities);
        markLoading(false);
      } catch (error) {
        self.error = 'Error loading data';
        markLoading(false);
      }
    });

    const updateCover = flow(function * updateCover(isbn) {
      try {
        if (self.imageCache.has(isbn)) return;

        const url = yield fetchBookCoverUrl(isbn);

        self.imageCache.set(isbn, url);
      } catch (err) {
        self.error = 'Error loading image url';
      }
    });

    function setMonth(month) {
      self.activeMonth = month;
    }

    function setYear(year) {
      self.activeYear = year;
    }

    function afterCreate() {
      self.fetchBooks();
    }

    return {
      afterCreate,
      fetchBooks,
      setMonth,
      setYear,
      updateCover
    };
  });
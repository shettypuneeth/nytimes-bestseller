// @flow

import { types } from 'mobx-state-tree';

const Book = types.model({});

export const Books = types
  .model({
    items: types.optional(types.array(Book), [])
  })
  .views(self => ({
    getBook(id) {
      return self.items.filter(b => b.id === id)[0]
    }
  }));
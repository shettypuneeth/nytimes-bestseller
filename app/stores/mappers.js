// @flow

function getBooksStore(allStores: any): Object {
  const store = allStores.books;

  return store;
}

export function mapDateFilterStateToProps(allStores: any):Object {
  const store = getBooksStore(allStores);

  return {
    selectedMonth: store.activeMonth,
    selectedYear: store.activeYear,
    setMonth: store.setMonth,
    setYear: store.setYear,
    fetchBooks: store.fetchBooks
  };
}

export function mapBookListStateToProps(allStores: any): Object {
  const store = getBooksStore(allStores);

  return {
    books: store.bookList,
    isLoading: store.isLoading,
    imageCache: store.imageCache,
    // cacheObserver Added so mobx-react can observe updates to imageCache.
    // Without this there will not be a re render when imageCache updates
    // This seems like a hack, maybe there is another way.
    cacheObserver: store.imageCache.values(),
    updateCover: store.updateCover,
    selectBook: store.selectBook
  };
}

export function mapBookDetailsStateToProps(allStores: any): Object {
  const store = getBooksStore(allStores);

  return {
    book: store.selectedBook,
    imageCache: store.imageCache,
    cacheObserver: store.imageCache.values(),    
  };
}
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
    updateCover: store.updateCover,
  };
}
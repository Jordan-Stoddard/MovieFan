export const nextPage = (e, page, setPage) => {
  e.preventDefault();
  page === 20 ? setPage(1) : setPage(page + 1);
};

export const prevPage = (e, page, setPage) => {
  e.preventDefault();
  page === 1 ? setPage(20) : setPage(page - 1);
};

export const nextPage = (e, page, setPage, topic) => {
  e.preventDefault();
  if (topic === "upcoming") {
    page === 10 ? setPage(1) : setPage(page + 1);
  } else {
    page === 20 ? setPage(1) : setPage(page + 1);
  }
};

export const prevPage = (e, page, setPage, topic) => {
  e.preventDefault();
  if (topic === "upcoming") {
    page === 1 ? setPage(10) : setPage(page - 1);
  } else {
    page === 1 ? setPage(20) : setPage(page - 1);
  }
};

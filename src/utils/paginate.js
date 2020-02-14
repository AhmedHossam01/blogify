const numberPerPage = 6;

export const paginate = (posts, currentPage) => {
  const firstIndex = numberPerPage * currentPage;
  const lastIndex = firstIndex + numberPerPage;
  const currentPosts = posts.slice(firstIndex, lastIndex);
  return currentPosts;
};

export const getNumbersOfPages = posts => {
  const numberOfPages = Math.ceil(posts.length / numberPerPage);
  return numberOfPages;
};

export const getPages = posts => {
  const numberOfPages = getNumbersOfPages(posts);
  let pages = [];
  for (let i = 0; i < numberOfPages; i++) {
    pages.push(i);
  }
  return pages;
};

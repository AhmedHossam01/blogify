const getAuthor = (users, id) => {
  return users.find(el => el.id === id);
};

export { getAuthor };

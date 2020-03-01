import axios from "axios";

export const fetchPosts = () => {
  // const result = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
  // return result.data;
  return new Promise((resolve, reject) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => resolve(res.data))
      .catch(e => reject(e));
  });
};

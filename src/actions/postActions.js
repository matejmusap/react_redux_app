import { FETCH_POSTS, NEW_POST } from "./types";

// export function fetchPosts() {
//   return function(dispatch) {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then(res => res.json())
//       .then(posts => dispatch({ type: FETCH_POSTS, payload: posts })); same meaning as code bellow
//   };
// }

export const fetchPosts = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts => dispatch({ type: FETCH_POSTS, payload: posts })); //payload comes from reducer, usually is named data
};

export const createPost = postData => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post => dispatch({ type: NEW_POST, payload: post }));
};

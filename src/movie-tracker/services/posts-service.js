import axios from 'axios';
//const post_API = 'http://localhost:4000/api/posts'; // location of HTTP services
//const API_BASE = process.env.REACT_APP_API_BASE;
const API_BASE = 'http://localhost:4000/api'
const post_API = `${API_BASE}/posts`;
export const createPost = async (post) => {
    const response = await axios.post(post_API, post)
    return response.data;
}

export const findPosts  = async ()     => {
    const response = await axios.get(post_API); // send HTTP GET request to post_API
    const posts = response.data; // extract JSON array from response from server
    return posts;
}

export const deletePost = async (tid) => {
    const response = await axios.delete(`${post_API}/${tid}`) // append post's ID to URL
    return response.data
}

// service function accepts post to send server
// send HTTP PUT request appending post's ID to URL, and embed post object in BODY return post update to update in reducer's state's store
export const updatePost = async (post) => {
    const response = await axios
      .put(`${post_API}/${post._id}`, post);
    return post;
}
import axios from 'axios';
//const postS_API = 'http://localhost:4000/api/posts'; // location of HTTP services
//const API_BASE = process.env.REACT_APP_API_BASE;
const API_BASE = 'http://localhost:4000/api'
const postS_API = `${API_BASE}/posts`;
export const createpost = async (post) => {
    const response = await axios.post(postS_API, post)
    return response.data;
}

export const findposts  = async ()     => {
    const response = await axios.get(postS_API); // send HTTP GET request to postS_API
    const posts = response.data; // extract JSON array from response from server
    return posts;
}

export const deletepost = async (tid) => {
    const response = await axios.delete(`${postS_API}/${tid}`) // append post's ID to URL
    return response.data
}

// service function accepts post to send server
// send HTTP PUT request appending post's ID to URL, and embed post object in BODY return post update to update in reducer's state's store
export const updatepost = async (post) => {
    const response = await axios
      .put(`${postS_API}/${post._id}`, post);
    return post;
}
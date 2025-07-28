import axios from 'axios';
const BASE_URL = 'http://localhost:5000'; // Adjust the base URL as needed
const useApi = () => {
  const getPosts = async () => {
    const response = await axios.get(`${BASE_URL}/api/posts`);
    return response.data;
  };

  const getPostById = async (id) => {
    const response = await axios.get(`${BASE_URL}/api/posts/${id}`);
    return response.data;
  };

  const createPost = async (post) => {
    const response = await axios.post(`${BASE_URL}/api/posts`, post);
    return response.data;
  };

  const updatePost = async (id, post) => {
    const response = await axios.put(`${BASE_URL}/api/posts/${id}`, post);
    return response.data;
  };

  const deletePost = async (id) => {
    await axios.delete(`${BASE_URL}/api/posts/${id}`);
  };

  return { getPosts, getPostById, createPost, updatePost, deletePost };
};

export default useApi;
import React, { useState } from 'react';
import useApi from '../hooks/useApi';

const PostForm = ({ post = {}, onSubmit }) => {
  const [title, setTitle] = useState(post.title || '');
  const [content, setContent] = useState(post.content || '');
  const { createPost, updatePost } = useApi();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { title, content };
    if (post.id) {
      await updatePost(post.id, newPost);
    } else {
      await createPost(newPost);
    }
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow">
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
      >
        {post.id ? 'Update Post' : 'Create Post'}
      </button>
    </form>
  );
};

export default PostForm;
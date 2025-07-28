import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PostList from '../components/PostList';
import SinglePost from '../components/SinglePost';
import PostForm from '../components/PostForm';

const BlogPage = () => {
  const { id } = useParams(); // Extract the blog post ID from the URL
  const [view, setView] = useState(id ? 'single' : 'list'); // Determine the view (list or single post)

  const handleCreatePost = () => setView('create'); // Switch to create post view
  const handleEditPost = () => setView('edit'); // Switch to edit post view

  return (
    <div className="p-4">
      {view === 'list' && (
        <>
          <PostList />
          <button
            onClick={handleCreatePost}
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
          >
            Create New Post
          </button>
        </>
      )}
      {view === 'single' && <SinglePost />}
      {view === 'create' && <PostForm onSubmit={() => setView('list')} />}
      {view === 'edit' && <PostForm post={{ id }} onSubmit={() => setView('list')} />}
    </div>
  );
};

export default BlogPage;
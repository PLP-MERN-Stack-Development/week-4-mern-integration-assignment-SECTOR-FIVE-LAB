import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useApi from '../hooks/useApi';

const PostList = () => {
  const [posts, setPosts] = useState([]); // Initialize posts as an empty array
  const { getPosts } = useApi();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        if (Array.isArray(data)) {
          setPosts(data); // Ensure data is an array before setting state
        } else {
          console.error('API response is not an array:', data);
          setPosts([]); // Fallback to an empty array
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
        setPosts([]); // Fallback to an empty array in case of error
      }
    };
    fetchPosts();
  }, []);

  if (posts.length === 0) {
    return <p>No posts available.</p>; // Handle empty posts array
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="border p-4 rounded shadow">
            <Link to={`/blog/${post.id}`} className="text-blue-600 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
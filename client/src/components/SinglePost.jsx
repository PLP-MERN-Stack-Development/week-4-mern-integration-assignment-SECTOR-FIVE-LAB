import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useApi from '../hooks/useApi';

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const { getPostById } = useApi();

  useEffect(() => {
    const fetchPost = async () => {
      const data = await getPostById(id);
      setPost(data);
    };
    fetchPost();
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700">{post.content}</p>
    </div>
  );
};

export default SinglePost;
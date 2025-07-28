const express = require('express');
const router = express.Router();
const Post = require('../models/Post'); // Assuming you have a Post model

// GET /api/posts - Fetch all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

// GET /api/posts/:id - Fetch a single post by ID
router.get('/:id', async (req, res) => {    
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
        return res.status(404).json({ error: 'Post not found' });
        }
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch post' });
    }
    }
);
// POST /api/posts - Create a new post
router.post('/', async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create post' });
  }
});
// PUT /api/posts/:id - Update a post by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate
(req.params.id, req.body, { new: true });
        if (!updatedPost) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.json(updatedPost);
    } catch (error) {
        res.status(400).json({ error: 'Failed to update post' });
    }
});

module.exports = router;
const express = require('express');
const router = express.Router();
const Category = require('../models/Category'); // Assuming you have a Category model

// GET /api/categories - Fetch all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
});
// GET /api/categories/:id - Fetch a single category by ID
router.get('/:id', async (req, res) => {    
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
        return res.status(404).json({ error: 'Category not found' });
        }
        res.json(category);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch category' });
    }
    }   
);
// POST /api/categories - Create a new category
router.post('/', async (req, res) => {
    try {
        const newCategory = new Category(req.body);
        const savedCategory = await newCategory.save();
        res.status(201).json(savedCategory);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create category' });
    }
    }
);
// PUT /api/categories/:id - Update a category by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedCategory = await Category.findByIdAndUpdate(req.params

.id, req.body, { new: true });
        if (!updatedCategory) {             
            return res.status(404).json({ error: 'Category not found' });
        }
        res.json(updatedCategory);
    } catch (error) {
        res.status(400).json({ error: 'Failed to update category' });
    }
});
// DELETE /api/categories/:id - Delete a category by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedCategory = await Category.findByIdAndDelete(req.params.id);
        if (!deletedCategory) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete category' });
    }
});
module.exports = router; // Ensure the router is exported
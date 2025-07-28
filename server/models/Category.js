const Mongoose = require('mongoose');
const CategorySchema = new Mongoose.Schema({
  name: {   
    type: String,
    required: [true, 'Please provide a category name'],
    trim: true,
    maxlength: [50, 'Category name cannot be more than 50 characters'],
    },
    slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    },
    description: {
    type: String,
    maxlength: [200, 'Description cannot be more than 200 characters'],
    },
    createdAt: {
    type: Date,
    default: Date.now,
    },
    updatedAt: {
    type: Date,
    default: Date.now,
    },
});
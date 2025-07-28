const mongoose = require('mongoose');
const CategorySchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please provide a username'],
        trim: true,
        maxlength: [50, 'Username cannot be more than 50 characters'],
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: [6, 'Password must be at least 6 characters long'],
    },
});

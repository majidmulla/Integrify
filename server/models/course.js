// Course model using Mongoose
const mongoose = require('mongoose');

// Course schema definition
const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: 'default-course-image.jpg'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Exporting the model
module.exports = mongoose.model('Course', CourseSchema);

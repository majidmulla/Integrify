// MongoDB connection setup using Mongoose
const mongoose = require('mongoose');

// Import the database URI from environment variables
const dbUri = process.env.DB_URI;

// Function to connect to the MongoDB database
const connectDB = async () => {
  try {
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1); // Exit process with failure
  }
};

// Export the connection function
module.exports = connectDB;

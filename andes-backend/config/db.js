const mongoose = require('mongoose');

// MongoDB URI from environment variable or fallback to local database
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/ANDES-Landing';

// Function to establish connection
const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,  // Ensures indexes are created for unique fields
            useFindAndModify: false // Disable deprecated function
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit process if unable to connect
    }
};

// Export the connection function
module.exports = connectDB;


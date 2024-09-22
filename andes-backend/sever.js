const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const taskRoutes = require('./routes/task');
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db'); // Import the db.js file

// Initialize the app
const app = express();
app.use(bodyParser.json());
app.use(userRoutes);
app.use(taskRoutes);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/react_project', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
connectDB();

// Check DB connection
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
}).on('error', (error) => {
    console.log('MongoDB Connection Error:', error);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

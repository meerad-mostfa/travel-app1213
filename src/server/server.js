const path = require('path');
const express = require('express');
const app = express();

// Serve static files from the dist folder
app.use(express.static('dist'));

// Define a route for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.resolve('dist/index.html'));
});

// Define the port number
const port = 3000;

// Create the server and start listening
const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Export the server instance
module.exports = server;
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../build')));

// API routes
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

// Catch-all handler for any request that doesn't match an API route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

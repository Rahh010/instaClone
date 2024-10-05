const express = require('express');
const app = express();
const port = 3000; // You can change the port number as needed

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the InstaClone Backend!');
});

// A sample API route
app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Product 1', price: 299 },
    { id: 2, name: 'Product 2', price: 499 },
  ]);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

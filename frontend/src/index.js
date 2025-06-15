const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve the form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'form.html'));
});

//
const URL = process.env.BACKEND_URL || 'http://localhost:5000/process';

// Handle form submission
app.post('/submit', async (req, res) => {
  const { name, message } = req.body;

  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, message })
    });

    const result = await response.json();
    res.send(`<h3>Response from Flask Backend:</h3><pre>${JSON.stringify(result, null, 2)}</pre>`);
  } catch (error) {
    res.status(500).send(`Error communicating with backend: ${error.message}`);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Frontend is running at http://localhost:${PORT}`);
});

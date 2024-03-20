const express = require('express');
const fetch = require('isomorphic-fetch');

const app = express();
const backendURL = 'https://pest-arrivals-proxy-ddr.trycloudflare.com'; // Update with your backend URL

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Proxy server is up and running.'); // Customize the response as needed
});

app.use('/dalle', (req, res) => {
  const { text, num_images } = req.body;

  fetch(`${backendURL}/dalle`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text, num_images })
  })
    .then(response => response.json())
    .then(data => res.json(data))
    .catch(error => res.status(500).json({ error: 'Failed to call DALL·E API' }));
});

app.listen(3007, () => {
  console.log('Proxy server running on http://localhost:3007');
});

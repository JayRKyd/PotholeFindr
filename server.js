const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3001;
const mapboxAccessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
app.use(express.json());

app.get('/mapbox-api', async (req, res) => {
  try {
    const response = await fetch(`https://api.mapbox.com/v1/${mapboxAccessToken}`, {
      headers: {
        'Authorization': `Bearer ${mapboxAccessToken}`,
      }
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy Server is running on port ${PORT}`);
});
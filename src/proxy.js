const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/api/booking', async (req, res) => {
  try {
    // Forward the request to the external API
    const response = await axios.post(
      'http://cleanpro-core.captain.ooguy.com/api/submit-booking/structured',
      req.body,
      { headers: { 'Content-Type': 'application/json' } }
    );
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json(error.response?.data || { error: 'Proxy error' });
  }
});

app.listen(3000, () => console.log('Proxy server running on port 3000'));
// server.js

import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/places', async (req, res) => {
  try {
    console.log("sdsdsdsd");
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${req.query.lat},${req.query.lng}&radius=1500&type=parking&key=AIzaSyAs_e0VMyp1kkQJyVkZAgzS8KcIQjSW-S0`
    );
    const data = await response.json();
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

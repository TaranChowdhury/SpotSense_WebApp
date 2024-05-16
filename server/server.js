import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/places', async (req, res) => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${req.query.lat},${req.query.lng}&radius=1500&type=parking&key=AIzaSyAs_e0VMyp1kkQJyVkZAgzS8KcIQjSW-S0`
    );
    const data = await response.json();

    // Prepare an array to store promises for distance matrix API requests
    const distancePromises = data.results.map(async (result) => {
      const distanceResponse = await fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${req.query.lat},${req.query.lng}&destinations=${result.geometry.location.lat},${result.geometry.location.lng}&units=imperial&key=AIzaSyAs_e0VMyp1kkQJyVkZAgzS8KcIQjSW-S0`
      );
      const distanceData = await distanceResponse.json();
      
      // Add distance and duration to the result
      if (distanceData.rows.length > 0) {
        result.distance = distanceData.rows[0].elements[0].distance.text;
        result.duration = distanceData.rows[0].elements[0].duration.text;
      }
      result.address = distanceData.destination_addresses[0];
    });

    // Wait for all distance matrix API requests to complete
    await Promise.all(distancePromises);

    // Send the modified data as the response
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


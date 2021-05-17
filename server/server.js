const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));
app.get('/restaurants', (req, res) => {
    res.sendFile(path.join(__dirname, '../server', 'restaurants.json'));
});

app.get('/restaurants/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../images', 'carte_1.jpeg'));
});

app.listen(port, () => {
   console.log('Server is up!');
});

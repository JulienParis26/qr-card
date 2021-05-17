const path = require('path');
const express = require('express');
const app = express();
const urljoin = require('url-join');

const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));
app.get('/restaurants', (req, res) => {
    res.sendFile(path.join(__dirname, '../server', 'restaurants.json'));
});
app.use('/restaurants/:id', function (req, res, ) {
    var fullUrl = urljoin('http://restaurant-le-k.fr/wp-content/uploads/2020/05/Menu-le-K4.jpg');
    console.log(fullUrl);
  });

app.listen(port, () => {
   console.log('Server is up!');
});
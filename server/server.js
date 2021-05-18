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
  res.writeHead(301,
    {Location: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.eat-list.fr%2Fagneaux-50180%2Fpizza-pizzeria-5%2Fla-cabane-a-pizza-50162&psig=AOvVaw0B9On9uinGjhueaZZyGMFe&ust=1621412010082000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOje0Mnk0vACFQAAAAAdAAAAABAO"}
  );
  res.end();
});

app.listen(port, () => {
   console.log('Server is up!');
});

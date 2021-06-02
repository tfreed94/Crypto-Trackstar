const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const coinGeckoAPI = require('coingecko-api');
const handleBars = require('handlebars')
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const routes = require('./controllers');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false })
.then(() => {
  app.listen(PORT, () => 
  console.log(`App listening on port ${PORT}!`));
});
const express = require('express');
const compression = require('compression');
const { getMeals } = require('./Shop');
const router = require('./routes');
const db = require('../database/UserProfile/index')
const path = require('path');

const app = express();
const PORT = 3000;

app.use(compression());

app.use(express.static('client/public'));
app.use(express.json());
// app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/user', router);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

app.get('/meals', getMeals);
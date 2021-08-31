const express = require('express');
const compression = require('compression');
const router = require('./routes');
const db = require('../database/UserProfile/index')
const path = require('path');

const app = express();
const PORT = 3000;

app.use(compression());

app.use(express.static('client/public'));
app.use(express.json());

app.use('/user', router);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

/**
 * some routes go here
 * app.get('/', (req, res) => {
 * res.status(200).send('Hello World')
 * })
 */
const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(compression());

app.use(express.static('client/public'));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

<<<<<<< HEAD
// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, '../client/public/index.html'), function(err) {
//     if (err) {
//       res.status(500).send(err)
//     }
//   })
// })

=======
>>>>>>> 07e8b909a918dca32fcc50906fc791a49821dbf1
/**
 * some routes go here
 * app.get('/', (req, res) => {
 * res.status(200).send('Hello World')
 * })
 */
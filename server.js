const express = require('express');
const bodyParser= require('body-parser');

const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3000, function() {
  console.log('listening at http://localhost:3000');
});

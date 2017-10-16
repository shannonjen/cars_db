const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

const cars = require('./routes/cars');
app.use(cars);

app.listen(8000, function() {
  console.log("Listening on port 8000...");
})

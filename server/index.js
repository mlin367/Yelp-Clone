const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

const port = process.env.PORT;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('*', function (request, response){
  response.sendFile(path.join(__dirname, '/../client/dist/index.html'))
})

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

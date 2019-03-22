const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const router = require('./routes');
const https = require('https');
const http = require('http');
const fs = require('fs');
require('dotenv').config();

const port = process.env.PORT;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.use('/api', router);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'))
})

const options = {
  key: fs.readFileSync(path.join(__dirname, './SSL/server.private.pem')),
  cert: fs.readFileSync(path.join(__dirname, './SSL/server.public.pem')),
  ca: fs.readFileSync(path.join(__dirname, './SSL/certificate-chain.pem'))
};

const server = https.createServer(options, app);
const insecureServer = http.createServer();

insecureServer.get('*', (req, res) => {
  res.redirect('https://' + req.headers.host + req.url);
});

insecureServer.listen(80);

server.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

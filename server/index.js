const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const router = require('./routes');
const https = require('https');
const http = require('http');
const fs = require('fs');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT;

const app = express();

const ensureSecure = (req, res, next) => {
  if (req.secure) {
    // OK, continue
    return next();
  }
  // handle port numbers if you need non defaults
  // res.redirect('https://' + req.host + req.url); // express 3.x
  res.redirect('https://' + req.hostname + req.url); // express 4.x
};

app.all('*', ensureSecure);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.use('/api', router);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
});

const options = {
  // Private Key
  key: fs.readFileSync(path.join(__dirname, './SSL/myserver.key')),
  // SSL Certificate
  cert: fs.readFileSync(path.join(__dirname, './SSL/www_mlinprojects_com.crt')),
  ca: [
    // Root Certificate
    fs.readFileSync(path.join(__dirname, './SSL/AddTrustExternalCARoot.crt')),
    // Bundle which includes intermediate certificates (sometimes bundle includes root)
    fs.readFileSync(
      path.join(__dirname, './SSL/www_mlinprojects_com.ca-bundle')
    )
  ]
};

const server = https.createServer(options, app);
const insecureServer = http.createServer(app).listen(80);

server.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

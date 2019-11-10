const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({extended: false});

const app = express();
dotenv.config();

app.use(express.static('dist'));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(urlEncodedParser);

module.exports = app;

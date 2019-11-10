const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({extended: false});

const app = express();
dotenv.config();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(urlEncodedParser);

const inaturalistUrl = 'https://api.inaturalist.org/v1/';

app.get('/observations', (req, res) => {
    const taxonId = req.query;
    const testTest = 'taxon_id=43693&captive=false&mappable=true&threatened=true&d1=2019-01-01&d2=2019-01-01';

    // https://api.inaturalist.org/v1/observations?taxon_id=43693&captive=false&mappable=true&threatened=true&d1=2019-01-01&d2=2019-11-09

    axios.get(`${inaturalistUrl}observations?${testTest}`)
        .then((result) => {
            res.send(result.data);
            console.log('RESULT: ', result.data.results[0].observed_on);
        })
        .catch((error) => {
            console.error(error);
            res.send('An error occured.');
        })
});

module.exports = app;
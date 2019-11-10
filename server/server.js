const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({extended: false});

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(urlEncodedParser);

app.get('/getit', (req, res) => {
    axios.get('http://rangerradar.pythonanywhere.com/sightings')
    .then((result) => {
        res.send(result.data);
        console.log('RESULT SUCKAH: ', result.data);
    })
    .catch((error) => {
        console.error(error);
        res.send('An error occured.');
    })
});

module.exports = app;
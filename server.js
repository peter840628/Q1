const express = require('express');
const weather = require('./weathr.js');
var app = express();


app.get('/', (request, response) => {
    response.render('index.hbs', {
        title: 'index',
    });
});


app.get('/fetch', (request, response) => {
    response.render('fetch.hbs', {
        title: 'fetch',
    });
});


app.get('/weather', (request, response) => {
    var address = '4230 boundary';
    weather.getAddress(address, (result) => {
        response.send(result);

    });
});

app.listen(8080);
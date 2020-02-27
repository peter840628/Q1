const express = require('express');
// const weather = require('./weathr.js');
var app = express();
var path = require('path');


app.use(express.static(__dirname + "/views/stylesheets"));

app.get('/', (request, response) => {
    response.render('index.hbs', {
        title: 'index',
    });
});


app.get('/menu', (request, response) => {
    response.render('menu.hbs', {
        title: 'menu',
    });
});
app.get('/product', (request, response) => {
    response.render('product.hbs', {
        title: 'product',
    });
});
app.get('/scoreKeeping', (request, response) => {
    response.render('scoreKeeping.hbs', {
        title: 'scoreKeeping',
    });
});
app.get('/bill', (request, response) => {
    response.render('bill.hbs', {
        title: 'bill',
    });
});



app.listen(8080);
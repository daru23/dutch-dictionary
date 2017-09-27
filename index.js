/**
 * Created by Daniela Ruiz
 * Date: 14/03/2017
 * Email: daru015@gmail.com
 *
 * File: index.js
 * Frontend server
 */

// set variables for environment
var express = require('express');
var app = express();
var path = require('path');
var api = require('./api-connection');

// views as directory for all template files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade'); // use either jade or ejs       // instruct express to server up static assets
app.set('view options', {layout: false});
app.use(express.static('public'));


// set routes
app.get('/', function(req, res) {

    api.getAllWords(function (words) {
        res.render('index', {"words" : words.mes });
    });
});

app.get('/words', function(req, res) {
    api.getAllWords(function (words) {
        res.render('words', {"words" : words.mes });
    });
});

app.get('/words/edit/:word', function(req, res) {

    res.render('edit', req.params);
    // res.send(req.params);

});

app.get('/labels', function(req, res) {
    api.getAllLabels(function (labels) {
        res.render('labels', {"labels" : labels.mes });
    });
});

// Set server port
app.listen(4000);
console.log('Server is running: http://localhost:4000');
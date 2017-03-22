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
app.use(express.static('public'));

api.getAllWords(function (words) {
    "use strict";
    // set routes
    console.log(words.mes);
    app.get('/', function(req, res) {
        res.render('index', {"words" : words.mes });
    });
});


app.get('/words', function(req, res) {
    res.render('words');
});

// Set server port
app.listen(4000);
console.log('Server is running: http://localhost:4000');
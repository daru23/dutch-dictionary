/**
 * Created by Daniela Ruiz
 * Date: 14/03/2017
 * Email: daru015@gmail.com
 *
 * File: api-connection.js
 * API calls tp get words
 */

var http = require('http');
const Promise = require('promise');

module.exports = {

    getAllWords : function (callback) {

        return http.get({
            host: 'localhost',
            port : 8000,
            path: '/words'
        }, function(response) {
            // Continuously update stream with data
            var body = '';
            response.on('data', function(d) {
                body += d;
            });
            response.on('end', function() {

                // Data reception is done, do whatever with it!
                var parsed = JSON.parse(body);
                callback(parsed);
            });
        });

    }
};
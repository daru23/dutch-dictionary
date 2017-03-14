/**
 * Created by Daniela Ruiz
 * Date: 14/03/2017
 * Email: daru015@gmail.com
 *
 * File: db.js
 * Database layer to get data from the db
 */

const mysql  = require('mysql');
const Promise = require('promise');
const config = require('./config.json').db;

var pool  = mysql.createPool({
    host     : config.host,
    user     : config.user,
    password : config.password,
    database : config.database
});




function getAllWords () {
    return new Promise(function (resolve, reject) {
        "use strict";
        pool.getConnection(function(err, connection) {
            // Use the connection
            connection.query('SELECT * FROM word', function (error, results, fields) {
                // And done with the connection.
                connection.release();

                // Handle error after the release.
                if (error) reject(error);

                resolve(results);
                // Don't use the connection here, it has been returned to the pool.
            });
        });
    });
}

function closePoolConnection () {
    "use strict";
    pool.end(function (err) {
        // all connections in the pool have ended
    });
}

// use example
getAllWords().then(function (res) {
    console.log(res);
    closePoolConnection();
});

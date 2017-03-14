/**
 * Created by Daniela Ruiz
 * Date: 14/03/2017
 * Email: daru015@gmail.com
 *
 * File: routes.js
 * Json to handler Hapi routes
 */

var handler = require('./handler.js'),
    Joi     = require('joi');

/**
 * routes
 * @type Array
 */
var routes = [
    {   method   : 'GET',
        path     : '/word/{word}',
        config   : {
            handler  : handler.word,
            validate: {
                params: {word: Joi.string()}
            }
        }
    }
];

/**
 * Export Hapi Routes
 */
module.exports = {
    "routes" : routes
};
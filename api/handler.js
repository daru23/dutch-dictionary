/**
 * Created by Daniela Ruiz
 * Date: 14/03/2017
 * Email: daru015@gmail.com
 *
 * File: handler.js
 * Functions handlers for Hapi requests
 */

/**
 * word
 * GET word
 * @param req
 * @param res
 */
exports.word = function (req, res){

    var word = req.params.word ? encodeURIComponent(req.params.word) : 'stranger';

    //SQL connection to get the word
    res({msg : 'Hello ' + word + '!'});

};

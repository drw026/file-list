let fs = require('fs');
let path = require('path');
let list = require('list-contents');



module.exports = function(req, responds) {

    list('./files', function(output) {

        responds.send(output.files)

    });


};
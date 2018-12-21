const list = require('list-contents');

module.exports = function(req, responds) {

    list('./files', function(output) {

        const list = output.files;

        const createdList = list.filter(function(file) {

            return file.indexOf('qunit.html') > -1;

        }).map(function(file) {
            
            return {
                name: file.split('/').reverse()[0].split('.')[0],
                path: file, 
            }

        }).sort(function(a, b) {

            const fileA = a.name.toUpperCase();
            const fileB = b.name.toUpperCase();

            if (fileA < fileB) return -1; 
            if (fileA > fileB) return 1;
            return 0;

        });

        responds.json(createdList);

    });

};

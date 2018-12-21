const list = require('list-contents');

/**
 * remove all non 'qunit.html' files
 * 
 * @param String file 
 */
function filterQunit(file) {

    return file.indexOf('qunit.html') > -1;

}

/**
 * format the object
 * 
 * @param {String} file 
 */
function createObject(file) {

    return {
        name: file.split('/').reverse()[0].split('.')[0],
        path: file, 
    }

}

/**
 * sort array by name
 * 
 * @param {String} a 
 * @param {String} b 
 */
function sortByName(a, b) {

    const fileA = a.name.toUpperCase();
    const fileB = b.name.toUpperCase();

    if (fileA < fileB) return -1; 
    if (fileA > fileB) return 1;
    return 0;

}

module.exports = function(req, responds) {

    // get all files and format it before return
    list('./files', function(output) {

        const data = output.files;

        responds.json(
            data.filter(filterQunit).map(createObject).sort(sortByName)
        );

    });

};

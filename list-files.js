const list = require('list-contents');

/**
 * remove all non 'qunit.html' files
 * 
 * @param {String} file
 * @returns {*}
 */
function filterQunit(file) {

    return file.indexOf('qunit.html') > -1;

}

/**
 * format the object
 * 
 * @param {String} file
 * @returns {Object} - the 
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
 * @returns {Number} 
 */
function sortByName(a, b) {

    const fileA = a.name.toUpperCase();
    const fileB = b.name.toUpperCase();

    if (fileA < fileB) return -1; 
    if (fileA > fileB) return 1;
    return 0;

}

module.exports = (req, responds) => {

    // get all files and format it before return
    list('./files', (output) => {

        const data = output.files;

        responds.json(
            data.filter(filterQunit).map(createObject).sort(sortByName)
        );

    });

}
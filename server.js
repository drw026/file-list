const express = require('express');
const app = express();
const listFiles = require('./list-files');

app.get('/list-files', listFiles);

app.listen('1984', () => {

    console.log('listen on port 1984');

});

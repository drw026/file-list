const express = require('express');
const app = express();
const scraper = require('./scraper');

app.get('/scrape', scraper);

app.listen('1984', function() {

    console.log('listen on port 1984');

});
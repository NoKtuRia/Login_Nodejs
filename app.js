const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res) {
    res.sendfile(path.join(__dirname + '/index.html'));
    res.status(200);
});

app.get('/index.html', function(req, res) {
    res.sendfile(path.join(__dirname + '/index.html'));
    res.status(200);
});

app.get('/news.html', function(req, res) {
    res.sendfile(path.join(__dirname + '/news.html'));
    res.status(200);
});

app.get('/forum.html', (req, res) => {
    res.sendfile(path.join(__dirname + '/forum.html'));
    res.status(200);
});

app.get('/inscription.html', (req, res) => {
    res.sendfile(path.join(__dirname + '/inscription.html'));
    res.status(200);
});

app.listen(5000, () => {
    console.log('./Server is working');
});

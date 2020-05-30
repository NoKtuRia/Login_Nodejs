const express = require('express');
const app = express();

app.get('/', function(req, res) {   
    res.sendfile('index.html');
});

app.get('/welcome', function(req, res) {
    res.sendfile('welcome.html');
});

app.listen(5000, () => {
    console.log('Server is working');
});
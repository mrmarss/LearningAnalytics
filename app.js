var express = require('express');
var app = express();
var path = require('path');
var port  = 3000;

// viewed at http://localhost:3000
app.get('/', function(req, res) {
    /* Send over the index html file */
    res.sendFile(path.join(__dirname + '/index.html'));

    /* Grab data beyond the basic directory */
    app.use(express.static(__dirname + '/'));
});

app.listen(port);

console.log('server started on port %s', port);

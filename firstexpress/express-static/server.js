//Name: Noie Glenn Manoy
//App Name: server.js
//Description: server on static application demonstration
//Section: WD 201 / 2075

var express = require('Express');
var app = express();

app.use(express.static('public'));


app.get('/', function (req, res) {
    res.send("You have succesfully created your second App!");

});

var server = app.listen(2001, 'localhost', function () {
    var host = server.address().address
    var port = server.address().port

    console.log('Server running at http://%s:%s', host, port)
});
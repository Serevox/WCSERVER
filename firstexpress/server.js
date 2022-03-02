//Name: Noie Glenn Manoy
//App Name: server.js
//Description: server application demonstration
//Section: WD 201 / 2075

var express = require('Express');
var app = express();

app.get('/', function (req, res) {
    res.send("You have succesfully created your second App!");

});
// Newly added route and content
app.get('/day', function (req, res) {
    res.send("Hello! How was you're day?");

});
app.get('/user', function (req, res) {
    res.send("You're username is noiem");
})

var server = app.listen(2001, 'localhost', function () {
    var host = server.address().address
    var port = server.address().port

    console.log('Server running at http://%s:%s', host, port)
});
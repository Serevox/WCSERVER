//Name: Noie Glenn Manoy
//App Name: routing-demo.js
//Description: routing demonstration
//Section: WD 201 / 2075

var express = require('express');
var app = express();

//This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
    console.log("There is GET request for the homepage!");
    res.send('Here is the GET Method!');
})

//This responds a POST request for the homepage
app.post('/', function (req, res) {
    console.log("A POST request for the homepage is accessed.");
    res.send("Here is the POST Method");
})

//This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
    console.log("Got a GET resquest for /list_user");
    res.send("This is a Page Listing");
})

// This responds a Get request abcd, abxcd, ab123cd, and so on 
app.get('/ab*cd', function (req, res) {
    console.log("Got a GET request for /ab*cd");
    res.send('Pattern Match Page');
})

var server = app.listen(4000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listerning at http:%s:%s", host, port)
})
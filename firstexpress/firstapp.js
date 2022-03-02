//Name: Noie Glenn Manoy
//App Name: firstapp.js
//Description: first application demonstration
//Section: WD 201 / 2075

const { response } = require("Express");
var express = require("Express");
var app = express();

app.get("/", function (request, response) {
    response.send("Hello World!")
});

app.listen(3000, function () {
    console.log('Server running at http://localhost:3000');
});
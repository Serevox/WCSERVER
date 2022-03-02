//Author: Noie Glenn Manoy
//Subject: WCSERVER
//Section: WD 201 / 2075
//Description: this program uses GET method and 
//the result shows that the URL is at port 8081


var express = require('Express');
var app = express();

app.use(express.static('public'));

app.get("/index-1.html", function (req, res) {
    res.sendFile(__dirname + "/" + "index-1.html");
})

app.get("/process_get", function (req, res) {
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name,
        stud_course: req.query.stud_course,
        age: req.query.age,
        comments: req.query.comments

    };

    console.log(response);
    res.end(JSON.stringify(response));
})

var Server = app.listen(8081, 'localhost', function () {
    var host = Server.address().address
    var port = Server.address().port

    console.log("Server listening at http://%s:%s", host, port)
});
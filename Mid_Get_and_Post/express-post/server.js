//Author: Noie Glenn Manoy
//Subject: WCSERVER
//Section: WD 201 / 2075
//Description: this program uses POST method and 
//the result shows that the URL is at port 5000

var express = require('express');
var multer = require('multer');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));
app.get("/index2.html", function (req, res) {
    res.sendFile(__dirname + "/" + "index2.html");
})

app.post("/process_post", urlencodedParser, function (req, res) {
    response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };

    console.log(response);
    res.end(JSON.stringify(response));
})

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads');
    },

    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});

var upload = multer({ storage: storage }).single('myfile');

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index-2.html");
});

app.post('/uploaded', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            return res.end("Error uploading file.");

        }
        res.end("File is uploaded successfully!");
    });
});

var Server = app.listen(5000, 'localhost', function () {
    var host = Server.address().address
    var port = Server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
});
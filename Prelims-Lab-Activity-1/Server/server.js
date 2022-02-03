var http = require('http');

var server = http.createServer(function (req, res) {
    var person = require('../Person/person.js');
    var personName = new person('John', 'Smith')
    console.log(personName.fullname());


    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<html><body><header><h1>Welcome to my NodeJs Application</h1></header></body></html>');

        res.write('<html><body><p> Welcome ' + personName.fullname() + '. This is an activity about basics of NodeJS</p></body></html>');
        res.end();

    }
    else if (req.url == "/about") {

        res.writeHead(200, { 'Content-Type': 'text/html' })

        res.write('<html><body><h1>This is About the Page.</h1></body></html>');
        res.write('<html><body><p>Hello ' + personName.fullname() + '. This activity will teach on how to deal with a simple server and local modules in NodeJs</p></body></html>');
        res.end();

    }
    else if (req.url == "/contact") {

        res.writeHead(200, { 'Content-Type': 'text/html' })

        res.write('<html><body><h1>This is the Contact Page.</h1></body></html>');
        res.write('<html><body><p>' + personName.fullname() + '. If you want additional details about this activity go to this site: https://www.tutorialteacher.com/nodejs/nodejs-tutorials</p></body></html>');
        res.end();
    }
    else if (req.url == "/gallery") {

        res.writeHead(200, { 'Content-Type': 'text/html' })

        res.write('<html><body><p>This is the Gallery Page.</p></body></html>');
        res.end();
    }
    else
        res.end('Invalid Request!');

});

server.listen(4000);
console.log('Node.js web server at port 4000 is running...')


/*
Name: Noie Glenn Manoy
Date: February 2, 2022
Section: WD 201
*/
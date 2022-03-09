const express = require('express');
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();

//Array for GET Method
const movies = [{
    id: 1,
    title: 'Superman'
},
{
    id: 2,
    title: 'Thor'
},
{
    id: 3,
    title: 'Iron Man'
},
{
    id: 4,
    title: 'Hulk'
},
{
    id: 5,
    title: 'Ant Man'
}
];

//get all movies
app.get('/api/movies', (req, res) => {
    res.send(movies);
});
//get all movide by id
app.get('/api/movies/:id', (req, res) => {
    const movie = movies.find(h => h.id === parseInt(req.params.id));
    if (!movie) return res.status(404).send('The movie with the given ID was not found.');
    res.send(movie);
});
app.listen(3000, () => console.log('listening on port 3000'));
const express = require("express");
const req = require("express/lib/request");
const app = express();

app.use(express.json());


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


//add a movie
app.post('/api/movies', (req, res) => {
    const movie = {
        id: movies.length + 1,
        title: req.body.title
    }
    movies.push(movie);
    res.send(movie);
});
app.listen(3000, () => console.log('listening on port 3000'));
//Name: Noie Glenn Manoy
//App Name: query-demo.js
//Description: demo on query
//Section: WD 201 / 2075

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log(req.query)
})
app.listen(8080)

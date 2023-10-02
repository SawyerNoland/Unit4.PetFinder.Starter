// import the pets array from data.js
const pets = require('./data');

// init express app
const express = require('express');
const app = express();

const PORT = 8080;

// GET - / - returns homepage
app.get('/', (req, res) => {
    // serve up the public folder as static index.html file
    res.send("/ link lawl")
});

// hello world route
app.get('/api', (req, res) => {
    res.send('/api link :3');
});

// get all pets from the database
app.get('/api/v1/pets', (req, res) => {
    // send the pets array as a response
    console.log(pets);
    res.send(pets)
});

// get pet by owner with query string
app.get('/api/v1/pets/:owner', (req, res) => {
    // get the owner from the request
    const owner = req.params.owner;
    // find the pet in the pets array
    const pet = pets.find((pet) => pet.owner === owner);
    // send the pet as a response
    console.log(pet);
    res.send(pet)
});

// get pet by name
app.get('/api/v1/pets/name/:name', (req, res) => {
    const name = req.params.name;
    const pet = pets.find ((pet) => pet.name.toLowerCase() === name.toLowerCase());
    res.send(pet);
});

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

module.exports = app;
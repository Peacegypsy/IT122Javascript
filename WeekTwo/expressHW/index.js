"use strict";

let data = require('./data.js');
const express = require("express");
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const albums = data.albums;
// home page
app.get('/', (req, res) => {
    res.render('pages/index', {albums: albums});
})

//details page
app.get('/detail', (req, res) => {
    let result = data.getAlbum(req.query.albumTitle);
    res.render('pages/details', {albumTitle: req.query.albumTitle, result: result});
});

app.post('/pages/detail', (req, res) => {
    let found = data.getAlbum(req.query.albumTitle);
    res.render('pages/details', {albumTitle: req.query.albumTitle, result: found, albums: data.getAllAlbums()});
})

//error handler
app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.render(`error ${res.statusCode}`);
})

module.exports = app;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})


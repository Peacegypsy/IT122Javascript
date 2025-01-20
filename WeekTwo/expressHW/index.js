"use strict";

let albums = require('./data.js');
const express = require("express");
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());


// home page
app.get('/', (req, res) => {
    res.render('pages/home', {albums: albums.getAllAlbums()});
})

//details page
app.get('/detail', (req,res) => {
    const result = albums.getAlbum(req.query.artist);
    res.render("pages/details", {
            artist: req.query.artist,
            result,
            albums: albums.getAllAlbums()
        }
    );
});


//error handlers
app.use((req,res,next)=>{
    res.type('text/plain');
    res.status(404).send('Not Found');
});


module.exports = app;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})


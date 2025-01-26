"use strict";
import mongoose from "mongoose"; 
import express from "express";
import cors from 'cors';
import * as dotenv from 'dotenv';
import {Album} from './models/album.js';

dotenv.config();


const app = express();


app.set("port", process.env.PORT || 3000);
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.use(express.json());
app.use('/api',cors());
app.set("view engine", "ejs");


app.get('/' || '/albums', (req, res) => {
    Album.find({}).lean()
    .then((albums) => {
        res.render('home', {albums: albums});
    })
        .catch((err) => {
            console.error(err);
        })
});


//details page
app.get('/detail', (req, res, next) => {
    Album.findOne({ artist:req.query.artist}).lean()
    .then((album) => {
        res.render('details', {album: album});
    })
    .catch((err) => {next(err)})
});


//error handlers
app.use((req,res,next)=>{
    res.type('text/plain');
    res.status(404).send('Not Found');
});


app.listen(app.get('port'), () => {
    console.log(`Express started`);
})


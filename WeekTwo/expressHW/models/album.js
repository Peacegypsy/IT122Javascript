'use strict'

import mongoose from "mongoose";
import {configDotenv} from 'dotenv';


const {Schema} = mongoose;
configDotenv();

const user = process.env.USERNAME;
const pw = encodeURIComponent(process.env.CONNECTION_STRING);

const connectionString = `mongodb+srv://${user}:${pw}@cluster0.hujra.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(connectionString, {
    dbName: 'musicCollection'
});

mongoose.connection.on('open', () => {
    console.log('Mongoose connected');
});

const albumSchema = new Schema({
    artist: {type: String},
    albumTitle: {type: String, required: true},
    songs: {type: Array, default: undefined},
    releaseDate: {type: Date},
});

export const Album = mongoose.model('Album', albumSchema);

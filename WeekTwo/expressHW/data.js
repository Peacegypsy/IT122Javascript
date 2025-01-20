'use strict';

let albums = [
    {"artist": "Temple of the dog",
        "albumTitle": "Temple of the dog",
        "songs": [
            "Say hello 2 heaven", "Reach down", "Hunger strike", "Pushing forward back", "Call me a dog",
            "Times of trouble", "Wooden Jesus", "Your savior", "Four walled world", "All night thing"
        ],
        "releaseDate": new Date("April 16, 1991")
    },
    {"artist": "Mad season",
        "albumTitle": "Mad season",
        "songs": ["River of deceit", "I'm above", "I don't know anything", "Long gone day", "November hotel", "All alone"],
        "releaseDate": new Date("March 29, 2013")
    },
    {
        "artist": "Alice in chains",
        "albumTitle": "Dirt",
        "songs": ["Them bones", "Dam that river", "Rain when I die", "Down in a hole", "Sickman", "Rooster", "Junkhead",
            "Dirt", "Godsmack", "Untitled", "Hate to feel", "Angry chair", "Would"],
        "releaseDate": new Date("September 29, 1992")
    },
    {"artist": "Miles Davis",
        "albumTitle": "Porgy and Bess",
        "songs": ["Buzzard song", "Bess, you is my woman now", "Gone", "Gone, Gone, Gone", "Summertime", "Oh Bess, where is my Bess?",
            "Prayer(Oh Doctor Jesus)", "Fisherman, strawberry, and devil crab", "My man's gone now", "It ain't necessarily so",
            "I wants to stay here", "I loves you, Porgy", "Gone(Take 4)"],
        "releaseDate": new Date("January 1, 1958")
    },
    {
        "artist": "Lester Young",
        "albumTitle": "The president plays with the Oscar Peterson trio",
        "songs": ["Ad lib blues", "Just you, just me", "Tea for two", "Indiana", "These foolish things", "I can't get started",
            "Stardust", "On the sunny side of the street", "There will never be another you"],
        "releaseDate": new Date("June 2, 1959")
    }
]

const getAllAlbums = () => {
    return albums;
}

const getAlbum = (artist) => {
    return albums.find((item) => {
        return item.artist.toLowerCase() === artist.toLowerCase();
    });
};


module.exports = { getAlbum, getAllAlbums};

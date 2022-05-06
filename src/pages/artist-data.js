let artists = [
    {
        name: "Test Artist",
        ranking: 5,
        numalbums: 3,
        attributes: ["country", "rock",],
        albums: 
        [
            {
                name: "Album1",
                date: 2017,
                info: "First album of Test Artist"
            },
            {
                name: "Album2",
                date: 2018,
                info: "Second album of Test Artist"
            },
            {
                name: "Album3",
                date: 2017,
                info: "First album of Test Artist"
            },
        ]
    },
    {
        name: "Another Test",
        ranking: 3,
        numalbums: 1,
        attributes: ["rnb", "pop"],
        albums: 
        [
            {
                name: "First",
                date: 2008,
                info: "Only album of Another"
            },
        ]
    },
]

export function getArtists() {
    return artists;
}

export function getArtist(name) {
    return artists.find(
        (artist) => artist.name===name
    );
}

export function getAttrArtist(input) {
    return artists.find(
        (artist) => artist.attributes.includes(input)
    );
}

export function getAlbum(artistname, name) {
    let artist = getArtist(artistname);
    return artist.albums.find(
        (album) => album.name === name
    );
}
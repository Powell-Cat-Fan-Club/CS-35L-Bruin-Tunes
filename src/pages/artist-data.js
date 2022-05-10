let artists = [
    {
        name: "Test Artist",
        ranking: 5,
        numalbums: 3,
        genres: ["country", "rock",],
        albums: 
        [
            {
                name: "Album1",
                date: 2017,
                info: "First album of Test Artist",
                songs: 
                [
                    {
                        name: "Song1",
                        url: "https://www.youtube.com/watch?v=Er-f8tCYrPw"
                    },
                    {
                        name: "Song2",
                        url: "https://www.youtube.com/watch?v=E9s1ltPGQOo"
                    }
                ]
            },
            {
                name: "Album2",
                date: 2018,
                info: "Second album of Test Artist",
                songs: 
                [
                    {
                        name: "Song1",
                        url: "https://www.youtube.com/watch?v=Er-f8tCYrPw"
                    },
                    {
                        name: "Song2",
                        url: "https://www.youtube.com/watch?v=E9s1ltPGQOo"
                    }
                ]
            },
            {
                name: "Album3",
                date: 2019,
                info: "Third album of Test Artist",
                songs: 
                [
                    {
                        name: "Song1",
                        url: "https://www.youtube.com/watch?v=Er-f8tCYrPw"
                    },
                    {
                        name: "Song2",
                        url: "https://www.youtube.com/watch?v=E9s1ltPGQOo"
                    }
                ]
            },
        ]
    },
    {
        name: "Another Test",
        ranking: 3,
        numalbums: 1,
        genres: ["rnb", "pop"],
        albums: 
        [
            {
                name: "First",
                date: 2008,
                info: "Only album of Another",
                songs: 
                [
                    {
                        name: "Song1",
                        url: "https://www.youtube.com/watch?v=Er-f8tCYrPw"
                    },
                    {
                        name: "Song2",
                        url: "https://www.youtube.com/watch?v=E9s1ltPGQOo"
                    }
                ]
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

export function getSong(artistname, albumname, name) {
    let album = getAlbum(artistname, albumname);
    return album.songs.find(
        (song) => song.name === name
    );
}
let artists = [
    {
        name: "Test Artist",
        ranking: 5,
        numalbums: 3,
    },
    {
        name: "Testeee",
        ranking: 3,
        numalbums: 1,
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
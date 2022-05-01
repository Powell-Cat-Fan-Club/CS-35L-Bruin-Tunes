import React from "react";
import { getArtist } from "./artist-data";
import { useParams } from "react-router-dom";
  
export default function ArtistTemplate(){
    let params = useParams();
    let artist = getArtist(params.artistID);
    return (
        <main style={{ padding: "1rem" }}>
          <h2>Artist name: {artist.name}</h2>
          <p>
            Ranking: {artist.ranking}
          </p>
          <p>Number of albums: {artist.numalbums}</p>
        </main>
      );
}
/* artist-template: individual artist pages
shows name of artist, number of albums, genres, and links to albums
*/ 

import React from "react";
import { getArtist } from "./artist-data";
import { useParams, NavLink, Outlet } from "react-router-dom";
import './artist-template.css'
import '../window-dimension.js'
  
export default function ArtistTemplate(){
    let params = useParams();
    let artist = getArtist(params.artistID);
    return (
        <div style={{ display: "flex" }}>
          <nav
          style={{
            padding:"2rem",
          }}
        >
          <h2>Artist name: {artist.name}</h2>
          <p>
            Ranking: {artist.ranking}
          </p>
          <p>Number of albums: {artist.numalbums}</p>
          <p>Genres: </p>
          <ul>
            {artist.genres.map((genre) => <li key={genre}>{genre}</li>)}
          </ul>
          
        </nav>
        <nav
          style={{
            borderLeft: "solid 1px",
            padding: "2rem",
          }}
        >
          {(artist.albums).map((album) => (
            <NavLink
              style={{ display: "block", margin: "1rem 0" }}
              to={`/artists/${artist.name}/${album.name}`}
              key={album.name}
            >
              {album.name}
            </NavLink>
          ))}
        </nav>
        <Outlet />
      </div>
        
      );
}
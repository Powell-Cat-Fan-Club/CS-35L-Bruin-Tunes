/* artist-template: individual artist pages
shows name of artist, number of albums, genres, and links to albums
*/ 

import React, {useState, useEffect} from "react";
import { getArtist } from "./artist-data";
import { useParams, NavLink, Outlet } from "react-router-dom";
import './artist-template.css'
import '../window-dimension.js'
  
export default function ArtistTemplate(){
    let params = useParams();
    const [artist, setArtist] = useState();

  useEffect(() => {
    fetch (`http://localhost:5000/artists/artist/${params.artistID}`)
    .then ((res) =>res.json())
    .then((a) => {
      setArtist(a);
    })
  }, [artist]);

  async function likeArtist()
  {
    let numlikes = artist.likes+1;
    await fetch(`http://localhost:5000/artists/artist/likes/${artist._id}`, {
      method: "PUT", 
      headers: {
        "Content-Type": "application/json",
      }, 
      body: JSON.stringify({likes: numlikes})
    })
    .catch (error => {
      window.alert(error);
      return;
    });
  }

    return (
        artist ? (<div style={{ display: "flex" }}>
          <nav
          style={{
            padding:"2rem",
          }}
        >
          <img src={artist.image} width={window.innerWidth*0.4}/>
          <h3>Artist: {artist.name}</h3>
          <p>Info: {artist.info}</p>
          <p>Genres: 
          <ul>
            {artist.genres.map((genre) => <li key={genre}>{genre}</li>)}
          </ul>
          </p>

          <button onClick={likeArtist}>❤️ {artist.likes} likes!</button> 
            
          
          
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
              to={`/artists/${artist.name}/${album}`}
              key={album}
            >
              {album}
            </NavLink>
          ))}
        </nav>
        <Outlet />
      </div>) 
      : <h2>loading</h2>
        
      );
}
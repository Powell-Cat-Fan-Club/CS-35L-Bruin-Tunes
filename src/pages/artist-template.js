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
        artist ? (<div style={{ display: "flex",  }}>
          <nav
          style={{
            padding:"2rem",
            width: window.innerWidth*0.6,
          }}
        >
          <img src={artist.image} width={window.innerWidth*0.6}/>
          <h1>Artist: {artist.name}</h1>
          <p><h2>Info:</h2>{artist.info}</p>
          <p><h2>Genres: </h2>
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
            maxWidth: window.innerWidth * 0.2
          }}
        >
          {(artist.albums).map((album) => (
            <NavLink
              style={{ display: "block", margin: "1rem 0" }}
              to={`/artists/${artist.name}/${album}`}
              key={album}
            >
              <h2>{album}</h2>
            </NavLink>
          ))}
        </nav>
        <Outlet />
      </div>) 
      : <h2>loading</h2>
        
      );
}
/* albums: individual album pages (under specific artist)
shows name of album, release date, extra info, and links to songs
*/ 

import React, {useState, useEffect} from 'react';
import { useParams, NavLink, Outlet } from "react-router-dom";
import { getAlbum, getArtist } from './artist-data';


const Albums = () => {
    let params = useParams();
    //let artist = getArtist(params.artistID);
    const [album, setAlbum] = useState();

  useEffect(() => {
    fetch (`http://localhost:5000/artists/artist/${params.artistID}/album/${params.albumID}`)
    .then ((res) =>res.json())
    .then((a) => {
      setAlbum(a);
      //console.log(a);
    })
  }, [album]);

    //let album = getAlbum(params.artistID, params.albumID);
    return ( album ?
        <div style={{ display: "flex" }}>
          <nav
          style={{
            padding:"2rem",
            width: window.innerWidth*0.6,
          }}
        >
          <h1>Album name: {album.name}</h1>
          <p>
            <h2>Release date: </h2>{album.date}
          </p>
          </nav>
          <nav style={{
            padding:"2rem",
            borderLeft: "solid 1px",
            maxWidth: window.innerWidth * 0.2
          }}>
          <NavLink to={`/artists/${params.artistID}`}> <h1>Back</h1> </NavLink>
        {(album.songs).map((song) => (
            <NavLink
              style={{ display: "block", margin: "1rem 0" }}
              to={`/artists/${params.artistID}/${album.name}/${song}`}
              key={song}
            >
              <h1>{song}</h1>
            </NavLink>
          ))}
        </nav>
        <Outlet />
      </div>
      //console.log(album) 
      : <h2>loading...</h2>
    )

}

export default Albums;
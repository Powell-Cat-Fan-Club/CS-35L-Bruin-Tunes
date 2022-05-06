import React from 'react';
import { useParams, NavLink, Outlet } from "react-router-dom";
import { getAlbum } from './artist-data';


const Albums = () => {
    let params = useParams();
    let album = getAlbum(params.artistID, params.albumID);
    return (
        <div style={{ display: "flex" }}>
          <nav
          style={{
            justifyContent: "center",
          }}
        >
          <h2>Album name: {album.name}</h2>
          <p>
            Release date: {album.date}
          </p>
          <p>Info: {album.info}</p>
        </nav>
        <NavLink to={`/artists/${params.artistID}`}> Back </NavLink>
        </div>
    )

}

export default Albums;
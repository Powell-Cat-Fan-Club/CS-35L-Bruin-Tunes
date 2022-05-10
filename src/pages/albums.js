import React from 'react';
import { useParams, NavLink, Outlet } from "react-router-dom";
import { getAlbum, getArtist } from './artist-data';


const Albums = () => {
    let params = useParams();
    let artist = getArtist(params.artistID);
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
          <NavLink to={`/artists/${params.artistID}`}> Back </NavLink>
        {(album.songs).map((song) => (
            <NavLink
              style={{ display: "block", margin: "1rem 0" }}
              to={`/artists/${artist.name}/${album.name}/${song.name}`}
              key={song.name}
            >
              {song.name}
            </NavLink>
          ))}
        </nav>
        <Outlet />
      </div>
    )

}

export default Albums;
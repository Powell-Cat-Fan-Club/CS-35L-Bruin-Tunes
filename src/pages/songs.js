// Source: https://codesandbox.io/s/f6l29?file=/src/App.js

/* songs: individual song pages (under specific album)
shows name and youtube video of song
*/ 

import React from 'react';
import { useParams, NavLink, Outlet } from "react-router-dom";
import { getSong } from './artist-data';
import Youtube from "react-youtube";

  

const Songs = () => {
    let params = useParams();
    let song = getSong(params.artistID, params.albumID, params.songID);

    // Render function for Prismic headless CMS pages
    function Content() {
        let videoUrl = song.url;
        let videoCode;
        if (videoUrl) {
        videoCode = videoUrl.split("v=")[1].split("&")[0];
        }
    
    
        const opts = {
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1
        }
        };
    
        return (
        <div>
            <div>
                <Youtube
                videoId={videoCode}
                containerClassName="embed embed-youtube"
                opts={opts}
                />
            </div>
        </div>
        );
    }

    return (
        <div style={{ display: "flex" }}>
          <nav
          style={{
            justifyContent: "center",
          }}
        >
          <h2>Song name: {song.name}</h2>
          {Content()}
        </nav>
        <NavLink to={`/artists/${params.artistID}/${params.albumID}`}> Back </NavLink>
        </div>
    )

}

export default Songs;
// Source: https://codesandbox.io/s/f6l29?file=/src/App.js

/* songs: individual song pages (under specific album)
shows name and youtube video of song
*/ 

import React from 'react';
import { useParams, NavLink, Outlet } from "react-router-dom";
import { getSong } from './artist-data';
import Youtube from "react-youtube";

import { useState, useEffect } from 'react';
  

const Songs = () => {
    let params = useParams();
    let song = getSong(params.artistID, params.albumID, params.songID);

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
      }
      
      function useWindowDimensions() {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
      
        useEffect(() => {
          function handleResize() {
            setWindowDimensions(getWindowDimensions());
          }
      
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }, []);
      
        return windowDimensions;
      }
      

    // Render function for Prismic headless CMS pages
    function Content() {
        const { width } = useWindowDimensions();
        let videoUrl = song.url;
        let videoCode;
        if (videoUrl) {
        videoCode = videoUrl.split("v=")[1].split("&")[0];
        }
    
    
        const opts = {
            height:  width / 3 * 9 / 16,
            width: width / 3,
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
            padding: "2rem"
          }}
        >
          <h2>Song name: {song.name}</h2>
          {Content()}
        </nav>
        <nav style = {{
            padding:"2rem"
        }}>
            <NavLink to={`/artists/${params.artistID}/${params.albumID}`}> Back </NavLink>
        </nav>
        </div>
    )

}

export default Songs;
// Source: https://codesandbox.io/s/f6l29?file=/src/App.js

/* songs: individual song pages (under specific album)
shows name and youtube video of song
*/ 

import React from 'react';
import { useParams, NavLink, Outlet } from "react-router-dom";
import Youtube from "react-youtube";

import { useState, useEffect } from 'react';
  

const Songs = () => {
    let params = useParams();
    //let song = getSong(params.artistID, params.albumID, params.songID);
    const [song, setSong] = useState();

  useEffect(() => {
    fetch (`http://localhost:5000/artists/artist/${params.artistID}/album/${params.albumID}/song/${params.songID}`)
    .then ((res) =>res.json())
    .then((a) => {
      setSong(a);
      //console.log(a);
    })
  }, [song]);

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
        let videoUrl;
        if (song)
        { videoUrl = song.url; }
        let videoCode;
        if (videoUrl) {
        videoCode = videoUrl.split("v=")[1].split("&")[0];
        }
    
    
        const opts = {
            height:  width * 0.6 * 9 / 16,
            width: width * 0.6,
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

    return ( song ?
        <div style={{ display: "flex" }}>
          <nav
          style={{
            padding: "2rem",
            width: window.innerWidth*0.6
          }}
        >
          <h2>Song name: {song.name}</h2>
          {Content()}
        </nav>
        <nav style = {{
            padding:"2rem",
            maxWidth: window.innerWidth * 0.2
        }}>
            <NavLink to={`/artists/${params.artistID}/${params.albumID}`}> <h1>Back</h1> </NavLink>
        </nav>
        </div>
        : <h1> Loading {Content()} </h1>
    )

}

export default Songs;
/***************************************************************************
*    Citation
*    Title: react-youtube demo
*    Author: Kevin Cunningham
*    Date: 2021
*    Availability: https://codesandbox.io/s/f6l29?file=/src/App.js
*    Usage: YouTube player
****************************************************************************/
/* songs: individual song pages (under specific album)
shows name and youtube video of song
*/ 

import React from 'react';
import { useParams } from "react-router-dom";
import Youtube from "react-youtube";

import { useState, useEffect } from 'react';
import { 
  ContentContainer, 
  LeftContent, 
  MiddleText,
  NavLink, 
  Title 
} from './artistsStyle';

  

const Songs = () => {
  let params = useParams();
  const [song, setSong] = useState();

  useEffect(() => {
    fetch (`http://localhost:5000/artists/artist/${params.artistID}/album/${params.albumID}/song/${params.songID}`)
    .then ((res) =>res.json())
    .then((a) => {
      setSong(a);
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
        <Youtube
          videoId={videoCode}
          containerClassName="embed embed-youtube"
          opts={opts}
        />
      </div>
    );
  }

  return ( song ?
    <ContentContainer>
      <LeftContent width="auto">
        <Title> Song name: {song.name} </Title>
        <br/>
        {Content()}
        <br/>
        <NavLink isYellow to={`/artists/${params.artistID}/${params.albumID}`}> Back </NavLink>
      </LeftContent>
    </ContentContainer>
    : 
    <ContentContainer location="center">
      <MiddleText> Loading... </MiddleText> 
      {Content()}
    </ContentContainer>
  );
}

export default Songs;
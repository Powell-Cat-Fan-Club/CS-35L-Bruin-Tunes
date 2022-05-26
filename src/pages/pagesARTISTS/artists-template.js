/* artist-template: individual artist pages
shows name of artist, number of albums, genres, and links to albums
*/ 

import React, {useState, useEffect} from "react";
import { useParams, Outlet } from "react-router-dom";
import { LeftContainer, RightContainer } from "../../components/NavbarElements";
import { 
  ArtistTitle,
  Banner,
  ContentContainer,
  Description,
  GenreList,
  LeftContent,
  MiddleText,
  NavLink,
  RightContent
} from "./artistsStyle";

import {  } from "./artistsStyle";

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
    artist ? (
      <ContentContainer>
        <LeftContent>
          <Banner src={artist.image} />
          <ArtistTitle> Artist: {artist.name} </ArtistTitle>
          <Description> {artist.info} </Description>
          <div >
            <Description align="left">
            Genres: 
            <GenreList >
            {artist.genres.map((genre) => <li key={genre}>{genre}</li>)}
            </GenreList>
          </Description>
          </div>
          

          <button onClick={likeArtist}>❤️ {artist.likes} likes!</button> 

        </LeftContent>
        <RightContent>
          <ArtistTitle>
            Albums
          </ArtistTitle>

          {(artist.albums).map((album) => (
            <NavLink
              style={{ display: "block", margin: "1rem 0" }}
              to={`/artists/${artist.name}/${album}`}
              key={album}
            >
              {album}
            </NavLink>
          ))}

          <Outlet />
        </RightContent>
        
        
      </ContentContainer>) 
      : 
      <ContentContainer>
        <MiddleText> Loading.. </MiddleText> 
      </ContentContainer>
        
      );
}
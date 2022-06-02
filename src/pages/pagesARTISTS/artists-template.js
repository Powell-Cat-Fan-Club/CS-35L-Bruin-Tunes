/* artist-template: individual artist pages
shows name of artist, number of albums, genres, and links to albums
*/ 

import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { 
  Banner,
  ContentContainer,
  Description,
  GenreItem,
  GenreList,
  Heart,
  LeftContent,
  LikeButton,
  MiddleText,
  MiniBox,
  NavLink,
  RightContent,
  Title
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
          <MiniBox>
            <LeftContent>
              <Title> Artist: {artist.name} </Title>
              <Description> {artist.info} </Description>
            </LeftContent>
            <RightContent align="flex-start">
                <Description align="left">
                  Genres: 
                  <GenreList>
                    {artist.genres.map((genre) => <GenreItem key={genre}>{genre}</GenreItem>)}
                  </GenreList>
                </Description>
            </RightContent>
          </MiniBox>
          <LikeButton onClick={likeArtist}>
            <Heart src={"/images/musicLike.png"} alt="❤️"/>&#160;
            <Heart src={"/images/musicLike.png"} alt="❤️"/>&#160;
            <Heart src={"/images/musicLike.png"} alt="❤️"/>&#160;
            <Heart src={"/images/musicLike.png"} alt="❤️"/>&#160;
            {artist.likes} Likes!
            &#160;<Heart src={"/images/musicLike.png"} alt="❤️"/>
            &#160;<Heart src={"/images/musicLike.png"} alt="❤️"/>
            &#160;<Heart src={"/images/musicLike.png"} alt="❤️"/>
            &#160;<Heart src={"/images/musicLike.png"} alt="❤️"/>
          </LikeButton> 
        </LeftContent>
        <RightContent align="left">
          <Title>
            Albums
          </Title>
          {(artist.albums).map((album) => (
            <NavLink
              style={{ display: "block", margin: "1rem 0" }}
              to={`/artists/${artist.name}/${album}`}
              key={album}
            >
              {album}
            </NavLink>
          ))}
        </RightContent>
      </ContentContainer>) 
      : 
      <ContentContainer location="center">
        <MiddleText> Loading... </MiddleText> 
      </ContentContainer>
        
      );
}
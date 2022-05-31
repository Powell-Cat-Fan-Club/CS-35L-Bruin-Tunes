/* albums: individual album pages (under specific artist)
shows name of album, release date, extra info, and links to songs
*/ 

import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { 
  ContentContainer, 
  Description, 
  LeftContent, 
  MiddleText,
  NavLink,
  RightContent,
  Title 
} from './artistsStyle';

const Albums = () => {
  let params = useParams();
  const [album, setAlbum] = useState();

  useEffect(() => {
    fetch (`http://localhost:5000/artists/artist/${params.artistID}/album/${params.albumID}`)
    .then ((res) =>res.json())
    .then((a) => {
      setAlbum(a);
      //console.log(a);
    })
  }, [album]);

    return ( album ?
      <ContentContainer>
          <LeftContent>
            <Title>Album name: {album.name}</Title>
            <Description> Release date: {album.date} </Description>
            <NavLink to={`/artists/${params.artistID}`}> Back </NavLink>
          </LeftContent>

          <RightContent>
            <Title> Songs </Title>
            {(album.songs).map((song) => (
              <NavLink
                to={`/artists/${params.artistID}/${album.name}/${song}`}
                key={song}
              >
                {song}
              </NavLink>
            ))}
        </RightContent>
      </ContentContainer>
      : 
      <ContentContainer>
        <MiddleText> Loading... </MiddleText> 
      </ContentContainer>
    )

}

export default Albums;

//<!-- <Banner src={album.image}/> -->
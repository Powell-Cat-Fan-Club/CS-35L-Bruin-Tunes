//credit to https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/
import React from 'react';
import { useState, useEffect } from 'react';
import { Link} from "react-router-dom";
import { Header, NavContainer } from '../../style';
import { MiddleText } from '../pagesARTISTS/artistsStyle';
import { 
  ArtistDescription,
  DivContainer,
  GenreItem,
  GenreList,
  NavLink, 
  RankItem, 
  RankList
} from './chartsStyle';

const Charts = () => {
  //Get artists
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetch (`http://localhost:5000/artists/`)
    .then ((res) =>res.json())
    .then((a) => {
      setArtists(a);
    })
  }, [artists]);

  let [userSearch, setUserSearch] = useState('');

  
  //Function to display the list
  let displayRanking = () => {
    //Sort artists by ranking
    let sortedArtists = [].concat(artists);
    sortedArtists.sort((a,b) => b.likes - a.likes);
    return (
      <DivContainer>
        {/* Filtering block */}
        <input placeholder='Search by genre' onChange={(e) => setUserSearch(e.target.value)} />
        <RankList>
          <NavContainer>
            {sortedArtists
              .filter((val) => {
                let genres = [];
                for (let i = 0; i<val.genres.length; i++)
                {
                  genres.push(val.genres[i].toLowerCase());
                }
                if (userSearch === "") {
                  return val;
                }
                for (let i = 0; i<genres.length; i++)
                {
                  if (genres[i].startsWith(userSearch.toLowerCase()))
                  {
                    return val;
                  }
                }
              })
              .map((artist) => 
                <RankItem>
                  <NavLink to={'/artists/' + artist.name}>
                    {artist.name}
                  </NavLink>

                  <ArtistDescription> {'Likes: ' + artist.likes} </ArtistDescription>
                  <ArtistDescription> {'Genres: ' } </ArtistDescription>
                  <GenreList> 
                    {artist.genres.map((genre) => 
                      <GenreItem key={genre}>
                        {genre}
                      </GenreItem>
                    )}
                  </GenreList>
                </RankItem>
              )
            }
          </NavContainer> 
        </RankList>
      </DivContainer>
    )
  }
  return ( artists ?
    <DivContainer>
      <Header>Top Artists</Header>
      {displayRanking()}
    </DivContainer>
    : 
    <DivContainer>
      <MiddleText> Loading ... </MiddleText> 
    </DivContainer>
  );
};
  
export default Charts;